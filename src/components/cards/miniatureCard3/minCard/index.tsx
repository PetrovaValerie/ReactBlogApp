import React, {FC, ReactElement, useContext} from "react";
import {BookmarkWrap, IconsRow, LikeCount} from "../../bannerCard1/bannerCardStyle";
import {MinCardWrapper, MinCardContent, MinCardImg, MinCardText} from "./miniatureCardStyle";
import img2 from './img2.png';
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";
import {ThemeContext} from "../../../themeProvider";
import {PostArray} from "./../../../../data/postArray";
import {cardProps} from "../../../tabs";

type MinCardProps = {
    cards: cardProps[],
}

export const MiniatureCard:FC<MinCardProps> = ({cards}): ReactElement => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <>
        {cards.slice(0, 1).map((e) =>
        // <MinCardWrapper key={e.id}>
        <MinCardWrapper id={String(PostArray.blogPosts[0].id)}>
            <MinCardContent>
                <MinCardText className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                    {/*<span>{e.date}</span>*/}
                    <span>{PostArray.blogPosts[0].date}</span>
                    {/*<h3>{e.title}</h3>*/}
                    <h3>{PostArray.blogPosts[0].title}</h3>
                </MinCardText>
                <MinCardImg>
                    {/*<img src={e.image} />*/}
                    <img src={PostArray.blogPosts[0].image} />
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