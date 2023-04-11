import { Timer } from "./timer";
import { Deck } from "./deck";
import { Signs } from "./enums";
import { Group } from "./group";
import { Column } from "./column";

export class Game {

    timer;
    deck;
    cards;
    columns;
    groups;
    handType;

    constructor(handType) {
        this.timer = new Timer();
        this.deck = new Deck();
        this.cards = [];
        this.groups = [];
        this.createGroups();
        this.columns = [];
        this.distributeColumns();
        this.handType = handType;
    }

    createGroups() {
        for (let i = 0; i < 4; i++) {
            this.groups.push(new Group(i, Signs[i]));
        }
    }

    distributeColumns() {
        for (let i = 1; i <= 7; i++) {
            let cards = this.createColumnCards(i);
            this.columns.push(new Column(i, cards));
        }
    } 

    createColumnCards( column ) {
        let cards = [];
        for(let i = 0; i < column; i++) {
            let card = this.deck.cards.pop();
            card.isVisible = true;
            cards.push(card);
        }
        cards[cards.length - 1].isVisible = true;
        return cards;
    }
}