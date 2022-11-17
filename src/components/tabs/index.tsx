import React, {ReactNode, useContext, useEffect, useState} from "react";
import {ThemeContext} from "../theme/themeProvider";
// import {useDispatch} from "react-redux";
// import {addPosts} from "../../redux/blog/action";
import "../../App.css";
import {TopWrap, WebTitle, AllTabs, Loader} from "./style";
import {Tabs, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {TabCategories} from "./tabCategories/tabList";
import {fetchPosts} from "../../data/dataFetchFunc";
import {Outlet} from "react-router-dom";

// export type ChildProps = {
//     children?: ReactNode,
// }

// export const TabListing = ({children}:ChildProps) => {
export const TabListing = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const fetchData = fetchPosts();
        return (
            <>
                <TopWrap>
                    <WebTitle className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                        Blog
                    </WebTitle>
                </TopWrap>
                <Tabs>
                    <AllTabs className={`${darkMode ? "bg-dark" : "bg-light"}`} >
                        <TabCategories />
                        <TabPanel>
                            {!fetchData.state ? <Outlet />: <Loader/>}
                        </TabPanel>
                    </AllTabs>
                </Tabs>
            </>
    )}