import Dog from "../assets/köpek.jpg";
import Cat from "../assets/cat.jpg";
import Apple from "../assets/apple.jpg";
import Car from "../assets/car.jpeg";

export const tabooCards = [
    {
        word: "Köpek",
        forbiddenWords: ["Hayvan", "Hav Hav", "Dört Ayaklı", "Havlu", "Kuyruk"],
        image: Dog
    },
    {
        word: "Kedi",
        forbiddenWords: ["Hayvan", "Miyav", "Dört Ayaklı", "Patili", "Kuyruk"],
        image: Cat
    },
    {
        word: "Elma",
        forbiddenWords: ["Meyve", "Kırmızı", "Yaz", "Yeşil", "Kış"],
        image: Apple
    },
    {
        word: "Araba",
        forbiddenWords: ["Taşıt", "Motor", "Tekerlek", "Sürücü", "Yol"],
        image: Car
    }
]