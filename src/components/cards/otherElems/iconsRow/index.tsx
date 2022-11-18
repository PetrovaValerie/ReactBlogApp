import React from "react";
import {IconsRow} from "./style";
import {Likes} from "./likeCount";
import {BookMark} from "./bookmark";
import {IdType} from "../../../../others/types/cardTypes";

export const CardIconsRow = ({id}:IdType) => {
    return (
            <IconsRow>
                <Likes />
                <BookMark id={id}/>
            </IconsRow>
    )}