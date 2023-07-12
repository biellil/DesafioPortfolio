import React from 'react';

export function Post({ repo }) {



    
  return (

 
      <div key={repo.id} name={repo.name}>
     <a href={repo.html_url}><h2>{repo.name}</h2></a> 
      <p>{repo.description}</p>
      <p>Language: {repo.language}</p>
      <p>Stars: {repo.stargazers_count}</p>
      
    </div>
  
  );
}
