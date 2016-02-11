'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by anry on 2016/2/9.
 */

var Posit = function () {
    function Posit(x, y) {
        _classCallCheck(this, Posit);

        this.x = x;
        this.y = y;
    }

    _createClass(Posit, [{
        key: 'toString',
        value: function toString() {
            var str = '(' + this.x + ', ' + this.y + ')';
            console.log(str);
            return str;
        }
    }]);

    return Posit;
}();

var point = new Posit(2, 3);

point.toString();

//class ColorPoint extends Posit{
//    constructor(x,y,color){
//        super(x,y);
//        this.color = color;
//    }
//    toString(){
//        return this.color + ' ' + super();
//    }
//}