import React from "react";
import {authReducer, AuthState} from "../../../redux/store/authReducer/authReducer"

export type authReducerType = {
    authReducer: AuthState
}

export type InputProps = {
    label: string,
    type: string,
    name: string,
    placeholder: string,
    value: string,
    error: boolean,
    autoComplete: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export type SignInFormProps = {
    email: string,
    password: string,
}

export type SignUpFormProps = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
}


export type AddPostProps = {
    title: string,
    url: string,
    date: string,
    image: string,
    description: string,
    text: string,
}

export type LineProps = {
    label: string,
    type: string,
    name:string,
    placeholder: string,
    value: string,
    error: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}