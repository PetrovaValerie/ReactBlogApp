import React, {ReactElement, useContext} from "react";
import {Link} from "react-router-dom";
import {Ul} from "./style";
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
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/signUp">
                    Sign Up
                </Link>
            </li>
            <li>
                <div>Add Post</div>
            </li>
            <li>
                <Link to="/signIn">
                    Sign In
                </Link>
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