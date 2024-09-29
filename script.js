const apiKey = "your api key";
fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
  headers: { 'X-Api-Key': apiKey }
})
.then(data => data.json())
.then(quoteData => {
    const quotes = quoteData[0].quote;
    const author = quoteData[0].author;

    const quotation = document.getElementById("quote");
    const auth = document.getElementById("authorName");

    quotation.innerHTML = quotes;
    auth.innerHTML = `- ${author}`;
})