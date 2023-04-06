
export class Card {

    color;

    constructor(value, sign) {
        this.value = value;
        this.sign = sign;
        this.number = this.numericValue();
        this.isVisible = false;
        this.color = this.colorSign();
    }

    numericValue() {
        switch(this.value) {
            case "A":
                return 1;
            case "K":
                return 13;
            case "Q":
                return 12;
            case "J":
                return 11;
            default:
                return parseInt(this.value);
        }
    }

    colorSign() {
        switch(this.sign) {
            case "H":
                return "red";
            case "D":
                return "red";
            case "C":
                return "black";
            case "S":
                return "black";
        }
    }
}