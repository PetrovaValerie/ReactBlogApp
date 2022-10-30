import React, {ReactElement, useContext} from "react";
import {FooterWrapper} from "./footerStyle";
// import {ThemeContext} from "../switcher";
// import {darkMode} from "./../../style";


export const Footer = (): ReactElement => {
    // const theme = useContext(ThemeContext);
    // const {darkMode} = useContext(ThemeContext);
    // console.log(theme);


    return (
        <FooterWrapper>
            {/*<p className={darkMode ? 'dark-bg' : 'light-bg'}>©2022 Blogfolio</p>*/}
            {/*эти классы надо будет прокинуть в свитчер*/}
            <p>©2022 Blogfolio</p>
            <p>All rights reserved</p>
        </FooterWrapper>
    )
};