import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ThemeContext} from "../../theme/themeProvider";
import {useAppSelector} from "../../../others/redux/store";
import "../../../others/styles/App.css";
import {BannerCardWrapper, CardText, CardContent, CardImg} from "./style";
import {CardIconsRow} from "../otherElems/iconsRow";


export const BannerCard = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const postsArray = useAppSelector(state => state.postReducer.posts);
    return (
        <>
            {postsArray.slice(0, 1).map((e) =>
                 <BannerCardWrapper key={e.id}>
                    <CardContent>
                        <CardText  className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                            <span>{e.date}</span>
                            <Link to = {`/post/${e.title}`}
                                  onClick = {() => window.scrollTo(0, 0)}>
                                <h2>{e.title}</h2>
                            </Link>
                            <p>{e.text}</p>
                        </CardText>
                        <CardImg>
                            <img src={e.image} alt={"post"}/>
                        </CardImg>
                    </CardContent>
                     <CardIconsRow id={e.id}/>
                </BannerCardWrapper>
            )}
        </>
    )}