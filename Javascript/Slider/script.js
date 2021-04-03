var photos = [
    {
        name: "Londra Photo 1",
        imageSrc: "images/foto1.jpg",
        link: "https://en.wikipedia.org/wiki/London",
    },
    {
        name: "Londra Photo 2",
        imageSrc: "images/foto2.jpg",
        link: "https://en.wikipedia.org/wiki/London",
    },
    {
        name: "Londra Photo 3",
        imageSrc: "images/foto3.jpg",
        link: "https://en.wikipedia.org/wiki/London",
    },
    {
        name: "Londra Photo 4",
        imageSrc: "images/foto4.jpg",
        link: "https://en.wikipedia.org/wiki/London",
    },
    {
        name: "Londra Photo 5",
        imageSrc: "images/foto5.jpg",
        link: "https://en.wikipedia.org/wiki/London",
    }
]
var index = 0;
var slideNumber = photos.length;

var interval;

var settings = {
    duration: "2000",
    random: false
};

init(settings);

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter", function() {
        clearInterval(interval);        
    });
});

document.querySelectorAll(".arrow").forEach(function(item) {
    item.addEventListener("mouseleave", function() {
        init(settings);         
    });
});

function init(settings) {
    // for check random number not same with previous one
    var prev; 

    interval = setInterval(function() {
        if (settings.random) {
            // make random index
            index = Math.floor(Math.random() * slideNumber);
            //console.log(index);
            while (prev == index) {
                index = Math.floor(Math.random() * slideNumber);
            }
            prev = index;  
            showSlide(index);
        }
        else {
            // incremental index
            //console.log(index);
            if (index == slideNumber) {
                index = 0;
            }
            showSlide(index);
            index++;
        }
    },settings.duration)
}

//fas fa-arrow-circle-left fa-2x

document.querySelector(".fa-arrow-circle-left").addEventListener("click", function() {
    index--;
    showSlide(index);
});

document.querySelector(".fa-arrow-circle-right").addEventListener("click", function() {
    index++;
    showSlide(index);
});

function showSlide(indexI) {

    index = indexI;

    if (index < 0) {
        index = slideNumber - 1;
    }
    else if (index >= slideNumber) {
        index = 0;
    }
    document.querySelector(".card-img-top").setAttribute("src", photos[index].imageSrc);
    document.querySelector(".card-title").textContent = photos[index].name;
    document.querySelector(".card-link").setAttribute("href", photos[index].link);
} 
