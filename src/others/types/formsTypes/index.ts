import React from "react";

export type InputProps = {
    label: string,
    type: string,
    name: string,
    placeholder: string,
    value: string,
    error: boolean,
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