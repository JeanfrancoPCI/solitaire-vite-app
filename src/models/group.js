
export class Group {

    cards;

    constructor(position, sign) {
        this.position = position;
        this.sign = sign;
        this.cards = [];
    }

    evalMove(card) {
        if ( this.cards.length > 0) {
            if ( this.sign === card.sign ) {
                let lastCard = this.cards[this.cards.length - 1];
                return lastCard.number === (card.number - 1);
            }
        } else {
            return card.number === 1;
        }
    }

    // moveCard(card) {
    //     if( this.evalMove(card) ) {
    //         this.cards.push(card);
    //     } else
    //         throw new Error('Movimiento de carta inválido.');
    // }

    // moveToColumn(column) {

    //     let card = this.cards[this.cards.length - 1];
    //     if ( column.evalMove(card) ) {

    //     }           
    // }
}