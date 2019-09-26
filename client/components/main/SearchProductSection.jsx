/*
    ./client/components/SearchProductSection.jsx
*/
import React from 'react';
import '../../css/Sections/ProductsSection';
import '../../css/global';
const search = require('../../images/icons/search-black2.png');

export default class SearchProductSection extends React.Component {
    render() {
        return (
            <section className='mod-block mod-send' data-view='pc tablet'>
                <div className='mod-auto'>
                    <ul className='mod-send-ul'>
                        <li className='mod-send-li mod-send-icon'>
                            <i className='icon icon-zoom'></i>
                        </li>
                        <li className='mod-send-li mod-send-text'>
                            <img className='search-black' src={search} alt="searchBlack"/> SEARCH <span className='fw_bold'>  ELECTRIC GUITARS</span>
                        </li>
                        <li className='mod-send-li mod-send-input' >
                            <input className='input_' type="text" placeholder='ENTER MODEL NUMBER'/>
                        </li>
                        <li className='mod-send-li mod-send-btn' >
                            <a className='mod-send-btn-in' href="#">
                                <span>SEARCH</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}