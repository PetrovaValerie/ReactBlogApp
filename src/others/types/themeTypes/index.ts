import {ReactNode} from "react";

export type StateType = {
    background?: string,
    color?: string,
}

export type PayloadType = {
    background: string,
    color: string
}

export type ActionThemeType = {
    type?: string,
    theme?: PayloadType
}

export type ThemeReducerType = {
    themeReducer: PayloadType
}
