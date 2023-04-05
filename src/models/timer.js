
export class Timer {

    start;
    end;
    isFinish;

    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.isFinish = false;
    }

    init(divElement) {
        this.start = new Date();
        let timer = setInterval(() => {
            this.tick();
            divElement.innerHTML = this.toString();
    
            if ( this.isFinish ) {
                clearInterval(timer);
            }
        }, 1000);
    }

    stop() {
        this.end = new Date();
    }

    tick() {
        if (this.seconds == 59) {
            if (this.minutes == 59) {
                this.hours++;
                this.minutes = 0;
            } else 
                this.minutes++;
            this.seconds = 0;
        } else 
            this.seconds++;
    }

    toString() {
        return `${ String(this.hours).padStart(2, '0') }:${ String(this.minutes).padStart(2, '0') }:${ String(this.seconds).padStart(2, '0') }`;
    }
}