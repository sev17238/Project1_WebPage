/*
    ./client/components/Main.jsx
*/
import React from 'react';
import '../../css/Sections/SocialNetSection';
import '../../css/global';

const instagramlogo = require('../../images/SocialNetSection/instagram_bg.png');
const facebooklogo = require('../../images/SocialNetSection/facebook_bg.png');

const doubleBass = require('../../images/SocialNetSection/doubleBass.jpg');
const blueOrangeG = require('../../images/SocialNetSection/BlueOrangeGuitars.jpg');
const blueRedG = require('../../images/SocialNetSection/BlueRedGuitars.jpg');
const lblueGuitar = require('../../images/SocialNetSection/lightBlueGuitar.jpg');
const blackPurpleG = require('../../images/SocialNetSection/blackPurpleGuitars.jpg');
const bassFlame = require('../../images/SocialNetSection/bassFlame.jpg');

const ibanezLlogo = require('../../images/SocialNetSection/ibanezLittleLogoSquare.png');
const pinkguitar = require('../../images/SocialNetSection/pinkGuitar.jpg');
const browncoustic = require('../../images/SocialNetSection/brownAcoustic.jpg');
const screamerP = require('../../images/SocialNetSection/ScreamerPedal.jpg');
const gbGuitars = require('../../images/SocialNetSection/greenBlueGuitars.jpg');
const facelLogo = require('../../images/icons/facebook-icon16.png');

const like = require('../../images/icons/like.png');
const shareA = require('../../images/icons/share-arrow.png');
const chat = require('../../images/icons/chat.png');




