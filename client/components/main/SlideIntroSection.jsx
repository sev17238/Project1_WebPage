/*
    ./client/components/IntroSection.jsx
*/
import React from 'react';
import '../../css/Sections/SlideIntroSection';
import '../../css/global';
const SR500 = require('../../images/SlideSection/top_SR500E.jpg');
const SR500_ = require('../../images/SlideSection/top_SR500E_sp.jpg');
/*const RGD71ALMS = require('../../images/SlideSection/top_RGD71ALMS.jpg');
const AE315 = require('../../images/SlideSection/top_AE315.jpg');
const RG5120M = require('../../images/SlideSection/tpo_RG5120M.jpg');*/

export default class SlideIntroSection extends React.Component {
    render() {
        return (
            <section className='mod-block idx-main'>
                <div id='main-slide' className='slick-initialized slick-slider'>
                    <div className='slick-list draggable'>
                        <div className='slick-track' >
                            
                            <div className='pos_relative slick-slide' >
                                <h1 className='idx-main-title'>
                                    <span className='idx-main-title-top'></span>
                                    <span className='idx-main-title-middle'>
                                        New SR500 Series With The Strongest Upgrade
                                    </span>
                                    <span className='idx-main-title-botton'></span>
                                </h1>
                                <div className='idx-main-item'>
                                    <a href="#">
                                        <span data-view='pc tablet'>
                                            <img src={SR500} alt="sr500" className='width-u-100'/>
                                        </span>
                                        <span data-view='sp'>
                                            <img src={SR500_} alt="sr500_" className='width-u-100'/>
                                        </span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}