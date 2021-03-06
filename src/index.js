import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>),
    document.getElementById('root'));

registerServiceWorker();
