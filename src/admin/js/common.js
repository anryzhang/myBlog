/**
 * Created by ziyu on 2017/9/7.
 */
"use strict";
require('./../css/common.scss');

let $ = require('jquery');

// console.log($);

(function ($) {
    $(function () {
        $('body').css('color','green');
        $(document).on('click',(e)=>{
            console.log(e);
        })
    })
})($)