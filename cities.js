

/*function getFetch() {
  let name = document.getElementById("searchCity")
  let number = document.getElementById("searchPopulation")

  fetch("https://avancera.app/cities/", {
    body: JSON.stringify({ name: name.value, population: number }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    }
*/



// chart.js

fetch("data.json")
  .then((response) => response.json())
  .then((result) => {
    const ctx = document.getElementById("myChart").getContext("2d");

    const data = [],
      labels = [];

    for (i = 0; i < result.length; i++) {
      const city = result[i];

      labels.push(city.Year);
      data.push(city.Population);
    }

    // kod above är okej
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "USAs befolkning genom åren",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });





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


/*funkade för philip
fetch('https://avancera.app/cities/', {
    body: JSON.stringify({ name: cityNameInput.value, population: 123 }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })

  }*/
