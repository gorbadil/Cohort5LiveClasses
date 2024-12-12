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


// document.all[8].innerHTML = "Değişti";

// console.log("JS ile değiştirince => " + document.all[8].innerHTML)



// HTMLAllCollection[8].innerHTML











let result;

// Operatörler 
//  // Matematiksel 
// 0. Atama Operatörleri
let x = 6;
// x = 10;
let y = 3;
// 1. Toplama

// console.log(x + y);

// 2. Çıkarma
result = x - y;
// 3. Çarpma
result = x * y;
// 4. Bölme
result = x / y;
// 5. Bölmeden Kalan
result = x % y;
// 6. Üs Alma
result = x ** y;




x = 6;
y = "6";
//  // Karşılaştırma // true, false
// 1. Eşitlik
result = (x == y)
// 2. Daha Eşitlik
result = (x === y)
// 3. Eşit Değildir
result = (x != y)
// 4. Daha Eşit Değildir
result = (x !== y)
// 5. Küçüktür
result = (x < y)
// 6. Büyüktür
result = (x > y)
// 7. Küçük Eşittir
result = (x <= y)
// 8. Büyük Eşittir
result = (x >= y)


//  // Mantıksal
// 1. ve (&&)
// 1. sorgu ve 2. sorgu.......... ve 3. sorgu
// Hepsi true olursa true
//        true          false          false
result = ((x == y) && (x === y))

// 2. veya (||)
// 1. sorgu veya 2. sorgu.......... veya 3. sorgu
// Hepsi false olursa false
//        true          false          true
result = ((x == y) || (x === y))

// 3. değil (!)

result = !false





// let yas = 40;
// Kontrol (if, switch-case, ternary) /s/ if
// // if

// if (yas < 30) {
//     console.log("Yaşınız 30'dan büyük")
// } else if (yas > 18) {
//     console.log(yas)
// } else if (yas == 18) {
//     console.log("Sınırdan olur bu iş")
// } else {
//     console.log("Yaşın Yetmez Konuşmaya")
// }


// // switch-case

// let day = 10;

// if (day == 1) {
//     console.log("Pazartesi")
// } else if (day == 2) {
//     console.log("Salı")
// } else if (day == 3) {
//     console.log("Çarşamba")
// }

// switch (day) {
//     case 1: console.log("Pazartesi"); break;
//     case 2: console.log("Salı"); break;
//     case 3: console.log("Çarşamba"); break;
//     case 4: console.log("Perşembe"); break;
//     case 5: console.log("Cuma"); break;
//     case 6: console.log("Cumartesi"); break;
//     case 7: console.log("Pazar"); break;
//     default: console.log("Geçersiz Gün"); break;
// }

// ternary // yazım biçimi

let not = 40;

// if (not >= 50) {
//    result = "Geçti";
// } else {
//     result = "Kaldı";
// }

//     if(not >= 50){       }else{     }
// result = not >= 50 ? "Geçti" : "Kaldı";

//     if(true){        }
// result = (not > 50) && "Geçti"











// Döngüler (for, while, do-while) // for
// // while

//  1 kere çalışır
// if (true) {

// }

// true kaldığı sürece çalışır
// let count = 0;
// 0 1 2 3 4
// while (count < 5) {
//     console.log("count = " + count);
//     count = count + 1;
// }

// // for
// 0 1 2 3 4
// for (let count = 0; count < 5; count++) {
//     console.log("count = " + count);
// }



// // do-while
// let sayi = 0;

// do {
//     console.log("sayı = " + sayi);
//     sayi++;
// }
// while (sayi > 5)

// do {
// üyelik bilgisi al
// } while (üyelik bilgisi eksikse)

// while (üyelik bilgisi eksikse) {
// üyelik bilgisi al
// }

// break, continue
// let limit = kullanıcıdan alınıyor
// let limit = 100;
// for (let count = 0; count < limit; count++) {
//     if (count == 20) {
//         break;
//     }
//     console.log("count = " + count);
// }

// for (let count = 0; count < 10; count++) {
//     if (count == 5) {
//         continue;
//     }
//     console.log("count = " + count);
// }





















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


// console.log("result = " + result)










// FizzBuzz
// 1'den 100'e kadar olan sayıları yazdır
// 3'e bölünen sayılar yerine "Fizz"
// 5'e bölünen sayılar yerine "Buzz"
// 3 ve 5'e bölünen sayılar yerine "FizzBuzz"
// değilse sayıyı yaz

// for while do-while

for (let count = 1; count <= 100; count++) {
    if (count % 15 === 0) {
        console.log("FizzBuzz");
    } else if (count % 3 === 0) {
        console.log("Fizz");
    } else if (count % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(count);
    }
}



