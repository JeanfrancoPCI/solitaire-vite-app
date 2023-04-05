import { renderCard } from '../cards/render-card';
import './columns.css';

export const renderColumnCards = ( divElement, columns ) => {
    for (let i = 0; i < columns.length; i++) {
        let divColumn = document.createElement('div');
        divColumn.classList.add('column-grid');
        for (let card of columns[i].cards) {
            divColumn.append(renderCard(card)); 
        }
        divColumn.addEventListener('dragover', () => dragOver(event, columns));
        divElement.append(divColumn);
    }
}

const dragOver = (event, columns) => {
    const  newColumn = event.currentTarget;
    console.log(newColumn);
    // event.dataTransfer.setData("column", event.target.id);
    event.preventDefault();
}

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