class Timer {
    constructor(durationnInput, StartButton, pauseButton, callbacks) {
        this.durationnInput = durationnInput;
        this.StartButton = StartButton;
        this.pauseButton = pauseButton;

        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.StartButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {

        if(this.onStart) {
            this.onStart()
        }

        this.tick();
         this.intervalId = setInterval(this.tick, 50);
    }

    pause = () => {
        clearInterval(this.intervalId)
    }

    tick = () => {
        if(this.timeRemaining <= 0) {
            this.pause()

            if(this.onComplete) {
                this.onComplete()
            }
        }else {
            this.timeRemaining = this.timeRemaining - 0.05;
            if(this.onTick) {
                this.onTick();
            }
        }

    }

    
    //Gettings
    get timeRemaining() {
        return parseFloat(this.durationnInput.value);
    }

    //Setterss
    set timeRemaining(time) {
        this.durationnInput.value = time;
    }
}
