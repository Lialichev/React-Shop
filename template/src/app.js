import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

import './normalize.scss';

const Wrapper = (
    <>
        <Header/>
        <Main/>
        <Footer/>
    </>
);

ReactDom.render(Wrapper, document.getElementById('app'));