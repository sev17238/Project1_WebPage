/*
    ./client/components/Main.jsx
*/
import React from 'react';
import '../../css/Footer';
import SlideIntroSection from './SlideIntroSection';
import LittleImagesSection from './LittleImagesSection';
import LatestNewsSection from './LatestNewsSection'; 
import ProductsSection from './ProductsSection'; 
import FeatureProductsSection from './FeatureProductsSection'; 

export default class Main extends React.Component {
    render() {
        return (
            <main style={{zoom: 1}}>
                <SlideIntroSection/>
                <LittleImagesSection/>
                <LatestNewsSection/>
                <ProductsSection/>
                <FeatureProductsSection/>
            </main>
        );
    }
}