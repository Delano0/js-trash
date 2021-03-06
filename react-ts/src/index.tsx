import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import {store} from './reducers'
import Names from "./components/";

ReactDOM.render(
    <Provider store={store}>
        <Names />
    </Provider>,
    document.getElementById("app")
);