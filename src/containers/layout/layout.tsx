import * as React from "react";
import {ReactNode, useContext} from "react";
import {ThemeContext} from "../../components/theme/themeProvider";
import "../../others/styles/App.css";
import {LayoutMain} from "./style";
import {HeaderMenu} from "../../components/menu";
import {Footer} from "../../components/footer";
import {LayoutProps} from "../../others/types/layoutTypes";

export const Layout = ({children}: LayoutProps) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
            <>
                <header className="AppHeader">
                    <HeaderMenu  />
                </header>
                <LayoutMain className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                    {children}
                </LayoutMain>
                <Footer />
            </>
    )
}








