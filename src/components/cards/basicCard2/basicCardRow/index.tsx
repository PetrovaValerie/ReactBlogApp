import React from "react";
import {MiniatureCard} from "../../miniatureCard3/minCard";
import {BaseRow} from "../.././basicCard2/basicCardRow/basicRow";
import {BasicCard} from "../basicCard";

export const BasicRow = () => {
    return (
        <BaseRow>
            <BasicCard />
            <BasicCard />
        </BaseRow>
    )
}