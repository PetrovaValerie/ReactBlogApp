import React from "react";
import {TabCol} from "../style";
import {BannerCard} from "../../cards/bannerCard";
import {BasicRow} from "../../cards/basicCard/basicCardRow";
import {MiniatureCol} from "../../cards/miniatureCard/minCardCol";

export const AllTabsWrap = () => {

    return (
            <TabCol>
                <BannerCard />
                <BasicRow />
                <MiniatureCol />
            </TabCol>
    )
};
