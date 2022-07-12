import { useForm, UseFormProps } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { SignInSchema, SignInData } from "../schemas/SignInSchema"

export const useSignInForm = (props?: Omit<UseFormProps<SignInData>, 'resolver'>) => useForm<SignInData>({resolver: zodResolver(SignInSchema), ...props})
