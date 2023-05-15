let container = document.getElementById('search-result');

fetch('/search')
  .then(response => response.json())
  .then(data => {
    let resultHtml = '';
    data.webPages.value.forEach(item => {
      resultHtml += `<h3><a href="${item.url}">${item.name}</a></h3>`;
      resultHtml += `<p>${item.snippet}</p>`;
    });
    container.innerHTML = resultHtml;
  })
  .catch(error => console.error(error));