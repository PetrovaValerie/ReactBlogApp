import React, {ReactElement} from "react";
import {FooterWrapper} from "./footerStyle";


export const Footer = (): ReactElement => {
    return (
        <FooterWrapper>
            <p>©2022 Blogfolio</p>
            <p>All rights reserved</p>
        </FooterWrapper>
    )
};