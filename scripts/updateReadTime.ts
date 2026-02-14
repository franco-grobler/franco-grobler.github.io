#!/usr/bin/env bun
/**
 * @module Update read time markdown meta data.
 *
 * Markdown files in specified directories are parsed, read time estimated, and read-time key in meta-data updated.
 */

import { Glob, file, write } from "bun";

const ContentDirs = ["content/blog", "content/projects", "content/research"];
const MetaKey = "readTime";

/**
 * Read the file specified, and return the content.
 * @param path - Path to file.
 * @returns file content.
 */
async function parseFile(path: string): Promise<string> {
  return await file(path).text();
}

/**
 * Estimate the read time for content.
 * @param content - Text to be read.
 * @returns read time in minutes, rounded up to an integer.
 */
function estimatedReadTime(content: string): number {
  const wordsPerMinute = 200;
  // Simple word count, stripping some markdown characters could be better but this is usually sufficient
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Update meta-data in markdown file.
 * @param content - File content to update.
 * @param readTime - Read time in minutes.
 * @returns the complete file content.
 */
function updateReadTime(content: string, readTime: number): string {
  const parts = content.split("---");
  if (parts.length < 3) return content;

  const frontmatter = parts[1];
  const lines = frontmatter.split("\n");
  let found = false;

  const newLines = lines.flatMap((line) => {
    if (line.includes(`${MetaKey}:`)) {
      found = true;
      const [prefix] = line.split(`${MetaKey}:`);
      if (prefix.trim() === "") {
        return [`${MetaKey}: ${readTime}`];
      } else {
        // Fix for previous bug where it might have been appended to the end of a line
        return [prefix.trimEnd(), `${MetaKey}: ${readTime}`];
      }
    }
    return [line];
  });

  if (!found) {
    // Clean up trailing empty lines to ensure consistent placement
    while (newLines.length > 0 && newLines[newLines.length - 1].trim() === "") {
      newLines.pop();
    }
    newLines.push(`${MetaKey}: ${readTime}`);
    newLines.push(""); // Ensure a trailing newline before the closing ---
  }

  parts[1] = newLines.join("\n");
  return parts.join("---");
}

/**
 * Write file path.
 * @param content - File content.
 * @param path - Path to file to be written.
 */
async function writeFile(content: string, path: string) {
  await write(path, content);
}

/**
 * Extract text only part of markdown file.
 * @param fileContent - Full file content.
 * @returns Text extracted, with meta-data excluded.
 */
function extractContent(fileContent: string): string {
  const parts = fileContent.split("---");
  if (parts.length < 3) return fileContent;
  // Return everything after the second ---
  return parts.slice(2).join("---").trim();
}

/**
 * Process a single file to update its read time.
 * @param filePath - Path to the file.
 */
async function processFile(filePath: string) {
  const content = await parseFile(filePath);
  const body = extractContent(content);
  const readTime = estimatedReadTime(body);
  const updatedContent = updateReadTime(content, readTime);

  if (content !== updatedContent) {
    await writeFile(updatedContent, filePath);
    console.log(`Updated ${filePath}: ${readTime} min`);
  } else {
    console.log(`Skipped ${filePath} (already up to date)`);
  }
}

/**
 * Main execution function.
 */
async function run() {
  const promises: Promise<void>[] = [];
  for (const dir of ContentDirs) {
    const glob = new Glob(`${dir}/**/*.md`);
    for await (const file of glob.scan(".")) {
      promises.push(processFile(file));
    }
  }
  await Promise.all(promises);
}

run().catch(console.error);
