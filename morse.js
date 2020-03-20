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

const mixedLetters = ["a", "b", "c", "d", "E", "F"];
const mixedWords = ["Baba", "__ . . .. _____ . . .. ___"];

const wat = () => {
  const inputText = document.getElementById("message").value;
  const newInputText = inputText.toLocaleLowerCase().split("");
  console.log(newInputText);
};

//get input form DOM
//if input is in letters, split it and change it to lower case
//find its index number
//use index number to display in morse letters
// output the result
