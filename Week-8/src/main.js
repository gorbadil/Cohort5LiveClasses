import axios from "axios";

// Variables
const getDataBtn = document.querySelector("#get-data");
const content = document.querySelector("#content");
const searchInput = document.querySelector("#search");

const userName = document.querySelector("#name")
const lastName = document.querySelector("#lastname")
const age = document.querySelector("#age")
const postBtn = document.querySelector("#postBtn")

// Functions
const getDataFunc = () => {
  content.innerHTML = "";
  axios.get("https://dummyjson.com/users")
    .then(res => {
      const users = res.data.users;
      users.forEach((user, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
          <h3> ${index} ${user.firstName} ${user.lastName}</h3>
        `
        content.appendChild(div);
      })
    })
}

const searchFunc = (search) => {
  content.innerHTML = "";
  axios.get("https://dummyjson.com/users/search?q=" + search)
    .then(res => {
      const users = res.data.users;
      users.forEach((user, index) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h3> ${index} ${user.firstName} ${user.lastName}</h3>
      `

      })
    })
}

const postFunc = () => {
  const userNameValue = userName.value
  const lastNameValue = lastName.value
  const ageValue = age.value

  // fetch('https://dummyjson.com/users/add', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     firstName: userNameValue,
  //     lastName: lastNameValue,
  //     age: ageValue,
  //     /* other user data */
  //   })
  // })
  //   .then(res => res.json())
  //   .then(console.log);
  // const data = {
  //   firstName: userNameValue,
  //   lastName: lastNameValue,
  //   age: ageValue
  // }

  axios.post("https://dummyjson.com/users/add", {
    firstName: userNameValue,
    lastName: lastNameValue,
    age: ageValue
  }).then(res => console.log(res.data))
}

// Event Listeners
// getDataBtn.addEventListener("click", getDataFunc);
window.addEventListener("load", getDataFunc);

postBtn.addEventListener("click", postFunc)

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value;
  if (searchValue.length >= 3) {
    searchFunc(searchValue);
  } else if (searchValue.length === 0) {
    getDataFunc();
  }
})

// getDataBtn.addEventListener("click", () => {
//   const searchValue = searchInput.value;
//   searchFunc(searchValue);
// })
// document.addEventListener("DOMContentLoaded", getDataFunc);



// user objesi
// firstName: "string"
// lastName: "string"
// age: number
// email: "string"


// fecth("https://dummyjson.com/users").then(res => res.json()).then(data => console.log(data))
// fetch("https://dummyjson.com/users", {
//    method: "GET",
//    headers: {"Content-Type": "application/json"},
// })
// fetch("https://dummyjson.com/users", {
//    method: "POST",
//    headers: {"Content-Type": "application/json"},
//    body: JSON.strigify({
//      firstName: "Muhammad",
//      lastName: "Ovi",
//      age: 250,
// })
// })