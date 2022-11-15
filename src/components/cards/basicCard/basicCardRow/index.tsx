import React, {FC} from "react";
import {BaseRow} from "../basicCard/style";
import {BasicCard} from "../basicCard";
import {ArrProps} from "../../../../data/postArray";

export const BasicRow = () => {
    return (
            <BaseRow>
                <BasicCard />
            </BaseRow>
    )
}