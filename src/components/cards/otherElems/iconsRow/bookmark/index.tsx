import React from "react";
import {switchToFavouriteHook} from "../../../../../hooks/groupFavHook";
import {BookmarkWrap} from "./style";
import {BookMarkSvg} from "./bookMarkSvg";
import {IdType} from "../../../../../others/types/cardTypes";

export const BookMark = ({id}:IdType) => {

    const bookmarkHandler = switchToFavouriteHook(id);
    return (
            <BookmarkWrap onClick = {bookmarkHandler.addFavPostByID}>
                <BookMarkSvg state={bookmarkHandler.state}/>
            </BookmarkWrap>
    )}