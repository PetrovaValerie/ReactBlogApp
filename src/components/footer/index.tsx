import React, {ReactElement, useContext} from "react";
import {FooterWrapper} from "./footerStyle";
import {ThemeContext} from "../themeProvider";

export const Footer = (): ReactElement => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
        <FooterWrapper className={`${darkMode ? "bg-dark" : "bg-light"}`}>
            <p>©2022 Blogfolio</p>
            <p>All rights reserved</p>
        </FooterWrapper>
    )
};