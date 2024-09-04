//initialize the slide index
let currentSlideIndex = 0;

//creating the show and hide logic
function showSlide(index){
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("dot");
    //condition check if the index is greater than or equal to the number of slides.
    //If it is true then it will reset the currentSlideIndex to 0(first Image). This will
    //loop back to 
    if(index>=slides.length){
        currentSlideIndex = 0;
    }else if(index<0){
        currentSlideIndex = slides.length - 1;
    }


    //hide all slides
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    //remove active class from all dots
    for(let i=0; i < dots.length; i++){
       dots[i].className = dots[i].className.replace("dot-active","");
    }

    //display the current slide and set the corresponding dot as active
    slides[currentSlideIndex].style.display = "block";
    dots[currentSlideIndex].className += " dot-active";

    //assigning the current image src to img in popup
    const popupImage = document.getElementById("popup-image");
    popupImage.src = slides[currentSlideIndex].src;
}

//function to change the slide
function changeSlide(n){
    showSlide((currentSlideIndex += n));
}

function currentSlide(n){
    showSlide((currentSlideIndex = n));
}

//initial display setup
showSlide(currentSlideIndex); 

//Level 2 code for open and close the popup
function openPopup(){
    const modal = document.getElementById("imagePopup");
    modal.style.display = "flex";
}

function closePopup(){
    const modal = document.getElementById("imagePopup");
    modal.style.display = "none";
}