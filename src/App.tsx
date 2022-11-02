import * as React from 'react';
import styledComponents from 'styled-components';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import {TabListing} from "./components/tabs";
import {CustomInput} from "./containers/forms/customInput/";
import {Layout} from '../src/containers/layout/layout';
import {SignInForm} from "./containers/forms/signInForm";
import {SignUpForm} from "./containers/forms/signUpForm";
import {RegConfirm} from "./containers/forms/signUpForm/RegConfirm";
import {ThemeProvider} from "./components/themeProvider";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <ThemeProvider >
                    <Layout>   {/*Layout = то,что неизменно*/}
                        <Routes>
                            <Route path='/homepage' element = {<TabListing />} />
                            <Route path='/signUp' element = {<SignUpForm />} />
                            <Route path='/signIn' element = {<SignInForm />} />
                            <Route path='/success' element = {<RegConfirm />} />
                        </Routes>
                        {/*<CustomInput type={'password'} placeholder={'Введите пароль'} />*/}
                        {/*    <CustomInput*/}
                        {/*        type="email"*/}
                        {/*        placeholder={"Введите текст"}*/}
                        {/*        name="email"*/}
                        {/*        value={'email'} />*/}
                    </Layout>
                </ThemeProvider>
            </div>
        </BrowserRouter>
    );
}
export default App;