const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=38246ebcfa743f03eef5e9626ed4d208";
fetch(forecastApiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(f => f.dt_txt.includes('18:00:00'));
        console.log(fivedayforecast);

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`data${day+1}`).textContent = forecast.main.temp;
            document.getElementById(`label${day+1}`).textContent = weekdays[d.getDay()];
            day++;
            console.log(forecast);

        });

    });