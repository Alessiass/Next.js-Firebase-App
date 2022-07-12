import React, {createContext, useContext, useId, useMemo} from 'react'

interface FormControlProps {
    isRequired?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    isReadOnly?: boolean;
    className?: string;
    id?: string;
}
type FormControlContextData = ReturnType<typeof useProvideFormControl> //Tworzenie typu na podstawie funkcji - utility tool

const FormControlContext = createContext<FormControlContextData>({} as FormControlContextData) //Create context wymaga w TS początkowy stan, as - twarde typowanie obiektu

const useProvideFormControl = ({ id, isDisabled, isInvalid, isReadOnly, isRequired }: FormControlProps) => {
    const generatedId = useId()
    const _id = id ?? generatedId; // ?? działa jak alternatywa, ale uznaje 0 za true
    return useMemo(()=> ({
        id: _id,
        isDisabled,
        isInvalid,
        isReadOnly,
        isRequired,
        inputId: `field-${_id}-input`,
        labelId: `field-${_id}-label`,
        errorId: `field-${_id}-error`,

}), [_id, isDisabled,isInvalid,isReadOnly,isRequired])

}

export const FormControl: React.FC<React.PropsWithChildren<FormControlProps>> = ({ children, className = '', ...controlProps }) => { //...controlProps tworzy obiekt z pozostałych propsów o nazwie controlProps
    const value = useProvideFormControl(controlProps)
  return (
    <FormControlContext.Provider value={value}>{children}</FormControlContext.Provider>
  )
}

export const useFormControl = () => useContext(FormControlContext)
