/**
 * Created by ziyu on 16/4/1.
 */
import  React from  'react';
import ReactDOM from  'react-dom';

import localStorage from './js/localstorage';

import Page6 from './components/Page6.jsx';

let J_p6 = document.createElement('div');
J_p6.setAttribute('id','J_p6');
document.body.appendChild(J_p6);

let page6 = <Page6 />;



ReactDOM.render(page6,document.getElementById('J_p6'));

