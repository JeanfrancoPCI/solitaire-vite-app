import { Deck } from '../../models/deck';
import { renderCard } from '../cards/render-card';

let deck;

export const renderDeck = (deckElement, game) => {
    // distributeGroups(deck);
    // renderColumns(deck, cardsElement);

    for (let card of game.deck.cards) {
        console.log('card', card);
        deckElement.append(renderCard(card));
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