import React, {useContext} from "react";
import {ThemeContext} from "../../theme/themeProvider";
import {LikeCount} from "./style";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";

export const Likes = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <LikeCount className={`${darkMode ? "bg-dark" : "bg-light"}`}>
            <div>
                <AiOutlineLike/>
                {/*<div>{e.lesson_num}</div>*/}
                <div>14</div>
            </div>
            <div>
                <AiOutlineDislike/>
            </div>
        </LikeCount>
    )
}