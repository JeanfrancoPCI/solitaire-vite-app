import './card.css';

const pathAssetsCards = '../assets/cards';
const svgBackCover = 'back-black.svg';

export const renderCard = ( element, card ) => {

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.setAttribute('data-id', card.value + card.sign)
    cardDiv.addEventListener('click', () => {
        console.log('hola mundo');
        cardDiv.classList.toggle('flipCard');
    });
    showCard(cardDiv, card);
    element.append(cardDiv);
}

const showCard = ( divElement, card ) => {
    const front = document.createElement('div');
    front.classList.add('front');

    const imgFront = document.createElement('img');
    imgFront.setAttribute('src', pathAssetsCards + '/' + card.value + card.sign + '.svg');
    
    const back = document.createElement('div');
    back.classList.add('back');

    const imgBack = document.createElement('img');
    imgBack.setAttribute('src', pathAssetsCards + '/' + svgBackCover)

    front.appendChild(imgFront);
    back.appendChild(imgBack);

    divElement.append(front, back);
}