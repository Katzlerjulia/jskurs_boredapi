

// get

function getResult() {
  const theResults = document.getElementById("result");
  fetch("https://avancera.app/cities/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((allCities) => {
        theResults.innerHTML += `
      <div class="result">
      <table class="styled-table">
    <thead>
        <tr>
            <th>Stad</th>
            <th>Befolkning</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${allCities.name}</td>
            <td><a href="${allCities.population}">${allCities.population}</a></td>
        </tr>
    </tbody>
</table>
      </div>
      `;
      })
    })
}

var form1 = document.getElementById("myForm1");
function handleForm(event) {
  event.preventDefault();
}
form1.addEventListener("submit", handleForm);


// POST
function getFetch() {
  const name = document.getElementById("name");
  const population = document.getElementById("population");
   const results = document.getElementById("result");

  fetch("https://avancera.app/cities/", {
    body: JSON.stringify({ name: name.value, population: parseInt(population.value) }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
}


var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// PUT

function putFunction() {
  const id = document.getElementById("selectID");
  const names = document.getElementById("city")
  const populations = document.getElementById("pop")

  fetch("https://avancera.app/cities/" + id.value, {
    body: JSON.stringify({
      id: id.value,
      name: names.value,
      population: parseInt(populations.value),
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  }).then((datas) => {
       console.log(datas)
  });
}

var form = document.getElementById("myForm2");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// DELETE

function deleteFunction() {
  const idDelete = document.getElementById("idDelete");

  fetch("https://avancera.app/cities/" + idDelete.value, {
    body: JSON.stringify({
      id: idDelete.value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  }).then((datan) => {
    console.log(datan);
  });
}

var forms = document.getElementById("myForm3");
function handleForm(event) {
  event.preventDefault();
}
forms.addEventListener("submit", handleForm);



// chart.js
 // kod under är okej

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


  // webstorage

  const saveBtn = document.getElementById('saveBtn')
  const loadBtn = document.getElementById('loadBtn')
function saveCountry() {
 const list = document.getElementById("addCountry").value;
  localStorage.setItem("list", list);
}
function loadCountry() {
  const list = localStorage.getItem("list");
  document.getElementById("addCountry").value = list;
}

saveBtn.addEventListener('click', saveCountry)
loadBtn.addEventListener('click', loadCountry)
