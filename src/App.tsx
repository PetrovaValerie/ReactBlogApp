import * as React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Layout} from './containers/layout/layout';
import {MainRoute} from "./containers/routes";

function App() {

    return (
            <BrowserRouter>
                <Layout>
                    <MainRoute />
                </Layout>
            </BrowserRouter>
    )}
export default App;