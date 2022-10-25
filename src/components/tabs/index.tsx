import React, {ReactElement} from "react";
import {Tabs,Tab, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {TopWrap, WebTitle, AllTabs, TabRow, TabCol,  PrimaryTabListing, TabText} from "./tabsStyle";
import {BannerCard} from "../cards/bannerCard1";
import {MiniatureCol} from "../cards/miniatureCard3/minCardCol";
import {BasicRow} from "../cards/basicCard2/basicCardRow";

// type TabListProps = {
//     children: React.ChangeEvent<HTMLInputElement>;
//     selected: boolean;
//     inList: boolean;
//     disabled: boolean;
//     disabledTabClassName: string;
// }

// export const TabListing = ({selected | inlist | disabled}:TabListProps ): ReactElement => {
    export const TabListing = (): ReactElement => {
    return (
        <>
            <TopWrap>
                <WebTitle>
                    Blog
                </WebTitle>
            </TopWrap>
        <Tabs>
            <AllTabs>
                <TabList>
                    <PrimaryTabListing>
                        <Tab>
                            <TabText>
                                All
                            </TabText>
                        </Tab>
                        <Tab>
                            <TabText>
                                My favorites
                            </TabText>
                        </Tab>
                        <Tab>
                            <TabText>
                                Popular
                            </TabText>
                        </Tab>
                    </PrimaryTabListing>
                </TabList>

            <TabPanel>
                <TabCol>
                    <TabRow>        {/*1st row*/}
                        <BannerCard />
                        <MiniatureCol />
                    </TabRow>
                    <TabRow>        {/*2nd row*/}
                        <BasicRow />
                        <MiniatureCol />
                    </TabRow>
                    <TabRow>        {/*3rd row*/}
                        <BasicRow />
                        <MiniatureCol />
                    </TabRow>
                </TabCol>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>            <TabPanel>
                <h2>Any content 333</h2>
            </TabPanel>
            </AllTabs>
        </Tabs>
        </>
    )
}