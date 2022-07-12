import React from 'react'
import {useFormControl} from "./FormControl"

interface FormErrorProps {
    children: React.ReactNode;
    className?: string
}

export const FormError = ({children,className = ''}:FormErrorProps) => {
    const control = useFormControl()

    if (!control.isInvalid) {
       return null
   }
  return <span id={control.errorId}  className={`${className}`} >{ children}</span>
  
}