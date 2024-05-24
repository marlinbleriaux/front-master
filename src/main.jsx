import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux';
import App from './App'
import store from "./store";
import {IntlProvider} from "react-intl";
import Toasts from "./components/Toasts";
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';

import French from './lang/fr.json';
import English from './lang/en.json';


const locale = navigator.language;

let lang;
if (locale==="en") {
    lang = English;
} else if (locale === "fr") {
        lang = French;
}

loadProgressBar();

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <IntlProvider locale={locale} messages={French}>
            <Toasts />
                    <App/>
                </IntlProvider>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)
