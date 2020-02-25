const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const morseLetters = [". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .", "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___"];





// var textToChange = document.getElementById("textToConvert").value;
// var newText = "";
// for (var i = 0; i < textToChange.length; i++) {
// for (var j = 0; j < 37; j++) {
// if (textToChange[i].toLowerCase() == letters[j]) {
// newText += morseLetters[j];
// newText += "\xa0\xa0\xa0";
// break;
// }    
// }
// }
//  document.getElementById("newText").innerHTML = newText};




// const wat = [". ___", "___ . . .", "___ . ___ ."];
// const dafuq = wat.map(lowerCase => {
//     return lowerCase.toLowerCase()
// });
// let newText = "";
// for (i = 0; i < dafuq.length; i++) {
//     for (j = 0; j < 37; j++) {
//         dafuq[i] === letters[j] ? newText += morseLetters[j] : null
//         dafuq[i] === morseLetters[j] ? newText += letters[j] : null
//     }
// }
// console.log(newText);



const convert = () => {
    const inputValue = document.getElementById('message').value.split("");
    const copyOfInputValue = inputValue.map(lowCase => {
        return lowCase.toLowerCase()
    })
    let indexOfLetters = "";
    for (index = 0; index < copyOfInputValue.length; index++) {
        for (j = 0; j <= 36; j++) {
            copyOfInputValue[index] === letters[j] ? indexOfLetters += morseLetters[j] : null
            copyOfInputValue[index] === morseLetters[j] ? indexOfLetters += letters[j] : null
        }
        document.getElementById("output").innerHTML = indexOfLetters;
    }
}

// const checkIt = () => {
// let message = document.getElementById('message');
// console.log(message);
// }













// Every letter in inputValue
// find its index number
// use index number to get morse letter

// const outPutValue = 