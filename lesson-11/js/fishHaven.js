const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=38246ebcfa743f03eef5e9626ed4d208";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        document.getElementById('current').textContent = jsObject.weather[0].main;
        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed.toFixed(0);

    });


/*windchill*/
/*let t = parseFloat(document.getElementById("temp").textContent);
let s = parseFloat(document.getElementById("speed").textContent);
*/
let t = document.getElementById('temp').textContent;
let s = document.getElementById('speed').textContent;

let x = 'N/A';

if (t <= 50 && s >= 3) {
    let y = Math.pow(s, 0.16);
    let f = 35.74 + 0.6215 * t - 35.75 * y + 0.4275 * t * y;
    let x = f.toFixed(0);
    document.getElementById('chill').textContent = x;
} else {
    document.getElementById('chill').textContent = 'N/A';
}

/* fiveday */


const forecastApiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=38246ebcfa743f03eef5e9626ed4d208";
fetch(forecastApiURL)
    .then((response) => response.json())
    .then((jsObject) => {


        const fivedayforecast = jsObject.list.filter(f => f.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`temp${day+1}`).textContent = forecast.main.temp.toFixed(0);
            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];


            let imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            let desc = forecast.weather[0].description;

            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);

            day++;


        });

    });