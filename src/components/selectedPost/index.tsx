import React, {FC} from "react";
import {useParams} from "react-router-dom";
import {PostArray, ArrProps} from "../../data/postArray";
import {Content, NavWrap, HomeBtn, Title, Img, Description} from "./style";

export const SelectedPost:FC<ArrProps> = ({data}) => {
    const { title } = useParams();

    return (
            <>
                {PostArray.data.filter( (e) => e.title === title).map((e) => (
                        <Content key = {e.id}>
                            <NavWrap>
                                <HomeBtn to="/"><p>Home</p></HomeBtn>
                                <span>| Post {e.author}</span>
                            </NavWrap>
                            <Title>{e.title}</Title>
                                    <Img src={e.image}></Img>
                            <Description>{e.text}</Description>
                        </Content>
                    ))}
            </>
    )}