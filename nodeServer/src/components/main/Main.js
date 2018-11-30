import React from 'react';

import Aside from '../aside'
import Content from '../content'

import './main.scss'

const Main = () => (
    <main className="main">
        <Aside/>
        <Content/>
    </main>
);

export default Main;