import './card.css'

const pathAssetsCards = '../assets/cards';
const svgBackCover = 'back-black.svg';

export const renderCard = ( card ) => {
    let cardDiv = document.createElement('div');
    let id = card.value + card.sign;
    cardDiv.classList.add('card');
    cardDiv.setAttribute('data-id', id)
    cardDiv.setAttribute('draggable', true);

    if ( !card.isVisible) {
        createBackCover(cardDiv);
        cardDiv.classList.add('flipCard');
        cardDiv.addEventListener('click', () => flipCard(cardDiv, card.value + card.sign));
    } else {
        createFrontCover(id, cardDiv);
        cardDiv.addEventListener('dragstart', (event) => {
            console.log('drag starts ....');
            console.log(id);
            event.dataTransfer.setData('cardid', id);
            setTimeout(() => {
                event.target.closest('.card').classList.add('hide');
            }, 0);
        });
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

const flipCard = (cardDiv, value, sign) => {
    let element;
    if (!cardDiv.classList.contains('flipCard')) {
        element = 'front';
        createBackCover(cardDiv);
        cardDiv.getElementsByClassName('back')[0].setAttribute('data-id', value +  sign);
        id = ''
    } else {        
        element = 'back';
        createFrontCover(value, sign, cardDiv); 
    }
    removePreviousChild(cardDiv, element)
    cardDiv.setAttribute('data-id', value +  sign);
    cardDiv.classList.toggle('flipCard');
}

// const dragStart = (event) => {
//     console.log('drag starts ....');
//     let id = event.target.closest('.card').getAttribute('data-id');
//     console.log(id);
//     event.dataTransfer.setData('text/plain', id);
//     setTimeout(() => {
//         event.target.closest('.card').classList.add('hide');
//     }, 0);
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
