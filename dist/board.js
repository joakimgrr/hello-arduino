"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var five = require("johnny-five");

var _class = function () {
    function _class() {
        _classCallCheck(this, _class);

        this.lcd = {};
        this.board = new five.Board();
    }

    _createClass(_class, [{
        key: "setup",
        value: function setup() {
            var _this = this;

            this.board.on("ready", function () {
                var leds = new five.Leds([5, 6]);

                _this.lcd = new five.LCD({
                    pins: [7, 8, 9, 10, 11, 12],
                    rows: 2,
                    columns: 16
                });

                _this.lcd.useChar("heart");

                _this.lcd.clear().print("hello world!");
                _this.lcd.cursor(1, 0);
                _this.lcd.print("I :heart: SYSART!");

                //leds.pulse();
            });
        }
    }, {
        key: "setMessage",
        value: function setMessage(message) {
            var firstrow = '';
            var secondrow = '';

            if (message.length > 16) {
                firstrow = message.substring(0, 16);
                secondrow = message.substring(16, 32);
            } else {
                firstrow = message;
            }

            this.lcd.clear().print(firstrow);
            this.lcd.cursor(1, 0);
            this.lcd.print(secondrow);
        }
    }]);

    return _class;
}();

exports.default = _class;
