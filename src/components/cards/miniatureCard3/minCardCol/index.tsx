import React, {FC, ReactElement} from "react";
import {MiniatureCard} from "../minCard";
import {MinCol} from "../.././miniatureCard3/minCardCol/minCol";
import {cardProps} from "../../../tabs";

type MinColProps = {
    cards: cardProps[],
}

export const MiniatureCol:FC<MinColProps> = ({cards}) => {
    return (
        <MinCol>
            <MiniatureCard cards={cards}/>
            <MiniatureCard cards={cards}/>
        </MinCol>
    )
}