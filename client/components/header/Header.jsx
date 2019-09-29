/*
    ./client/components/Header.jsx
*/
import React from 'react';

import '../../css/Header';
import '../../css/global';
import HeaderContentLeft from './HeaderContentLeft';
import HeaderContentRight from './HeaderContentRight.jsx';
import HeaderNav from './HeaderNav';

const logo = require('../../images/logo.png');

export default class Header extends React.Component {
    render() {
        return (
            <header className='header inc_na_header'>
                <div ref={headercontent => this.headercontent = headercontent} className='header-content'>
                    <div className='header-content-left'>
                        <HeaderContentLeft/>
                    </div>
                    <a className='header-content-logo' href='#'>
                        <img src={logo} className='width-u-100 ibanez-logo' alt='logo'/>
                    </a>
                    <div className='header-content-right'>
                        <HeaderContentRight/>
                    </div>
                    <nav className='header-menuBlock js-header-menu-block clearfix'></nav>
                    <div className='header-menuBlock js-header-search-block'></div>
                    <HeaderNav/>
                </div>
            </header>
        );
    }
}