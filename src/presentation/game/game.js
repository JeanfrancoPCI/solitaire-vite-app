import html  from "./game.html?raw";
import './game.css';
import { timerComponent } from "../timer/timer";
import { renderCard } from "../cards/cards";
import { Card } from '../../models/card';

export const game = ( element ) => {

    element.innerHTML = html;
    const timer = document.querySelector('.timer');
    const cards = document.querySelector('.cards');
    timerComponent(timer);
    const card = new Card('Q','H');
    renderCard(cards, card);
};