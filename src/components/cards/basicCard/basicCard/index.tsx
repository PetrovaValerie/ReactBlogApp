import React, {FC, useContext} from "react";
import {Link} from "react-router-dom";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";
import {BasicCardWrapper, BasicCardImg, BasicCardText, BasicIcons} from "./style";
import {BookmarkWrap, IconsRow, LikeCount} from "../../bannerCard/style";
import {ThemeContext} from "../../../themeProvider";
import {ArrProps, PostArray} from "../../../../data/postArray";

export const BasicCard:FC<ArrProps> = ({data}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            {PostArray.data.slice(1, 5).map((e) =>
                <BasicCardWrapper key={e.id}>
                    <BasicCardImg>
                        <img src={e.image} />
                    </BasicCardImg>
                    <BasicCardText className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                        <span>{e.date}</span>
                        <Link to={`/breeds/${e.title}`} onClick={() => window.scrollTo(0, 0)}>
                            <h3>{e.title}</h3>
                        </Link>
                    </BasicCardText>

                    <BasicIcons>
                        <IconsRow>
                            <LikeCount className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                                <div>
                                    <AiOutlineLike/>
                                    <div>{e.lesson_num}</div>
                                </div>
                                <div>
                                    <AiOutlineDislike/>
                                </div>
                            </LikeCount>
                            <BookmarkWrap className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                                <div>
                                    <BsBookmark/>
                                    <a>...</a>
                                </div>
                            </BookmarkWrap>
                        </IconsRow>
                    </BasicIcons>

                </BasicCardWrapper>
            )}
        </>
    )}