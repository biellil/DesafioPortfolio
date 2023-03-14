const username = 'biellil';

function getRepositories(username, callback) {
    const url = `https://api.github.com/users/${username}/repos`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        let repos = [];
        if (Array.isArray(data)) {
          repos = data.map(repo => ({
            name: repo.name,
            url: repo.html_url
          }));
        }
        callback(repos);
      })
      .catch(error => console.error(error));
  }
  
  function showRepositories(repos) {
    const reposList = document.getElementById('repos-list');
    reposList.innerHTML = '';
    repos.forEach(repo => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = repo.url;
      link.textContent = repo.name;
      listItem.appendChild(link);
      reposList.appendChild(listItem);
    });
  }
  
 
  getRepositories(username, showRepositories);
  