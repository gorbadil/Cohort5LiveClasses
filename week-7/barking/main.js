// Constants

const imgArr = [
    "./images/cocktail.jpg",
    "./images/cocktail.png",
    "./images/gallery1.jpeg",
    "./images/liveActions.jpg",
    "./images/otopark.jpg",
    "./images/service.jpg",
]
let index = 0;

// Variables
const featuresImg = document.querySelector("#featuresImg");
const featuresH2 = document.querySelector("#featuresH2");
const featuresP = document.querySelector("#featuresP");
const galleryImg = document.querySelector("#galleryImg");
const navbar = document.querySelector("#navbar");

const galleryBtns = document.querySelector("#gallery-button");
const featuresBtns = document.querySelector("#features-buttons")

// Functions

function changeToService() {
    featuresImg.src = "./images/service.jpg";
    featuresH2.textContent = "Service";
}

function changeToCoctail() {
    featuresImg.src = "./images/cocktails.jpg";
    featuresH2.textContent = "Coctails";
}

function changeToCarPark() {
    featuresImg.src = "./images/otopark.jpg";
    featuresH2.textContent = "Car Park";
}

function changeToLiveActions() {
    featuresImg.src = "./images/liveActions.jpg";
    featuresH2.textContent = "Live Actions";
}

// Event Listeners
featuresBtns.addEventListener("click", function (event) {
    const id = event.target.id;
    switch (id) {
        case "coctail":
            changeToCoctail();
            break;
        case "service":
            changeToService();
            break;
        case "car-park":
            changeToCarPark();
            break;
        case "live-actions":
            changeToLiveActions();
            break;
        default:
            return;
    }
})

galleryBtns.addEventListener("click", function (event) {
    const id = event.target.id;
    if (id === "prev") {
        index--;
        if (index < 0) {
            index = imgArr.length - 1;
        }
        galleryImg.src = imgArr[index];
    } else if (id === "next") {
        index++;
        if (index >= imgArr.length) {
            index = 0;
        }
        galleryImg.src = imgArr[index];
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("bg-white")
    } else {
        navbar.classList.remove("bg-white")
    }
})