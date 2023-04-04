import './timer.css';

let time;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isFinish = false;

let spanTimeLeft;

export const timerComponent = ( element) => {

    const labelTime = document.createElement('label');
    labelTime.innerHTML = 'Tiempo: ';
    spanTimeLeft = document.createElement('span');

    element.append(labelTime);

    updateTime(spanTimeLeft);
    element.append(spanTimeLeft);
    // initTime(spanTimeLeft);
}

const updateTime = ( element ) => {
    time = `${ String(hours)    .padStart(2, '0') }:
            ${ String(minutes)  .padStart(2, '0') }:
            ${ String(seconds)  .padStart(2, '0') }`;
    console.log(time);
    element.innerHTML = `${ time }`;
}


const initTime = ( element ) => {

    let timer = setInterval(() => {
        if (seconds === 59) {
            if ( minutes === 59) {
                hours++;
                minutes = 0;
            }
            else {
                minutes++;
            }
            seconds = 0;
        } else {
            seconds++;
        }
        
        updateTime( element );

        if ( isFinish ) {
            clearInterval(timer);
        }
    }, 1000);
};