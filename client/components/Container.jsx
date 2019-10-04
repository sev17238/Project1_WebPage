/*
    ./client/components/Container.jsx
*/
import React from 'react';
import '../css/Container';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
    }

    handleScroll(){
        let header = document.getElementById('headercontent'); 
        let headernav = document.getElementById('headernav');
        let windowsScrollTop = window.pageYOffset;
        if(windowsScrollTop <= 600){
            header.classList.remove('bgColor');
            headernav.classList.remove('is-not-active');

            this.setState({isTop:false});
        }else{
            header.classList.add('bgColor');
            headernav.classList.add('is-not-active');
            this.setState({isTop:true});
        }
    }

    render() { /*<h2>Scroll {this.state.isTop ? 'down' : 'up'}!</h2> */
        window.addEventListener('scroll', this.handleScroll);
        return (
            <div id='pagetop' className='container idx'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}