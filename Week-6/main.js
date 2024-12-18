// const head = document.all[7]
// 
// head.innerHTML = "Merhaba Canım"

// document.getElementById
// document.getElementsByClassName

// document.querySelector
// document.querySelectorAll


// 1. Yöntem
document.getElementById("head").innerHTML = "1. Yöntem"

// 2. Yöntem
document.querySelector("#head").innerHTML = "2. Yöntem"

// 3. Yöntem
document.getElementsByClassName("heading")[2].innerHTML = "3. Yöntem"

// 4. Yöntem
document.querySelector(".heading").innerHTML = "Query Selector Classname"

// 5. Yöntem
document.querySelectorAll(".heading")[1].innerHTML = "Query Selector All Classname"


// window = {
// ...
// innerWidth: 1920,
// innerHeight: 1080,
// ...
// }



// Element Ekleme


// // element oluştur
// const listElement = document.createElement("li")
// listElement.innerHTML = "Ayva"
// // element ekle
// const liste = document.querySelector("#liste")
// liste.appendChild(listElement)



// Event Handling => ne zaman yapacağız?


// Elements
const spanClick = document.querySelector("#click")
const mouseOver = document.querySelector("#mouseOver")
const firstItem = document.querySelector(".liste")
const pWidth = document.querySelector("#width")
const pHeight = document.querySelector("#height")
const header = document.querySelector(".header")
// elemanları eventleri
// click
// mouseover
// mouseout

// window eventleri
// scroll
// resize
// focus
// blur
// keydown
// keyup

// console.log(window)
// Functions
function clickFunction() {
    const listElement = document.createElement("li")
    listElement.innerHTML = "Ayva"
    const liste = document.querySelector("#liste")
    liste.appendChild(listElement)
}

function mouseOverFunction() {
    firstItem.classList.add("changeBack")
}

function mouseOutFunction() {
    firstItem.classList.remove("changeBack")
}

// function resizeFunction() {
// pWidth.innerHTML = window.innerWidth
// pHeight.innerHTML = window.innerHeight
// if (window.innerWidth < 1000) {
//     mouseOver.innerHTML = "Küçük"
//     mouseOver.style.color = "red"
// } else {
//     mouseOver.innerHTML = "Büyük"
//     mouseOver.style.color = "green"
// }
// }

// function blurFunction() {
//     document.body.style.backgroundColor = "gray"
// }

// function focusFunction() {
//     document.body.style.backgroundColor = "lightgray"
// }

function scrollFunction() {
    // pWidth.innerHTML = window.scrollY
    // if (window.scrollY > 55) {
    //     header.style.backgroundColor = "lime"
    // } else {
    //     header.style.backgroundColor = "transparent"
    // }
}

// Event Listeners
// spanClick.addEventListener("click", clickFunction)
// mouseOver.addEventListener("mouseover", mouseOverFunction)
// mouseOver.addEventListener("mouseout", mouseOutFunction)
// window.addEventListener("resize", resizeFunction)
// window.addEventListener("blur", blurFunction)
// window.addEventListener("focus", focusFunction)
// window.addEventListener("scroll", scrollFunction)

// function callBackFunction() {
//     console.log("Call Back Function")
// }

// function firstFunction() {
//     console.log("First Function")
//     callBackFunction()
// }

// firstFunction()



function takeData() {
    pWidth.innerHTML = "Sayfa Yüklendi"
    // setTimeout(() => {
    //     pHeight.innerHTML = "Data Geldi"
    // }, 2000)
    // pWidth.innerHTML = "Datalar ile sayfa güncellendir"
    dataLoading.then(data => {
        pHeight.innerHTML = data
    }).then(() => {
        pWidth.innerHTML = "Datalar ile sayfa güncellendir"
    }).catch(err => {
        pWidth.innerHTML = "Bir hata oluştu"
    }).finally(() => {
        pHeight.innerHTML = "Data geldi ya da gelmedi"
    })
}

const dataLoading = new Promise((res, rej) => {
    const success = true
    setTimeout(() => {
        if (success) {
            res("Data Geldi")
        } else {
            rej("Data Gelmedi")
        }
    }, 2000)
}
)


takeData()