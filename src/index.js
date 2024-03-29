import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
 
import i18n from './i18n';
 
ReactDOM.render(
    <I18nextProvider i18n={ i18n }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </I18nextProvider>, 
    document.getElementById('root')
);
registerServiceWorker();
unregister();
