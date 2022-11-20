import React from "react";
import {LikeCount} from "../style";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {LikeProp} from "../../../../../others/types/cardTypes";

export const Likes = (props:LikeProp) => {

    return (
        <LikeCount>
                <AiOutlineLike/>
                <span>{props.likesNumb}</span>
                <AiOutlineDislike/>
        </LikeCount>
    )}