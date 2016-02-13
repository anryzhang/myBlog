'use strict';

/**
 * Created by ziyu on 2016/2/12.
 */

var items = [{
    id: 100,
    name: '草莓'
}, {
    id: 101,
    name: '柚子'
}, {
    id: 1002,
    name: '李子'
}];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        var message = 'ID:' + item.id + ' name:' + item.name;
        console.log(message);
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

console.log('list total:' + items.length);