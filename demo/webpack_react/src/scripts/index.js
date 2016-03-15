
'use strict';
var $ = require('jquery');


import React from 'react';
import ReactDom from 'react-dom';


//var IndexModule = require('./pages/home.jsx');
import IndexModule from './pages/home.jsx';

console.log($('body'));

import WebSite from './pages/WebSite.js';

ReactDom.render(<WebSite name="ziyu test" site="www.baidu.com" />,document.getElementById('J_app3'));


//ReactDom.render(<IndexModule></IndexModule>,document.getElementById('J_app'));

ReactDom.render(<IndexModule></IndexModule>,document.getElementById('J_app'));

import IndexModule2 from './pages/home2.jsx';

ReactDom.render(<IndexModule2 name="ziyu"></IndexModule2>,document.getElementById('J_app2'));
