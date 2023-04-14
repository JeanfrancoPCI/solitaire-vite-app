import { Card } from '../../models/card';
import { renderCard } from '../cards/render-card';
import './columns.css';

let currentTarget;

export const renderColumnsCards = ( divElement, game ) => {
    for (let i = 0; i < game.columns.length; i++) {
        renderColumnCards(divElement, game.columns, i)
    }
}

const renderColumnCards = (divElement, columns, i) => {
    let divColumn = document.createElement('div');
    divColumn.classList.add('column-grid');
    divColumn.setAttribute('data-id', i);
    
    for (let card of columns[i].cards) {
        divColumn.append(renderCard(card)); 
    }
        
    divColumn.addEventListener('dragenter', dragEnter);
    divColumn.addEventListener('dragover', dragOver);
    divColumn.addEventListener('dragleave', dragLeave);
    divColumn.addEventListener('drop', () => { drop(event, columns) });
    // divColumn.addEventListener('dragend', dragEnd);

    divElement.append(divColumn);  
}

const refreshColumnCards = (columns, i) => {
    let divColumn = document.querySelector('[data-id="' + i + '"]');
    let cardsDiv = Array.from(divColumn.children);
    let cards = columns[i].cards;

    if ( cardsDiv.length > cards.length ) {
        
        cardsDiv.forEach((div, index) => {
            if (index > cards.length -1) {
                divColumn.removeChild(div);
            }
        })

        cardsDiv.forEach((div, index) => {
            for (let i = 0; i < cards.length; i++) {
                if (index == i) {
                    let card = cards[i];
                    if (card.isVisible) {
                        if (cardsDiv[index].classList.contains('flipCard')) {
                            cardsDiv[index].click();   
                        } 
                    }
                    else {
                        if (!cardsDiv[index].classList.contains('flipCard')) {
                            cardsDiv[index].click();
                        }
                    }
                }
            }
        })
    } else {
        for ( let i = cardsDiv.length; i <= cards.length - 1; i++) {
            let card = cards[i];
            divColumn.append(renderCard(card));
        }
    }
}

const dragEnter = (event) => {
    event.preventDefault();
    let divs = dragEvent(event);
    let card = divs[0];
    let column = divs[1];

    if (!card)
        column.classList.add('drag-over');
    else
        card.classList.add('drag-over');
}

const dragOver = (event) => {
    event.preventDefault();
    let divs = dragEvent(event);
    let card = divs[0];
    let column = divs[1];
    if (!card)
        column.classList.add('drag-over');
    else
        card.classList.add('drag-over');
}

const dragLeave = (event) => {
    let divs = dragEvent(event);
    let card = divs[0];
    let column = divs[1];
    if (!card)
        column.classList.remove('drag-over');
    else
        card.classList.remove('drag-over');
}

// const drop = (event, columns) => {
//     console.log('drop enter');
//     let divs = dragEvent(event);
//     let card = divs[0];
//     let column = divs[1];
    
//     if (!card)
//         column.classList.remove('drag-over');
//     else 
//         card.classList.remove('drag-over');

//     // let cardFrom = document.querySelector('.hide');
//     // // console.log('cardFrom', cardFrom);
//     // cardFrom.classList.remove('hide');

//     let cardsFrom = document.querySelectorAll('.hide');
//     cardsFrom.forEach( cardFrom => cardFrom.classList.remove('hide') );

//     // console.log('card', card);
//     // console.log('card2', cardFrom);

//     console.log('parent', card.parentElement);
//     // let cardColumn1 = (card.parentElement).parentElement;
//     let cardColumn1 = column;
//     // let cardColumn2 = cardFrom.parentElement;
//     let cardColumn2 = cardFrom[0].parentElement;

//     // console.log('cardColumn1', cardColumn1);
//     // console.log('cardColumn2', cardColumn2);

//     let id = card.parentElement.getAttribute('data-id');
//     let sign = id.substring(id.length - 1);
//     let value = id.replace(sign, '');

