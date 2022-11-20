import {PostTypes} from "../../types/reduxTypes/blogTypes";

export enum ACTION_POST_TYPES {
    ADD_POSTS = "ADD_POSTS",
    TOGGLE_FAVORITE = "TOGGLE_FAVORITE",

}

export const addPosts = (postsArray: PostTypes[]) => ({
    type: ACTION_POST_TYPES.ADD_POSTS,
    payload: {
        posts: postsArray,
    }
})

export const toggleFavorite = (favArr: number[]) => ({
    type: ACTION_POST_TYPES.TOGGLE_FAVORITE,
    payload: {
        idFav: favArr,
    }
})
