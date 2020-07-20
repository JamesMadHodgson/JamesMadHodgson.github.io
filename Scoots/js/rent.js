let data = [{}, ];

function renderData() {
    fetch("rental.json")
        .then(response => response.json())
        .then(json => {
            json.rental.forEach((item) => {
                let table = document.getElementById("table");
                let tableInfo = "<tr><th colspan =6>Persons and Price Chart</th></tr>";
                tableInfo += "<tr><th colspan =2></th><th colspan=2>Reservation</th><th colspan=2>Walk In</th></tr>";
                tableInfo +=
                    "<tr><th>Rental Type</th><th>Persons</th><th>Half Day<br>(3 hours)</th><th>Full Day</th><th>Half Day<br>(3 hours)</th><th>Full Day</th></tr>";

                tableInfo += "<tr><td>" + item.name + "</td><td>" + item.persons + "</td><td>" + item.oHalfDay +
                    "</td><td>" + item.oFullDay + "</td><td>" + item.walkHalfDay + "</td><td>" + item.walkFullDay +
                    "</td></tr>"
            })
            table.innerHTML = tableInfo;
        })
}

renderData();

/****** source from https://stackoverflow.com/questions/50451836/how-to-display-json-data-using-just-javascript-from-a-local-json-file-or-from-a

I have only done a few tables with html (this stack over flow seemed right) but not sure what i did incorrect for table to be rendered  ************/