//     let id2 = cardFrom.getAttribute('data-id');
//     let sign2 = id2.substring(id2.length-1);
//     let value2 = id2.replace(sign2, '');

//     // console.log('id', id);
//     // console.log('id2', id2);
//     // console.log('sign', sign);
//     // console.log('sign2', sign2);
//     // console.log('value', value);
//     // console.log('value2', value2);

//     let indexColumn1 = -1, indexColumn2 = -1;
//     let indexCard1 = -1, indexCard2 = -1;
    
//     for (let index in columns) {
//         if ( indexCard1 === -1 )
//             indexCard1 = columns[index].searchIndexCard(value, sign);

//         if ( indexCard2 === -1 )
//             indexCard2 = columns[index].searchIndexCard(value2, sign2);


//         if ( indexCard1 > -1 && indexColumn1 === -1)
//             indexColumn1 = index;

//         if ( indexCard2 > -1 && indexColumn2 === -1 )
//             indexColumn2 = index;

//         if ( indexCard1 > -1 && indexCard2 > -1)
//             break;
//     }

//     // console.log('indexCard1', indexCard1);
//     // console.log('indexCard2', indexCard2);
//     // console.log('indexColumn1', indexColumn1);
//     // console.log('indexColumn2', indexColumn2);

//     if ( indexColumn1 != indexColumn2 ) {
//         let cardMoved = columns[indexColumn2].cards.pop();
//         // console.log('cardMoved', cardMoved);
//         columns[indexColumn1].cards.push(cardMoved);

//         cardColumn1.append(cardFrom);
//         // console.log('cardColumn', cardColumn1);
//         // console.log('cardColumn2', cardColumn2);
//     } 

//     // console.log('columns', columns);
// }

const drop = (event, columns) => {

    let divs = dragEvent(event);
    let card = divs[0];
    let column = divs[1];

    let columnIndex = column.getAttribute('data-id');
    let columnTo = columns.find( column => column.position === parseInt(columnIndex));
    
    let cardsHide = document.querySelectorAll('.hide');
    let columnDivFrom = cardsHide[0].parentElement;
    let columnIndex2 = columnDivFrom.getAttribute('data-id');
    let columnFrom = columns.find( column => column.position === parseInt(columnIndex2));
    
    // console.log('cardsHide', cardsHide);
    // console.log('columnDivFrom', columnDivFrom);
    // console.log('columnIndex', columnIndex);
    // console.log('columnTo', columnTo);
    // console.log('columnIndex2', columnIndex2);
    // console.log('columnFrom', columnFrom);

    let indexCard = Array.from(columnDivFrom.children).indexOf(cardsHide[0]);
    
    try {
        // console.log('indexCard', indexCard);
        let cards = columnFrom.moveCardsTo(indexCard);
        columnTo.moveCardsFrom(cards);

        refreshColumnCards(columns, columnIndex);
        refreshColumnCards(columns, columnIndex2);
    } catch (error) {
        console.error(error);
        // alert(error);
        cardsHide.forEach(card => card.classList.remove('hide'));
    }
    finally {
        if (!card)
            column.classList.remove('drag-over');
        else
            card.classList.remove('drag-over');
    }
}

const dragEnd = (event) => {
    let dragDiv = document.querySelector('.drag-element');
    dragDiv.innerHTML = '';
}

const dragEvent = (event) => {
    let columnDiv, card, cardDivs, cardDiv;
    
    if ( !event.target.classList.contains('column-grid') ) {
        columnDiv = event.target.closest('.column-grid');
    } else
        columnDiv = event.target;
    
    cardDivs = Array.from(columnDiv.children);

    if (cardDivs.length > 0) {
        cardDiv = cardDivs[cardDivs.length - 1];
        card = cardDiv.querySelector('.front');
        if (!card)
            card = cardDiv.querySelector('.back');
    }

    return [card, columnDiv];   
}