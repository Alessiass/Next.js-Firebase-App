import {z} from "zod"


export const SignInSchema = z.object({
    email: z.string().email({message: "Email is required field!"}).min(1),
    password: z.string().min(6, {message: "Your password is to short!"})
})

export type SignInData = z.infer<typeof SignInSchema>