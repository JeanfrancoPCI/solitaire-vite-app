import './card.css';

const pathAssetsCards = '../assets/cards';
const svgBackCover = 'back-black.svg';

let cardDiv;

export const renderCard = ( card ) => {
    
    cardDiv = showCard(card);

    cardDiv.addEventListener('click', () => {
        console.log('hola mundo');
        cardDiv.classList.toggle('flipCard');
    });

    return cardDiv;
}

const showCard = ( card ) => {

    cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.setAttribute('data-id', card.value + card.sign)

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

    cardDiv.append(front, back);

    return cardDiv;
}