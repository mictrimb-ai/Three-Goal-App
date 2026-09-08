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
