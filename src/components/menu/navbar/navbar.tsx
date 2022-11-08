import React, {ReactElement} from "react";
import {Nav} from "./style";
import {Burger} from "./burger";


export const Navbar = (): ReactElement => {
    return (
        <>
             <Nav>
                 <Burger />
             </Nav>
        </>
    )
};