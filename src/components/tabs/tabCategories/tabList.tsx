import {Tab, TabList} from "react-tabs";
import {PrimaryTabListing, TabText} from "../style";
import React, {useContext} from "react";
// import {navigate} from "@reach/router";
import {useNavigate} from "react-router-dom";
import {ThemeContext} from "../../theme/themeProvider";

export const TabCategories = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const navigate = useNavigate();
    const allPostsTab = () => {
        navigate('/')
    }
    const favouritePostsTab = () => {
        navigate('/favourites')
    }

    return (
            <TabList>
                <PrimaryTabListing>
                    <Tab onClick={allPostsTab}>
                        <TabText className={`${darkMode ? "bg-dark" : "bg-light"}`}>
                            All
                        </TabText>
                    </Tab>

                    <Tab onClick={favouritePostsTab}>
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
    )
}
