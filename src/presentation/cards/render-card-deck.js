import './card.css'

const pathAssetsCards = '../assets/cards';
const svgBackCover = 'back-black.svg';

export const renderCardDeck = ( card ) => {
    let cardDiv = document.createElement('div');
    let id = card.value + card.sign;
    cardDiv.classList.add('cardDeck');
    cardDiv.setAttribute('data-id', id);
    

    if ( !card.isVisible ) {
        createBackCover(cardDiv);
        cardDiv.classList.add('flipCard');
        cardDiv.addEventListener('click', () => flipCard(id, cardDiv));
    } else {
        cardDiv.setAttribute('draggable', true);
        createFrontCover(id, cardDiv);
        cardDiv.addEventListener('click', null);
        cardDiv.addEventListener('dragstart', dragStart);
        let front = cardDiv.querySelector('.front');
        front.addEventListener('mouseover', mouseOver);
        front.addEventListener('mouseout', mouseOut);
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

const dragStart = (event) => {
    let divCard = event.target.closest('.cardDeck');
    let dragDiv = document.querySelector('.drag-element');

    let columnDiv = divCard.parentElement;
    let indexCard = Array.from(columnDiv.children).indexOf(divCard);
                
    setTimeout( () => {
        Array.from(columnDiv.children).forEach((div, index) => {
            if (index >= indexCard) {
                div.classList.add('hide');
            }
        });
    }, 0)
    
    event.dataTransfer.setDragImage(dragDiv, 25, 25);
}

const mouseOver = (event) => {

    let dragDiv = document.querySelector('.drag-element');
    dragDiv.innerHTML = '';
    
    let divCard = event.target.closest('.cardDeck');
    let columnDiv = divCard.parentElement;
    let indexCard = Array.from(columnDiv.children).indexOf(divCard);

    Array.from(columnDiv.children).forEach((div, index) => {
        if (index >= indexCard) {
            dragDiv.append(div.cloneNode(true));
        }
    })
}

const mouseOut = (event) => {

    let dragDiv = document.querySelector('.drag-element');
    dragDiv.innerHTML = '';
}

const flipCard = (id, cardDiv) => {
    let element;
    let parentChildren = Array.from(cardDiv.parentElement.children);
    let indexCard = parentChildren.indexOf(cardDiv);

    if (indexCard === parentChildren.length - 1){
        
        if (!cardDiv.classList.contains('flipCard')) {
            element = 'front';
            createBackCover(cardDiv);
            cardDiv.getElementsByClassName('back')[0].setAttribute('data-id', id);
            id = ''
        } else {        
            element = 'back';
            createFrontCover(id, cardDiv); 
        }

        removePreviousChild(cardDiv, element)
        cardDiv.setAttribute('data-id', id);
        cardDiv.classList.toggle('flipCard');
    
        let front = cardDiv.querySelector('.front');
        
        cardDiv.addEventListener('click', null);
        cardDiv.addEventListener('dragstart', dragStart);
        front.addEventListener('mouseover', mouseOver);
        front.addEventListener('mouseout', mouseOut);
    }
}

const removePreviousChild = ( divElement, classCss ) => {
    const element = divElement.getElementsByClassName(classCss)[0];
    setTimeout(()=>{    
        divElement.removeChild(element);
    }, 100)
}
