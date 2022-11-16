import React, {useContext, useState} from "react";
import {IconsRow} from "../../../cards/bannerCard/style";
import {BookMark} from "../../../cardElems/bookmark";
import {ThemeContext} from "../../../theme/themeProvider";
import {FavContainer, FavWrap, FavImg, FavText} from "./style";
import {useAppSelector} from "../../../../redux/store";
import {Likes} from "../../../cardElems/likeCount";
import {Link} from "react-router-dom";

export const FavoriteTab = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

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

                        <IconsRow>
                            <Likes />
                            <BookMark id={card.id} />
                        </IconsRow>

                    </FavContainer>
                )}
            </>
        )}