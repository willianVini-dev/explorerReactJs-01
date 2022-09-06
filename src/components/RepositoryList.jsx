import { RepositoryItem } from "./RepositoryItem";


const repository = {
  name: "unform2",
  description: "Form in react",
  link: "https://github.com/unform/unform"
}

export function RespositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>

    </section>
  )
}