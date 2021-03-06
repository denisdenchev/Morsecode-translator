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
  // console.log(inputValue);
  inputValue.forEach((letter) => {
    const indexOfLetter = alphabetLetters.indexOf(letter);
    // console.log(morseLetters[indexOfLetter]);
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
  

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
let finalTranscript = '';
let recognition = new window.SpeechRecognition();


recognition.interimResults = true;
recognition.maxAlternatives = 10;
recognition.continuous = true;
recognition.lang = "en-GB"


recognition.onresult = (event) => {

    let interimTranscript = '';
    for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
    let transcript = event.results[i][0].transcript;
    if (event.results[i].isFinal) {
        finalTranscript += transcript;
    } else {
        interimTranscript += transcript;
    }
    }
    document.getElementById('message').value = `${finalTranscript}` + `${interimTranscript}`;
}

const listen = () => {
recognition.start();
}

const stopListenint = () => {
    recognition.stop()
}


const textToAudio = () => {

  // list of languages is probably not loaded, wait for it
  if(window.speechSynthesis.getVoices().length == 0) {
    window.speechSynthesis.addEventListener('voiceschanged', function() {
      textToSpeech();
    });
  }
  else {
    // languages list available, no need to wait
    textToSpeech()
  }
}



const textToSpeech = () => {
  
  //get output value
  const outputValue = document.getElementById("output").innerHTML

	// get all voices that browser offers
	let available_voices = window.speechSynthesis.getVoices();

	// this will hold an english voice
	let english_voice = '';

	// find voice by language locale "en-US"
	// if not then select the first voice
	for( i=0; i<available_voices.length; i++) {
		if(available_voices[i].lang === 'en-UK') {
			english_voice = available_voices[i];
			break;
		}
	}
	if(english_voice === '')
		english_voice = available_voices[0];

	// new SpeechSynthesisUtterance object
	const utter = new SpeechSynthesisUtterance();
	utter.rate = 1;
	utter.pitch = 0.5;
	utter.text = outputValue;
	utter.voice = english_voice;

	// event after text has been spoken
	// utter.onend = () => {
	// 	alert('Speech has finished');
	// }

	// speak
	window.speechSynthesis.speak(utter);
}



const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();
const dot = 1.2 / 15;
let oscillator ;

const morseToAudio = () => {
   const inputValue = document.getElementById("output").innerHTML

    let time = ctx.currentTime;

    oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 600;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, time);

    inputValue.split("").forEach(function(letter) {
        switch(letter) {
            case ".":
                gainNode.gain.setValueAtTime(1, time);
                time += dot;
                gainNode.gain.setValueAtTime(0, time);
                time += dot;
                break;
            case "_":
                gainNode.gain.setValueAtTime(1, time);
                time += 3 * dot;
                gainNode.gain.setValueAtTime(0, time);
                time += dot;
                break;
            case " ":
              time += 7 * dot;
                break;
        }
    });

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();

    return false;
}



const startAudio = () => {
  const translatedOutput = document.getElementById("output").innerHTML 
  const testMorse = (/^[^-.]+$/)
  const testLetters = (/^[^a-zA-Z0-9]+$/)

  testMorse.test(translatedOutput) ? textToAudio() 
  : testLetters.test(translatedOutput) ? morseToAudio() 
  : alert("Use only latin letters or morse letters")
}

const stopAudio = () => {
  if (oscillator) {
    oscillator.stop(0);
    oscillator.disconnect();
    // alert("You have stopped the sound")
  }
}

let lastClick = 0;
let delay = 5000;

const setTimeUnavailable = () => {
  if (lastClick >= (Date.now() - delay))
    return;
  lastClick = Date.now();
  
  // do things
  startAudio()
}




audioPlay.addEventListener("click", setTimeUnavailable);
stopAudioPlay.addEventListener("click", stopAudio);