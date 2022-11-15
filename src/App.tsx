import * as React from 'react';
import styledComponents from 'styled-components';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import {ThemeProvider} from "./components/themeProvider";
import {Layout} from './containers/layout/layout';
import {TabListing} from "./components/tabs";
import {SignInForm} from "./containers/forms/signInForm";
import {SignUpForm} from "./containers/forms/signUpForm";
import {RegConfirm} from "./containers/forms/signUpForm/RegConfirm";
import {SelectedPost} from "./components/selectedPost";
import {PostArray} from "./data/postArray";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <ThemeProvider >
                    <Layout>
                        <Routes>
                            <Route path='/' element = {<TabListing/>} />
                            <Route path='/signUp' element = {<SignUpForm />} />
                            <Route path='/signIn' element = {<SignInForm />} />
                            <Route path='/success' element = {<RegConfirm />} />
                            <Route path="/post/:title" element={<SelectedPost />}/>
                        </Routes>
                    </Layout>
                </ThemeProvider>
            </div>
        </BrowserRouter>
    )}
export default App;