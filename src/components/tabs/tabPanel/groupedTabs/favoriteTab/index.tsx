import React from "react";
import {GroupedCards, GroupedWrap, GroupedImg, GroupedText, GroupedTitle} from "../style";
import {useAppSelector} from "../../../../../others/redux/store/rootReducer";
import {Link} from "react-router-dom";
import {CardIconsRow} from "../../../../cards/otherElems/iconsRow";

export const FavoriteTab = () => {

    const favoritesArray = useAppSelector(state => state.postReducer)
    const favoritesFilterArray = favoritesArray.posts
        .filter(card => favoritesArray.idFav
        .find(e => e === card.id))

    return (
            <>
                <GroupedTitle>Your Favorites</GroupedTitle>
                {favoritesFilterArray.map((card) =>
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