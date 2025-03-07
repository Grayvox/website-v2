import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
	}),
});

const thoughts = defineCollection({
	type: 'content',
	schema: z.object({
		date: z.coerce.date()
	}),
});

export const collections = { blog, thoughts };
