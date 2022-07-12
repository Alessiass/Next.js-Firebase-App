import React, {useState} from 'react'
import { useSignInForm } from './useSignInForm'
import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { auth } from '../firebase/firebaseSetup'
import { SignInData } from '../schemas/SignInSchema'
import { ResultHandler } from '../interfaces/ResultHandler'


interface UseSignUpProps extends ResultHandler<UserCredential> {
  
}
export const useSignUp = ({onError,onSuccess}: UseSignUpProps) => {
  const {handleSubmit, ...form} = useSignInForm()
  const [isPending, setIsPending] = useState(false)
  
  
  const handleSignIn = async ({email, password}: SignInData) => {
    try {
      setIsPending(true)
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
      onSuccess?.(userCredentials)

    } catch(err) {
      console.error(err)
      onError?.(err as Error)
    } finally {
      setIsPending(false)
    }
  }
  
  return {
    isPending, form: {handleSubmit: handleSubmit(handleSignIn), ...form}
  }
}


