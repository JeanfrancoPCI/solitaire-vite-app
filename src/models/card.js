
export class Card {

    constructor(value, sign) {
        this.value = value;
        this.sign = sign;
        this.number = this.numericValue(value);
        this.isVisible = false;
    }

    numericValue(value) {
        switch(value) {
            case "A":
                return 1;
            case "K":
                return 13;
            case "Q":
                return 12;
            case "J":
                return 11;
            default:
                return parseInt(value);
        }
    }
}