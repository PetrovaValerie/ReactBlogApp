import React, {ReactElement, useState} from "react";
import {BurgerWrapper, StyledBurger} from "./navbarStyle";
import {LeftNav} from "./leftNav";


export const Burger = (): ReactElement => {

    const [open, setOpen] = useState(false);

    return (
        <BurgerWrapper>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </StyledBurger>

            <LeftNav open={open}/>

        </BurgerWrapper>
    )
};