import { Signs, Specials } from '../../models/enums';
import { Card } from '../../models/card';
import { Deck } from '../../models/deck';
import { renderCard } from '../cards/render-cards';

let deck;
let column1;
let column2;
let column3;
let column4;
let column5;
let column6;
let column7;

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

    let cards = [];
    let cardDiv;
    for (let i = 1; i <= 7; i++) {
        cards = deck["column-" + i];
        for (let j = 0; j < cards.length; j++) {
            cardDiv = renderCard(cards[j]);
            cardDiv.classList.add(`column-${i}`);
            cardDiv.setAttribute('z-index', j+1);
            cardsElement.append(cardDiv);
        }
    }
}