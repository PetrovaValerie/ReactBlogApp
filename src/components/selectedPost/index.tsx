import React from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../others/redux/store/rootReducer";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {SelectedPostWrap, SelectedNav, HomeBtn, SelectedTitle, SelectedImg, SelectedDesc} from "./style";
import {SelectedIcons, SelectedLikes, SelectedBookmark} from "./style";
import {BookMarkSvg} from "../cards/otherElems/iconsRow/bookmark/bookMarkSvg";

export const SelectedPost = () => {

    const {title}  = useParams();
    const postsArray = useAppSelector(state => state.postReducer.posts)
    return (
            <>
                {postsArray.filter( (e) => e.title === title)
                           .map((e) => (
                                <SelectedPostWrap key = {e.id}>
                                    <SelectedNav>
                                        <HomeBtn to="/">
                                            <p>Home</p>
                                        </HomeBtn>
                                        <span>| Post by: {e.author}</span>
                                    </SelectedNav>
                                    <SelectedTitle>
                                        {e.title}
                                    </SelectedTitle>
                                    <SelectedImg src={e.image}></SelectedImg>
                                    <SelectedDesc>{e.text}</SelectedDesc>

                                    <SelectedIcons>
                                        <SelectedLikes>
                                            <AiOutlineLike/>
                                            <AiOutlineDislike/>
                                        </SelectedLikes>
                                        <SelectedBookmark>
                                            <BookMarkSvg />
                                            <p>Add to Favorites</p>
                                        </SelectedBookmark>
                                    </SelectedIcons>

                                </SelectedPostWrap>
                    ))}
            </>
    )}