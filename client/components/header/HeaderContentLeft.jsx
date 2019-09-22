/*
    ./client/components/HeaderContentLeft.jsx
*/
import React from 'react';
import '../../css/Header';
const searchicon = require('../../images/icons/search-icon.png');


export default class HeaderContentLeft extends React.Component {
    render() {
        return ( //js-header-menu is used in some classes
            <div>
                <div className='header-content-left-in'> 
                    <div className='header-menu js-header-menu'> 
                        <div className='header-menu-button js-header-menu-btn'>                            
                            <span className='header-menu-button-inner'></span>
                        </div>
                        <span className='header-menu-button-text'>MENU</span>
                    </div> 
                </div> 
                <div className='header-content-left-in'>
                    <div className='header-search'>
                        <i className='icon icon-zoom'>
                            <img src={searchicon} alt='search'/>
                        </i>
                        <span className='header-search-text'>SEARCH</span>
                    </div>
                </div>
            </div>
        );
    }
}