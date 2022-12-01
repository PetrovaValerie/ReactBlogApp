import React from 'react';
import ReactDOM from 'react-dom/client';
import {Helmet} from "react-helmet";
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store/rootReducer";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as Element)
root.render(
  <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>
  </React.StrictMode>
);

class Application extends React.Component {
    render () {
        return (
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta
                        name="description"
                        content="Web site created using create-react-app"
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylessheet"  />
                    <title>Blog React-App</title>
                </Helmet>

                <App />

            </div>
        );
    }
};
