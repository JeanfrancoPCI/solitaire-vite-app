import './card.css'

const pathAssetsCards = '../assets/cards';
const svgBackCover = 'back-black.svg';

export const renderCard = ( card ) => {
    let cardDiv = document.createElement('div');
    let id = card.value + card.sign;
    cardDiv.classList.add('card');
    cardDiv.setAttribute('data-id', id)
    cardDiv.setAttribute('draggable', true);

    if ( !card.isVisible ) {
        createBackCover(cardDiv);
        cardDiv.classList.add('flipCard');
        cardDiv.addEventListener('click', () => flipCard(id, cardDiv));
    } else {
        createFrontCover(id, cardDiv);
        cardDiv.addEventListener('dragstart', (event) => {
            console.log('drag starts ....');
            console.log(id);
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

const flipCard = (id, cardDiv) => {
    let element;
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
}

const removePreviousChild = ( divElement, classCss ) => {
    const element = divElement.getElementsByClassName(classCss)[0];
    setTimeout(()=>{    
        divElement.removeChild(element);
    }, 100)
}
