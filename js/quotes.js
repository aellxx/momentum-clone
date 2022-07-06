const quotes = [
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky",
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
        author: "Hellen Keller",
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristole",
    },
    {
        quote: "It does not do to dwell on dreams and forget to live",
        author: "Albus Dumbledore",
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley",
    },
    {
        quote: "We’re with you whatever happens.",
        author: "Ron Weasley",
    },
    {
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities." ,
        author: "Albus Dumbledore",
    },
    {
        quote: "Wit beyond measure is man’s greatest treasure.",
        author: "Luna Lovegood",
    },
    {
        quote: "Just because you have the emotional range of a teaspoon doesn’t mean we all have.",
        author: "Hermione Granger",
    },
]

// get the quote and author span elements
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// get random index
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// fill the span
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;