import React, {ReactElement} from "react";
import {BookmarkWrap, IconsRow, LikeCount} from "../../bannerCard1/bannerCardStyle";
import {MinCardWrapper, MinCardContent, MinCardImg, MinCardText} from "./miniatureCardStyle";
import img2 from './img2.png';
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {BsBookmark} from "react-icons/bs";



export const MiniatureCard = (): ReactElement => {

    return (
        <MinCardWrapper>

            <MinCardContent>
                <MinCardText>
                    <div>April 20, 2021</div>
                    <h3>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h3>
                </MinCardText>
                <MinCardImg>
                    <img src={img2} />
                </MinCardImg>
            </MinCardContent>

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

        </MinCardWrapper>
    )
}