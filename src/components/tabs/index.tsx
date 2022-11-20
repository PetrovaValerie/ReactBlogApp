import React from "react";
import {TopWrap, WebTitle, AllTabs, Loader} from "./style";
import {Tabs, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {TabCategories} from "./tabCategories";
import {fetchPosts} from "../../data/dataFunc";
import {Outlet} from "react-router-dom";

export const TabListing = () => {

    const fetchData = fetchPosts();
    return (
        <>
            <TopWrap>
                <WebTitle>
                    Blog
                </WebTitle>
            </TopWrap>
            <Tabs>
                <AllTabs>
                    <TabCategories />
                    <TabPanel>
                        {!fetchData.state ? <Outlet />: <Loader/>}
                    </TabPanel>
                </AllTabs>
            </Tabs>
        </>
    )}