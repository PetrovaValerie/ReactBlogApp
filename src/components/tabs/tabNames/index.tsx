import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Tab, TabList} from "react-tabs";
import {PrimaryTabListing, TabText, TabSelected} from "../style";

export const TabCategories = () => {

    const pathName = window.location.pathname;
    const navigate = useNavigate();

    const allPostsTab = () => {
        navigate('/')
    }
    const favouritePostsTab = () => {
        navigate('/favorites')
    }
    const popularPostsTab = () => {
        navigate('/popular')
    }

    return (
        <TabList>
            <PrimaryTabListing>
                <Tab onClick={allPostsTab}>
                    <TabText>
                        All
                        {pathName === '/' ? <TabSelected /> : null}
                    </TabText>
                </Tab>
                <Tab onClick={favouritePostsTab}>
                    <TabText>
                        My favorites
                        {pathName === '/favorites' ? <TabSelected /> : null}
                    </TabText>
                </Tab>
                <Tab onClick={popularPostsTab}>
                    <TabText>
                        Popular
                        {pathName === '/popular'? <TabSelected /> : null}
                    </TabText>
                </Tab>
            </PrimaryTabListing>
        </TabList>
    )}
