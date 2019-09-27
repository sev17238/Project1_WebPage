/*
    ./client/components/FeatureProducts.jsx
*/
import React from 'react';
import '../../css/Sections/FeatureProductsSection';
import '../../css/global';

const SR2405W = require('../../images/FeatureSection/fp_SR2405.jpg');
const AZ2402 = require('../../images/FeatureSection/fp_AZ2402.jpg');

/*
<div className="mod-auto mod-auto-more mod-more mod-more-absolute">
                    <a href="#" className="mod-a">
                        <p className="mod-more-text">VIEW MORE FEATURES</p>
                    </a>
                </div>
*/
export default class FeatureProductsSection extends React.Component {
    render() {
        return (
            <section className='mod-block'>
                <h3 className='mod-head-block idx-feature-head'>
                    <span className='mod-head-block-big'>FEATURE PRODUCTS</span>
                </h3>
                <div className = 'relative'>
                    <div className='fl_left width-u-50'>
                        <a className='idx-feature-item idx-feature-item01 mod-block-hidden' href="#">
                            <img className='width-u-100' src={SR2405W} alt="sr2405w"/>
                            <p className='mod-head-block fw_bold'> 
                                <span className='mod-head-block-content'>
                                    <span className='mod-head-block-lighter'>
                                        Designed to Inspire
                                        <br/>
                                        New Premium Bass SR2405W
                                    </span>
                                </span>
                            </p>
                        </a>
                    </div>
                    <div className='fl_left width-u-50 '>
                        <a className='idx-feature-item idx-feature-item01 mod-block-hidden' href="#">
                            <img className='width-u-100' src={AZ2402} alt="sr2405w"/>
                            <p className='mod-head-block fw_bold'> 
                                <span className='mod-head-block-content'>
                                    <span className='mod-head-block-lighter'>
                                        The AZ Series 2019 New Finishes
                                    </span>
                                </span>
                            </p>
                        </a>
                    </div>

                </div>
                <div className='viewMoreFeatures'>
                    <a className='mod-a2' href="#">
                        <p className='mod-more-text'>VIEW MORE FEATURES</p>
                    </a>
                </div>
                <div className='viewMoreFeatures2'>
                    <a className='mod-a2' href="#">
                        <p className='mod-more-text'>VIEW MORE FEATURES</p>
                    </a>
                </div>
                
            </section>
        );
    }
}