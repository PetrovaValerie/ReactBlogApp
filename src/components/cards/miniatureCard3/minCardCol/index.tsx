import React, {ReactElement} from "react";
import {MiniatureCard} from "../minCard";
import {MinCol} from "../.././miniatureCard3/minCardCol/minCol";

export const MiniatureCol = () => {
    return (
        <MinCol>
            <MiniatureCard />
            <MiniatureCard />
        </MinCol>
    )
}