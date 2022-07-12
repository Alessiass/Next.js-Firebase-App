import React, { ComponentPropsWithoutRef } from 'react'
import { useFormControl } from "./FormControl"

interface InputProps extends ComponentPropsWithoutRef<'input'> {
    isInvalid?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({children, placeholder, id, required= true, isDisabled,isInvalid,isReadOnly, ...rest}, ref) => { //Typowanie obiektu HTML, potem typowanie obiektu ref
    const control = useFormControl()
    const _isDisabled = control.isDisabled || isDisabled || rest.disabled
    const _isReadOnly = control.isReadOnly || isReadOnly || rest.readOnly

    return (
        <input ref={ref}
            id={control.inputId ?? id}
            disabled={_isDisabled}
            readOnly={_isReadOnly}
            required={control.isRequired ?? required}
            placeholder={placeholder}
            {...rest}/>
  )
})


Input.displayName = "Input"