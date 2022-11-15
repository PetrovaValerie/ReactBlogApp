import React, {FC, useContext, useEffect, useState} from "react";
import {ThemeContext} from "../themeProvider";
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../../App.css";
import {TopWrap, WebTitle, AllTabs, TabCol, PrimaryTabListing, TabText} from "./style";
import {BannerCard} from "../cards/bannerCard";
import {MiniatureCol} from "../cards/miniatureCard/minCardCol";
import {BasicRow} from "../cards/basicCard/basicCardRow";
import {ArrProps} from "../../data/postArray";
import {PostTypes} from "../../redux/blog/types/types";
import {useDispatch, useSelector} from "react-redux";
import {addPosts} from "../../redux/blog/action";
import {useAppSelector} from "../../redux/rootReducer";



// export const TabListing:FC<ArrProps>  = ({data}) => {
export const TabListing = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const dispatch = useDispatch();
    const [state, setState] = useState(true)

    useEffect(() => {
        if (state) {
        fetch(
            'https://script.googleusercontent.com/macros/echo?user_content_key=79399UCdJ6gikymyDattTEhlFIBjZPAYvHjUl7---qOySJxaZXqH2_VWxJfCxlsuulfOT9B8e8xo3wDUNAQ7G1ByWRMVEIb3m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnM144pG9QZY38hPvy-JbSCRqBsgDHE57l3LU8QQuD8fMsV1dUhqgrP19fsn7jx8riV2WSjZN4MYW0CEtcaEpzgekW0XI0e3XuNz9Jw9Md8uu&lib=MXll1Do7noCASgJWueOaIITi98K7VbvaB')
            .then(response => response.json())
            .then(data => {
                dispatch(addPosts(data))
                setState(false)
            })
        }
    }, )

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
                            <BannerCard />
                            <BasicRow />
                            <MiniatureCol />
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