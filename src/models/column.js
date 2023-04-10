
export class Column {

    constructor( position, cards ) {
        this.position = position;
        this.cards = cards;
    }

    searchIndexCard(value, sign) {
        return this.cards.findIndex(card => card.sign === sign && card.value === value);
    }

    evalMove(cards) {
        const newCard = cards[0];
        const lastCard = this.cards[this.cards.length - 1];

        if (newCard.color != lastCard.color)
             return newCard.number == (lastCard.number - 1) 
        else
            return false;
    }

    static
}