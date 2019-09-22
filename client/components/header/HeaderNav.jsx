/*
    ./client/components/HeaderNav.jsx
*/
import React from 'react';
import '../../css/HeaderNav';

export default class HeaderNav extends React.Component {
    render() {
        return (            
            <ul className='header-nav opacity is-active'>
                <li className='header-nav-in'>
                    <a href="#">ELECTRIC GUITARS</a>
                </li>
                <li className='header-nav-in'>
                    <a href="#">BASSES</a>
                </li>
                <li className='header-nav-in'>
                    <a href="#">HOLLOW BODIES</a>
                </li>
                <li className='header-nav-in'>
                    <a href="#">ACOUSTICS</a>
                </li>
                <li className='header-nav-in'>
                    <a href="#">ELECTRONICS</a>
                </li>
                <li className='header-nav-in'>
                    <a href="#">ACCESSORIES</a>
                </li>
            </ul>            
        );
    }
}