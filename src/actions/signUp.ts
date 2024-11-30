"use server";

import { FormState, SignUpFormSchema } from "@/lib/definition";

export const SignUp = async (state: FormState, formData: FormData) => {
  //validate from  fields
  const validateFields = SignUpFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  console.log(validateFields);

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }
  // call the adapter or db to create a user
};
