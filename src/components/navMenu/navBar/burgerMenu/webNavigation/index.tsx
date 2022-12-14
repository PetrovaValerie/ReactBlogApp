import React from "react";
import {Link} from "react-router-dom";
import {Ul} from "./style";
import {UserName} from "../../../userItem";
import {NavProps} from "../../../../../others/types/menuTypes";

export const WebNav = ({open}: NavProps) => {
    return (
        <Ul open = {open}>
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
                <Link to="/addPost">
                    Add New Post
                </Link>
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