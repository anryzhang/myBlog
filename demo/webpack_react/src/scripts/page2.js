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

import ChildrenModule from './components/ChildrenModule.jsx';


//const childEle = document.createElement('div');
//childEle.id = 'J_childEle';
//childEle.innerHTML = 'child ele';
//document.body.appendChild(childEle);
let childEle;
for(let i = 0; i<3; i++){
    childEle = document.createElement('div');
    childEle.id = 'J_childEle' + i;
    childEle.className = 'form-test';
    document.body.appendChild(childEle);
    const childrenModule = <ChildrenModule txt='txt word'>
        <p>test + {i}</p>
    </ChildrenModule>;
    ReactDOM.render(childrenModule,childEle);
}



