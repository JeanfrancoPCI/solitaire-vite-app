import { Signs, Specials } from '../../models/enums';
import { Card } from '../../models/card';
import { Deck } from '../../models/deck';
import { renderCard } from '../cards/render-cards';

let deck;

export const renderDeck = (deckElement, cardsElement) => {
    deck = new Deck();
    distributeGroups(deck);
    renderColumns(deck, cardsElement);
}

const distributeGroups = ( deck ) => {

    for (let i = 1; i <= 7; i++) {
        deck["column-" + i] = createColumnCards(deck, i);
    }
} 

const createColumnCards = ( deck, column ) => {

    let cards = [];
    for(let i = 0; i < column; i++) {
        cards.push(deck.cards.pop());
    }
    cards[cards.length - 1].isVisible = true;
    return cards;
}   

const renderColumns = ( deck, cardsElement ) => {

    let margin = 20;
    let cards = [];
    let cardDiv;
    for (let i = 1; i <= 7; i++) {
        cards = deck["column-" + i];
        for (let j = 0; j < cards.length; j++) {
            cardDiv = renderCard(cards[j]);
            cardDiv.classList.add('card-column');
            cardDiv.classList.add(`column-${i}`);
            cardDiv.setAttribute('z-index', j+1);
            cardDiv.style.marginTop = (j + 1) * margin + 'px';

            cardsElement.append(cardDiv);
        }
    }
}