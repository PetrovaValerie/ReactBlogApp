import {ActionPostType, postsStateType} from "../../types/reduxTypes/blogTypes"
import {ACTION_POST_TYPES} from "./action";

const initialPostState:postsStateType  = {
    posts: [],
    idFav: []
};

export const postReducer = (state = initialPostState, action: ActionPostType) => {

    switch(action.type) {
        case ACTION_POST_TYPES.ADD_POSTS:
           return {...state, posts: action.payload.posts}

        case ACTION_POST_TYPES.TOGGLE_FAVORITE:
            return {...state, idFav: action.payload.idFav}

        default:
            return {...state}
    }
}