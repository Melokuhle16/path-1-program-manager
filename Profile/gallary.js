const images = [

    "program1.jpg",

    "program2.jpg",

    "program3.jpg",

    "program4.jpg",

    "program5.jpg",

    "program6.jpg"

];

const galleryImage = document.getElementById("galleryImage");

const imageCount = document.getElementById("imageCount");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function showImage(){

    galleryImage.src = images[currentIndex];

    imageCount.textContent =
    (currentIndex + 1) + " of " + images.length;

}

showImage();

nextBtn.addEventListener("click", function(){

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    showImage();

});

prevBtn.addEventListener("click", function(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    showImage();

});