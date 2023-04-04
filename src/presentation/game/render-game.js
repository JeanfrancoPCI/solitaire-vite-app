import html  from "./game.html?raw";
import './game.css';
import { timerComponent } from "../timer/reder-timer";
import { renderCard } from "../cards/render-cards";
import { Card } from '../../models/card';
import { renderDeck } from "../deck/render-deck";

export const game = ( element ) => {

    element.innerHTML = html;
    const timer = document.querySelector('.timer');
    const cards = document.querySelector('.cards');
    timerComponent(timer);
    
    // const card = new Card('Q','H');
    // const card2 = new Card('10','C');
    // const card3 = new Card('A','S');
    // const card4 = new Card('9','D');
    // const card5 = new Card('3','C');
    // const card6 = new Card('2','S');
    // const card7 = new Card('K','D');
    // const card8 = new Card('5','H');
    // renderCard(cards, card);
    // renderCard(cards, card2);
    // renderCard(cards, card3);
    // renderCard(cards, card4);
    // renderCard(cards, card5);
    // renderCard(cards, card6);
    // renderCard(cards, card7);
    // renderCard(cards, card8);

    renderDeck();
};