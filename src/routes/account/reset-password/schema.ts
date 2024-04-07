import { z } from 'zod';

export const formSchema = z.object({
	password: z.string(),
	newPassword: z.string().min(8, { message: 'Must be 8 or more characters long' }),
	confirmNewPassword: z.string()
});

export type FormSchema = typeof formSchema;
