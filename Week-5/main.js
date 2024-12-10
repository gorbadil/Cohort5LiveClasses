// console.log(name);


// Syntax () {Block Scope} Global
// Değişken

// 1. var
var name = "John"; // Global Değişken Yaratma
name = "Jane"; // Değişken Değiştirme
// 2. let
let surname = "Doe"; // Block Scope Değişken Yaratma
surname = "Smith"; // Değişken Değiştirme
// console.log(surname);
// 3. const
const age = 25; // Block Scope - Sabit Yaratma
// console.log(age);









// Veri Türleri

// // 1. Primitive (İlkel) Veri Türleri
// // String => Metin
let str = "Hello World";
// console.log(typeof str);
// // Number => Sayı
let num = 100;
// console.log(typeof num);
// // Boolean => True/False
let isTrue = false;
// console.log(typeof isTrue);
// // Undefined
// // Null

// // 2. Relative (Referans) Veri Türleri
// // Array => Dizi (Liste)
// let friend1 = "Talha"
// let friend2 = "John"
// let friend3 = "Jane"
let friends = ["Talha", "John", "Jane", 25, true, ["Apple", "Banana"], { name: "John" }];
// 0 1 2 3 4 5 6
// console.log(friends[3])
// console.log(friends[6].name)
let objArr = [{ name: "John" }, { name: "Jane" }];
// // Object => Nesne (Anahtar: Değer)
let user = {
    name: "John",
    surname: "Doe",
    age: 25,
    friends: ["Talha", "John", "Jane", { name: "John" }],
    auth: {
        username: "johndoe",
        password: { all: 123 }
    }
};

// console.log(user.auth.password.all)

// user.auth.password.all = 456;

// console.log(user.auth.password.all)




// console.log(user.friends[3].name)

// script ile main.js bağlayınca bu komut çalıştı
// var document = // index.html ile değişken türet

// document = {
//    all: [html, head, meta, title, body, 
//              h1: {...
//                 innerHTML: "Merhaba"
//                 ...}
//          ,script],
// }

// console.log(document.all)


document.all[8].innerHTML = "Değişti";

// console.log("JS ile değiştirince => " + document.all[8].innerHTML)



// HTMLAllCollection[8].innerHTML






// Operatörler 
//  // Matematiksel 

//  // Karşılaştırma

//  // Mantıksal

// Kontrol (if, switch-case, ternary) // if
// // if

// // switch-case

// // ternary

// Döngüler (for, while, do-while) // for
// // for

// // while

// // do-while










// Fonksiyonlar // function

// // function
// => Yazılımcının üşengeçliğinden türettiği çözümdür
// function nameLog(değişken verme yeri) {
// ne iş yapacağı
// }

// parametre => fonksiyon içine verilen değer
// function nameLog(belirttim) {
//     console.log("John " + belirttim);
// }

// nameLog("Doe");

// function addSurname(surname) {
//     return "John " + surname;
// }
//           <--return--  <--parametre-->
// let fullName = addSurname("Doe");

// console.log(addSurname("Doe"));
// console.log(fullName)



// func => sürekli aynı şeyi yapmamak için işlemler yazdım
// // bu işlemleri vereceğim değişkene göre çeşitlenmesini istedim
// // bu işlem çıktısını almak istediğimde return ile sonuç aldım




// // Arrow Function => func farklı yazma biçimi 
function normalFunc(hebele) {
    return "Normal Function" + hebele;
}

const arrowFunc = (hebele) => {
    return "Arrow Function" + hebele;
}

const newArrowFunc = hebele => "Arrow Function" + hebele;
const nonParamArrowFunc = () => "Arrow Function";