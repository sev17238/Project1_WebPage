/*
    ./client/index.js
    which is the webpack entry file
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container'; 
/*
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import '../css/Container';
*/

import './css/global';


ReactDOM.render( <Container/>, document.getElementById('body') );
