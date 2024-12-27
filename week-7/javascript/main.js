// const headr = document.querySelector(".red")
// headr.innerHTML = "Hello World"
// headr.classList.remove("red")

// const list = document.createElement("ul")
// document.body.appendChild(list)
// const listItem1 = document.createElement("li")

// list.appendChild(listItem1)

// listItem1.innerHTML = "Hello"
// listItem1.classList.add("blue")
// const listItem2 = document.createElement("li")
// list.appendChild(listItem2)
// listItem2.innerHTML = "World"



// document objesi
// 1. HTML element üretebiliyoruz
// 1.1. Elementi kullanıcıdan alınan bilgiyle güncelleme
// 2. Üretilen elementi sayfaya ekleyebiliyoruz
// 3. Element silebiliyoruz
// 4. Class ekleyebiliyoruz
// 5. Class silebiliyoruz

// window objesi
// 1. window size
// 2. scroll
// 3. mouse position





// <ul>
{/* <li>Hello</li> */ }
{/* <li>World</li> */ }
// </ul>



// 1. neyin değişmesini istiyoruz
// Variables
// // 1. olan html elementi
// // 2. ürettiğimiz html elementi olabilir


// Functions
// // Değişiğin ne olacağını belirleyen fonksiyonlar

// Event Listeners
// // Değişikliğin ne zaman olacağı



// neyin değişmesini istiyoruz
// body elementinin
const buton = document.querySelector("#eklebtn")
const eklediv = document.querySelector("#eklediv")
const side = document.querySelector(".side")
const kedi = document.querySelector(".kedi")
const navbar = document.querySelector(".navbar")

// class değiştirmek
// add, remove, toggle

// function



function addParag() {
    const parag = document.createElement("p")
    parag.innerHTML = "Buton Tıklandı"
    parag.classList.add("blue")
    eklediv.appendChild(parag)
}

function hidePanel() {
    side.classList.toggle("side-right")
}



// ne zaman istiyorum
// event listener
// eklebtn.addEventListener("click", addParag)
eklediv.addEventListener("click", function ekleFunc(event) {
    // console.log(event.target.classList) // ["blue"]
    const classlist = event.target.classList
    // if (classlist.contains("blue")) {
    //     event.target.classList.remove("blue")
    // } else {
    //     event.target.classList.add("blue")
    // }
    classlist.toggle("red")
})

function addNavbarWhite() {
    // navbar.classList.add("navbar-white")
    navbar.style.backgroundColor = "white"
}

function removeNavbarWhite() {
    // navbar.classList.remove("navbar-white")
    navbar.style.backgroundColor = "transparent"
}

// Database => Veri ile iletişim
// Verileri değişkene alırsınız, Object, Array

// window.addEventListener("mousemove", function (event) {
// console.log(event.clientX, event.clientY)
//     kedi.style.left = event.clientX + "px"
//     kedi.style.top = event.clientY + "px"
// })

// window.addEventListener("blur", function () {
//     kedi.style.display = "none"
// })

// window.addEventListener("focus", function () {
//     kedi.style.display = "block"
// })

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        addNavbarWhite()
    } else {
        removeNavbarWhite()
    }
})