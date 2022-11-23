import {applyMiddleware, combineReducers, createStore} from 'redux';
import {postReducer} from "../../blog/postsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {postReducerType} from "../../../types/reduxTypes/blogTypes";
import {authReducer} from "../authReducer/authReducer";
import createSagaMiddleware from 'redux-saga';
import {signUpSaga} from "../../../saga/SigUpSaga";
import {ThemeReducerType} from "../../../types/themeTypes";
import {themeReducer} from "../themeReducer";
import {authReducerType} from "../../../types/formsTypes";
import {all} from "redux-saga/effects";
import {signInSaga} from "../../../saga/SigInSaga";

const sagaMiddleware = createSagaMiddleware();

export const useThemeSelector: TypedUseSelectorHook<ThemeReducerType> = useSelector;
export const useAppSelector: TypedUseSelectorHook<postReducerType> = useSelector;
export const useAuthSelector: TypedUseSelectorHook<authReducerType> = useSelector;

export const rootReducer = combineReducers({
    postReducer,
    themeReducer,
    authReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));

function* rootSaga() {
    yield all(
        [
            signUpSaga(),
            signInSaga(),
        ]
    )
}

// sagaMiddleware.run(signUpSaga);
// sagaMiddleware.run(signInSaga);
sagaMiddleware.run(rootSaga);