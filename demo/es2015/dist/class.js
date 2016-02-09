'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var ColorPoint = function (_Posit) {
    _inherits(ColorPoint, _Posit);

    function ColorPoint(x, y, color) {
        _classCallCheck(this, ColorPoint);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPoint).call(this, x, y));

        _this.color = color;
        return _this;
    }

    return ColorPoint;
}(Posit);