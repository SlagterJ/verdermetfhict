const questions = [
  "Heb je deze opleiding gekozen omdat je games leuk vindt?",
  "Is het eerste dat je dacht toen je software les had 'ik ga vandaag een game maken!'?",
  "Vind je het fijn om met de ISSD mensen te praten?",
  "Wil je media kiezen / heb je media gekozen?",
  "Heb je nog geen Stackoverflow account?",
  "Heb je deze week nog geen frikandellenbroodjes gehad?",
  "Heb jij de pooltafel gesloopt?",
  "Op een schaal van 1 tot 10, hoe lekker is Hizmet?",
  "Heb je al eens gehoord van Bavli Armanyous?",
];

// we'll add the users answers to this array
const answers = [];

// we'll use this function whenever the user pushes the answer
// yes or no button
const pressAnswerButton = (answer) => {
  answers.push(answer);

  // if there are still questions, ask the next one
  if (questions.length > 0) {
    askQuestion();
    return;
  }

  // else we'll go to the results screen
  window.location.replace("result.html?answers=" + answers.join(","));
};

// we'll use this function to ask the next question
const askQuestion = () => {
  const question = questions.shift();

  document.getElementById("question").innerText = question;
};

// ask the question the first time you're on the page
askQuestion();

// register answer yes button
document.getElementById("answer-yes").addEventListener("click", () => {
  pressAnswerButton(true);
});

// register answer no button
document.getElementById("answer-no").addEventListener("click", () => {
  pressAnswerButton(false);
});
