
export class Column {

    constructor( position, cards ) {
        this.position = position;
        this.cards = cards;
    }

    evalMove(cards) {
        const newCard = cards[0];
        const lastCard = this.cards[this.cards.length - 1];

        if (newCard.color != lastCard.color)
             return newCard.number == (lastCard.number - 1) 
        else
            return false;
    }
}