/*
    ./client/components/Main.jsx
*/
import React from 'react';
import '../../css/Sections/SupportSection';
import '../../css/global';

const support = require('../../images/Support/support.jpg');
const book = require('../../images/icons/book64.png');

export default class SupportSection extends React.Component {
    render() {
        return (
            <section className="mod-block color-black">
                <ul className="pure-g">
                    <li className="li_">
                        <div className="mod-linkBox ">
                            <img src={support} className="width-u-100"/>
                            <div className="mod-linkBox-text-wrap">
                                <div className="mod-linkBox-text">
                                    <span className="mod-linkBox-text-title">SUPPORT</span>
                                    <i className="icon icon-help">
                                        <img src={book} alt="book"/>
                                    </i>
                                </div>
                            </div>
                            <div className="mod-linkBox-link">
                                <a href="/na/support/" className="mod-linkBox-link-a"><span>MORE DETAIL</span></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            
        );
    }
}