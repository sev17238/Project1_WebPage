/*
    ./client/components/LittleImagesSection.jsx
*/
import React from 'react';
import '../../css/Sections/SlideIntroSection';
import '../../css/global';
const SR500 = require('../../images/SlideSection/top_SR500E.jpg');
const RGD71ALMS = require('../../images/SlideSection/top_RGD71ALMS.jpg');
const AE315 = require('../../images/SlideSection/top_AE315.jpg');
const RG5120M = require('../../images/SlideSection/tpo_RG5120M.jpg');

//const SR500_ = require('../../images/SlideSection/top_SR500E_sp.jpg');

export default class LittleImagesSection extends React.Component {
    render() {
        return (
            <section className='mod-block'>
                <ul className='idx-main-nav'>
                    <li className='idx-main-nav-item' data-index='1'>
                        <span>
                            <img className='width-u-100' src={SR500} alt="sr500" data-view='pc tablet'/>
                        </span>
                    </li>
                    <li className='idx-main-nav-item' data-index='2'>
                        <span>
                            <img className='width-u-100' src={RG5120M} alt="rg5120m" data-view='pc tablet'/>
                        </span>
                    </li>
                    <li className='idx-main-nav-item' data-index='3'>
                        <span>
                            <img className='width-u-100' src={AE315} alt="ae315" data-view='pc tablet'/>
                        </span>
                    </li>
                    <li className='idx-main-nav-item' data-index='4'>
                        <span>
                            <img className='width-u-100' src={RGD71ALMS} alt="rgd71alms" data-view='pc tablet'/>
                        </span>
                    </li>
                </ul>
            </section>
        );
    }
}