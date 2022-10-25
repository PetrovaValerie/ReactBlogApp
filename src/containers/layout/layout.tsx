import * as React from "react";
import {ReactNode} from "react";
import {HeaderMenu} from "../../components/menu";
import {LayoutMain} from "./layoutStyle";
// import {Index} from "../../components/signIn";
import {SignInForm} from "../signInForm";
import {Footer} from "../../components/footer";

type LayoutProps = {
    // children: React.ChangeEvent<HTMLInputElement>;
    children: any;
}

export const Layout = ({children}: LayoutProps) => {
    return (
    <>
        <header className="AppHeader">
            <HeaderMenu  />
            {/*<Index />*/}
            {/*<SignInForm />*/}
        </header>
        <LayoutMain>
             {children}
        </LayoutMain>
        <Footer />
    </>
    )
}








