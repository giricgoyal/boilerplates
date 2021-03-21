// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from './modules/app';

import './styles/index.scss'

import store from './redux/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
