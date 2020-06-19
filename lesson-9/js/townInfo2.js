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
            let data = document.createElement('div');
            let h2 = document.createElement('h2');
            let motto = document.createElement('h3');
            let year = document.createElement('h4');
            let population = document.createElement('h4');
            let rainfall = document.createElement('h4');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;
            town.appendChild(h2);

            motto.textContent = towns[i].motto;
            town.appendChild(motto);

            data.appendChild(h2);
            data.appendChild(motto);
            data.appendChild(year);
            data.appendChild(population);
            data.appendChild(rainfall);

            data.setAttribute('class', 'data');
            town.setAttribute('class', 'town');

            image.setAttribute('src', `images/${towns[i].photo}`);



            year.textContent = 'Year Founded: ' + towns[i].yearFounded;


            population.textContent = 'Population: ' + towns[i].currentPopulation;


            rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;



            town.appendChild(data);
            town.appendChild(image);
            document.querySelector('.towns').appendChild(town);
        }
    }
});