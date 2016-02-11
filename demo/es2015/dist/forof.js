"use strict";

/**
 * Created by ziyu on 2016/2/11.
 */
var myArray = [1, 2, 3, 4, 5];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = myArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        console.log(value);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        // 转义占位符中的特殊字符。
        s += arg.replace(/&/g, "&").replace(/</g, "<").replace(/</g, ">");

        // 不转义模板中的特殊字符。
        s += templateData[i];
    }
    return s;
}

var a = SaferHTML('<a>测试</a>');
console.log(a);