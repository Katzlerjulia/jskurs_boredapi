
// function för att använda fetch och få fram författare från sökning


function searchAuthor() {
  const results = document.getElementById('result')
  const selectElement = document.querySelector("#searchBar");
  const searchAuthor = selectElement.value;
  const fetchUrl = "https://openlibrary.org/search/authors.json?q=" + searchAuthor;

  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      data.docs.forEach((docs) => {
        results.innerHTML += `
      <div class="result">
      <table class="styled-table">
    <thead>
        <tr>
            <th>Author</th>
            <th>Top Work</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${docs.name}</td>
            <td>${docs.top_work}</td>
        </tr>
    </tbody>
</table>
      </div>
      `;
      });
    })

}

// refresh page
function refresh() {
  location.reload();
}
document.getElementById("newSearch").addEventListener("click", refresh);
