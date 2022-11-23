import {AuthActions, SignUpError, SignUpSuccessPayload,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,} from "../../../types/reduxTypes/signUpTypes";
import {REGISTER_FAILURE, REGISTER_SUCCESS} from "../../../types/reduxTypes/signInTypes";


export type AuthState = {
    user: SignUpSuccessPayload | null
    error: SignUpError | null,
    // pending: boolean,
}

export const initialState: AuthState = {
    user: null,
    error: null,
    // pending: false,
}

export const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        // case SIGNUP_REQUEST:
        //     return {
        //         ...state,
        //         // pending: true,
        //     };
        case SIGNUP_FAILURE || REGISTER_FAILURE:
            return {
                ...state,
                // pending: false,
                user: null,
                error: action.payload,
            };

        case SIGNUP_SUCCESS || REGISTER_SUCCESS:
            return {
                ...state,
                // pending: false,
                user: action.payload,
                error: null,
            };

        default:
            return {
                ...state,
            };
    }
};