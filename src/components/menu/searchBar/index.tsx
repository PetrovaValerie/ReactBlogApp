import React from "react";
import {SearchBar, SearchIcon} from "../style";
import {FaSearch} from "react-icons/fa";
import {Switcher} from "../../theme/themeSwitcher";

export const MainSearchBar = () => {
    return (
        <SearchBar>
            <input placeholder = "Search.." />
            <SearchIcon>
                <FaSearch />
            </SearchIcon>
            <Switcher/>
        </SearchBar>
    )}

