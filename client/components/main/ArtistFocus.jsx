/*
    ./client/components/ArtistFocus.jsx
*/
import React from 'react';
import '../../css/Sections/VideoSection';
import '../../css/global';

const fAndreoli = require('../../images/ArtistFocusSection/AF_FelipeAndreoli.jpg');
const fAndreolisp = require('../../images/ArtistFocusSection/AF_FelipeAndreoli_sp.jpg');


export default class ArtistFocus extends React.Component {
    render() {
        return (
            <section className='mod-block '>
                <div className='youtube-video-div1'>
                    <div className='youtube-video-div2' data-view='pc'>
                        <div className='youtube-video-div3'>
                            <img src={fAndreoli} className="width-u-100 artistimg" data-view="pc tablet"/>
                            <img src={fAndreolisp} className="width-u-100 artistimg" data-view="sp"/>
                            
                            <h3 className="heading-h3" >
                                <span className="heading-big">ARTIST FOCUS</span>
                                <span className="videocontentA">
                                    Felipe Andreoli (Angra)
                                    <span className="thingybelow"></span>
                                </span>
                            </h3>
                            <div className="mod-aut mod-auto-mor mod-mor mod-more-absolut">
                                <a href="#" className="anchor">
                                    <p className="viewtext">VIEW MORE ARTISTS</p>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

