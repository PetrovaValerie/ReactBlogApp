import React, {useContext, useState} from "react";
import {FavContainer, FavWrap, FavImg, FavText} from "./style";
import {useAppSelector} from "../../../../others/redux/store/rootReducer";
import {Link} from "react-router-dom";
import {CardIconsRow} from "../../../cards/otherElems/iconsRow";

export const FavoriteTab = () => {
    const favoritesArray = useAppSelector(state => state.postReducer)
    const favoritesFilterArray = favoritesArray.posts.filter(card => favoritesArray.id.find(e => e === card.id))

    const [state, setState] = useState(false)
    const stateChange = () => {
        setState(state => !state)
        console.log(state)
    }
    return (
        <>
            {favoritesFilterArray.map((card) =>
                <FavContainer key={card.id}>
                    <FavWrap>
                        <FavImg src={card.image} />
                        <FavText>
                            <span>{card.date}</span>
                            <Link to = {`/post/${card.title}`}
                                  onClick = {() => window.scrollTo(0, 0)}>
                                <h2>{card.title}</h2>
                            </Link>
                        </FavText>
                    </FavWrap>
                    <CardIconsRow id={card.id}/>
                </FavContainer>
            )}
        </>
    )}