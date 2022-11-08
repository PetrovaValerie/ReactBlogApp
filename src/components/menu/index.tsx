import React, {ReactElement} from "react";
import {SearchBar, SearchIcon, NavItem} from "./style";
import {FaSearch} from 'react-icons/fa';
import {UserName} from './userItem';
import {Navbar} from "./navbar/navbar";
import {Switcher} from "../themeSwitcher";


export const HeaderMenu = (): ReactElement => {
    return (
        <>
            <NavItem>
                <Navbar/>
                <SearchBar>
                    <input placeholder = "Search.." />
                    <SearchIcon>
                        <FaSearch />
                    </SearchIcon>
                    <Switcher/>
                </SearchBar>
                <section>
                    <UserName />
                </section>
            </NavItem>
        </>
    )
};