import * as React from 'react';
import styledComponents from 'styled-components';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import {HeaderMenu} from "./components/menu";
import {TabListing} from "./components/tabs";
// import {CustomInput} from "./components/main/customInput/";
import {Layout} from '../src/containers/layout/layout';
import {SignInForm} from "./containers/signInForm";
import {SignUpForm} from "./containers/signUpForm";
import {RegConfirm} from "./containers/signUpForm/RegConfirm";

import {PageListing} from "../src/components/pagination"

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Layout>   {/*Layout = то,что неизменно*/}
                  <Routes>
                      {/*<Route path='/signIn' element = {<SignInForm />} />*/}
                      <Route path='/homepage' element = {<TabListing />} />
                      <Route path='/signUp' element = {<SignUpForm />} />
                      <Route path='/signIn' element = {<SignInForm />} />
                      <Route path='/success' element = {<RegConfirm />} />
                  </Routes>
                      {/*<CustomInput type={'password'} placeholder={'Введите пароль'} />*/}
                      {/*<CustomInput type={'email'} placeholder={'Введите текст'} />*/}
                      {/*/!*<PageListing />*!/*/}
              </Layout>
          </div>
      </BrowserRouter>
  );
}

export default App;