const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';



fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

.then(function(jsonObject) {
    console.table(jsonObject);



    var towns = jsonObject['towns'];
    const special = towns.filter(town => (town.name == 'Soda Springs'));
    special.forEach(town => {


        let divData = document.createElement('div');
        let h2 = document.createElement('h2');
        let events = document.createElement('p');



        h2.textContent = town.name;
        divData.appendChild(h2);

        events.textContent = town.events;
        divData.appendChild(events);

        document.querySelector('div.towns').appendChild(divData);
    });
});