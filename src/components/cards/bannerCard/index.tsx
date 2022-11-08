import React, {FC, useContext} from "react";
import {Link} from "react-router-dom";
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai';
import {BsBookmark} from "react-icons/bs";
import "../../../App.css";
import {BannerCardWrapper, CardText, CardContent, IconsRow, LikeCount, BookmarkWrap, CardImg} from "./style";
import {ThemeContext} from "../../themeProvider";
import {PostArray} from "../../../data/postArray";
import {ArrProps} from "../../../data/postArray";

export const BannerCard:FC<ArrProps> = ({data}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            {PostArray.data.slice(0, 1).map((e) =>
                 <BannerCardWrapper key={e.id}>
                    <CardContent>
                        <CardText  className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                            <span>{e.date}</span>
                            <Link to={`/breeds/${e.title}`} onClick={() => window.scrollTo(0, 0)}>
                                    <h2>{e.title}</h2>
                            </Link>
                            <p>{e.text}</p>
                        </CardText>
                        <CardImg>
                            <img src={e.image} />
                        </CardImg>
                    </CardContent>

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
                </BannerCardWrapper>
            )}
        </>
    )}