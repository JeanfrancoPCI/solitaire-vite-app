import html  from "./game.html?raw";
import './game.css';
import { renderTimer } from "../timer/render-timer";
import { renderDeck } from "../deck/render-deck";
import { renderColumnsCards } from "../columns/render-column";
import { Game } from "../../models/game";

let game;

export const renderGame = ( element ) => {

    element.innerHTML = html;
    const timerDiv = document.querySelector('.timer');
    const columnsDiv = document.querySelector('.columns');
    const deckDiv = document.querySelector('.deck');

    game = new Game();

    renderTimer(timerDiv, game.timer);
    renderDeck(deckDiv, game.deck);
    renderColumnsCards(columnsDiv, game.columns);

};