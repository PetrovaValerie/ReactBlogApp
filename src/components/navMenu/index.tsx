import React from "react";
import {NavItem} from "./style";
import {UserName} from './userItem';
import {Navbar} from "./navBar";
import {MainSearchBar} from "./searchBar";
import {Switcher} from "../theme/themeSwitcher";

export const HeaderMenu = () => {

    return (
            <NavItem>
                <Navbar/>
                    <MainSearchBar />
                <UserName />
                <Switcher/>
            </NavItem>
    )}