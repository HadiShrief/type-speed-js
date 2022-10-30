const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
  ];

const levels = {Easy:5,Normal:4,Hard:2}
let defaultLevelName = "Normal"
let defaultLevelSeconds = levels[defaultLevelName]

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

lvlNameSpan.innerHTML = defaultLevelName
secondsSpan.innerHTML = defaultLevelSeconds
timeLeftSpan.innerHTML = defaultLevelSeconds
scoreTotal.innerHTML = words.length


// Disable Paste Event
input.onpaste = function () {
    return false
  }

const startGame = () => {   
  startButton.remove()
  input.focus()
  genWords()
}

 let randomWord 
const genWords = () => {
  randomWord  = words[Math.floor(Math.random() * words.length)]
  let wordIndex =words.indexOf(randomWord)
  words.splice(wordIndex,1)
  theWord.innerHTML = randomWord
  upcomingWords.innerHTML = ''
  for (let i = 0; i < words.length; i++){

    let div = document.createElement("div");
    div.innerHTML = words[i]
    upcomingWords.appendChild(div);

  }
  check()
    
}

const check = () => {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      // Stop Timer
      clearInterval(start);
      // Compare Words
      if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        // Empty Input Field
        input.value = '';
        // Increase Score
        scoreGot.innerHTML++;
        if (words.length > 0) {
          // Call Generate Word Function
          genWords();
        } else {
          let span = document.createElement("span");
          span.className = 'good';
          let spanText = document.createTextNode("Congratz");
          span.appendChild(spanText);
          finishMessage.appendChild(span);
          // Remove Upcoming Words Box
          upcomingWords.remove();
        }
      } else {
        let span = document.createElement("span");
        span.className = 'bad';
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}

startButton.addEventListener('click',startGame)