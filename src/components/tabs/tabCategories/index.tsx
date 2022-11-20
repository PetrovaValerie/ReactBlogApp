import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Tab, TabList} from "react-tabs";
import {PrimaryTabListing, TabText} from "../style";

export const TabCategories = () => {
    const params = useParams();
    const paramsTab = Object.values(params)[0];

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
                    <TabText>
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
    )}
