import * as React from "react";
import {LayoutMain} from "./style";
import {HeaderMenu} from "../../components/navMenu";
import {Footer} from "../../components/footer";
import {LayoutProps} from "../../others/types/layoutTypes";
import {MainStyle} from "../../others/styles/style"
import {useThemeSelector} from "../../others/redux/store/rootReducer";

export const Layout = ({children}: LayoutProps) => {

    const selectTheme = useThemeSelector(state => state.themeReducer);
    return (
            <>
                <MainStyle props={selectTheme} />
                    <HeaderMenu />
                    <LayoutMain>
                        {children}
                    </LayoutMain>
                    <Footer />
            </>
    )}








