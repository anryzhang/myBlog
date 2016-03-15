'use strict';

/**
 * Created by ziyu on 16/3/4.
 */
var MyVisitor = {
    Identifier: {
        count: 1,
        enter: function enter() {
            var self = this;
            console.log('entered');
            console.log(self.count);
            self.exit();
        },
        exit: function exit() {
            var self = this;
            console.log('exited');
            MyVisitor.Test.enter();
        }
    },
    Test: {
        ct: 2,
        enter: function enter() {
            var self = this;
            console.log(self.ct);
        }
    }
};

MyVisitor.Identifier.enter();

function f() {
    console.log('outside');
}

(function () {
    if (false) {
        var _f = function _f() {
            console.log('inside');
        };

        _f();
    }
    f();
})();