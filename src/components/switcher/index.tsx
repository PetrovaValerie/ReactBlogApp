import React, {createContext,
    Dispatch,
    PropsWithChildren,
    ReactNode,
    useContext,
    useReducer} from "react";
import ReactDOM from "react-dom";
import {CheckBoxLabel, CheckBoxWrapper, CheckBox} from "./switcherStyle"
// import {darkMode} from "./../../style";

type PropsType = {
    children: ReactNode,
}

const initialStore = {
    darkMode: false,
}

type ActionType = {
    type: string,
    // payLoad - поместить данные в store
}

// export const Theme = {
//     light: {
//         foreground: "#000000",
//         background: "#eeeeee"
//     },
//     dark: {
//         foreground: "#ffffff",
//         background: "#222222"
//     }
// };

const themeReducer = (state: typeof initialStore, action: object & ActionType) => {
    switch (action.type) {
        case "LIGHTMODE":
            return {darkMode: false};
        case "DARKMODE":
            return {darkMode: true};
        default:
            return state;
    }
};

// export const ThemeContext = React.createContext(initialStore)

export const ThemeContext = createContext<{
    state: typeof initialStore,
    dispatch: Dispatch<any>
}>({
    state: initialStore,
    dispatch: () => null
})


export const ThemeProvider = ({children}: PropsType) => {
    const [state, dispatch] = useReducer(themeReducer, initialStore);

    return (
        <ThemeContext.Provider value={{state, dispatch}}>{children}</ThemeContext.Provider>
    )
}

export const Switcher = () => {

    const theme = useContext(ThemeContext);
    // const darkMode = theme.state.darkMode;

    const handleClick = () => {
        console.log('click')
        theme.state.darkMode ?
            theme.dispatch({type: "LIGHTMODE"})
            : theme.dispatch({type: "DARKMODE"})
    }

    return (
        <div>
            <CheckBoxWrapper>
                <CheckBox
                    id="checkbox"
                    type="checkbox"
                    onClick={handleClick}/>
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Switcher />, rootElement);
