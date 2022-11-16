import React, {ReactNode, useContext, useEffect, useState} from "react";
import {ThemeContext} from "../theme/themeProvider";
import {useDispatch} from "react-redux";
import {addPosts} from "../../redux/blog/action";
import "../../App.css";
import {TopWrap, WebTitle, AllTabs, Loader} from "./style";
import {Tabs, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {TabCategories} from "./tabCategories/tabList";

export type ChildProps = {
    children?: ReactNode
}

export const TabListing = ({children}:ChildProps) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const dispatch = useDispatch();
    const [state, setState] = useState(true);

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
                            <TabCategories />
                            <TabPanel>
                                {!state ? children : <Loader/>}
                            </TabPanel>
                        </AllTabs>
                    </Tabs>
                </>
        )}