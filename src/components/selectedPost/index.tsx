import React from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/store/rootReducer";
import {AiOutlineDislike, AiOutlineLike} from "react-icons/ai";
import {SelectedPostWrap, SelectedNav, SelectedTitle, SelectedImg, SelectedDesc} from "./style";
import {SelectedIcons, SelectedLikes, SelectedBookmark} from "./style";
import {BookMarkSvg} from "../cards/otherElems/iconsRow/bookmark/bookMarkSvg";
import {BackBtn} from "../tabs/style";

export const SelectedPost = () => {

    const {title}  = useParams();
    const postsArray = useAppSelector(state => state.postReducer.posts)
    return (
            <>
                {postsArray.filter( (e) => e.title === title)
                           .map((e) => (
                                <SelectedPostWrap key = {e.id}>
                                    <SelectedNav>
                                        <BackBtn to = "/">
                                            <p>Back to home</p>
                                        </BackBtn>
                                        <BackBtn to = {`/post/${e.title}`}>
                                            <p>| Post by: {e.author}</p>
                                        </BackBtn>
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