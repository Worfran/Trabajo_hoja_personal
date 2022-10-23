import { Serie } from './Serie.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;

renderSeriesInTable(dataSeries)

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando cursos');
    let i: number=1;
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `<th scope="row">${i}</th>
                             <td>${serie.name}</td>
                             <td>${serie.channel}</td>
                             <td>${serie.seasons}</td>`;
      seriesTbody.appendChild(trElement);
      i=i+1;
    });
    let average : number = getAverageSeasons(series)
    let table: HTMLElement = document.getElementById('Table-series')!;
    let trElement = document.createElement("tr");
    trElement.innerHTML= `<td colspan="3">${"Average Seasons: "}</td> 
                          <td>${average}</td>`;
    table.insertAdjacentElement("afterend", trElement);
  }

function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => {
        totalSeasons = totalSeasons+ serie.seasons;
    });
    let average : number= totalSeasons/series.length;
    return average;
}