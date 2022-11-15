import React, {FC} from "react";
import {MiniatureCard} from "../minCard";
import {MinCol} from "../minCard/style";
import {ArrProps} from "../../../../data/postArray";

export const MiniatureCol = () => {
    return (
         <MinCol>
             <MiniatureCard />
        </MinCol>
    )
}