/**
 * Created by ziyu on 16/3/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import MyAjax from './components/MyAjax.jsx';

var myAjax = <MyAjax url='https://api.github.com/users/octocat/gists' />;


ReactDOM.render(myAjax,document.getElementById('J_app'));

