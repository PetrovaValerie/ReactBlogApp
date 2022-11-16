import React, {FC, useContext} from "react";
import {ThemeContext} from "../../theme/themeProvider";
import {switchToFavouriteHook} from "../../../hooks/hooks";
import {BookmarkWrap} from "./style";
import {BookmarkSvg} from "./bookMarkSvg";

type PropID = {
    id: number,
}

export const BookMark: FC<PropID> = ({id}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const bookmarkHandler = switchToFavouriteHook(id);

    return (
        <BookmarkWrap className = {`${darkMode ? "bg-dark" : "bg-light"}`} onClick = {bookmarkHandler.addFavPostByID} >
        <BookmarkSvg state={bookmarkHandler.state}/>
                <a>...</a>
        </BookmarkWrap>
    )
}