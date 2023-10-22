
const durationnInput = document.querySelector('#duration');

const StartButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffset = 0;

const timer = new Timer(durationnInput, StartButton, pauseButton, {
    onStart() {
        console.log('Timer starter');
    },

    onTick() {
        circle.setAttribute('stroke-dashoffset', currentOffset);
        currentOffset = currentOffset - 1;
    },

    onComplete() {

    }

});
