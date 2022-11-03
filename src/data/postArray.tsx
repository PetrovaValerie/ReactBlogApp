import React from 'react';

export type ArrTypes = {
    blogPosts: PostTypes[],
}

export type PostTypes = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
}

export const PostArray: ArrTypes = {
    "blogPosts": [
        {
            "id": 1,
            "image": "images/1.jpg",
            "text": "small puppy",
            "date": "01-10-2022",
            "lesson_num": 40,
            "title": "dog",
            "author": 11,
        },
        {
            "id": 2,
            "image": "images/2.jpg",
            "text": "small puppy",
            "date": "01-10-2022",
            "lesson_num": 40,
            "title": "dog",
            "author": 11,
        },
        {
            "id": 3,
            "image": "images/3.jpg",
            "text": "small puppy",
            "date": "01-10-2022",
            "lesson_num": 40,
            "title": "dog",
            "author": 11,
        },
        {
            "id": 4,
            "image": "images/4.jpg",
            "text": "small puppy",
            "date": "01-10-2022",
            "lesson_num": 40,
            "title": "dog",
            "author": 11,
        },
        {
            "id": 5,
            "image": "images/5.jpg",
            "text": "small puppy",
            "date": "01-10-2022",
            "lesson_num": 40,
            "title": "dog",
            "author": 11,
        },
        {
            "id": 6,
            "image": "images/6.jpg",
            "text": "small puppy",
            "date": "01-10-2022",
            "lesson_num": 40,
            "title": "dog",
            "author": 11,
        },
    ]
}