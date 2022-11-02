

function getFetch() {
  let name = document.getElementById("searchCity");
  let number = document.getElementById("searchPopulation");

  fetch("https://avancera.app/cities/", {
    body: JSON.stringify({ name: name, population: number }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((cities) => {
        results.innerHTML += `
      <div class="result">
      <table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Top Work</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${cities.name}</td>
            <td><a href="${cities.population}">${cities.population}</a></td>
        </tr>
    </tbody>
</table>
      </div>
      `;
      });
    });
}

/*const searchPopulation = document.getElementById("searchPopulation")
const searchBtn = document.getElementById("search-button")
const newSearchBtn = document.getElementById("newSearch");


function searchCountry() {
  const resultCities = document.getElementById("resultCities");
  const name = document.querySelector("#searchCountry");
  const searchCountry = name.value
  const dataUrl = 'https://avancera.app/cities/' + searchCountry


  fetch(dataUrl, {
    body: JSON.stringify({ name: name, population: population }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
    .then(response => response.json())
    .then((data) => {
       data.forEach((cities) => {
        results.innerHTML += `
      <div class="result">
      <table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Top Work</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${cities.name}</td>
            <td><a href="${cities.population}">${cities.population}</a></td>
        </tr>
    </tbody>
</table>
      </div>
      `;
      });
    })
}
*/
