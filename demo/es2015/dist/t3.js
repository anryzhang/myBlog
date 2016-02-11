'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by ziyu on 2016/2/5.
 */
var a = 1;
var b = 2;
var c = 3;

var x = 2;
var y = 3;
var _ref = [y, x];
x = _ref[0];
y = _ref[1];

console.log(x, y);

function ex() {
    return [1, 2, 3];
}

var _ex = ex();

var _ex2 = _slicedToArray(_ex, 3);

var d = _ex2[0];
var e = _ex2[1];
var f = _ex2[2];

///

var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

console.log(map);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _step$value = _slicedToArray(_step.value, 2);

        var key = _step$value[0];
        var value = _step$value[1];

        console.log(key + ' is ' + value);
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