import {ActionPostType, postsStateType} from "./types/types"
import {ACTION_POST_TYPES} from "./action";

const initialPostState:postsStateType  = {
    posts: [],
    id: []
};

export const postReducer = (state = initialPostState, action: ActionPostType) => {
    switch(action.type) {
        case ACTION_POST_TYPES.ADD_POSTS:
           return {...state, posts: action.payload.posts}
        case ACTION_POST_TYPES.TOGGLE_FAVOURITE:
            return {...state, posts: action.payload.id}
        default:
            return state
    }
}