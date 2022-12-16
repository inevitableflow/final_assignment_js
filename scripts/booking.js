/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35;
let numberOfDays = 0;
let cost = 0;

const monButton = document.getElementById('monday');
const tueButton = document.getElementById('tuesday');
const wedButton = document.getElementById('wednesday');
const thuButton = document.getElementById('thursday');
const friButton = document.getElementById('friday');

const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');

const clearButton = document.getElementById('clear-button');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function onMonButton(event) {
    if (event.target.classList.contains('clicked')) {
        event.target.classList.remove('clicked');
        numberOfDays -=1;
        recalculate();
    } else {
        event.target.classList.add('clicked');
        numberOfDays += 1;  
        recalculate();
    }
}

monButton.onclick = onMonButton;

function onTueButton(event) {
    if (event.target.classList.contains('clicked')) {
        event.target.classList.remove('clicked');
        numberOfDays -=1;
        recalculate();
    } else {
        event.target.classList.add('clicked');
        numberOfDays += 1;
        recalculate();
    }
}

tueButton.onclick = onTueButton;

function onWedButton(event) {
    if (event.target.classList.contains('clicked')) {
        event.target.classList.remove('clicked');
        numberOfDays -=1;
        recalculate();
    } else {
        event.target.classList.add('clicked');
        numberOfDays += 1;
        recalculate();
    }
}

wedButton.onclick = onWedButton;

function onThuButton(event) {
    if (event.target.classList.contains('clicked')) {
        event.target.classList.remove('clicked');
        numberOfDays -=1;
        recalculate();
    } else {
        event.target.classList.add('clicked');
        numberOfDays += 1;
        recalculate();
    }
}

thuButton.onclick = onThuButton;

function onFriButton(event) {
    if (event.target.classList.contains('clicked')) {
        event.target.classList.remove('clicked');
        numberOfDays -=1;
        recalculate();
    } else {
        event.target.classList.add('clicked');
        numberOfDays += 1;
        recalculate();
    }
}

friButton.onclick = onFriButton;

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function resetButtons() {
    monButton.classList.remove('clicked');
    tueButton.classList.remove('clicked');
    wedButton.classList.remove('clicked');
    thuButton.classList.remove('clicked');
    friButton.classList.remove('clicked');
    numberOfDays = 0;
}

function onClearButton() {
    resetButtons();
    cost = 0;
    document.getElementById('calculated-cost').innerHTML = 0;
}

clearButton.addEventListener('click', onClearButton);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function onHalfButton() {
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    costPerDay = 20;
    recalculate();
}

halfButton.addEventListener('click', onHalfButton);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function onFullButton() {
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    costPerDay = 35;
    recalculate();
}

fullButton.addEventListener('click', onFullButton);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
    cost = numberOfDays * costPerDay;
    document.getElementById('calculated-cost').innerHTML = cost;
}
