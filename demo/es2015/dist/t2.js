"use strict";

/**
 * Created by ziyu on 2016/2/5.
 */

var a = [];

var _loop = function _loop() {
    var c = i;
    a[i] = function () {
        console.log(c);
    };
};

for (var i = 0; i < 10; i++) {
    _loop();
}

a[6]();

function dom() {
    console.log(foo);
    var foo = 2;
}
dom();

function f1() {
    var n = 5;
    if (true) {
        var _n = 10;
    }
    console.log(n);
}
f1();

{
    var temp = {
        init: function init() {
            var self = this;
            console.log(this);
            console.log(1);
            self.getVal();
        },
        getVal: function getVal() {
            var self = this;
            console.log(2);
        }
    };

    temp.init();
}

var b = 1;