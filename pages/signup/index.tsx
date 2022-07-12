import React from 'react'
import { NextPage } from 'next'
import { useSignUp } from '../../hooks/useSignUp'
import { FormControl } from '../../components/form/FormControl';
import { Input } from '../../components/form/Input';
import { FormError } from '../../components/form/FormError';
import { FormLabel } from '../../components/form/FormLabel';

const SignUp: NextPage = () => {
    
const { isPending, form: { register, handleSubmit, formState: { errors } } } = useSignUp({
    onError: (err) => {
      console.log("error " + err.message)
    },
    onSuccess: (data) => {
      console.log("login " + data.user.email)
    }
  })

  return (
      <div>
          <form onSubmit={handleSubmit}>
        <FormControl isRequired isInvalid={!!errors.email}>
          <FormLabel>
            Login:
          </FormLabel>
          <Input type="text" placeholder='Login' {...register("email")} />
          <FormError>{errors.email?.message}</FormError>
     </FormControl >
        <FormControl isRequired isInvalid={!!errors.password}>
          <FormLabel>
            Password: 
          </FormLabel>
          <Input type="password" placeholder='Password' {...register("password")} />
          <FormError>{errors.password?.message}</FormError>
       </FormControl>
          <input type="submit" value={isPending ? "Loading..." : "Log in" } />
      </form>
    </div>
  )
}

export default SignUp