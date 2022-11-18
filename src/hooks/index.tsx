import React, {useState} from 'react';
import {useAppSelector} from "../others/redux/store";

export const switchToFavouriteHook = (id: number) => {

    const favouritePostsArr = useAppSelector(state => state.postReducer.id);
    const [state, setState] = useState(favouritePostsArr.find(e => e === id));

    const addFavPostByID = () => {

        if (favouritePostsArr.find(e => e === id)) {
           (favouritePostsArr.splice(favouritePostsArr.indexOf(id), 1))
            setState(undefined)
        } else {
            setState(id)
            favouritePostsArr.push(id)
        }
    }
    return {state, addFavPostByID};
};