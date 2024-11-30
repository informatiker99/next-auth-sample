import { z } from "zod";

export const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name musst be atleat 2 charactors long !" })
    .trim(),
  email: z.string().email({ message: "please enter a valid email !" }).trim(),
  password: z
    .string()
    .min(8, { message: "password musst be atleat 8 charactors long !" })
    .regex(/[a-zA-Z]/, { message: "contain atleat one charactors long" })
    .regex(/[0-9]/, { message: "contain atleat one number" })
    .trim(),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
