import React, {ReactElement, useContext} from "react";
import {BookmarkWrap, IconsRow, LikeCount} from "../../bannerCard1/bannerCardStyle";
import {MinCardWrapper, MinCardContent, MinCardImg, MinCardText} from "./miniatureCardStyle";
import img2 from './img2.png';
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";
import {ThemeContext} from "../../../themeProvider";



export const MiniatureCard = (): ReactElement => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <MinCardWrapper>

            <MinCardContent>
                <MinCardText className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                    <span>April 20, 2021</span>
                    <h3>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h3>
                </MinCardText>
                <MinCardImg>
                    <img src={img2} />
                </MinCardImg>
            </MinCardContent>

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

        </MinCardWrapper>
    )
}