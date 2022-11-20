import React from "react";
import {IconsRow} from "./style";
import {BookMark} from "./bookmark";
import {IdType} from "../../../../others/types/cardTypes";
import {LikeCount} from "./style";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {useAppSelector} from "../../../../others/redux/store/rootReducer";

export const CardIconsRow = ({id}:IdType) => {

     const postsArray = useAppSelector(state => state.postReducer.posts);
    return (
        <>
            {postsArray.splice(postsArray.indexOf({id})).map((e) =>
            <IconsRow>
                <LikeCount>
                    <AiOutlineLike/>
                    <div>{e.lesson_num}</div>
                    <AiOutlineDislike/>
                </LikeCount>

                <BookMark id={id}/>
            </IconsRow>
             )}
        </>
    )}