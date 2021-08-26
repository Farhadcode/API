const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuot(data))
}

const displayQuot = (data) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = data.quote;
}