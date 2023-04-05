import { Card } from '../../models/card';
import './card.css';

const pathAssetsCards = '../assets/cards';
const svgBackCover = 'back-black.svg';

export const renderCard = ( card ) => {

    let cardDiv = document.createElement('div');
    cardDiv.setAttribute('data-id', card.value + card.sign)

    if ( !card.isVisible) {
        createBackCover(cardDiv);
        cardDiv.classList.add('flipCard');
    } else {
        createFrontCover(card.value, card.sign, cardDiv);
    }

    cardDiv.addEventListener('click', () => flipCard(card.value + card.sign));
    return cardDiv;
}

const flipCard = (id) => {
    console.log(id);
    let element;
    let cardDiv = document.querySelector('#' + id);
    let sign = id.substring(id.length - 1);
    let value = id.replace(sign, '');
    if (!cardDiv.classList.contains('flipCard')) {
        element = 'front';
        createBackCover(cardDiv);
        cardDiv.getElementsByClassName('back')[0].setAttribute('data-id', id);
        id = ''
    } else {        
        element = 'back';
        createFrontCover(value, sign, cardDiv); 
    }
    removePreviousChild(cardDiv, element)
    cardDiv.setAttribute('data-id',id);
    cardDiv.classList.toggle('flipCard'); 
    return cardDiv;
}

const createFrontCover = ( value, sign, divElement ) => {
    const front = document.createElement('div');
    front.classList.add('front');

    const imgFront = document.createElement('img');
    imgFront.setAttribute('src', pathAssetsCards + '/' + value + sign + '.svg');

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

const removePreviousChild = ( divElement, classCss ) => {
    const element = divElement.getElementsByClassName(classCss)[0];
    setTimeout(()=>{    
        divElement.removeChild(element);
    }, 100)
}

const getIdCard = ( divElement ) => {
    return !divElement.getAttribute('data-id') ? 
        divElement.getElementsByClassName('back')[0].getAttribute('data-id') : 
        divElement.getAttribute('data-id');
}