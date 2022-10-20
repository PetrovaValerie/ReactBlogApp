import * as React from 'react';
import styledComponents from 'styled-components';
import './App.css';
import {HeaderMenu} from "./components/menu";
import {Index} from "./components/signIn";
import {TabList} from "./components/tabs";
// import {CustomInput} from "./components/main/customInput/";

function App() {
  return (
      <div className="App">
        <header className="App-header">
            <HeaderMenu  />
        </header>

        <Index />
        {/*<CustomInput type={'password'} placeholder={'Введите пароль'} />*/}
        {/*<CustomInput type={'email'} placeholder={'Введите текст'} />*/}
        <TabList />
      </div>
  );
}

export default App;