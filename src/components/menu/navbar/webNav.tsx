import React, {ReactElement, useContext} from "react";
import {NavLink} from "react-router-dom";
import {Ul} from "./navbarStyle";
import {UserName} from "../userItem";
import "./../../../App.css";
import {ThemeContext} from "../../themeProvider";

type NavProps = {
    open: boolean;
}

export const WebNav = ({open}: NavProps): ReactElement => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        // <WebNavWrapper>
        <Ul open = {open} className = {`${darkMode ? "bg-dark" : "bg-light"}`}>
            <li>
                <UserName />
            </li>
            <li>
                <NavLink to="/homepage">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/signUp">
                    Sign Up
                </NavLink>
            </li>
            <li>
                <div>Add Post</div>
            </li>
            <li>
                <NavLink to="/signIn">
                    Sign In
                </NavLink>
            </li>
            <li>
                <div>Log Out</div>
            </li>
            {/*<li>*/}
            {/*    <Success />*/}
            {/*</li>*/}
        </Ul>
        // </WebNavWrapper>
    )
};