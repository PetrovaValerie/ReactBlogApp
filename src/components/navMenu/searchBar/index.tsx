import React from "react";
import {SearchBar, SearchIcon} from "../style";
import {SearchSvg} from "./searchBarIcon";

export const MainSearchBar = () => {
    return (
        <SearchBar>
            <input  autoComplete={"searching-results"}
                    placeholder = "Search.." />
            <SearchIcon>
                <SearchSvg />
            </SearchIcon>
        </SearchBar>
    )}

