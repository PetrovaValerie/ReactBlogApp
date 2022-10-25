import React, {ReactElement, useState} from "react";
import {BurgerWrapper, StyledBurger} from "./navbarStyle";
import {WebNav} from "./webNav";


export const Burger = (): ReactElement => {

    const [open, setOpen] = useState(false);

    return (
        <BurgerWrapper>

            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </StyledBurger>

            <WebNav open={open}/>

        </BurgerWrapper>
    )
};