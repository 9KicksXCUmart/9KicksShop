import { z } from 'zod';

export const formSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
	password: z.string().min(8, { message: 'Must be 8 or more characters long' })
});

export type FormSchema = typeof formSchema;
