import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {BasicCardWrapper, BasicCardImg, BasicCardText} from "../style";
import {ThemeContext} from "../../../../theme/themeProvider";
import {useAppSelector} from "../../../../../others/redux/store";
import {CardIconsRow} from "../../../otherElems/iconsRow";

export const BasicCard = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const postsArray = useAppSelector(state => state.postReducer.posts)
    return (
        <>
            {postsArray.slice(7, 13).map((e) =>
                <BasicCardWrapper key={e.id}>
                    <BasicCardImg>
                        <img src={e.image} alt={"post"}/>
                    </BasicCardImg>
                    <BasicCardText className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                        <span>{e.date}</span>
                        <Link to={`/post/${e.title}`} onClick={() => window.scrollTo(0, 0)}>
                            <h3>{e.title}</h3>
                        </Link>
                    </BasicCardText>

                    <CardIconsRow id={e.id}/>

                </BasicCardWrapper>
            )}
        </>
    )}