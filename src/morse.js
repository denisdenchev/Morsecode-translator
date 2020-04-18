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
  " ",
  " /",
  "?",
  "!",
  ",",
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
  " /",
  "",
  "?",
  "!",
  ",",
];

const displayInMorse = () => {
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

const displayInLetters = () => {
  const inputValue = document
    .getElementById("message")
    .value
    .split(" ");
  console.log(inputValue);
  inputValue.forEach((letter) => {
    const indexOfLetter = morseLetters.indexOf(letter);
    console.log(alphabetLetters[indexOfLetter]);
    document.getElementById("output").innerHTML += alphabetLetters[indexOfLetter];
  });
}

const clearValues = () => {
  window.location.reload(true);
}

 
const displayTranslated = () => {   
  document.getElementById("output").innerHTML = ""
  const inputValue = document
  .getElementById("message").value
  const testMorse = (/^[^-.]+$/)
  const testLetters = (/^[^a-zA-Z0-9]+$/)
  testMorse.test(inputValue) ? displayInMorse() 
  : testLetters.test(inputValue) ? displayInLetters() 
  : alert("Use only latin letters or morse letters")
}
  


  

const getInputValues = () => {
  const inputValue = document
  .getElementById("message").value
  
}


//___.___.
  
// var string = ".___"
// var format = /[-.]+/;

// if(format.test(string)){
//   alert("a match");
// } else {
//   alert("not a match");
// }
  
