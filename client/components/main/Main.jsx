/*
    ./client/components/Main.jsx
*/
import React from 'react';
import '../../css/Footer';
import SlideIntroSection from '../../components/main/SlideIntroSection';

export default class Main extends React.Component {
    render() {
        return (
            <main className='clearfix' style={{zoom: 1}}>
                <SlideIntroSection/>
            </main>
        );
    }
}