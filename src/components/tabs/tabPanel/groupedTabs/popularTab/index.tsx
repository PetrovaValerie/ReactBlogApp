import React from "react";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../../../others/redux/store/rootReducer";
import {GroupedTitle, GroupedCards, GroupedWrap, GroupedImg, GroupedText} from "../style";
import {CardIconsRow} from "../../../../cards/otherElems/iconsRow";

export const PopularTab = () => {

    const postsArr = useAppSelector(state => state.postReducer.posts)
    const popularPostsArr = postsArr.map(e => e)
        .sort((a, b) => b.lesson_num - a.lesson_num)
        .slice(0,5);

    return (
            <>
                <GroupedTitle>Top 5 Popular Posts</GroupedTitle>
                {popularPostsArr.map((card) =>
                    <GroupedCards key={card.id}>
                        <GroupedWrap>
                            <GroupedImg>
                                <Link to = {`/post/${card.title}`}
                                      onClick = {() => window.scrollTo(0, 0)}>
                                    <img src={card.image} alt={"favorite post"}/>
                                </Link>
                            </GroupedImg>
                            <GroupedText>
                                <span>{card.date}</span>
                                <Link to = {`/post/${card.title}`}
                                      onClick = {() => window.scrollTo(0, 0)}>
                                    <h2>
                                        {card.title}
                                    </h2>
                                </Link>
                            </GroupedText>
                        </GroupedWrap>
                        <CardIconsRow likesNumb={card.lesson_num}
                                      id={card.id}/>
                    </GroupedCards>
                )}
            </>
    )}
