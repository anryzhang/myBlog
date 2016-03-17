import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';


import JindexComponent from './pages/JindexComponent.jsx';
ReactDOM.render(<JindexComponent />, document.getElementById('J_app'));

import ComponentXieTong from './components/ComponentXieTong.jsx';
let test = {
    one:456,
    two:989
};

const componentXieTong = <ComponentXieTong {...test} />;
let comed = ReactDOM.render(componentXieTong,document.getElementById('J_componentXieTong'));
//comed.setProps({two:777})

//console.log($('body'));

import TestMount from './components/TestMount.jsx';
const testMount = <TestMount />;
ReactDOM.render(testMount,document.getElementById('J_Mount'));

import TestAjax from './components/TestAjax.jsx';
const testAjax = <TestAjax
       url={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')}
    />;
ReactDOM.render(testAjax,document.getElementById('J_ajax'));

import WebSite from './pages/WebSite.js';

ReactDOM.render(<WebSite name="ziyu test" site="www.baidu.com"/>, document.getElementById('J_app3'));




import IndexModule2 from './pages/home2.jsx';

ReactDOM.render(<IndexModule2 name="ziyu"></IndexModule2>, document.getElementById('J_app2'));
