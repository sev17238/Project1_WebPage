/*
    ./client/components/Container.jsx
*/
import React from 'react';
import '../css/Container';
import '../css/Header';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

export default class Container extends React.Component {
    render() {
        return (
            <div id='#pagetop' className='container idx'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}