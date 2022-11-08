import React, {FC, useContext} from "react";
import {ThemeContext} from "../themeProvider";
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../../App.css";
import {TopWrap, WebTitle, AllTabs, TabCol, PrimaryTabListing, TabText} from "./style";
import {BannerCard} from "../cards/bannerCard";
import {MiniatureCol} from "../cards/miniatureCard/minCardCol";
import {BasicRow} from "../cards/basicCard/basicCardRow";
import {ArrProps} from "../../data/postArray";

export const TabListing:FC<ArrProps>  = ({data}) => {
        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode;

    return (
        <>
            <TopWrap>
                <WebTitle className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                    Blog
                </WebTitle>
            </TopWrap>
            <Tabs>
                <AllTabs className={`${darkMode ? "bg-dark" : "bg-light"}`} >
                    <TabList>
                        <PrimaryTabListing>
                            <Tab>
                                <TabText className={`${darkMode ? "bg-dark" : "bg-light"}`}>
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
                            <BannerCard data={data}/>
                            <BasicRow data={data}/>
                            <MiniatureCol data={data}/>
                    </TabCol>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                </AllTabs>
            </Tabs>
        </>
    )}