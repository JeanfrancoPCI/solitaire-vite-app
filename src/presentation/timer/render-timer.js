import './timer.css';

export const renderTimer = ( element, timer) => {

    const labelTime = document.createElement('label');
    labelTime.innerHTML = 'Tiempo: ';
    const spanTimeLeft = document.createElement('span');

    element.append(labelTime);

    timer.init(spanTimeLeft);
    element.append(spanTimeLeft);
}