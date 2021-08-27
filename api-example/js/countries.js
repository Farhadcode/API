const loadeCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountres(data))
}
loadeCountries()

const displayCountres = (countres) => {
    // for (const countre of countres) {
    //     console.log(countre);
    // }
    const countriesDiv = document.getElementById('countre');

    countres.forEach(countre => {
        //console.log(countre);
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${countre.name}</h3>
        <p>${countre.capital}</p>
        <button onclick ="loadCountryByName('${countre.name}')">Countere Details</button>
        `
        div.classList.add('countre-style')
        countriesDiv.appendChild(div)

    });
}


const loadCountryByName = (name) => {

    const url = `https://restcountries.eu/rest/v2/name/${name}`
    //console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = country => {
    //console.log(country);

    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h4>${country.name}</h4>
    <img width="200px" src ="${country.flag}">
    <p> Population: ${country.population}</p>
   `
}