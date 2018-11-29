import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header';

import './variables.scss';

const Wrapper = (
    <>
        <Header />
    </>
);

ReactDom.render(Wrapper, document.getElementById('app'));