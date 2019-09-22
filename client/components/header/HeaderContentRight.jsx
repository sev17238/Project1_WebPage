/*
    ./client/components/HeaderContentRight.jsx
*/
import React from 'react';
import '../../css/Header';
const faceicon = require('../../images/icons/facebook-icon.png');
const twittericon = require('../../images/icons/twitter-icon.png');
const instagramicon = require('../../images/icons/instagram-icon.png');
const youtubeicon = require('../../images/icons/youtube-icon.png');

export default class HeaderContentRight extends React.Component {
    render() {
        return (
            <div className='pos_relative'>
                <p className='header-content-right-sp'>
                    <i className='icon icon-share'>

                    </i>
                    <span className='header-content-right-sp-text'>SHARE</span>
                </p>
                <div className='header-content-right-wrap'>
                    <p className='header-content-right-in header-content-right-in-text'>FOLLOW US :</p>
                    <a href="https://facebook.com/ibanezguitars" target='blank' className='header-content-right-in header-content-right-in-icon'>
                        <i className='icon icon-facebook'>
                            <img src={faceicon} alt='faceicon'/>
                        </i>
                    </a>
                    <a href="https://twitter.com/ibanezofficial" target='blank' className='header-content-right-in header-content-right-in-icon'>
                        <i className='icon icon-twitter'>
                            <img src={twittericon} alt='twittericon'/>
                        </i>
                    </a>
                    <a href="https://www.instagram.com/officialibanezguitars/" target='blank' className='header-content-right-in header-content-right-in-icon'>
                        <i className='icon icon-instagram'>
                            <img src={instagramicon} alt='instagramicon'/>
                        </i>
                    </a>
                    <a href="https://www.youtube.com/user/IbanezOfficial" target='blank' className='header-content-right-in header-content-right-in-icon'>
                        <i className='icon icon-youtube'>
                            <img src={youtubeicon} alt='youtubeicon'/>
                        </i>
                    </a>
                </div>
            </div>
        );
    }
}