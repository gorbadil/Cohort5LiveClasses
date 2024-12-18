// Have the function LongestWord(sen) take the sen parameter being passed 
// and return the longest word in the string. If there are two or more words 
// that are the same length, return the first word from the string with that 
// length. Ignore punctuation and assume sen will not be empty. Words may also 
// contain numbers, for example "Hello world123 567"

// Input: "I love dogs"
// Output: love

// Input: "fun&!! time"
// Output: time

const param = "I love dogs";
const paramArr = ["I", " ", "l", "o", "v", "e", " ", "d", "o", "g", "s"];


//  00000000 => 0

// 0 => 2 ** 0 = 1
// 1 => 2 ** 1 = 2
// 2 => 2 ** 2 = 4
// 3 => 2 ** 3 = 8
// 4 => 2 ** 4 = 16
// 5 => 2 ** 5 = 32
// 6 => 2 ** 6 = 64
// 7 => 2 ** 7 = 128

// 00000000 => 0
// 00000001 => 1
// 10010010 => 146
// 128 + 16 + 2 = 146


function LongestWord(str) {
    let word = "";
    let res = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === " ") {
            if (word.length > res.length) {
                res = word;
                word = "";
            }
        }

        if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
            // console.log(char)
            word += char;
        }

    }
    return res;
}

console.log(LongestWord(param));

// MasterCard, Visa, American Express => kart numaralarının algoritması vardır
