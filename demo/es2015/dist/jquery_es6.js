'use strict';

/**
 * Created by ziyu on 2016/2/12.
 */

(function ($) {
    var _marked = [hexRange].map(regeneratorRuntime.mark);

    function printInfo() {
        $('#info').append('<p>测试</p>');
    }

    printInfo();

    function hexRange(start, stop, step) {
        var i;
        return regeneratorRuntime.wrap(function hexRange$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        i = start;

                    case 1:
                        if (!(i < stop)) {
                            _context.next = 7;
                            break;
                        }

                        _context.next = 4;
                        return i;

                    case 4:
                        i + step;
                        _context.next = 1;
                        break;

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _marked[0], this);
    }

    function printColors() {
        var content = $('#content');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = hexRange(900, 999, 10)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var hex = _step.value;

                var newDiv = $('<div>').attr('class', 'color').css({ 'background-color': '#' + hex }).append('hex code:#' + hex);
                content.append(newDiv);
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
    }

    $(function () {
        printColors();
    });
})(jQuery);