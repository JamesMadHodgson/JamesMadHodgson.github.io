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
            let town = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let image = document.createElement('img');
            let alt = document.createElement('alt');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');

            h2.textContent = towns[i].name;
            town.appendChild(h2);

            motto.textContent = towns[i].motto;
            town.appendChild(motto);

            alt.setAttribute('alt', towns[i].name);
            image.setAttribute('src', `images/${towns[i].photo}`);
            town.appendChild(image);
            town.appendChild(alt);

            year.textContent = 'Year Founded: ' + towns[i].yearFounded;
            town.appendChild(year);

            population.textContent = 'Population: ' + towns[i].currentPopulation;
            town.appendChild(population);

            rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            town.appendChild(rainfall);



            document.querySelector('div.towns').appendChild(town);
        }
    }
});