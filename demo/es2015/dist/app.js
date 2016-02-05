'use strict';

/**
 * Created by anry on 2016/2/4.
 */
var a = 1;
var A = 2;
var name = 'javas';
var template = 'my name is ${name}';
console.log(template);

var fn = function fn() {
    console.log('hell ');
};

console.log(a);

var buttons = document.querySelectorAll('button');
var output = document.querySelector('#J_btn');
console.log(buttons);

var _loop = function _loop(i) {
    buttons[i].addEventListener('click', function (e) {
        output.innerHTML = buttons[i].innerHTML;
    });
};

for (var i = 0; i < buttons.length; i++) {
    _loop(i);
}

//function 1
(function (foo) {
    return foo + 'world';
});

//function 2
(function (foo, bar) {
    return foo + bar;
});

//function 3
(function (foo) {});

//function 4
var obj = {
    msg: 'msg',
    ping: function ping() {
        var self = undefined;
        console.log(self.msg);
    }
};