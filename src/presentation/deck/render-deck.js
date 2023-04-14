import { Deck } from '../../models/deck';
import { renderCardDeck } from '../cards/render-card-deck';
import './deck.css';

let deck;

export const renderDeck = (deckElement, game) => {
    // distributeGroups(deck);
    // renderColumns(deck, cardsElement);

    for (let card of game.deck.cards) {
        let cardDiv = renderCardDeck(card);
        cardDiv.style.zIndex = game.deck.cards.indexOf(card);
        // cardDiv.style.position = "absolute";
        deckElement.append(cardDiv);
    }
}

// const distributeGroups = ( deck ) => {

//     for (let i = 1; i <= 7; i++) {
//         deck["column-" + i] = createColumnCards(deck, i);
//     }
// } 

// const createColumnCards = ( deck, column ) => {

//     let cards = [];
//     for(let i = 0; i < column; i++) {
//         cards.push(deck.cards.pop());
//     }
//     cards[cards.length - 1].isVisible = true;
//     return cards;
// }   

// const renderColumns = ( deck, cardsElement ) => {

//     let margin = 20;
//     let cards = [];
//     let cardDiv;
//     for (let i = 1; i <= 7; i++) {
//         cards = deck["column-" + i];
//         for (let j = 0; j < cards.length; j++) {
//             cardDiv = renderCardColumn(cards[j]);
//             cardDiv.classList.add('card-column');
//             cardDiv.classList.add(`column-${i}`);
//             cardDiv.setAttribute('z-index', j+1);
//             cardDiv.style.marginTop = (j + 1) * margin + 'px';

//             cardsElement.append(cardDiv);
//         }
//     }
// }