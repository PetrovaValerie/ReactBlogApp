import {ACTION_POST_TYPES} from "../../../../redux/blog/action";

export type PostTypes = {
    id: number,
    image?: string,
    title?: string,
    text?: string,
    date?: string,
    lesson_num: number,
    author?: number,
    // favourite?: boolean,
}

export type ActionPostType = {
    type: ACTION_POST_TYPES,
    payload: {
        posts?: PostTypes[],
        idFav?: number[],
    }
}

export type postsStateType = {
    posts: PostTypes[],
    idFav: number[],
}

export type postReducerType = {
    postReducer: postsStateType
}
