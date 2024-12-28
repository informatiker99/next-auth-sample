"use server";

import { FormState, SignUpFormSchema } from "@/lib/definition";
import bcrypt from "bcrypt";

export const SignUp = async (state: FormState, formData: FormData) => {
  //validate from  fields
  const validateFields = SignUpFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }
  // call the adapter or db to create a user
  const { name, email, password } = validateFields.data;
  const hashedPasword = await bcrypt.hash(password, 10);
  // const data = await db
  //   .insert(users)
  //   .values({
  //     name,
  //     email,
  //     password: hashedPasword,
  //   })
  //   .returning({ id: users.id });

  // const user = data[0];

  // if (!user) {
  //   return {
  //     message: "An error occurred while creating your account.",
  //   };
  // }
  
};
