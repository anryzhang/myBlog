/**
 * Created by Think-ziyu on 2015/8/12.
 */

var n1 = require('./node_01.js');

n1.alertJson();
var num1 = n1.count();
var num2 = n1.count();
console.log(num1,num2,n1.count());

// var argv = require('argv');
// console.log(argv.name);
// console.log(argv.isNumber(num1));
//
// var cheerio = require('cheerio');
// $ = cheerio.load('<h2 class="title">hello world</h2>');
// $('h2.title').text('hello there');
// $('h2').addClass('welcome');
// $.html();
// console.log($.html())