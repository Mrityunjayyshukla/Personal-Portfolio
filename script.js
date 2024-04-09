const dynamicText = document.querySelector(".intro-text h3 span")
const words = ["CSE Student", "UI/UX Designer", "3D Designer", "Flutter Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    // console.log(currentWord, currentChar);
    dynamicText.textContent = currentChar;

    if (!isDeleting && charIndex<currentWord.length){
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if(isDeleting && charIndex>0){
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        // If word is deleted, type the next word
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex+1) % words.length : wordIndex;
        setTimeout(typeEffect,1000);
    }
}

typeEffect();

//Time
setInterval(setTime, 1000);
setTime();
function setTime() {
    var dt = new Date();
    time = dt.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    document.getElementById('date-time').innerHTML = time;
}

//Navigation
function navigateToYoutube(){
    window.location.href = "https://youtube.com";
}

// Projects Tab Bar
// Set default active tab
document.getElementById('tab1').style.display = "block";
document.querySelector('.tab-button.active').classList.remove('active');
document.querySelector('.tab-button').classList.add('active');
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Project Sliders
//Get all accordian items from DOM
const items = document.querySelectorAll(".accordian-item");
//loop through each accordian 
items.forEach((item)=> {
    // Add click event to each item
    item.addEventListener("click", ()=>{
        // Loop through each item again
        items.forEach(item => {
            // Remove active class from all items
            item.classList.remove("item-active");
        });
        
        // Add active class to clicked item
        item.classList.add("item-active");
    });
});

//Popup card
document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skills_data');

    skillItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const popupCard = document.getElementById('popup-card');
            const popupTitle = popupCard.querySelector('.popup__title'); // Updated class name
            const popupSubtitle = popupCard.querySelector('.skills__subtitle');
            
            // Get data from clicked skill item
            const title = item.querySelector('.skills__name').textContent;
            const subtitle = item.querySelector('.skills__subtitle').textContent;

            // Set data to popup card
            popupTitle.textContent = title;
            popupSubtitle.textContent = subtitle;

            // Show the popup card
            popupCard.classList.add('popup-active');
        });
    });

    // Close popup when clicking outside the content
    const popupCard = document.getElementById('popup-card');
    popupCard.addEventListener('click', function (event) {
        if (event.target === this) {
            this.classList.remove('popup-active');
        }
    });
});

