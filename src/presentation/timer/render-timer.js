import './timer.css';

export const renderTimer = ( element, game) => {

    const labelTime = document.createElement('label');
    labelTime.innerHTML = 'Tiempo: ';
    const spanTimeLeft = document.createElement('span');

    element.append(labelTime);

    game.timer.init(spanTimeLeft);
    element.append(spanTimeLeft);
}