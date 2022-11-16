import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {BasicCardWrapper, BasicCardImg, BasicCardText, BasicIcons} from "./style";
import {IconsRow} from "../../bannerCard/style";
import {ThemeContext} from "../../../theme/themeProvider";
import {useAppSelector} from "../../../../redux/store";
import {BookMark} from "../../../cardElems/bookmark";
import {Likes} from "../../../cardElems/likeCount";

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

                    <BasicIcons>
                        <IconsRow>
                            <Likes />
                            <BookMark id={e.id} />
                        </IconsRow>
                    </BasicIcons>
                </BasicCardWrapper>
            )}
        </>
    )}