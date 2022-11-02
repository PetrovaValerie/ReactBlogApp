import React, {ReactElement, useContext} from "react";
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai';
import {BsBookmark} from "react-icons/bs";
import {BannerCardWrapper, CardText, CardContent, IconsRow, LikeCount, BookmarkWrap, CardImg} from "./bannerCardStyle";
import img from './first.png';
import "./../../../App.css";
import {ThemeContext} from "../../themeProvider";

export const BannerCard = (): ReactElement => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <BannerCardWrapper>

        <CardContent>
            <CardText  className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                <span>April 20, 2021</span>
                <h2>Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...</h2>
                <p>Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday,
                    installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande
                    Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.</p>
            </CardText>
            <CardImg>
                <img src={img} />
            </CardImg>
        </CardContent>

        <IconsRow>
            <LikeCount className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                <div>
                    <AiOutlineLike/>
                    <div>20</div>
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
    )
}