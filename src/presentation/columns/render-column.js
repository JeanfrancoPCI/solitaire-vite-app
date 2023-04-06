import { renderCard } from '../cards/render-card';
import './columns.css';

let currentTarget;

export const renderColumnCards = ( divElement, columns ) => {
    for (let i = 0; i < columns.length; i++) {
        let divColumn = document.createElement('div');
        divColumn.classList.add('column-grid');
        divColumn.setAttribute('data-id', i);

        for (let card of columns[i].cards) {
            divColumn.append(renderCard(card)); 
        }
        // divColumn.addEventListener('dragover', () => dragOver(event, columns, i));
        divColumn.addEventListener('dragenter', dragEnter);
        divColumn.addEventListener('dragover', dragOver);
        divColumn.addEventListener('dragleave', dragLeave);
        divColumn.addEventListener('drop', drop);
        divElement.append(divColumn);
    }
}

const dragEnter = (event) => {
    let cardDiv;
    console.log('drag enter');
    console.log(event.currentTarget);
    console.log(first)
    let columnDiv = event.target.closest('.column-grid');
    let cardId = event.dataTransfer.getData('cardid');
    console.log(cardId);

    if (event.target) {
        cardDiv = document.querySelector(`[data-id="${ cardId }"]`);
        cardDiv = cardDiv.parentElement;
    }

    let cardDivs = columnDiv.children;
    cardDiv = cardDivs[cardDivs.length - 1];
    console.log(cardDiv);
    //.classList.add('drag-over');
}

// const dragEnter = (event) => {
//     let columnDiv = event.target.closest('.column-grid');
//     let cardId = event.dataTransfer.setData("cardId");
//     let cardDiv;
//     if (event.target) {
//         cardDiv = document.querySelector(`[data-id="${ cardId }"]`);
//         cardDiv = cardDiv.parentElement;
//     }

//     let cardDivs = columnDiv.children;
//     cardDiv = cardDivs[cardDivs.length - 1];
//     console.log(cardDiv);
//     //.classList.add('drag-over');
// }

const dragOver = (event) => {
    event.target.closest('.column-grid').classList.add('drag-over');
}

const dragLeave = (event) => {
    event.target.closest('.column-grid').classList.remove('drag-over');
}

const drop = (event) => {
    event.target.closest('.column-grid').classList.remove('drag-over');
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