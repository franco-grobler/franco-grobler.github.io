import { defineContentConfig, defineCollection, property } from "@nuxt/content";
import type { ZodObject, ZodString } from "zod";
import { z } from "zod";

const SeoSchame = z.object({
	title: z.string().nonempty(),
	description: z.string().nonempty(),
});

const PageTitleSchema = z.object({
	title: z.string().nonempty(),
	description: z.string().nonempty(),
});

function generateSectionSchema(card: ZodString | ZodObject) {
	return z.object({
		title: z.string().nonempty(),
		cards: z.array(card),
	});
}

function generateSectionSchemaWithRoute(card: ZodString | ZodObject) {
	return generateSectionSchema(card).extend({
		link: z.object({
			label: z.string().nonempty(),
			route: z.string().nonempty(),
		}),
	});
}

const ExternalLinkSchema = z.object({
	icon: z.string().nonempty(),
	label: z.string().nonempty(),
	url: z.string().nonempty(),
});

export default defineContentConfig({
	collections: {
		index: defineCollection({
			type: "data",
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
				projects: generateSectionSchemaWithRoute(z.string().nonempty()),
				research: generateSectionSchemaWithRoute(z.string().nonempty()),
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
		projects: defineCollection({
			type: "page",
			source: "projects/*.md",
			schema: z.object({
				title: z.string(),
				description: z.string().nonempty(),
				tags: z.array(z.string().nonempty()),
				links: z.array(ExternalLinkSchema),
			}),
		}),
	},
});
