var five = require("johnny-five");

export default class {

    constructor() {
        this.lcd = {};
        this.board = new five.Board();
    }

    setup() {
        this.board.on("ready", () => {
            let leds = new five.Leds([5,6]);

            this.lcd = new five.LCD({
              pins: [7, 8, 9, 10, 11, 12],
              rows: 2,
              columns: 16
            });

            this.lcd.useChar("heart");

            this.lcd.clear().print("hello world!");
            this.lcd.cursor(1, 0);
            this.lcd.print("I :heart: SYSART!");

            //leds.pulse();
        });
    }

    setMessage(message) {
        var firstrow = '';
        var secondrow = '';

        if(message.length > 16){
            firstrow = message.substring(0, 16);
            secondrow = message.substring(16, 32);
        }else{
            firstrow = message;
        }

        this.lcd.clear().print(firstrow);
        this.lcd.cursor(1, 0);
        this.lcd.print(secondrow);
    }
}
