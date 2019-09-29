/*
    ./client/components/HeaderNav.jsx
*/
import React from 'react';
import '../../css/HeaderNav';

export default class HeaderNav extends React.Component {
    render() {
        return (            
            <ul ref={headernav => this.headernav = headernav} className='header-nav opacity is-active'>
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