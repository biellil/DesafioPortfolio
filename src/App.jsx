import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Post } from './components/post';
import { Siderbar } from './components/Siderbar';

import styles from './App.module.scss';
import stylesPost from './components/post.module.scss';
import './global.css';

export function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          'https://api.github.com/users/biellil/repos?sort=updated'
        );
        const data = await response.json();
        
        setRepos(data.slice(0, 5)); 
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    }

    fetchRepos();

    const interval = setInterval(fetchRepos, 3000); // Chama a função fetchRepos a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar></Siderbar>

        <section className={stylesPost.post}>
          <div style={{}}>
            <img
              height="170rem"
              src="https://github-readme-stats.vercel.app/api?username=biellil&show_icons=true&border_color=ffffff00&bg_color=ffffff00&text_color=8d8d99&include_all_commits=true"
              style={{ colo: 'var(--gray-900)' }}
            />
            <img
              height="170rem"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=biellil&repo=github-readme-stats&hide=cMake&border_color=ffffff00&show_icons=true&bg_color=ffffff00&count_private=false&langs_count=5&text_color=8d8d99&layout=donut"
            />
          </div>
          {repos.map((repo) => (
            <Post key={repo.id} repo={repo} />
          ))}
        </section>
      </div>
    </div>
  );
}
