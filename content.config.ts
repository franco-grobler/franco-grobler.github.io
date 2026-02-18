import { defineContentConfig, defineCollection, property } from "@nuxt/content";
import type { ZodObject, ZodString } from "zod";
import { z } from "zod";

const SeoSchema = z.object({
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
		about: defineCollection({
			type: "data",
			source: "about.yml",
			schema: z.object({
				seo: SeoSchema,
				page: PageTitleSchema.extend({
					experience: z.array(
						z.object({
							title: z.string().nonoptional(),
							company: z.object({
								name: z.string().nonoptional(),
								url: z.httpUrl(),
							}),
							description: z.string().nonoptional(),
							tools: z.array(z.string()),
							timeline: z.object({
								start: z.date(),
								end: z.date(),
							}),
						}),
					),
					education: z.array(
						z.object({
							degree: z.string().nonoptional(),
							description: z.string().nonoptional(),
							institution: z.string().nonoptional(),
							timeline: z.object({
								start: z.date(),
								end: z.date(),
							}),
						}),
					),
					skills: z.record(z.string(), z.array(z.string())),
				}),
			}),
		}),
		aboutContent: defineCollection({
			type: "data",
			source: "about/*.md",
			schema: z.object({
				title: z.string().nonoptional(),
			}),
		}),
		index: defineCollection({
			type: "data",
			source: "index.yml",
			schema: z.object({
				seo: SeoSchema,
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
		blogIndex: defineCollection({
			type: "data",
			source: "blog.yml",
			schema: z.object({
				seo: SeoSchema,
				heading: PageTitleSchema,
			}),
		}),
		blog: defineCollection({
			type: "page",
			source: "blog/*.md",
			schema: z.object({
				title: z.string(),
				description: z.string().optional(),
				date: z.date(),
				readTime: z.coerce.number(),
				topic: z.string().nonempty(),
				draft: z.boolean().default(false),
				tags: z.array(z.string()).optional(),
				image: z.object({
					src: property(z.string()).editor({ input: "media" }),
					alt: z.string(),
				}),
			}),
		}),
		contact: defineCollection({
			type: "data",
			source: "contact.yml",
			schema: z.object({
				seo: SeoSchema,
				heading: PageTitleSchema,
				information: z.object({
					title: z.string().nonoptional(),
					links: z.array(
						property(z.object({})).inherit("app/components/card/Contact.vue"),
					),
					responseTime: z.string().nonoptional(),
				}),
			}),
		}),
		projectsIndex: defineCollection({
			type: "data",
			source: "projects.yml",
			schema: z.object({
				seo: SeoSchema,
				heading: PageTitleSchema,
			}),
		}),
		projects: defineCollection({
			type: "page",
			source: "projects/*.md",
			schema: z.object({
				title: z.string(),
				description: z.string().nonempty(),
				readTime: z.coerce.number(),
				tags: z.array(z.string().nonempty()),
				impact: z.string().nonempty(),
				links: z.array(ExternalLinkSchema),
			}),
		}),
		researchIndex: defineCollection({
			type: "data",
			source: "research.yml",
			schema: z.object({
				seo: SeoSchema,
				heading: PageTitleSchema,
			}),
		}),
		research: defineCollection({
			type: "page",
			source: "research/*.md",
			schema: z.object({
				title: z.string(),
				paperType: z.string().nonoptional(),
				date: z.iso.date(),
				readTime: z.coerce.number(),
				draft: z.boolean().default(false),
				links: z.array(ExternalLinkSchema),
			}),
		}),
	},
});
