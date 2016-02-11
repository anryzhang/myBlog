'use strict';

/**
 * Created by anry on 2016/2/9.
 */

var f = function f(v) {
    return v;
};
var d = function d() {
    return 5;
};

var sum = function sum(n1, n2) {
    return n1 + n2;
};

var getTempItem = function getTempItem(id, name) {
    return {
        id: id,
        name: 'temp'
    };
};
var getValue = function getValue(n1, n2, n3) {
    if (n1 > 1) {
        return n1 + n2;
    } else if (n1 > 5) {
        return n1 + n3;
    } else {
        return n3;
    }
};

var n = getValue(0, 3, 5);
console.log(n);

var arr = [1, 2, 3].map(function (x) {
    return x * x;
});
console.log(arr);