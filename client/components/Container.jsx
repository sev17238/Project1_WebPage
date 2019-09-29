/*
    ./client/components/Container.jsx
*/
import React from 'react';
import '../css/Container';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';


export default class Container extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
            isTop: true
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    getOffset(element){
        var bounding = element.getBoundingClientRect();
        return {
            top: bounding.top + document.body,
            left: bounding.left + document.body.scrollLeft
        };
    }

    handleScroll(){
        //header = React.ReactDOM.findDOMNode(this.refs.headerContent);
        //headernav = React.ReactDOM.findDOMNode(this.refs.headernav);
        //startElement = React.ReactDOM.findDOMNode(this.refs.section2);
        let header = this.headercontent;
        let headernav = this.headernav;
        let startElement = this.section2;
        let offset = this.getOffset(startElement);
        let windowsScrollTop = window.pageYOffset;
        if(windowsScrollTop >= offset.top){
            header.classList.remove('bgColor');
            headernav.classList.remove('is-active');
            this.setState({isTop:false});
        }else{
            header.classList.add('bgColor');
            headernav.classList.add('is-active');
            this.setState({isTop})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
*/
    render() { /*<h2>Scroll {this.state.isTop ? 'down' : 'up'}!</h2> */
        return (
            <div id='pagetop' className='container idx'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

/*
export default class Container extends React.Component {
    render() {
        return (
            <div id='pagetop' className='container idx'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}*/