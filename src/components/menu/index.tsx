import React from "react";
import {NavItem} from "./style";
import {UserName} from './userItem';
import {Navbar} from "./navbar";
import {MainSearchBar} from "./searchBar";

export const HeaderMenu = () => {
    return (
            <NavItem>
                <Navbar/>
                    <MainSearchBar />
                <UserName />
            </NavItem>
    )}