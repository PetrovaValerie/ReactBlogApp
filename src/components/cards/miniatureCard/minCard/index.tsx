import React, {FC, ReactElement, useContext} from "react";
import {Link} from "react-router-dom";
import {ThemeContext} from "../../../themeProvider";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";
import {BookmarkWrap, IconsRow, LikeCount} from "../../bannerCard/style";
import {MinCardWrapper, MinCardContent, MinCardImg, MinCardText} from "./style";
import {ArrProps, PostArray} from "../../../../data/postArray";


export const MiniatureCard:FC<ArrProps> = ({data}): ReactElement => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
            {PostArray.data.slice(5, 11).map((e) =>
                <MinCardWrapper key={e.id}>
                    <MinCardContent>
                        <MinCardText className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                            <span>{e.date}</span>
                            <Link to={`/breeds/${e.title}`} onClick={() => window.scrollTo(0, 0)}>
                                <h3>{e.title}</h3>
                            </Link>
                        </MinCardText>
                        <MinCardImg>
                            <img src={e.image} />
                        </MinCardImg>
                    </MinCardContent>

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
                </MinCardWrapper>
            )}
        </>
    )
}