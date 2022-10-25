import React, {ReactElement} from "react";
import {NavLink} from "react-router-dom";
import {Ul} from "./navbarStyle";
import {UserName} from "../userItem";

type NavProps = {
    open: boolean;
}

export const WebNav = ({open}: NavProps): ReactElement => {
    return (
        <Ul open={open}>
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
    )
};