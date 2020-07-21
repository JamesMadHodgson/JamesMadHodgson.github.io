let data = [{}, ];

function renderData() {
    fetch("rental.json")
        .then(response => response.json())
        .then(json => {

            var table = document.getElementById("table");
            var tableInfo = '';
            json.rental.forEach((item) => {

                tableInfo +=
                    "<tr><td>" + item.name + "</td><td>" + item.maxPersons + "</td><td>" + item.olHalfDay +
                    "</td><td>" + item.olFullDay + "</td><td>" + item.wiHalfDay + "</td><td>" + item.wiFullDay +
                    "</td></tr>"
            })
            table.innerHTML = tableInfo;

        })
}

renderData();

/****** source from https://stackoverflow.com/questions/50451836/how-to-display-json-data-using-just-javascript-from-a-local-json-file-or-from-a

I have only done a few tables with html (this stack over flow seemed right) 
I could not figure out how to get the rest of the table to render on the page with out major problems 
 ************/