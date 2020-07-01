const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';



fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

.then(function(jsonObject) {
    console.table(jsonObject);



    var towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
        if (i == 1 || i == 4 || i == 5) {
            let artTown = document.createElement('article');
            let divData = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h4');
            let year = document.createElement('h4');
            let population = document.createElement('h4');
            let rainfall = document.createElement('h4');
            let image = document.createElement('img');

            artTown.appendChild(divData);

            h2.textContent = towns[i].name;
            divData.appendChild(h2);

            motto.textContent = towns[i].motto;
            divData.appendChild(motto);

            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            divData.appendChild(year);

            population.textContent = 'Population: ' + towns[i].currentPopulation;
            divData.appendChild(population);

            rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            divData.appendChild(rainfall);

            image.setAttribute('src', `images/${towns[i].photo}`);
            image.setAttribute('alt', `images/${towns[i].photo}`);
            artTown.appendChild(image);


            document.querySelector('div.towns').appendChild(artTown);
        }
    }
});