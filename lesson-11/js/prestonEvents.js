const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';



fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

.then(function(jsonObject) {

    const towns = jsonObject['towns'];

    const event = towns.filter(town => (town.name == 'Preston'));

    event.forEach(town => {


        let townData = document.createElement('div');
        let h2 = document.createElement('h2');
        let events = document.createElement('p');



        h2.textContent = 'Upcoming Events '; + town.events;
        events.innerHTML = town.events[0] + '<br>' + town.events[1] + '<br>' + town.events[2];

        townData.appendChild(h2);
        townData.appendChild(events);



        document.querySelector('div.towns').appendChild(townData);
    });
});