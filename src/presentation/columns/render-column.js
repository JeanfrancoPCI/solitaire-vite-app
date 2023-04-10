import { Card } from '../../models/card';
import { renderCard } from '../cards/render-card';
import './columns.css';

let currentTarget;

export const renderColumnsCards = ( divElement, columns ) => {
    for (let i = 0; i < columns.length; i++) {
        renderColumnCards(divElement, columns, i)
        // let divColumn = document.createElement('div');
        // divColumn.classList.add('column-grid');
        // divColumn.setAttribute('data-id', i);

        // for (let card of columns[i].cards) {
        //     divColumn.append(renderCard(card)); 
        // }
        
        // divColumn.addEventListener('dragenter', dragEnter);
        // divColumn.addEventListener('dragover', dragOver);
        // divColumn.addEventListener('dragleave', dragLeave);
        // divColumn.addEventListener('drop', () => { drop(event, columns) });
        // divElement.append(divColumn);
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

    divElement.append(divColumn);  
}

// const dragEnter = (event) => {
//     let cardDiv;
//     let columnDiv;
//     console.log('drag enter');
//     if ( !event.target.classList.contains('column-grid') ) {
//         columnDiv = event.target.closest('.column-grid');
//     }
    
//     let cardId = event.dataTransfer.getData('cardid');
//     console.log(cardId);

//     if (!cardId) {
//         cardDiv = document.querySelector(`[data-id="${ cardId }"]`);
//         cardDiv = cardDiv.parentElement;
//     }

//     let cardDivs = columnDiv.children;
//     cardDiv = cardDivs[cardDivs.length - 1];
//     console.log(cardDiv);
//     //.classList.add('drag-over');
// }

const dragEnter = (event) => {
    event.preventDefault();
    let card = dragEvent(event);
    card.classList.add('drag-over');
}

const dragOver = (event) => {
    // event.target.closest('.column-grid').classList.add('drag-over');
    event.preventDefault();
    let card = dragEvent(event);
    card.classList.add('drag-over');
}

const dragLeave = (event) => {
    let card = dragEvent(event);
    card.classList.remove('drag-over');
}

const drop = (event, columns) => {
    console.log('drop enter');
    let card = dragEvent(event);
    card.classList.remove('drag-over');
    let cardFrom = document.querySelector('.hide')
    cardFrom.classList.remove('hide');

    console.log('card', card);
    console.log('card2', cardFrom);

    console.log('parent', card.parentElement);
    let cardColumn1 = (card.parentElement).parentElement;
    let cardColumn2 = cardFrom.parentElement;

    console.log('cardColumn1', cardColumn1);
    console.log('cardColumn2', cardColumn2);

    let id = card.parentElement.getAttribute('data-id');
    let sign = id.substring(id.length - 1);
    let value = id.replace(sign, '');

    let id2 = cardFrom.getAttribute('data-id');
    let sign2 = id2.substring(id2.length-1);
    let value2 = id2.replace(sign2, '');

    console.log('id', id);
    console.log('id2', id2);
    console.log('sign', sign);
    console.log('sign2', sign2);
    console.log('value', value);
    console.log('value2', value2);

    let indexColumn1 = -1, indexColumn2 = -1;
    let indexCard1 = -1, indexCard2 = -1;
    
    for (let index in columns) {
        console.log('index', index);
        if ( indexCard1 === -1 )
            indexCard1 = columns[index].searchIndexCard(value, sign);

        if ( indexCard2 === -1 )
            indexCard2 = columns[index].searchIndexCard(value2, sign2);


        if ( indexCard1 > -1 && indexColumn1 === -1)
            indexColumn1 = index;

        if ( indexCard2 > -1 && indexColumn2 === -1 )
            indexColumn2 = index;

        if ( indexCard1 > -1 && indexCard2 > -1)
            break;
    }

    console.log('indexCard1', indexCard1);
    console.log('indexCard2', indexCard2);
    console.log('indexColumn1', indexColumn1);
    console.log('indexColumn2', indexColumn2);

    if ( indexColumn1 != indexColumn2 ) {
        let cardMoved = columns[indexColumn2].cards.pop();
        console.log('cardMoved', cardMoved);
        columns[indexColumn1].cards.push(cardMoved);

        cardColumn1.append(cardFrom);
        console.log('cardColumn', cardColumn1);
        console.log('cardColumn2', cardColumn2);
    } 

    console.log('columns', columns);
}

const dragEvent = (event) => {
    let columnDiv;
    console.log('drag enter');
    if ( !event.target.classList.contains('column-grid') ) {
        columnDiv = event.target.closest('.column-grid');
    } else
        columnDiv = event.target;
    let cardDivs = columnDiv.children;
    let cardDiv = cardDivs[cardDivs.length - 1];
    let card = cardDiv.querySelector('.front');
    if (!card)
        card = cardDiv.querySelector('.back');
    return card;   
}
// const dragOver = (event, columns, index) => {
    // let fromColumnDiv, toColumnDiv;
    // let fromColumn, toColumn;

    // if (!!currentTarget) {
    //     currentTarget = event.currentTarget; 
    // }

    // if( currentTarget != event.currentTarget) {


    //     currentTarget = event.currentTarget;
    // }
    

    // fromColumnDiv = event.currentTarget;
    // const idFromColumn = fromColumnDiv.getAttribute('data-id');
    // fromColumn = columns.find( col => col.position == idFromColumn );
    // toColumn = columns[index];
    // // console.log('from column', { fromColumn });
    // // console.log('to column', { toColumn });
    // toColumnDiv = document.querySelector(`[data-id="${ toColumn.position }"]`);
    // console.log(toColumnDiv);
    // toColumnDiv.classList.toggle('.pointed');
    // // event.dataTransfer.setData("column", event.target.id);
    // event.preventDefault();
// }

// const drop = (event, column) => {
//     const cardId = event.dataTransfer.getData("cardId");
//     const cardDiv = document.querySelector(`[data-id="${ cardId }"]`);
//     const columnDivParent = cardDiv.parentNode();
//     const positionColumn = columnDivParent.classList.
//     const columnDivFor = event.currentTarget;

//     if ()
// }

// function drop(event) {
//   const draggedImageId = event.dataTransfer.getData("draggedImageId");
//   const draggedImage = document.getElementById(draggedImageId);
//   const fromContainer = draggedImage.parentNode;
//   const toContainer = event.currentTarget;

//   if (toContainer !== fromContainer) {
//     fromContainer.appendChild(toContainer.firstElementChild);
//     toContainer.appendChild(draggedImage);
//   }
// }

// containers.forEach((container) => {
//   container.addEventListener("dragover", dragOver);
//   container.addEventListener("drop", drop);
// });