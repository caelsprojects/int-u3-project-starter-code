// Declare variables below to save the different divs of your story.

let openingStory = document.querySelector(".story-opening")

let optionOneButton = document.querySelector(".option-one")
let optionTwoButton = document.querySelector(".option-two")

let optionOneScreen = document.querySelector(".option-one-screen")
let optionTwoScreen = document.querySelector(".option-two-screen")

let optionOneEnd = document.querySelector(".option-one-end")
let optionTwoEnd = document.querySelector(".option-two-end")



let title = document.querySelector('.title')






// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

title.addEventListener('click', function() {
    openingStory.style.display = "block";
    optionOneScreen.style.display = "none";
optionOneEnd.style.display = "none";
optionTwoEnd.style.display = "none";
optionTwoScreen.style.display = "none";
});

optionOneButton.addEventListener('click', function() {
openingStory.style.display = "none";
optionOneScreen.style.display = "block";
optionOneEnd.style.display = "block";
optionTwoEnd.style.display = "none";
optionTwoScreen.style.display = "none";

});

optionTwoButton.addEventListener('click', function(){
openingStory.style.display = "none";
optionTwoEnd.style.display = "block";
optionTwoScreen.style.display = "block";
optionOneScreen.style.display = "none";
optionOneEnd.style.display = "none";
 });


// INSERT_VARIABLE.addEventListener('click', function(){

// });