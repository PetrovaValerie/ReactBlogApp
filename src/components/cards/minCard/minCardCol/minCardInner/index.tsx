import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ThemeContext} from "../../../../theme/themeProvider";
import {MinCardWrapper, MinCardContent, MinCardImg, MinCardText} from "../style";
import {useAppSelector} from "../../../../../others/redux/store";
import {CardIconsRow} from "../../../otherElems/iconsRow";

export const MiniatureCard= () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const postsArray = useAppSelector(state => state.postReducer.posts)
    return (
        <>
            {postsArray.slice(1, 7).map((e) =>
                <MinCardWrapper key={e.id}>
                    <MinCardContent>
                        <MinCardText className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                            <span>{e.date}</span>
                            <Link to={`/post/${e.title}`}
                                  onClick={() => window.scrollTo(0, 0)}>
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