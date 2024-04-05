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

//Navigation
function navigateToYoutube(){
    window.location.href = "https://youtube.com";
}

//Time
setInterval(setTime, 1000);
setTime();
function setTime() {
    var dt = new Date();
    time = dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});
    document.getElementById('date-time').innerHTML = time;
}
