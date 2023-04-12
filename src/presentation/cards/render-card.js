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
        // cardDiv.addEventListener('drag', drag);
        cardDiv.addEventListener('dragstart', dragStart);
        cardDiv.addEventListener('mouseover', mouseOver);
        cardDiv.addEventListener('mouseout', mouseOut);
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

const drag = (event) => {
    console.log('drag');
    // let divCard = event.target.closest('.card');
    // let columnDiv = divCard.parentElement;
    // let indexCard = Array.from(columnDiv.children).indexOf(divCard);

    let dragDiv = document.querySelector('.drag-element');
    // let dragDiv = document.createElement('div');
    // dragDiv.id = 'drag-host';
    // dragDiv.classList.add('drag-element');

    // Array.from(columnDiv.children).forEach((div, index) => {
    //     if (index >= indexCard) {
    //         dragDiv.append(div.cloneNode(true));
    //     }
    // }); 

    // setTimeout(() => {
        event.dataTransfer.setDragImage(dragDiv, 0, 0);
        console.log('dragDiv', dragDiv);
    // },0);
}

const dragStart = (event) => {
    // console.log('drag starts ....');
    // let dragDiv = document.querySelector('.drag-element');

    let divCard = event.target.closest('.card');

    let dragDiv = document.querySelector('#drag-host');
    // let dragDiv = document.createElement('div');
    // dragDiv.innerHTML = '';
    // dragDiv.classList.add('drag-element');
    // dragDiv.style.position = "absolute";
    // dragDiv.style.top = "-1000px";
    
    let columnDiv = divCard.parentElement;
    let indexCard = Array.from(columnDiv.children).indexOf(divCard);
                
    setTimeout( () => {
        Array.from(columnDiv.children).forEach((div, index) => {
            if (index >= indexCard) {
                div.classList.add('hide');
            }
        });
    }, 0)
    
    event.dataTransfer.setDragImage(dragDiv, 50, 50);
    // console.log('dragDiv', dragDiv);
}

const mouseOver = (event) => {
    let dragDiv = document.createElement('div');
    dragDiv.id = 'drag-host'
    dragDiv.classList.add('drag-element');
    // dragDiv.style.position = "absolute";
    // dragDiv.style.top = "-1000px";
    
    let divCard = event.target.closest('.card');
    let columnDiv = divCard.parentElement;
    let indexCard = Array.from(columnDiv.children).indexOf(divCard);

    Array.from(columnDiv.children).forEach((div, index) => {
        if (index >= indexCard) {
            dragDiv.append(div.cloneNode(true));
        }
    })

    document.body.append(dragDiv);
    // console.log('dragDiv', dragDiv);
}

const mouseOut = (event) => {
    let dragDiv = document.querySelectorAll('#drag-host');
    let parent = dragDiv[0].parentElement;
    dragDiv.forEach( element => parent.removeChild(element));
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
