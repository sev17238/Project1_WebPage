/*
    ./client/components/ProductsSection.jsx
*/
import React from 'react';

import '../../css/Sections/ProductsSection';
import '../../css/global';

import SearchProductsSection from './SearchProductSection'; 

//For carousel
import Slider from 'react-slick';
/*import "slick-carousel/slick/slick";
import "slick-carousel/slick/slick-theme";
import '../../css/slick_/slick'
import '../../css/slick_/slick-theme'*/

const orangeBlackG = require('../../images/ProductsSection/orangeBlackGuitar.png');
const blueDirtyG = require('../../images/ProductsSection/blueDirtyGuitar.png');
const grayG = require('../../images/ProductsSection/grayGuitar.png');
const beigeAquaG = require('../../images/ProductsSection/beigeAquaGuitar.png');
const maroonG = require('../../images/ProductsSection/maroonGuitar.png');
const blueGreenG = require('../../images/ProductsSection/blueGreenGuitar.png');
const grayG2 = require('../../images/ProductsSection/grayGuitar2.png');
const orangeBlackG2 = require('../../images/ProductsSection/orangeBlackGuitar2.png');
const orangeRedG = require('../../images/ProductsSection/orangeRedGuitar.png');
const blackG = require('../../images/ProductsSection/blackGuitar.png');

export default class ProductsSection extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };

        return (
            <div>
                <section className='mod-block idx-product'>
                    <div className='mod-auto'>
                        <h2 className='mod-head idx-product-head'>
                            <span>PRODUCTS</span>
                        </h2>
                        <div className='idx-product-tabs-wrap'>
                            <div className='idx-product-tabs'>
                                <div className='idx-product-tabs-item'>
                                    <span>ELECTRIC GUITARS</span>
                                </div>
                            </div>
                            <div className='idx-product-tabs'>
                                <div className='idx-product-tabs-item'>
                                    <span>BASSES</span>
                                </div>
                            </div>
                            <div className='idx-product-tabs'>
                                <div className='idx-product-tabs-item'>
                                    <span>HOLLOW BODIES</span>
                                </div>
                            </div>
                            <div className='idx-product-tabs'>
                                <div className='idx-product-tabs-item'>
                                    <span>ACOUSTICS</span>
                                </div>
                            </div>
                            <div className='idx-product-tabs'>
                                <div className='idx-product-tabs-item'>
                                    <span>ELECTRONICS</span>
                                </div>
                            </div>
                            <div className='idx-product-tabs'>
                                <div className='idx-product-tabs-item'>
                                    <span>ACCESSORIES</span>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div className='scroll-item'>
                                        <div className='scroll-item-image'>
                                            <img src={orangeBlackG} alt='obg'/>
                                            <h3>AZ</h3>
                                        </div>
                                    </div>
                                    <div className='scroll-item'>
                                        <div className='scroll-item-image'>
                                            <img src={blueDirtyG} alt='bdg'/>
                                            <h3>RG</h3>
                                        </div>
                                    </div>
                                    <div className='scroll-item'>
                                        <div className='scroll-item-image'>
                                            <img src={grayG} alt='gg'/>
                                            <h3>RGA</h3>
                                        </div>
                                    </div>
                                    <div className='scroll-item'>
                                        <div className='scroll-item-image'>
                                            <img src={beigeAquaG} alt='bag'/>
                                            <h3>RGD</h3>
                                        </div>
                                    </div>
                                    <div className='scroll-item'>
                                        <div className='scroll-item-image'>
                                            <img src={maroonG} alt='mg'/>
                                            <h3>S</h3>
                                        </div>
                                    </div>
                                    <div className='scroll-item'>
                                        <div className='scroll-item-image'>
                                            <img src={blueGreenG} alt='bgg'/>
                                            <h3>SA</h3>
                                        </div>
                                    </div>
                                    <div className='scroll-item'>
                                        <div className='scroll-item-image'>
                                            <img src={grayG2} alt='gg2'/>
                                            <h3>FR</h3>
                                        </div>
                                    </div>
                                    <div className='scroll-item'>
                                        <div className='scroll-item-image'>
                                            <img src={orangeBlackG2} alt='obg2'/>
                                            <h3>AR</h3>
                                        </div>
                                    </div>
                                    <div className='scroll-item'>
                                        <div className='scroll-item-image'>
                                            <img src={orangeRedG} alt='org'/>
                                            <h3>ART</h3>
                                        </div>
                                    </div>
                                    <div className='scroll-item'>
                                        <div className='scroll-item-image'>
                                            <img src={blackG} alt='bg2'/>
                                            <h3>miKro</h3>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
                <SearchProductsSection/>
            </div>
        );
    }
}