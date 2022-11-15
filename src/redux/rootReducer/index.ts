import {combineReducers, createStore} from 'redux';
import {postReducer} from "../blog/postsReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {mainReducerType} from "../blog/types/types";


export const useAppSelector: TypedUseSelectorHook<mainReducerType> = useSelector;


export const rootReducer = combineReducers({
    postReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());