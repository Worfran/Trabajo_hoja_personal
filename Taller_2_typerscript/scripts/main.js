import { dataSeries } from './dataSeries.js';
let seriesTbody = document.getElementById('series');
renderSeriesInTable(dataSeries);
demoSetVisibility("collapse");
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    let i = 1;
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${i}</th>
                             <td>${serie.name}</td>
                             <td>${serie.channel}</td>
                             <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
        i = i + 1;
    });
    let average = getAverageSeasons(series);
    let table = document.getElementById('Table-series');
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td scope="row" colspan="3">${"Average Seasons: "}</td> 
                          <td>${average}</td>`;
    table.insertAdjacentElement("afterend", trElement);
}
function getAverageSeasons(series) {
    let totalSeasons = 0;
    series.forEach((serie) => {
        totalSeasons = totalSeasons + serie.seasons;
    });
    let average = totalSeasons / series.length;
    return average;
}
function addListeners() {
    const table = document.querySelector('Table-series');
    const rows = Array.from(table.tBodies[0].rows);
    rows.forEach((row, idx) => {
        row.cells[1].addEventListener('click', function () {
            loadData(row.cells[1].getAttribute('td'));
        });
    });
}
function loadData(name) {
    let tofind = dataSeries.forEach((serie) => {
        if (serie.name == name) {
            tofind = serie;
        }
    });
    let card = document.getElementById('information');
    let divElement = document.createElement('div');
    divElement.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${tofind.image}" class="card-img-top">
                            <div class="card-body">
                              <h5 class="card-title">${tofind.name}</h5>
                              <p class="card-text" >${tofind.description}</p>
                              <a href="${tofind.link}" class="btn btn-primary">Link</a>
                            </div>
                          </div>`;
    card.appendChild(divElement);
    demoSetVisibility("visible");
}
function demoSetVisibility(visibility) {
    document.getElementById('information').style.visibility = visibility;
}
