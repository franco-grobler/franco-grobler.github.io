import { defineContentConfig, defineCollection, property } from "@nuxt/content";
import { z, type ZodObject } from "zod";

const SeoSchame = z.object({
	title: z.string().nonempty(),
	description: z.string().nonempty(),
});

const PageTitleSchema = z.object({
	title: z.string().nonempty(),
	description: z.string().nonempty(),
});

function generateSectionSchema(card: ZodObject): ZodObject {
	return z.object({
		title: z.string().nonempty(),
		cards: z.array(card),
	});
}

export default defineContentConfig({
	collections: {
		index: defineCollection({
			type: "page",
			source: "index.yml",
			schema: z.object({
				seo: SeoSchame,
				intro: PageTitleSchema.extend({
					subtitle: z.string().nonempty(),
					links: z.array(
						z.object({
							to: z.string().nonempty(),
							label: z.string().nonempty(),
							icon: z.string().optional(),
							class: z.string().optional(),
						}),
					),
				}),
				skills: generateSectionSchema(
					z.object({
						title: z.string().nonempty(),
						description: z.string().nonempty(),
						icon: z.string().nonempty(),
					}),
				),
			}),
		}),
		blog: defineCollection({
			type: "page",
			source: "blog/*.md",
			schema: z.object({
				title: z.string(),
				description: z.string().optional(),
				date: z.date(),
				draft: z.boolean().default(false),
				tags: z.array(z.string()).optional(),
				image: z.object({
					src: property(z.string()).editor({ input: "media" }),
					alt: z.string(),
				}),
			}),
		}),
		content: defineCollection({
			type: "page",
			source: "**/*.md",
		}),
	},
});
