import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series');
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    var i = 1;
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(i, "</th>\n                             <td>").concat(serie.name, "</td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        i = i + 1;
    });
    var average = getAverageSeasons(series);
    var table = document.getElementById('Table-series');
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td colspan=\"3\">".concat("Average Seasons", "</td> \n                          <td>").concat(average, "</td>");
    table.insertAdjacentElement("afterend", trElement);
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) {
        totalSeasons = totalSeasons + serie.seasons;
    });
    var average = totalSeasons / series.length;
    return average;
}
