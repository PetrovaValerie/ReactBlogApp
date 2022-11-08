import React, {ReactElement} from "react";
import {UserNameWrapper} from "./style";

type userNameProps = {
    userName: string;
}

export const UserName = (): ReactElement => {
    // function toInitials({userName}: userNameProps) {
    //     return userName
    //         .split(' ')
    //         .map(function(el) {
    //             return el.slice(0, 1).toUpperCase() + '.';
    //         })
    //         .join('');
    // }
    return (
        <UserNameWrapper>
                <span>AM</span>
                <p>Artem Makin</p>
        </UserNameWrapper>
    )
}

