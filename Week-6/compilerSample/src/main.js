// import axios from 'axios';
// import pokemon from "pokemon"

// const chuck = [
//     {
//         "categories": [],
//         "created_at": "2020-01-05 13:42:21.179347",
//         "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png",
//         "id": "pk4U6JakQrKvmq0iZWysOg",
//         "updated_at": "2020-01-05 13:42:21.179347",
//         "url": "https://api.chucknorris.io/jokes/pk4U6JakQrKvmq0iZWysOg",
//         "value": "Chuck Norris is the only man to ever win a game of chess in one move. A round-house kick to the head!"
//     },
//     { "categories": [], "created_at": "2020-01-05 13:42:19.576875", "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png", "id": "bTLpHcYVQoOfCL2gQFK0ww", "updated_at": "2020-01-05 13:42:19.576875", "url": "https://api.chucknorris.io/jokes/bTLpHcYVQoOfCL2gQFK0ww", "value": "They once made a Chuck Norris toilet paper, but it wouldn't take sh** from anybody." },
//     { "categories": ["explicit"], "created_at": "2020-01-05 13:42:29.855523", "icon_url": "https://api.chucknorris.io/img/avatar/chuck-norris.png", "id": "Kdy3tu6-RQ-4mIMR76rJeQ", "updated_at": "2020-01-05 13:42:29.855523", "url": "https://api.chucknorris.io/jokes/Kdy3tu6-RQ-4mIMR76rJeQ", "value": "Some men hunt deer for sport. Chuck Norris hunts hunters for sport and his penis hunts virgins for sport." }
// ]
// Variables
// const parag = document.querySelector("#chuck")
// const button = document.querySelector("#newJoke")

// const randomIndex = Math.floor(Math.random() * 350)

// parag.innerHTML = randomIndex

// parag.innerHTML = chuck[randomIndex].value

// 1. function
// 2. async function
// async function getData() {

// fetch Promise ile yazılmış bir built-in function



// const response = await fetch("https://api.chucknorris.io/jokes/random")
// const data = await response.json()
// parag.innerHTML = data.value

// fetch("https://api.chucknorris.io/jokes/random")
//     .then(res => res.json())
//     .then(data => parag.innerHTML = data.value)


// 1. await fetch
// try {
//     const responseAwait = await fetch("https://api.chucknorris.io/jokes/random")
//     const dataAwait = await responseAwait.json()
//     parag.innerHTML = dataAwait.value
// } catch (err) {
//     console.log(err)
// } finally {
//     console.log("1. İşlem Tamamlandı")
// }
// 1.1 await axios
// const res = await axios.get("https://api.chucknorris.io/jokes/random")
// parag.innerHTML = res.data.value










// 2. then


// fetch("https://api.chucknorris.io/jokes/random")
//     .then(responseThen => responseThen.json())
//     .then(dataThen => parag2.innerHTML = dataThen.value)
//     .catch(err => console.log(err))
//     .finally(() => console.log("2. İşlem Tamamlandı"))
// 2.2 axios then
// axios.get("https://api.chucknorris.io/jokes/random")
//     .then(res => parag.innerHTML = res.data.value)
//     .catch(err => console.log(err))
//     .finally(() => console.log("2. İşlem Tamamlandı"))



// console.log(res.data.value)




// 
// }




// Event Listener
// button.addEventListener("click", getData)






// console.log(pokemon.random())

// pokemon bir app => benimle iletişimine API


// console.log(randomIndex)

const kare = document.querySelector(".kare")


function sleep() {
    return new Promise(res => setTimeout(res, 1000))
}

async function hophop() {
    kare.classList.add("scale")
    await sleep()
    kare.classList.remove("scale")
    await sleep()
    kare.classList.add("scale")
    await sleep()
    kare.classList.remove("scale")
    await sleep()
    kare.classList.add("scale")
    await sleep()
    kare.classList.remove("scale")
    await sleep()
    kare.classList.add("scale")
    await sleep()
    kare.classList.remove("scale")
}

sleep().then(() => {
    sleep().then(() => {
        console.log("sleep")
    }
    )
})

hophop()