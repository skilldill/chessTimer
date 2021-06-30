export class PlayerTimer {
    seconds;
    interval;

    constructor(seconds) {
        this.seconds = seconds;
    }

    start(callBack) {
        if (!this.interval) {
            this.interval = setInterval(() => {
                if (this.seconds > 1) {
                    this.seconds = this.seconds - 1;
                    callBack(this.seconds - 1);
                } else {
                    this.stop();
                }
            }, 1000)
        }
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }

    restart(seconds) {
        this.stop();
        this.seconds = seconds;
    }

    static getTimeWithMinutes(seconds) {
        const timeMinutes = Math.floor(seconds / 60);
        const timeSeconds = seconds % 60;

        const preparedTimeMinutes = timeMinutes < 10 ? `0${timeMinutes}` : timeMinutes;
        const preparedTimeSeconds = timeSeconds < 10 ? `0${timeSeconds}` : timeSeconds;

        return `${preparedTimeMinutes}:${preparedTimeSeconds}`;
    }
}