'use strict';

var _marked = [f].map(regeneratorRuntime.mark);

/**
 * Created by anry on 2016/2/9.
 */
function f() {
    return regeneratorRuntime.wrap(function f$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'hello';

                case 2:
                    _context.next = 4;
                    return 'world';

                case 4:
                    return _context.abrupt('return', 'ending');

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var h = f();
h.next();
setTimeout(function () {
    h.next();
}, 2000);