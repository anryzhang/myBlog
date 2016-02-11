'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by anry on 2016/2/9.
 */
var ps = document.querySelectorAll('li');

Array.from(ps).forEach(function (p, i) {
    var s = p.innerHTML;
    //console.log(i);
    //console.log(p);
    //console.log(s);
});

//find 用于找到第一个符合条件的数组元素，
//所有数组元素依次遍历该回调函数 ，
//直接到找到第一个返回值 为True的元素，然后返回该元素。否则返回undefined
//与findIndex相似
var a = [2, 5, 10, 15];
var b = a.find(function (value, index, arr) {
    console.log(value, index, arr);
    return value > 5;
});
console.log(b);

//fill , 使用给定的值填充一个数组
var c = ['a', 'b', 'c'].fill(7);
console.log(c);
var d = c.fill('a', 1, 2);
console.log(d);

//数组的实例方法 entries(),keys(),valuesOf()
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = ['a', 'b'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var index = _step.value;

        console.log(index);
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

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = ['a', 'b'].entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _step2$value = _slicedToArray(_step2.value, 2);

        var index = _step2$value[0];
        var elem = _step2$value[1];

        console.log(index, elem);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = ['a', 'b'].valueOf()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var ele = _step3.value;

        console.log(ele);
    }

    //数组推导
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var a1 = [1, 2, 3, 4, 5];
var a2 = a1.map(function (i) {
    console.log(i);
    return i * i;
});
console.log(a2);

var a3 = a1.filter(function (i) {
    return i < 3;
});
console.log(a3);