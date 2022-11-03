import React, {ReactElement, useContext, useEffect, useState} from "react";
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {TopWrap, WebTitle, AllTabs, TabRow, TabCol, PrimaryTabListing, TabText} from "./tabsStyle";
import {BannerCard} from "../cards/bannerCard1";
import {MiniatureCol} from "../cards/miniatureCard3/minCardCol";
import {BasicRow} from "../cards/basicCard2/basicCardRow";
import {ThemeContext} from "../themeProvider";
import "./../../App.css";


export type cardProps = {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
}

// type TabListProps = {
//     children: React.ChangeEvent<HTMLInputElement>;
//     selected: boolean;
//     inList: boolean;
//     disabled: boolean;
//     disabledTabClassName: string;
// }

// export const TabListing = ({selected | inlist | disabled}:TabListProps ): ReactElement => {
    export const TabListing = (): ReactElement => {

        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode;

        const [cards, setCards] = useState<cardProps[]>([])
        useEffect(() => {
            fetch("https://studapi.teachmeskills.by/blog/posts/?limit=10")
                .then(response => response.json())
                .then(data => setCards(data.results))
        }, [])

    return (
        <div>
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
                    <TabRow>        {/*1st row*/}
                        <BannerCard />
                        <MiniatureCol cards={cards}/>
                    </TabRow>
                    <TabRow>        {/*2nd row*/}
                        <BasicRow />
                        <MiniatureCol cards={cards}/>
                    </TabRow>
                    <TabRow>        {/*3rd row*/}
                        <BasicRow />
                        <MiniatureCol cards={cards}/>
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
        </div>
    )
}