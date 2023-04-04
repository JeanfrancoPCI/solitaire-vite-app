import { Signs, Specials } from '../../models/enums';
import { Card } from '../../models/card';

let deck;

export const renderDeck = () => {
    deck = createDeck();
    console.log(deck);
}

const createDeck = (deck) => {

    deck = [];

    for( let type of Signs ) {

        for( let special of Specials ) {
            deck.push(new Card(special, type));
        }

        for( let i = 2; i <= 10; i++) {
            deck.push(new Card(i, type));
        }
    }

    // return shuffleDeck( deck );
}

const shuffleDeck = ( deck ) => {
    let currentIndex = deck.length,  randomIndex;
      
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];
     }
      
    return deck;
}

const distributeGroups = ( deck ) => {
    
} 