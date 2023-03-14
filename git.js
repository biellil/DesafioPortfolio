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
      repoItem.classList.add("repo-item");
      repoItem.innerHTML = `
      <div class="arquivo"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
      <a href="${repoUrl}">${repoName}</a>
      </div>
      <div class="linguagem">
      <span class="language-circle language-${language.toLowerCase()}"></span>
      <h3> ${language}</h3>
      </div>      
      `;
      reposList.appendChild(repoItem);
    });
  })
  .catch((error) => console.error(error));
