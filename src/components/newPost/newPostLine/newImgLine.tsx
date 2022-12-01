import React, {useState} from "react";
import {InputCol, NewPostInputTitle, AddPostInput, NewPostImgBtn} from "../style";
import {LineProps} from '../../../others/types/formsTypes';
import {ErrorSpan} from "../../../containers/forms/signInForm/signInInput/style";

export const NewPostImgInput = (props: LineProps) => {

    const [error, setError] = useState(false)
    const validateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value.length < 2 ? setError(true) : setError(false)
    }

    return (
        <InputCol>
            <NewPostInputTitle>{props.label}</NewPostInputTitle>
            <AddPostInput
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                onBlur={validateValue}
                error={error && props.error} />
            {error && <ErrorSpan>Please, try again</ErrorSpan>}
            <NewPostImgBtn>Upload new</NewPostImgBtn>
        </InputCol>
    )
}
