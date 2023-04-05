import './card.css'

const pathAssetsCards = '../assets/cards';
const svgBackCover = 'back-black.svg';

export const renderCard = ( card ) => {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card-column');
    cardDiv.setAttribute('data-id', card.value + card.sign)

    if ( !card.isVisible) {
        createBackCover(cardDiv);
        cardDiv.classList.add('flipCard');
    } else {
        createFrontCover(card.value + card.sign, cardDiv);
    }
    return cardDiv;
}

const createFrontCover = ( id, divElement ) => {
    const front = document.createElement('div');
    front.classList.add('front');

    const imgFront = document.createElement('img');
    imgFront.setAttribute('src', pathAssetsCards + '/' + id + '.svg');

    front.appendChild(imgFront);
    divElement.append(front);
}

const createBackCover = ( divElement ) => {
    const back = document.createElement('div');
    back.classList.add('back');

    const imgBack = document.createElement('img');
    imgBack.setAttribute('src', pathAssetsCards + '/' + svgBackCover);
    
    back.appendChild(imgBack);
    divElement.append(back);
}


// const images = document.querySelectorAll("img");
// const containers = document.querySelectorAll(".container");

// images.forEach((image) => {
//   image.addEventListener("dragstart", dragStart);
//   image.addEventListener("dragend", dragEnd);
// });

// containers.forEach((container) => {
//   container.addEventListener("dragover", dragOver);
//   container.addEventListener("drop", drop);
// });

// function dragStart(event) {
//   event.dataTransfer.setData("draggedImageId", event.target.id);
//   setTimeout(() => event.target.classList.toggle("hidden"));
// }

// function dragEnd(event) {
//   event.target.classList.toggle("hidden");
// }

// function dragOver(event) {
//   event.preventDefault();
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
