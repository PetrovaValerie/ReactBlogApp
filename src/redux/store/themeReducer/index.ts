import {ActionThemeType, StateType} from "../../../others/types/themeTypes";
import {COLORS} from "../../../others/globalStyle/style";

const defaultState: StateType = {
    background: "#fff",
    color: "#000"
}

export const themeReducer = (state = defaultState, action :ActionThemeType) => {

    switch (action.type) {
        case "LIGHT_THEME":
            return {...state, background: `${COLORS.whiteContext}`, color: "#000"}

        case "DARK_THEME":
            return {...state, background: `${COLORS.secondary}`, color: "#fff !important"}

        default:
            return {...state}
    }
};
