export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export type SignInPayload = {
    email: string
    password: string
}

export type SignInSuccessPayload = {
    refresh: string
    access: string
}

export type SignInError = {
    detail: string
}

