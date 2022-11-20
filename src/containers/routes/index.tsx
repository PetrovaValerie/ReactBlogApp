import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {TabListing} from "../../components/tabs";
import {AllTabsWrap} from "../../components/tabs/tabPanel/allPostsTab";
import {FavoriteTab} from "../../components/tabs/tabPanel/groupedTabs/favoriteTab";
import {SignUpForm} from "../forms/signUpForm";
import {SignInForm} from "../forms/signInForm";
import {RegConfirm} from "../forms/authorization/RegConfirm";
import {SelectedPost} from "../../components/selectedPost";
import {ActivationRoute} from "../forms/authorization/route";
import {PopularTab} from "../../components/tabs/tabPanel/groupedTabs/popularTab";

export const MainRoute = () => {

    return (
            <Routes>
                <Route path='/' element = {<TabListing />} >
                    <Route index element = {<AllTabsWrap />} />
                    <Route path='/favorites' element = {<FavoriteTab />} />
                    <Route path='/popular' element = {<PopularTab />} />
                </Route>
                <Route path='/signUp' element = {<SignUpForm />} />
                <Route path='/signIn' element = {<SignInForm />} />
                <Route path='/success' element = {<RegConfirm />} />
                <Route path="/post/:title" element={<SelectedPost />} />
                <Route path="/activate/:uid/:token" element={<ActivationRoute />} />
            </Routes>
    )}






