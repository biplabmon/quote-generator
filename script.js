const quoteText = document.querySelector('.text');
const authorName = document.querySelector('.author');
const newQuoteBtn = document.querySelector('.new-quote');
const twitterBtn = document.querySelector('.twitter');


let apiData = [];

// Create a random Quote picker using apiData
function newQuote() {
    const quote = apiData[Math.floor(Math.random() * apiData.length)];
    console.log(quote);

    // check either author name avilable or not 
    if (!quote.author) {
        authorName.innerText = '-- Unknown'
    } else {
        authorName.innerText = `-- ${quote.author}`;
    }

    // check quote length and make it small or big 
    if (quote.text.length > 90) {
        quoteText.classList.add('long-text');
    } else {
        quoteText.classList.remove('long-text')
    }

    // impliment tha Quote text 
    quoteText.innerText = quote.text;
}



// Fetch Quote from API 
async function getQuots() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const getDataFromApi = await fetch(apiUrl);
        apiData = await getDataFromApi.json();

        // By default showing a Quote 
        newQuote();
        // console.log(apiData);
    } catch (error) {
        console.log(error)
    }

}

// Tweet embaded Quots 
function tweetQuot(){
    twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText}  ${authorName.innerText}`;
    window.open(twitterUrl, '_blank');
}


// Button implementation 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuot);



getQuots();