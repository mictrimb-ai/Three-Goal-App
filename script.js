const quotes = [
    {
        text: "If it is not right, do not do it: if it is not true, do not say it.",
        author: "Marcus Aurelius"
    },
    {
        text: "Don't demand that things happen as you wish, but wish that they happen as they do happen, and you will go on well.",
        author: "Epictetus"
    },
    {
        text: "While we are postponing, life speeds by.",
        author: "Seneca"
    }
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const selectedQuote = quotes[randomIndex];
const quoteTextElement = document.getElementById("quote-text");
const quoteAuthorElement = document.getElementById("quote-author");

quoteTextElement.textContent = selectedQuote.text;
quoteAuthorElement.textContent = "- " + selectedQuote.author;

const goalOneRowCheckbox = document.getElementById("goal-1-complete");
const goalTwoRowCheckbox = document.getElementById("goal-2-complete");
const goalThreeRowCheckbox = document.getElementById("goal-3-complete");

function updateGoalAppearances(event) {
    const changedCheckbox = event.currentTarget;
    const changedRow = changedCheckbox.closest(".goal-row");

    changedRow.classList.toggle("completed", changedCheckbox.checked);
}

goalOneRowCheckbox.addEventListener("change", updateGoalAppearances);
goalTwoRowCheckbox.addEventListener("change", updateGoalAppearances);
goalThreeRowCheckbox.addEventListener("change", updateGoalAppearances);

const goalOneRowTextbox = document.getElementById("goal-1");

function resetGoalOneCompletion () {
    goalOneRowCheckbox.checked = false;
    const changedRow = goalOneRowTextbox.closest(".goal-row");

    changedRow.classList.remove("completed");
}
goalOneRowTextbox.addEventListener("input", resetGoalOneCompletion);


const goalTwoRowTextbox = document.getElementById("goal-2");

function resetGoalTwoCompletion () {
    goalTwoRowCheckbox.checked = false;
    const goalRowTwo = goalTwoRowTextbox.closest(".goal-row");
    goalRowTwo.classList.remove("completed");

}
goalTwoRowTextbox.addEventListener("input", resetGoalTwoCompletion);


const goalThreeRowTextbox = document.getElementById("goal-3");

function resetGoalThreeCompletion () {
    goalThreeRowCheckbox.checked = false;
    const goalThreeRow = goalThreeRowTextbox.closest(".goal-row");
    goalThreeRow.classList.remove("completed");
}
goalThreeRowTextbox.addEventListener("input", resetGoalThreeCompletion);
