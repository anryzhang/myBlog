/**
 * Created by ziyu on 2017/9/7.
 */
"use strict";
require('./../css/common.scss');

let $ = require('jquery');

// console.log($);

const myAdmin = {
    value: 212,
   test() {
       console.log(this.value);
   }
}



$(function () {
    $('body').css('color','green');
    $(document).on('click',(e)=>{
        console.log(e.currentTarget);
    });
    myAdmin.test();
});

