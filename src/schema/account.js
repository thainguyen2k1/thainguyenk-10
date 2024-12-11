import * as z from "zod";
export const schemaRegister = z
  .object({
    email: z.string(),
    password: z.string().min(6, { message: "Mat khau dai hon 6 ki tu" }),
    confirmPassword: z.string().min(6, { message: "Mat khau dai hon 6 ki tu" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });
export const schemaLogin = z.object({
  email: z.string(),
  password: z.string().min(6, { message: "Mat khau dai hon 6 ki tu" }),
});
