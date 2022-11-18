import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {TabListing} from "../../components/tabs";
import {AllTabsWrap} from "../../components/tabs/tabPanel/allTabs";
import {FavoriteTab} from "../../components/tabs/tabPanel/favTabs";
import {SignUpForm} from "../forms/signUpForm";
import {SignInForm} from "../forms/signInForm";
import {RegConfirm} from "../forms/signUpForm/RegConfirm";
import {SelectedPost} from "../../components/selectedPost";
import {ActivationRoute} from "../forms/route";

export const MainRoute = () => {
    return (
        <Routes>
            <Route path='/' element = {<TabListing />} >
                <Route index element = {<AllTabsWrap />} />
                <Route path=':favorites' element = {<FavoriteTab />} />
            </Route>
            <Route path='/signUp' element = {<SignUpForm />} />
            <Route path='/signIn' element = {<SignInForm />} />
            <Route path='/success' element = {<RegConfirm />} />
            <Route path="/post/:title" element={<SelectedPost />}/>
            <Route path="/activate/:uid/:token" element={<ActivationRoute />}/>
        </Routes>
    )}