export default class SocialNetSection extends React.Component {
    render() {
        return (
            <section className='mod-block'>
                <ul className='pure-gg'>
                    <li className='instagram-item'>
                        <div className='social-in'>
                            <img src={instagramlogo} className="width-50 width-md-60 social-bg"/>
                            <div className='social-content social-content-left'>
                                <h2 className="mod-head02">
                                    <span className="mod-head02-min">Ibanez</span>
                                    INSTAGRAM
                                </h2>
                                <div className='grid-container'>
                                    <div className='imgContainer' >
                                        <img src={doubleBass} />
                                    </div>
                                    <div className='imgContainer'>
                                        <img src={blueOrangeG} />
                                    </div>
                                    <div className='imgContainer'>
                                        <img src={bassFlame} />
                                    </div>
                                    <div className='imgContainer'>
                                        <img src={blackPurpleG} />
                                    </div>
                                    <div className='imgContainer'>
                                        <img src={blueRedG}/>
                                    </div>
                                    <div className='imgContainer'>
                                        <img src={lblueGuitar} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mod-autoo mod-auto-moree mod-moree mod-spacerr">
                            <a href="//www.instagram.com/officialibanezguitars/" className="mod-aaa">
                                <p className="mod-more-text">VISIT OFFICIAL INSTAGRAM</p>
                            </a>
                        </div>
                    </li>
                    <li className='facebook-item'>
                        <div className='social-in'>
                            <img src={facebooklogo} className="width-50 width-md-60 social-bg"/>
                            <div className='social-content social-content-right'>
                                <h2 className="mod-head02">
                                    <span className="mod-head02-min">Ibanez</span>
                                    FACEBOOK
                                </h2>
                                <div className='idx-facebook mod-spacerr'>
                                    <div className='fb-page fb_iframe_widget'>
                                        <div className='uiScaledImageContainer'>
                                            <img className='scaledImageFitWidth' src={gbGuitars}/>
                                        </div>
                                        <div className='topContent'>
                                            <a className='topContent-in-logo' href='https://www.facebook.com/ibanezguitars/'>
                                                <img className='logoIbanez' src={ibanezLlogo}/>
                                            </a>
                                            <div className='lfloat'>
                                                <div>
                                                    <a className='top-content-in-title' title="Ibanez Guitars" href="https://www.facebook.com/ibanezguitars/">
                                                        Ibanez Guitars
                                                    </a>
                                                </div>
                                                <div className='top-content-in-square'>
                                                    <a role="button" className="square" title="" href="https://www.facebook.com/ibanezguitars/">
                                                        <i className="square-in">
                                                            <img src={facelLogo} alt='facelLogo'/>
                                                        </i>
                                                        このページに「いいね！」
                                                    </a>
                                                    <div>
                                                        <p className='white-text'>109万 「いいね！」の数</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='container-scrolling-content'>
                                        <div className='scrolling-content'>
                                            <div className='img-container_'>
                                                <img src={pinkguitar} alt="pinkGuitar" className='width-u-100 pointer'/>
                                                <div className='img-comments'>
                                                    <img className='logo-ibanezL' src={ibanezLlogo} alt='ibanezlLogo2'/>
                                                    <a className='comment-in-title' title="Ibanez Guitars">
                                                        Ibanez Guitars 
                                                    </a>
                                                    <a className='comment-in-title2' title="Ibanez Guitars">
                                                        3時間前
                                                    </a>
                                                    <i className="square-in-facelogo">
                                                        <img src={facelLogo} alt='facelLogo'/>
                                                    </i>
                                                    <p>
                                                        The AZ2402 Prestige is equipped with an S-TECH WOOD Roasted Maple neck, a Gotoh® T1802 trem, dyna-MIX10 switching system w/Alter Switch, Gotoh® MAGNUM LOCK machine heads w/H.A.P. and Seymour Duncan® Hyperion™ pickups. Anything we forgot? Oh right, a new Pink finish! 
                                                        <a className='a-comment-img' href="https://bit.ly/2O0ZRyH">https://bit.ly/2O0ZRyH</a> 
                                                    </p>
                                                    <div className='like-comment-share'>
                                                        <div className='like-comment-share-divs'>
                                                            <img src={like} alt="like"/>
                                                            <p>360</p>
                                                        </div>
                                                        <div className='like-comment-share-divs'>
                                                            <img src={chat} alt="chat"/>
                                                            <p>19</p>
                                                        </div>
                                                        <div className='like-comment-share-divs'>
                                                            <img src={shareA} alt="sharearrow"/>
                                                            <p>15</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='img-container_'>
                                                <img src={screamerP} alt="pedal" className='width-u-100 pointer'/>
                                                <div className='img-comments'>
                                                    <img className='logo-ibanezL' src={ibanezLlogo} alt='ibanezlLogo2'/>
                                                    <a className='comment-in-title' title="Ibanez Guitars">
                                                        Ibanez Guitars 
                                                    </a>
                                                    <a className='comment-in-title2' title="Ibanez Guitars">
                                                        金曜日
                                                    </a>
                                                    <i className="square-in-facelogo">
                                                        <img src={facelLogo} alt='facelLogo'/>
                                                    </i>
                                                    <p>
                                                        TSV808 <br/>
                                                        TS808 and Jan Ray Hybrid Tubescreamer <br/>
                                                        Demo by Lee Wrathe <br/>
                                                        <a className='a-comment-img' href="https://www.youtube.com/watch?v=iZUt1ZXvY2I">https://www.youtube.com/watch?v=iZUt1ZXvY2I</a> 
                                                    </p>
                                                    <div className='like-comment-share'>
                                                        <div className='like-comment-share-divs'>
                                                            <img src={like} alt="like"/>
                                                            <p>221</p>
                                                        </div>
                                                        <div className='like-comment-share-divs'>
                                                            <img src={chat} alt="chat"/>
                                                            <p>1</p>
                                                        </div>
                                                        <div className='like-comment-share-divs'>
                                                            <img src={shareA} alt="sharearrow"/>
                                                            <p>15</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='img-container_'>
                                                <img src={browncoustic} alt="browna" className='width-u-100 pointer'/>
                                                <div className='img-comments'>
                                                    <img className='logo-ibanezL' src={ibanezLlogo} alt='ibanezlLogo2'/>
                                                    <a className='comment-in-title' title="Ibanez Guitars">
                                                        Ibanez Guitars 
                                                    </a>
                                                    <a className='comment-in-title2' title="Ibanez Guitars">
                                                        水曜日
                                                    </a>
                                                    <i className="square-in-facelogo">
                                                        <img src={facelLogo} alt='facelLogo'/>
                                                    </i>
                                                    <p>
                                                        Beneath the elegant exterior of the AE315FMH’s solid flamed Okoume body and specially designed Wooden Vine inlay, sits a powerful onboard active preamp, an Ibanez T-bar under-saddle pickup and a handy mute switch. 
                                                        <a className='a-comment-img' href="https://bit.ly/2KdDWQO">https://bit.ly/2KdDWQO</a> 
                                                    </p>
                                                    <div className='like-comment-share'>
                                                        <div className='like-comment-share-divs'>
                                                            <img src={like} alt="like"/>
                                                            <p>581</p>
                                                        </div>
                                                        <div className='like-comment-share-divs'>
                                                            <img src={chat} alt="chat"/>
                                                            <p>8</p>
                                                        </div>
                                                        <div className='like-comment-share-divs'>
                                                            <img src={shareA} alt="sharearrow"/>
                                                            <p>19</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mod-autoo mod-auto-moree mod-moree mod-spacerr">
                            <a href="//facebook.com/ibanezguitars" className="mod-aaa">
                                <p className="mod-more-text">VISIT OFFICIAL FACEBOOK</p>
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

/*
<div className='pure-gg mod-spacerr'>
                                    <div className='guitarImages'>
                                        <a href="https://www.instagram.com/p/B263U2ZgoHo/" className="social-insta-a">
                                            <img src={doubleBass} className="width-u-100"/>
                                        </a>
                                    </div>
                                    <div className="guitarImages">
                                        <a href="https://www.instagram.com/p/B24PDm6Acxb/" className="social-insta-a">
                                            <img src={blueOrangeG} className="width-u-100"/>
                                        </a>
                                    </div>
                                    <div className='guitarImages'>
                                        <a href="https://www.instagram.com/p/B2zI5Y5gODl/" className="social-insta-a">
                                            <img src={bassFlame} className="width-u-100"/>
                                        </a>
                                    </div>
                                    <div className='guitarImages'>
                                        <a href="https://www.instagram.com/p/B2ragtUAeBj/" className="social-insta-a">
                                            <img src={blackPurpleG} className="width-u-100"/>
                                        </a>
                                    </div>
                                    <div className='guitarImages'>
                                        <a href="https://www.instagram.com/p/B2oySMmAODU/" className="social-insta-a">
                                            <img src={blueRedG} className="width-u-100"/>
                                        </a>
                                    </div>
                                    <div className='guitarImages'>
                                        <a href="https://www.instagram.com/p/B2hJC-iA8PF/" className="social-insta-a">
                                            <img src={lblueGuitar} className="width-u-100"/>
                                        </a>
                                    </div>
                                </div>
*/