import React, {useContext} from "react";
import {ThemeContext} from "../../../../theme/themeProvider";
import {switchToFavouriteHook} from "../../../../../hooks";
import {BookmarkWrap} from "./style";
import {BookMarkSvg} from "./bookMarkSvg";
import {IdType} from "../../../../../others/types/cardTypes";

export const BookMark = ({id}:IdType) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const bookmarkHandler = switchToFavouriteHook(id);
    return (
        <BookmarkWrap className = {`${darkMode ? "bg-dark" : "bg-light"}`}
                      onClick = {bookmarkHandler.addFavPostByID} >
            <BookMarkSvg state={bookmarkHandler.state}/>
        </BookmarkWrap>
    )
}