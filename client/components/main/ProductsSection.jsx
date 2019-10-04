/*
    ./client/components/ProductsSection.jsx
*/
import React from 'react';

import '../../css/Sections/ProductsSection';
import '../../css/global';

import SearchProductsSection from './SearchProductSection'; 

export default class ProductsSection extends React.Component {

    render() {

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
                            <ul></ul>
                        </div>
                    </div>
                </section>
                <SearchProductsSection/>
            </div>
        );
    }
}