import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

interface Repository{
  name: string;
  description:string;
  html_url:string;
}

// https://api.github.com/orgs/rocketseat/repos
export function RespositoryList() {

  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {

    fetch('https://api.github.com/users/willianVini-dev/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))

  }, [repositories])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
       { repositories.map(repository =>{
        return <RepositoryItem key={repository.name} repository={repository} />
       })}
      </ul>

    </section>
  )
}