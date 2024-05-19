
window.onload = function() {
let currentState = 'red';
let red = document.getElementById('circleRed');
let green = document.getElementById('circleYellow');
let yellow = document.getElementById('circleGreen');
let timeoutId;
function trafficHandling() {
    clearTimeout(timeoutId) //! Clear any existing timeout
    if (currentState === 'red') {
        setTimeout(() => {
            currentState = 'green';
            green.style.backgroundColor = 'green';
            red.style.backgroundColor = 'black';
            yellow.style.backgroundColor = 'black';
            trafficHandling(); //! Continue to the next state
        }, 1200); 
    } else if (currentState === 'green') {
        setTimeout(() => {
            currentState = 'yellow';
            yellow.style.backgroundColor = 'yellow';
            green.style.backgroundColor = 'black';
            red.style.backgroundColor = 'black';
            trafficHandling();
        }, 1400); 
    } else if (currentState === 'yellow') {
        setTimeout(() => {
            currentState = 'red';
            red.style.backgroundColor = 'red';
            yellow.style.backgroundColor = 'black';
            green.style.backgroundColor = 'black';
            trafficHandling(); 
        }, 1500); 
    }
}
function manualHandling(e) {
    clearTimeout(timeoutId); //! Stop the automatic transitions
    currentState = e.target.id.replace('circle', '').toLowerCase(); // Set the state based on the clicked circle
    updateStates();
    alert(`Manual transition to ${currentState}`); 
    trafficHandling(); //! Restart the automatic transitions
}

function updateStates() {
    red.style.backgroundColor = (currentState === 'red') ? 'red' : 'black';
    green.style.backgroundColor = (currentState === 'green') ? 'green' : 'black';
    yellow.style.backgroundColor = (currentState === 'yellow') ? 'yellow' : 'black';
}

red.addEventListener('click', manualHandling);
green.addEventListener('click', manualHandling);
yellow.addEventListener('click', manualHandling);
//! Start the initial state
trafficHandling();
};




