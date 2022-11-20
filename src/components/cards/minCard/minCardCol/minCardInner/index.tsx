import React from "react";
import {Link} from "react-router-dom";
import {MinCardWrapper, MinCardContent, MinCardImg, MinCardText} from "../style";
import {useAppSelector} from "../../../../../others/redux/store/rootReducer";
import {CardIconsRow} from "../../../otherElems/iconsRow";

export const MiniatureCard = () => {

    const postsArray = useAppSelector(state => state.postReducer.posts)
    return (
            <>
                {postsArray.slice(1, 7).map((e) =>
                    <MinCardWrapper key={e.id}>
                        <MinCardContent>
                            <MinCardText>
                                <span>{e.date}</span>
                                <Link to={`/post/${e.title}`} onClick={() => window.scrollTo(0, 0)}>
                                    <h3>{e.title}</h3>
                                </Link>
                            </MinCardText>
                            <MinCardImg>
                                <img src={e.image} alt={"post"}/>
                            </MinCardImg>
                        </MinCardContent>
                        <CardIconsRow id={e.id}/>
                    </MinCardWrapper>
                )}
            </>
    )}