// Progress Bar
// Get Elements
const bars = document.querySelectorAll('.bars li');
const progs = document.querySelectorAll('.bars span');

//Set bar height based on the 'data' attribute value
bars.forEach(bar => {
    bar.style.height = bar.dataset.height + "em";
});

//Set progress percentage based on the 'data' attribute value
progs.forEach(prog => {
    prog.style.height = prog.dataset.fill + "%";
});

//Dropdowns 
//Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    //We are using this method in order to have
    //multiple dropdown menus on the page work

    //Add a click event to the select element
    select.addEventListener('click', () => {
        //Add the clicked select
        //select to the select element
        select.classList.toggle('select-clicked');
        //Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        //Add the open styles to the menu element
        menu.classList.toggle('menu-open');
    });

    //Loop through all option elements
    options.forEach(option => {
        //Add a click event to the option element
        option.addEventListener('click', () => {
            //Change selected inner text to clicked option inner
            selected.innerText = option.innerText;
            //Add the clicked select styles
            //to the select element
            select.classList.remove('select-clicked');
            //Add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //Add the open styles to the menu element
            menu.classList.remove('menu-open');
            //Remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            //Add active class to clicked option element
            option.classList.add('active');
        });
    });
});

//Range Sliders
//Select the main container
const rangeSliders = document.querySelectorAll('.range-slider');

//loop through all the sliders
rangeSliders.forEach(rangeSliders => {
    //Select the individual parts
    const slider = rangeSliders.querySelector('.slider');
    const thumb = rangeSliders.querySelector('.slider-thumb');
    const progress = rangeSliders.querySelector('.progress');

    //Function for handling the slider values
    function customSlider() {
        //Get Percentage
        const maxVal = slider.getAttribute("max");
        const val = (slider.value / maxVal) * 100 + "%";

        // Set thumb and prgress to current value
        progress.style.width = val;
        thumb.style.left = val;
    }

    //call function initially
    customSlider();

    //Repeat the function when the slider is selected
    slider.addEventListener("input", () => {
        customSlider();
    });
});

//Circular Progress Bar
//Get all elements from the DOM
const circles = document.querySelector('.circle');
const progressCircles = document.querySelector('.circle-progress');
const progressText = document.querySelector('.circle h1');

//Get the radius of the circle
let radius = progressCircles.r.baseVal.value;
//Get the cirumference of the circle
let circumference = radius * 2 * Math.PI;
//Set stroke dasharray to the circumference
progressCircles.style.strokeDasharray = circumference;

//Set stroke dash effect between a scale from 0 to 100
function setProgress(percent) {
    progressCircles.style.strokeDasharray = circumference - (percent/100) * circumference;
}
//Get data attribute values
const progress = circles.dataset.prog;
//Add progress text dynamically
progressText.innerHTML = progress + "%";
//Call setProgress function
setProgress(progress);

//Buttons Group / Custom Switch
const btnGroup = document.querySelectorAll('.btn-group');

//Select all 'button group' elements
for(let i=0; i<btnGroup.length; i++) {
    //Select all buttons inside the current button group
    const groupButtons = btnGroup[i].querySelectorAll('.btn-group button');

    for(let i=0; i<groupButtons.length; i++){
        //Add a click event to the buttons
        groupButtons[i].addEventListener('click', () => {
            //Remove the active class from all buttons
            for(let i=0; i<groupButtons.length; i++){
                groupButtons[i].classList.remove('active');
            }
            //And ad the active class to the clicked button
            groupButtons[i].classList.add('active');
        });
    }
}