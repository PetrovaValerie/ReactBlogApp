import React, {useState} from 'react';
import {InputCol, NewPostInputTitle,AddPostText} from "../style";
import {ErrorSpan} from "../../../containers/forms/signInForm/signInInput/style";

type TextAreaProps = {
    label: string,
    name:string,
    placeholder: string,
    value: string,
    error: boolean,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

export const TextAreaLine = (props: TextAreaProps) => {

    const [error, setError] = useState(false)
    const validateValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.value.length < 2 ? setError(true) : setError(false)
    }

    return (
        <InputCol>
            <NewPostInputTitle>{props.label}</NewPostInputTitle>
            <AddPostText
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                onBlur={validateValue}
                error={error && props.error}
            />
            {error && <ErrorSpan>Please, try again</ErrorSpan>}
        </InputCol>
    );
};