const alphabetLetters = [
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
  "0",
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
  "_______________",
];

const getInputValue = () => {
  const inputValue = document
    .getElementById("message")
    .value.toLowerCase()
    .split("");
  console.log(inputValue);
  inputValue.forEach((letter) => {
    const indexOfLetter = alphabetLetters.indexOf(letter);
    console.log(morseLetters[indexOfLetter]);
    document.getElementById("output").innerHTML += morseLetters[indexOfLetter];
  });
};

// const myFunction = () => {
//   var char = "a";
//   var indexOfChar = alphabetLetters.indexOf(char);
//   console.log(indexOfChar);
// };

//get input form DOM
//if input is in letters, split it and change it to lower case
//find its index number
//use index number to display in morse letters
// output the result
// Every letter in inputValue
// find its index number
// use index number to get morse lette
