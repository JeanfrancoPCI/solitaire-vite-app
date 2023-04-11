
export class Column {

    constructor( position, cards ) {
        this.position = position;
        this.cards = cards;
    }

    searchIndexCard(value, sign) {
        return this.cards.findIndex(card => card.sign === sign && card.value === value);
    }

    evalMove(card) {
        if (this.cards.length > 0) {
            const lastCard = this.cards[this.cards.length - 1];

            if (card.color != lastCard.color)
                return card.number == (lastCard.number - 1) 
            else
                return false;
        } else {
            return card.number === 13;
        };
    }

    moveCardsTo(indexFrom) {

        let i = 0;
        let cardsMove = this.cards.map((card, index) => {
            if (index >= indexFrom) {
                if (card.isVisible)
                    i++;
                return card;
            }
        });

        if ( cardsMove.length === i) {
            this.cards.splice(indexFrom);
        } else
            throw new Error('Todas las cartas a mover deben estar visibles.')

        return cardsMove;
    }

    moveCardsFrom(cards) {
        let firstCard = cards[0];
        if ( this.evalMove(firstCard) ) {
            for (let card of cards) {
                this.cards.push(card);
            }
        } else
            throw new Error('Movimiento de cartas inválido');
    }

    moveToGroup(group) {
        let card = this.cards[this.cards.length - 1];
        if( group.evalMove(card) ) {
            group.cards.push(card);
        } else
            throw new Error('Movimiento de carta inválido.');
    }
}