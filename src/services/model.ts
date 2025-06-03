import { z } from "zod";

export const FormUsernameSchema = z.object({
  username: z.string().min(3, "Minimum 3 characters")
});

export type FormUsernameValues = z.infer<typeof FormUsernameSchema>;