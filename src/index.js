import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./reducers";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(
    rootReducer,
    composeWithDevTools()
);
render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
