/*
    ./client/components/Main.jsx
*/
import React from 'react';
import '../../css/Sections/LatestNewsSection';
import '../../css/Sections/SlideIntroSection';
import '../../css/global';
const NewArrival = require('../../images/LatestNews/newArrival.jpg');
const dumbPick = require('../../images/LatestNews/jtcpick_thumb.jpg');
const PaulG = require('../../images/LatestNews/PaulGilbert.jpg');
const AndyT = require('../../images/LatestNews/AndyTimmons.jpg');
const ImgBottom = require('../../images/LatestNews/news_bg.jpg');
const ImgBottomsp = require('../../images/LatestNews/news_bg_sp.jpg');

export default class LatestNewsSection extends React.Component {
    render() {
        return (
            <section ref={section2 => this.section2 = section2} className='mod-bgBlock color-black'>
                <div className='mod-auto mod-bgBlock-content'>
                    <h2 className='mod-head color_white'>LATEST NEWS</h2>
                    <div className='mod-spacer'>
                        <ul className='list-news'>

                            <li className='list-item'>
                                <a className='list-item-af' href="#" tabIndex='0'>
                                    <img className='lessOpacity' src={NewArrival} alt="NewArrival"/>
                                    <p className='p20 color_gray3 td_under'>Monthly New Arrival</p>
                                </a>
                            </li>
                            <li className='list-item'>
                                <a className='list-item-a' href="#" tabIndex='0'>
                                    <img className='lessOpacity' src={dumbPick} alt="dumbpick"/>
                                    <p className='p20 color_gray3 td_under '>Ibanez and JTC Guitar Collaborate ON ``THE PLAYERS PICK`` </p>
                                </a>
                            </li>
                            <li className='list-item'>
                                <a className='list-item-a' href="#" tabIndex='0'>
                                    <img className='lessOpacity' src={PaulG} alt="paulgilbert"/>
                                    <p className='p20 color_gray3 td_under '>Paul Gilbert and Ibanez 30th Anniversary</p>
                                </a>
                            </li>
                            <li className='list-item'>
                                <a className='list-item-a' href="#" tabIndex='0'>
                                    <img className='lessOpacity' src={AndyT} alt="andytimmons"/>
                                    <p className='p20 color_gray3 td_under '>Andy Timmons and Ibanez 30th Anniversary</p>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='mod-auto mod-auto-more mod-more mod-spacer'>
                    <a className='mod-a' href="#">
                        <p className='mod-more-text'>VIEW ALL</p>
                    </a>
                </div>
                <div className='mod-bgBlock-bgBottom'>
                    <img className='width-u-100' src={ImgBottom} alt="bottomnews" data-view='pc tablet'/>
                    <img className='width-u-100' src={ImgBottomsp} alt="bottomnews2" data-view='sp'/>
                </div>
            </section>

        );
    
    }
}