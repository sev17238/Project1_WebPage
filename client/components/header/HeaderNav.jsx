/*
    ./client/components/HeaderNav.jsx
*/
import React from 'react';
import '../../css/HeaderNav';

export default class HeaderNav extends React.Component {
    render() {
        return (            
            <ul id='headernav' className='header-nav'>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">ELECTRIC GUITARS</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">BASSES</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">HOLLOW BODIES</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">ACOUSTICS</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">ELECTRONICS</a>
                </li>
                <li className='header-nav-in'>
                    <a className='anchorHover' href="#">ACCESSORIES</a>
                </li>
            </ul>            
        );
    }
}