import { put, call, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {SIGNIN_REQUEST, SignInError, SignInPayload, SignInSuccessPayload} from "../others/types/reduxTypes/signInTypes";
import {SignUpSuccessPayload} from "../others/types/reduxTypes/signUpTypes";

import {registerSuccess, signInFailure, signInSuccess} from "../redux/store/authReducer/action";
import {getProfile} from "./utils/logoServices";

const signInRequest = async (
    payload: SignInPayload
): Promise<SignInSuccessPayload> => {
    const headers = {
        'Content-Type': 'application/json;charset=utf-8',
    }
    const response = await fetch(
        'https://studapi.teachmeskills.by/auth/jwt/create/',
        {
            method: 'POST',
            body: JSON.stringify(payload),
            headers,
        }
    )
// debugger;
    const data = await response.json()

    if (!response.ok) {
        return Promise.reject(data as SignInError)
    }

    localStorage.setItem('access', JSON.stringify(data.access))
    localStorage.setItem('refresh', JSON.stringify(data.refresh))

    return data as SignInSuccessPayload
}

export function* signIn(action: PayloadAction<SignInPayload>) {
    try {
        yield call(signInRequest, action.payload);
        debugger;
        const userInfo: SignUpSuccessPayload = yield call(getProfile);
        console.log(userInfo);

        yield put(registerSuccess(userInfo));
        console.log(userInfo);

    } catch (error: any) {
        yield put(signInFailure(error))
    }
}

export function* signInSaga() {
    yield takeEvery(SIGNIN_REQUEST, signIn)
}