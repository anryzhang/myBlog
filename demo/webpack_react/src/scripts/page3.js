/**
 * Created by ziyu on 16/3/16.
 */
import React from 'react';
import ReactDOM from 'react-dom'

import Page3 from './components/Page3.jsx';

const page3 = <Page3
    name="tt"
    age="28"
    headerName="特卖专场"
/>;

ReactDOM.render(page3, document.getElementById('J_app'));


const page3_2 = <Page3
    name="tt22"
    age="283"
    headerName="特卖专场2"

/>;

ReactDOM.render(page3_2, document.getElementById('J_app2'));

import MyMixin from './components/MyMixin';

const myMixin = <MyMixin />;
ReactDOM.render(myMixin,document.getElementById('J_app3'));
