import * as React from "react";
import {ReactNode, useContext, useState} from "react";
import {HeaderMenu} from "../../components/menu";
import {LayoutMain} from "./layoutStyle";
// import {Index} from "../../components/signIn";
// import {SignInForm} from "../signInForm";
import {Footer} from "../../components/footer";
import {ThemeContext, ThemeProvider} from "./../../components/switcher/index";
import {COLORS} from "../../style";
import "./../../App.css";

type LayoutProps = {
    // children: React.ChangeEvent<HTMLInputElement>;
    children: any;
}

export const Layout = ({children}: LayoutProps) => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    return (
        // <ThemeProvider theme={isDarkTheme ? darkMode : lightMode}>
        <ThemeProvider>
            <header className="AppHeader">
                <HeaderMenu  />
                {/*<Index />*/}
                {/*<SignInForm />*/}
            </header>
            <LayoutMain className={`${darkMode ? "bg-light" : "bg-dark"}`}>
                {children}
            </LayoutMain>
            <Footer />
        </ThemeProvider>
    )
}








