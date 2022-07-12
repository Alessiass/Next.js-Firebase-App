import React from 'react'
import {useFormControl} from "./FormControl"

interface FormLabelProps {
    children: React.ReactNode;
    className?: string
}

export const FormLabel = ({children,className = ''}:FormLabelProps) => {
    const control = useFormControl()
  return (
      <label id={control.labelId} htmlFor={control.inputId} className={`${className}`} data-disabled={control.isDisabled} data-required={control.isRequired}>{ children}</label>
  )
}

// input[data - required= "true"] {
    
// }
