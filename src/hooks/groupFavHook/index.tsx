import React, {useState} from 'react';
import {useAppSelector} from "../../others/redux/store/rootReducer";
import {useDispatch} from "react-redux";
import {toggleFavorite} from "../../others/redux/blog/action";

export const switchToFavouriteHook = (id: number) => {

    const favoritePostsArr = useAppSelector(state => state.postReducer.idFav);
    const [state, setState] = useState(favoritePostsArr.find(e => e === id));
    const dispatch = useDispatch();

    const addFavPostByID = () => {

        if (favoritePostsArr.find(e => e === id)) {
            dispatch(toggleFavorite([...favoritePostsArr].filter((e) => e !== id)))

            setState(undefined)

        } else {
            dispatch(toggleFavorite([...favoritePostsArr, id]))

            setState(id)
        }
    }
    return {state, addFavPostByID};
};