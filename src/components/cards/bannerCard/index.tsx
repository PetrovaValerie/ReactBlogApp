import React from "react";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../../others/redux/store/rootReducer";
import {BannerCardWrapper, CardText, CardContent, CardImg} from "./style";
import {CardIconsRow} from "../otherElems/iconsRow";

export const BannerCard = () => {

    const postsArray = useAppSelector(state => state.postReducer.posts);
    return (
            <>
                {postsArray.slice(0, 1).map((e) =>
                    <BannerCardWrapper key={e.id}>
                        <CardContent>
                            <CardText>
                                <span>{e.date}</span>
                                <Link to = {`/post/${e.title}`}
                                      onClick = {() => window.scrollTo(0, 0)}>
                                    <h2>
                                        {e.title}
                                    </h2>
                                </Link>
                                <p>{e.text}</p>
                            </CardText>
                            <CardImg>
                                <Link to = {`/post/${e.title}`}
                                      onClick = {() => window.scrollTo(0, 0)}>
                                    <img src={e.image} alt={"post"}/>
                                </Link>
                            </CardImg>
                        </CardContent>
                        <CardIconsRow likesNumb={e.lesson_num} id={e.id}/>
                    </BannerCardWrapper>
                )}
            </>
    )}