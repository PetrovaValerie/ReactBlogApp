import React, {ReactElement, useContext} from "react";
import {BasicCardWrapper} from "./basicCardStyle";
import img3 from './img3.png';
import {BasicCardImg, BasicCardText, BasicIcons} from "./basicCardStyle";
import {BookmarkWrap, IconsRow, LikeCount} from "../../bannerCard1/bannerCardStyle";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";
import {ThemeContext} from "../../../themeProvider";


export const BasicCard = (): ReactElement => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <BasicCardWrapper>

            <BasicCardImg>
                <img src={img3} />
            </BasicCardImg>
            <BasicCardText className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                <span>April 20, 2021</span>
                <h3>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h3>
            </BasicCardText>

            <BasicIcons>
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
            </BasicIcons>

        </BasicCardWrapper>
    )
}