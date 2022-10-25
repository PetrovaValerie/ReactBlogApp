import React, {ReactElement} from "react";
import {BasicCardWrapper} from "./basicCardStyle";
import img3 from './img3.png';
import {BasicCardImg, BasicCardText, BasicIcons} from "./basicCardStyle";
import {BookmarkWrap, IconsRow, LikeCount} from "../../bannerCard1/bannerCardStyle";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";


export const BasicCard = (): ReactElement => {

    return (
        <BasicCardWrapper>

            <BasicCardImg>
                <img src={img3} />
            </BasicCardImg>
            <BasicCardText>
                <div>April 20, 2021</div>
                <h3>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h3>
            </BasicCardText>

            <BasicIcons>
                <IconsRow>
                    <LikeCount>
                        <div>
                            <AiOutlineLike/>
                            <div>20</div>
                        </div>
                        <div>
                            <AiOutlineDislike/>
                        </div>
                    </LikeCount>
                    <BookmarkWrap>
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