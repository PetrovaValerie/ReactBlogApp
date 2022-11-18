import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Ul} from "./style";
import {UserName} from "../../../userItem";
import "../../../../../others/styles/App.css";
import {ThemeContext} from "../../../../theme/themeProvider";
import {NavProps} from "../../../../../others/types/menuTypes";

export const WebNav = ({open}: NavProps) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
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
        </Ul>
    )}