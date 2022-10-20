import React, {ReactElement} from "react";
import {Ul} from "./navbarStyle";
import {UserName} from "../userItem";

type NavProps = {
    open: boolean;
}

export const LeftNav = ({open}: NavProps): ReactElement => {
    return (
        <Ul open={open}>
            <li>
                <UserName />
            </li>
        </Ul>
    )
};