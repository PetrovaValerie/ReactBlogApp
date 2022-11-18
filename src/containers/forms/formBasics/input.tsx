import React, {useState} from "react";
import {Input, InputTitle, ErrorSpan} from "./style";
import {InputProps} from "../../../others/types/formsTypes";

export const InputLine = (props: InputProps) => {
    const [error, setError] = useState(false);
    const validateValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value.length < 6 ? setError(true) : setError(false)
    }

    return (
            <>
                <InputTitle>{props.label}</InputTitle>
                <Input
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    name={props.name}
                    onChange={props.onChange}
                    onBlur={validateValue}
                    error={error && props.error} />
                {error && <ErrorSpan>Please, try again</ErrorSpan>}
            </>
    )
}