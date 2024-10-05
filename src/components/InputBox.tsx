import { UseFormRegister, RegisterOptions, FieldErrors } from "react-hook-form"


interface InputBoxProps {
    name: string
    register: UseFormRegister<any>
    type?: string
    disabled?: boolean
    placeholder: string
    options?: RegisterOptions
    errors?: FieldErrors
    classname?: string
}

const InputBox: React.FC<InputBoxProps> = ({
    name,
    register,
    type,
    placeholder,
    options,
    errors,
    disabled,
    classname
}) => {
    return (
        <>
            <input disabled={disabled} className={`w-full px-3 py-2 bg-background text-foreground border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${classname}`} type={type} {...register(name, options)} placeholder={placeholder} />
            {
                errors && errors[name] && <p className="text-sm text-red-500 font-light">{errors[name]?.message as string}</p>
            }
        </>
    )
}

export default InputBox