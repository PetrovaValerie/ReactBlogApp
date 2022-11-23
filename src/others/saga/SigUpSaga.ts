import { put, call, takeEvery } from 'redux-saga/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import {SIGNUP_REQUEST, SignUpPayload, SignUpSuccessPayload} from "../types/reduxTypes/signUpTypes";
import {signUpFailure, signUpRequest, signUpSuccess} from "../redux/store/authReducer/action";


const fetchData = async (
    payload: SignUpPayload
): Promise<SignUpSuccessPayload> => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
    }
    const response = await fetch('https://studapi.teachmeskills.by/auth/users/', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers,
    })
    const data = await response.json()

    if (!response.ok) {
        return Promise.reject(data)
    } // попадает in catch error

    return data as SignUpSuccessPayload
}

export function* signUp(action: PayloadAction<SignUpPayload>) {
    try {
        const data: SignUpSuccessPayload = yield call(fetchData, action.payload)
        yield put(signUpSuccess(data))

    } catch (error: any) {
        yield put(signUpFailure(error))
    }
}
// takeEvery watcher
export function* signUpSaga() {
    yield takeEvery(SIGNUP_REQUEST, signUp)
}