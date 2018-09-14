// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        source: "Eleanor Roosevelt",
        citation: "\"Hutchinson\", Kansas newspaper",
        year: 1987
    },
    {
        quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
        source: "David Brinkley"
    },
    {
        quote: "Man is still the most extraordinary computer of all.",
        source: "John F. Kennedy",
        citation: "Presenting NASA service medal",
        year: 1963
    },
    {
        quote: "It is hard to fail, but it is worse never to have tried to succeed.",
        source: "Theodore Roosevelt",
        citation: "\"The Strenuous Life\" speech",
        year: 1899
    },
    {
        quote: "Our greatest fear should not be of failure… but of succeeding at things in life that don’t really matter.",
        source: "Francis Chan",
    },
    {
        quote: "Remember that the happiest people are not those getting more, but those giving more.",
        source: "H. Jackson Brown, Jr.",
    },
    {
        quote: "It is our choices, that show what we truly are, far more than our abilities.",
        source: "J.K Rowling",
        citation: "\"Harry Potter & the Chamber of Secrets\"",
        year: 2002
    },
    {
        quote: "If you want to be happy, be.",
        source: "Leo Tolstoy",
    }
];


// Create the getRandomQuote function and name it getRandomQuote

function getRandomQuote() {
    randomObject = quotes[Math.floor(Math.random()* 8)];
    return randomObject;
}

// Create the printQuote funtion and name it printQuote

function printQuote() {
    randomQuote = getRandomQuote();
    var quote = "<p class=\"quote\">" + randomQuote.quote + "</p>";
    var outputDiv = document.getElementById("quote-box");
    
        if (randomQuote.hasOwnProperty("citation")) {
            quote += "<p class=\"source\">" + randomQuote.source +
            "<span class=\"citation\">" + randomQuote.citation + "</span>"
            "<span class=\"year\">" + randomQuote.year + "</span></p>"
            console.log(randomQuote.year);
        }else {
            quote += "<p class=\"source\">" + randomQuote.source + "</p>"
        }
    
    outputDiv.innerHTML = quote;
    return outputDiv.innerHTML;
}




// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

/*
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
*/
