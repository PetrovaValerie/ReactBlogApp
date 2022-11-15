import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/rootReducer";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as Element)
root.render(
  <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>
  </React.StrictMode>
);

