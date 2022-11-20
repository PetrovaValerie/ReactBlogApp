import React from "react";
import {Link} from "react-router-dom";
import {BasicCardWrapper, BasicCardImg, BasicCardText} from "../style";
import {useAppSelector} from "../../../../../others/redux/store/rootReducer";
import {CardIconsRow} from "../../../otherElems/iconsRow";

export const BasicCard = () => {

    const postsArray = useAppSelector(state => state.postReducer.posts)
    return (
            <>
                {postsArray.slice(7, 13).map((e) =>
                    <BasicCardWrapper key={e.id}>
                        <BasicCardImg>
                            <Link to={`/post/${e.title}`}
                                  onClick={() => window.scrollTo(0, 0)}>
                                <img src={e.image} alt={"post"}/>
                            </Link>
                        </BasicCardImg>
                        <BasicCardText>
                            <span>{e.date}</span>
                            <Link to={`/post/${e.title}`}
                                  onClick={() => window.scrollTo(0, 0)}>
                                <h3>
                                    {e.title}
                                </h3>
                            </Link>
                        </BasicCardText>
                        <CardIconsRow likesNumb={e.lesson_num} id={e.id}/>
                    </BasicCardWrapper>
                )}
            </>
    )}