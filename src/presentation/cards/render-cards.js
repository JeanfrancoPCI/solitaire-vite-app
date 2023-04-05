import { Card } from '../../models/card';
import './card.css';

const pathAssetsCards = '../assets/cards';
const svgBackCover = 'back-black.svg';

let front, back;
let id, sign, value;

export const renderCard = ( card ) => {

    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('data-id', card.value + card.sign)

    if ( !card.isVisible) {
        createBackCover(cardDiv);
        cardDiv.classList.add('flipCard');
    } else {
        createFrontCover(card.value, card.sign, cardDiv);
    }

    cardDiv.addEventListener('click', () => {

        const cards = document.querySelector('.cards');
        cards.getElementsByClassName
        
        
        if (!cardDiv.getAttribute('data-id')) {
            back = cardDiv.getElementsByClassName('back')[0];
            id = back.getAttribute('data-id');
        }
        else
            id = cardDiv.getAttribute('data-id');

        sign = id.substring(id.length - 1);
        value = id.replace(sign, '');

        if (!cardDiv.classList.contains('flipCard')) {
            createBackCover(cardDiv);
            back = cardDiv.getElementsByClassName('back')[0];
            back.setAttribute('data-id', id);
            cardDiv.setAttribute('data-id','');
            front = cardDiv.getElementsByClassName('front')[0];
            setTimeout(()=>{
                cardDiv.removeChild(front);
            }, 100)
        } else {            
            createFrontCover(value, sign, cardDiv);  
            cardDiv.setAttribute('data-id',id);   
            back = cardDiv.getElementsByClassName('back')[0];
            setTimeout(()=>{                
                cardDiv.removeChild(back);
            }, 100)
        }
            
        cardDiv.classList.toggle('flipCard');
    });

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