import React, {useContext} from "react";
import {CheckBoxLabel, CheckBoxWrapper, CheckBox} from "./style"
import {ThemeContext} from "../themeProvider";

export const Switcher = () => {
    const theme = useContext(ThemeContext);
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
            )
        }

