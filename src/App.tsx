import * as React from 'react';
import {BrowserRouter} from "react-router-dom";
import './others/styles/App.css';
import {ThemeProvider} from "./components/theme/themeProvider";
import {Layout} from './containers/layout/layout';
import {MainRoute} from "./containers/routes";

function App() {
    return (
        <BrowserRouter>
                <ThemeProvider >
                    <Layout>
                        <MainRoute />
                    </Layout>
                </ThemeProvider>
        </BrowserRouter>
    )}
export default App;