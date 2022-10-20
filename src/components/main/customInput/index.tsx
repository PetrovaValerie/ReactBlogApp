import React, {useState} from "react";
import {FormBlock, InputWrapper, SpanBlock} from "./customInputStyle";

type CustomInputProps = {
    type: 'password' | 'text' | 'email',
    placeholder: 'Введите текст' | 'Введите пароль'
}

export const CustomInput = ({type, placeholder}:CustomInputProps) => {

    const [value, setValue] = useState('');

    const [error, setError] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const validateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        value.length < 6 ? setError(true) : setError(false)
    }

    return (
        <FormBlock>
            {/* <InputWrapper error={error}*/}
            {/*               type={type}*/}
            {/*               value={value}*/}
            {/*               onChange={handleChange}*/}
            {/*               placeholder={placeholder}*/}
            {/*               onBlur={validateValue} />*/}
            {/*{error && <SpanBlock>Please, try again</SpanBlock>}*/}
        </FormBlock>
    )
};