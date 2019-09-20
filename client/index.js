/*
    ./client/index.js
    which is the webpack entry file
*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/global';

ReactDOM.render( <App/>, document.getElementById('root') );
