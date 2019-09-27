/*
    ./client/components/MVideoSection.jsx
*/
import React from 'react';
import '../../css/Sections/VideoSection';
import '../../css/global';

const bass = require('../../images/VideoSection/bassVideo.jpg');
const bassT = require('../../images/VideoSection/bassVideoSp.jpg');
const playV = require('../../images/VideoSection/playVideo.png');


export default class VideoSection extends React.Component {
    render() {
        return (
            <section className='mod-block '>
                <div className='youtube-video-div1'>
                    <div className='youtube-video-div2' data-view='pc'>
                        <div className='youtube-video-div3'>
                            <img src={bass} className="width-u-100" data-view="pc tablet"/>
                            <img src={bassT} className="width-u-100" data-view="sp"/>
                            
                            <h3 className="heading-h3" >
                                <span className="heading-big">VIDEOS</span>
                                <span className="videocontent">
                                    Ibanez SR500 Series Electric Bass
                                    <span className="thingybelow"></span>
                                </span>
                            </h3>
                            <div className="mod-aut mod-auto-mor mod-mor mod-more-absolut">
                                <a href="#" className="anchor">
                                    <p className="viewtext">VIEW ALL VIDEOS</p>
                                </a>
                            </div>
                            <a href='https://www.youtube.com/watch?v=FZT-NUPVhdg' className="playButton">
                                <img src={playV} className="width-u-100"/>                                
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

