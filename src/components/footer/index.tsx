import React, {ReactElement, useContext} from "react";
import {FooterWrapper} from "./style";

export const Footer = (): ReactElement => {
    return (
        <FooterWrapper>
            <p>©2022 Blogfolio</p>
            <p>All rights reserved</p>
        </FooterWrapper>
    )
};