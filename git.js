const url = "https://api.github.com/users/biellil/repos?sort=updated";
const username = "biellil";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const latestRepos = data.slice(0, 2);

    latestRepos.forEach((latestRepo, index) => {
      const repoName = latestRepo.name;
      const language = latestRepo.language;
      const repoUrl = latestRepo.html_url;

      const reposList = document.querySelector(`.repos-list${index + 1}`);
      const repoItem = document.createElement("div");
      repoItem.innerHTML = `
      <a href="${repoUrl}">${repoName}</a>
       <h3> ${language}</h3>`;
      reposList.appendChild(repoItem);
    });
  })
  .catch((error) => console.error(error));
