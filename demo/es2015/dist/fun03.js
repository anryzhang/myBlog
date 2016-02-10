'use strict';

/**
 * Created by anry on 2016/2/9.
 */
var handler = {
    id: '123',
    init: function init() {
        var _this = this;

        document.addEventListener('click', function (event) {
            return _this.doSomething(event.type);
        }, false);
    },
    doSomething: function doSomething(type) {
        var self = this;
        console.log(this);
        console.log('handler' + type + 'for' + this.id);
    }
};

var s = new Set();
[1, 2,, 3, 4, 5].map(function (x) {
    return s.add(x);
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        console.log(i);
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