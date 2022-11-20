import React from "react";
import {IconsRow} from "./style";
import {Likes} from "./likeCount";
import {BookMark} from "./bookmark";

export type IdType = {
    id: number,
    likesNumb: number
}

export const CardIconsRow = (props:IdType) => {
    return (
        <>
            <IconsRow>
                <Likes likesNumb={props.likesNumb}/>
                <BookMark id={props.id}/>
            </IconsRow>
        </>
    )}