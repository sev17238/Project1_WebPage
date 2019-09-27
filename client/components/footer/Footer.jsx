/*
    ./client/components/Footer.jsx
*/
import React from 'react';
import '../../css/Footer';
import '../../css/global';
const logo = require('../../images/logo.png');
const uparrow = require('../../images/icons/up-arrow.png');

export default class Footer extends React.Component {
    render() {
        return (
            <footer className='footer inc_na_footer'>
                <a href='#pagetop' className='footer-pagetop span' rel='scroll'>
                    <i className='icon icon-arrow_down'>
                        <img src={uparrow} alt='uparrow'/>
                    </i>
                    <span >PAGE TOP</span>
                </a>
                <div className='footer-content opacity'>
                    <a href="#" className='footer-logo'>
                        <img src={logo} alt="logo" className='width-u-100 ibanez-logo'/>
                    </a>
                    <div className='mt30'>
                        <a className='link-opacity' href="#">CHANGE YOUR REGION</a>
                    </div>
                    <ul className='footer-links'>
                        <li className='footer-links-in'>
                            <a  href="#" className='footer-links-a link-opacity'>
                                CONTACT
                            </a>
                        </li>
                        <li className='footer-links-in'>
                            <a  href="#" className='footer-links-a link-opacity'>
                                TERMS
                            </a>
                        </li>
                        <li className='footer-links-in'>
                            <a  href="#" className='footer-links-a link-opacity'>
                                PROP65
                            </a>
                        </li>
                        <li className='footer-links-in'>
                            <a  href="#" className='footer-links-a link-opacity'>
                                SITEMAP
                            </a>
                        </li>
                    </ul>
                    <p className='footer-copy'>
                        Copyright © 2019 Ibanez guitars. All right reserved. 
                        Products and specifications are subject to change without notice
                    </p>
                </div>
            </footer>
        );
    }
}