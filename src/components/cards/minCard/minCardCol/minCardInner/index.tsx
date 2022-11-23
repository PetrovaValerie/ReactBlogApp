import React from "react";
import {Link} from "react-router-dom";
import {MinCardWrapper, MinCardContent, MinCardImg, MinCardText} from "../style";
import {useAppSelector} from "../../../../../others/redux/store/rootReducer";
import {CardIconsRow} from "../../../otherElems/iconsRow";
import {IconsRow, LikeCount} from "../../../otherElems/iconsRow/style";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {BookMark} from "../../../otherElems/iconsRow/bookmark";

export const MiniatureCard = () => {

    const postsArray = useAppSelector(state => state.postReducer.posts)
    return (
            <>
                {postsArray.slice(1, 7).map((e) =>
                    <MinCardWrapper key={e.id}>
                        <MinCardContent>
                            <MinCardText>
                                <span>{e.date}</span>
                                <Link to={`/post/${e.title}`}
                                      onClick={() => window.scrollTo(0, 0)}>
                                    <h2>
                                        {e.title}
                                    </h2>
                                </Link>
                            </MinCardText>
                            <MinCardImg>
                                <Link to={`/post/${e.title}`}
                                      onClick={() => window.scrollTo(0, 0)}>
                                     <img src={e.image} alt={"post"}/>
                                </Link>
                            </MinCardImg>
                        </MinCardContent>
                        <CardIconsRow likesNumb={e.lesson_num} id={e.id}/>
                    </MinCardWrapper>
                )}
            </>
    )}