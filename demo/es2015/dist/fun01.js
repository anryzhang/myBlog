"use strict";

/**
 * Created by anry on 2016/2/9.
 */

function add() {
    var sum = 0;

    for (var _len = arguments.length, value = Array(_len), _key = 0; _key < _len; _key++) {
        value[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            sum += val;
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

    return sum;
}

var a = add(2, 3, 5);
console.log(a);

function push(array) {
    for (var _len2 = arguments.length, items = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        items[_key2 - 1] = arguments[_key2];
    }

    items.forEach(function (item) {
        array.push(item);
        console.log(item);
    });
}
var b = [];
push(b, 1, 2, 3);
console.log(b);