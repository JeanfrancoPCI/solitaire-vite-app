export class Deck {

    constructor() {
        this.cards = fillCards();
    }

    fillCards() {
        let cards = [];
        for( let type of Signs ) {

            for( let special of Specials ) {
                cards.push(new Card(special, type));
            }
    
            for( let i = 2; i <= 10; i++) {
                cards.push(new Card(i, type));
            }
        }
        this.shuffleCards();
        return cards;
    }

    shuffleCards = ( ) => {
        let currentIndex = this.cards.length,  randomIndex;
          
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.cards[currentIndex], 
            this.cards[randomIndex]] = 
                [this.cards[randomIndex], 
                    this.cards[currentIndex]];
         }
    }
}