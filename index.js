//const results = document.getElementById('result')
const searchButton = document.getElementById('search-button');
const newSearchButton = document.getElementById('newSearch')

function searchAuthor() {
  const results = document.getElementById('result')
  const selectElement = document.querySelector("#searchBar");
  const searchAuthor = selectElement.value;
  const fetchUrl =
    "https://openlibrary.org/search/authors.json?q=" + searchAuthor;



  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      data.docs.forEach((docs) => {
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
            <td>${docs.name}</td>
            <td><a href="${docs.top_work}">${docs.top_work}</a></td>
        </tr>
    </tbody>
</table>
      </div>
      `;
      });
    })
}






function refresh() {
  location.reload();
}

  newSearchButton.addEventListener('click', refresh)


  /** const authorElement = document.createElement('p')
        authorElement.innerText = `Author Name: ${data.name}`,
        authorElement.innerText = `Top Work: ${data.top_work}`
        results.append(authorElement) */
