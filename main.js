const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
];
const morseLetters = [
  ".___",
  "___...",
  "___.___.",
  "___..",
  ".",
  "..___.",
  "______.",
  "....",
  "..",
  "._________",
  "___.___",
  ".___..",
  "______",
  "___.",
  "_________",
  ".______.",
  "______.___",
  ".___.",
  "...",
  "_",
  "..___",
  "...___",
  ".______",
  "___..___",
  "___.______",
  "______..",
  ".____________",
  ".._________",
  "...______",
  "....___",
  ".....",
  "___....",
  "______...",
  "_________..",
  "____________.",
  "_______________"
];

// const morseLetters = [". ___", "___ . . .", "___ . ___ .", "___ . .", ".", ". . ___ .", "___ ___ .", ". . . .", ". .", ". ___ ___ ___", "___ . ___", ". ___ . .", "___ ___", "___ .", "___ ___ ___", ". ___ ___ .", "___ ___ . ___", ". ___ .", ". . .", "_", ". . ___", ". . . ___", ". ___ ___", "___ . . ___", "___ . ___ ___", "___ ___ . .", ". ___ ___ ___ ___", ". . ___ ___ ___", ". . . ___ ___", ". . . . ___", ". . . . .", "___ . . . .", "___ ___ . . .", "___ ___ ___ . .", "___ ___ ___ ___ .", "___ ___ ___ ___ ___"];

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

// const convert = () => {
//     index(getInputValue(findInputType()))
// }

// const getInputValue = () => {
//     const inputValue = document.getElementById('message').value.split("");
//     const copyOfInputValue = inputValue.map(lowCase => {
//         return lowCase.toLowerCase()
//     })
//     return copyOfInputValue
// }

// const index = (inputValues) => {
//     let indexOfLetters = "";
//     for (index = 0; index < inputValues.length; index++) {
//         for (j = 0; j <= 36; j++) { }
//     }
// }

// const findInputType = () => {
//     if (getInputValue().includes("-" && " . ")) {
//         copyOfInputValue[index] === morseLetters[j] ? indexOfLetters += letters[j] : indexOfLetters += morseLetters[j]
//     }
//     document.getElementById("output").innerHTML = findInputType();
// }

// document.getElementById("output").innerHTML = convert();

// copyOfInputValue[index] === letters[j] ? indexOfLetters += morseLetters[j] : null
// copyOfInputValue[index] === morseLetters[j] ? indexOfLetters += letters[j] : null
// }

// Every letter in inputValue
// find its index number
// use index number to get morse lette

// const outPutValue =

const convert = () => {
  const inputValue = document.getElementById("message").value.split(" ");

  const copyOfInputValue = inputValue.map(lowCase => {
    return lowCase.toLowerCase();
  });
  let indexOfLetters = "";
  for (index = 0; index < copyOfInputValue.length; index++) {
    for (j = 0; j <= 36; j++) {
      copyOfInputValue[index] === letters[j]
        ? (indexOfLetters += morseLetters[j])
        : null;
      copyOfInputValue[index] === morseLetters[j]
        ? (indexOfLetters += letters[j])
        : null;
    }
    document.getElementById("output").innerHTML = indexOfLetters;
  }
};

// input and outputs
// const splitStringToArray = (string) => {
//     inputValue = string.split("")
//     return inputValue.map(lowCase => lowCase.toLowerCase())
// }

// splitStringToArray(document.getElementById('message').value)

// const translateText = (stringArray) => {
//     let indexOfLetters = "";
//     for (index = 0; index < stringArray.length; index++) {
//         for (j = 0; j <= 36; j++) {
//             stringArray[index] === letters[j] ? indexOfLetters += morseLetters[j] : null
//             stringArray[index] === morseLetters[j] ? indexOfLetters += letters[j] : null
//         }
//     }
//     return indexOfLetters;
// }

// const convert = () => {
//     const inputString = document.getElementById('message').value

//     const copyOfInputValue = splitStringToArray(inputString)
//     const outputString = translateText(copyOfInputValue)
//     document.getElementById("output").innerHTML = outputString;
// }
