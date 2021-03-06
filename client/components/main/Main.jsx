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
import VideoSection from './VideoSection';
import ArtistFocus from './ArtistFocus';
import SupportSection from './SupportSection';
import SocialNetSection from './SocialNetSection';

export default class Main extends React.Component {
    render() {
        return (
            <main style={{zoom: 1}}>
                <SlideIntroSection/>
                <LittleImagesSection/>
                <LatestNewsSection/>
                <ProductsSection/>
                <FeatureProductsSection/>
                <VideoSection/>
                <ArtistFocus/>
                <SupportSection/>
                <SocialNetSection/>
            </main>
        );
    }
}