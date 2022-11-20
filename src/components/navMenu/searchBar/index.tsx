import React from "react";
import {SearchBar, SearchIcon} from "../style";
import {FaSearch} from "react-icons/fa";

export const MainSearchBar = () => {
    return (
        <SearchBar>
            <input placeholder = "Search.." />
            <SearchIcon>
                <FaSearch />
            </SearchIcon>
        </SearchBar>
    )}

