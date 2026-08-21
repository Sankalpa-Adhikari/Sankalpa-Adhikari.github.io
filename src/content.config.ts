import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const faqsCollection = defineCollection({
	loader: file("src/content/faq.json"),
	schema: z.object({
		question: z.string(),
		answer: z.string(),
	}),
});

const fieldNotesCollection = defineCollection({
	loader: file("src/content/field-notes.json"),
	schema: z.object({
		num: z.string(),
		date: z.string(),
		title: z.string(),
		desc: z.string(),
		image: z.string(),
		embedUrl: z.string(),
	}),
});

const publicationsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
	schema: z.object({
		publisher: z.string(),
		publishedYear: z.number(),
		title: z.string(),
		authors: z.string(),
		tags: z.array(z.string()),
	}),
});

const eventsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
	schema: z.object({
		title: z.string(),
		year: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
		images: z.array(z.string()),
	}),
});
const openingsCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/openings" }),
	schema: z.object({
		location: z.string(),
		title: z.string(),
		description: z.string(),
		tags: z.array(z.string()),
	}),
});

const successStoriesCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/success-stories" }),
	schema: z.object({
		src: z.string(),
		date: z.string(),
		title: z.string(),
		subtitle: z.string(),
	}),
});

export const collections = {
	faqs: faqsCollection,
	fieldNotes: fieldNotesCollection,
	publications: publicationsCollection,
	events: eventsCollection,
	openings: openingsCollection,
	"success-stories": successStoriesCollection,
};
