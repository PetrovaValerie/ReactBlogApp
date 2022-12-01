import * as React from "react";
import {LayoutMain} from "./style";
import {HeaderMenu} from "../../components/navMenu";
import {Footer} from "../../components/footer";
import {LayoutProps} from "../../others/types/layoutTypes";
import {MainStyle} from "../../others/globalStyle/style"
import {useThemeSelector} from "../../redux/store/rootReducer";

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








