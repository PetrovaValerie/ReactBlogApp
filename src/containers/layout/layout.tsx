import * as React from "react";
import {useContext} from "react";
import {HeaderMenu} from "../../components/menu";
import {LayoutMain} from "./layoutStyle";
// import {Index} from "../../components/signInElem";
// import {SignInForm} from "../signInForm";
import {Footer} from "../../components/footer";
import {ThemeContext} from "./../../components/themeProvider";
import "../../App.css";

type LayoutProps = {
    // children: React.ChangeEvent<HTMLInputElement>;
    children: any;
}

export const Layout = ({children}: LayoutProps) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            <header className="AppHeader">
                <HeaderMenu  />
                {/*<Index />*/}
                {/*<SignInForm />*/}
            </header>
            <LayoutMain className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                {children}
            </LayoutMain>
            <Footer />
        </>
    )
}








