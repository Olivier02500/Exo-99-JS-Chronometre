// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let a = 0;
let timeoutId = null;

let countUp = function() {
     timeoutId = setTimeout(function (){
        seconds.innerText = a.toString();
        a++;
        countUp();
        return timeoutId;
    },1000)
};
countUp();

// How can you make it stop counting?

let stopCountUp = function() {
    clearTimeout(timeoutId);
    stopButton.removeEventListener("click", stopCountUp);
};

let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

