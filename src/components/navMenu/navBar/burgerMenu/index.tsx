import React, {useState} from "react";
import {BurgerWrapper, StyledBurger} from "./style";
import {WebNav} from "./webNavigation";

export const Burger = () => {

    const [open, setOpen] = useState(false);
    return (
            <BurgerWrapper>
                <StyledBurger open = {open}
                              onClick={() => setOpen(!open)} >
                    <div></div>
                    <div></div>
                    <div></div>
                </StyledBurger>
                <WebNav open={open}/>
            </BurgerWrapper>
    )}