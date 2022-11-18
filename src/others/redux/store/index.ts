import {applyMiddleware, combineReducers, createStore} from 'redux';
import {postReducer} from "../blog/postsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {mainReducerType} from "../../types/reduxTypes/blogTypes";
import {authReducer} from "../authReducer/authReducer";
import createSagaMiddleware from 'redux-saga';
import {signUpSaga} from "../../saga/saga";

const sagaMiddleware = createSagaMiddleware()

export const useAppSelector: TypedUseSelectorHook<mainReducerType> = useSelector;

export const rootReducer = combineReducers({
    postReducer,
    authReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(signUpSaga);