import React, {ReactElement} from "react";
import {SearchBar, SearchIcon, NavItem} from "./menuStyle";
import {FaSearch} from 'react-icons/fa';
import {UserName} from './userItem';
import {Navbar} from "./navbar/navbar";
import {Switcher} from "../switcher";


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