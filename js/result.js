// get the answers url paramater
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const answersAsStrings = urlParams.get("answers").split(",");

// convert the answers to booleans
const answers = answersAsStrings.map((answer) => answer === "true");

// calculate the percentage of answers that are false
const percentage = Math.round(
  (answers.filter((answer) => !answer).length / answers.length) * 100
);

document.getElementById(
  "result"
).innerText = `Je hebt een programmeurscore van ${percentage}%`;

// send the user to the dropout page after 4 seconds
setTimeout(() => {
  window.location.replace("https://fontys.nl/Studeren/Uitschrijven.htm");
}, 4000);
