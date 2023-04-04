import { Card } from "./card";
import { Signs, Specials } from "./enums";

export class Deck {

    cards;

    constructor() {
        this.cards = this.fillCards();
    }

    fillCards = ( ) => {
        let cards = [];
        for( let type of Signs ) {

            for( let special of Specials ) {
                cards.push(new Card(special, type));
            }
    
            for( let i = 2; i <= 10; i++) {
                cards.push(new Card(i, type));
            }
        }
        return this.shuffleCards(cards);
    }

    shuffleCards = ( cards ) => {
        let currentIndex = cards.length,  randomIndex;
          
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [cards[currentIndex], cards[randomIndex]] = 
                [cards[randomIndex], cards[currentIndex]];
         }

         return cards;
    }
}