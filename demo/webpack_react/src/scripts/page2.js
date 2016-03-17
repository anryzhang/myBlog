/**
 * Created by ziyu on 16/3/14.
 */
//var React = require('react');
//var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom'

import $ from 'jquery';
console.log($);

$('body').css('background','#e9e9e9');


console.log('page2.js');
import MyForm from './components/FormTest.jsx';


const myForm = <MyForm />;
ReactDOM.render(myForm,document.getElementById('J_myForm'));