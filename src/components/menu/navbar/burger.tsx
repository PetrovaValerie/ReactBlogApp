import React, {ReactElement, useContext, useState} from "react";
import {BurgerWrapper, StyledBurger} from "./navbarStyle";
import {WebNav} from "./webNav";
import {ThemeContext} from "../../themeProvider";


export const Burger = (): ReactElement => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [open, setOpen] = useState(false);

    return (
        <BurgerWrapper className={`${darkMode ? "bgDark-burger" : "bgLight-burger"}`}>

            <StyledBurger open = {open}
                          onClick={() => setOpen(!open)}
                          >
                <div></div>
                <div></div>
                <div></div>
            </StyledBurger>
            <WebNav open={open}/>
        </BurgerWrapper>
    )
};