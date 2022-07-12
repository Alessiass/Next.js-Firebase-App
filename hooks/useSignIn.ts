import React, {useState} from 'react'
import { useSignInForm } from './useSignInForm'
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { auth } from '../firebase/firebaseSetup'
import { SignInData } from '../schemas/SignInSchema'
import { ResultHandler } from '../interfaces/ResultHandler'


interface UseSignInProps extends ResultHandler<UserCredential> {
  
}
export const useSignIn = ({onError,onSuccess}: UseSignInProps) => {
  const {handleSubmit, ...form} = useSignInForm()
  const [isPending, setIsPending] = useState(false)
  
  
  const handleSignIn = async ({email, password}: SignInData) => {
    try {
      setIsPending(true)
      const userCredentials = await signInWithEmailAndPassword(auth, email, password)
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


