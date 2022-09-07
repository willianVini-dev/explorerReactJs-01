import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
  name: "unform2",
  description: "Form in react",
  link: "https://github.com/unform/unform"
}

// https://api.github.com/orgs/rocketseat/repos
export function RespositoryList() {

  const [repositories, setRepositories] = useState([]);

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