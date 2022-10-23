import { Serie } from './Serie.js';

import { dataSeries } from './dataSeries.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;

renderSeriesInTable(dataSeries);
demoSetVisibility("collapse");

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
    trElement.innerHTML= `<td scope="row" colspan="3">${"Average Seasons: "}</td> 
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

function addListeners(){
  const table: HTMLTableElement = document.querySelector('Table-series')!;
  const rows = Array.from(table.tBodies[0].rows);

  rows.forEach((row,idx)=>{
    row.cells[1].addEventListener('click', function(){
      loadData(row.cells[1].getAttribute('td')!);
    })
  });
}

function loadData(name: string){
  let tofind : Serie = dataSeries.forEach((serie) =>{
    if (serie.name == name) {
      tofind=serie;
    }
  })!;
  let card: HTMLElement = document.getElementById('information')!;
  let divElement: HTMLElement = document.createElement('div');
  divElement.innerHTML =`<div class="card" style="width: 18rem;">
                            <img src="${tofind.image}" class="card-img-top">
                            <div class="card-body">
                              <h5 class="card-title">${tofind.name}</h5>
                              <p class="card-text" >${tofind.description}</p>
                              <a href="${tofind.link}" class="btn btn-primary">Link</a>
                            </div>
                          </div>`
  card.appendChild(divElement);
  demoSetVisibility("visible");

}

function demoSetVisibility(visibility: string) {
  document.getElementById('information')!.style.visibility = visibility;
}