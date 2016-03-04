/**
 * Created by ziyu on 16/3/3.
 */

var a = require('./a');
//a.test();

var $ = require('../lib/jquery/dist/jquery');
console.log($);

$(function(){
    $('body').css({'color':'#965'}).find('h1').html(a.test());
    $('body').find('.test').css('background','#ddd');

});