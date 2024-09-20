import TopProjects from "./components/RepoList/list.tsx";
import styles from './styles.module.scss'
import './App.css'
import ReactLogo from './assets/react.svg'
import GithubLogo  from "./assets/github.svg";
import GraphQlLogo  from "./assets/graphql.svg";
import TSLogo  from "./assets/typescript.svg";

function App() {

  return (
    <main className={styles.main}>
        <h1 className={styles.title}>Топ популярных TS проектов на Github</h1>
        <aside className={styles.icons}>
            <img src={GraphQlLogo}/>
            <img src={GithubLogo}/>
            <img src={ReactLogo}/>
            <img src={TSLogo}/>
        </aside>
        <TopProjects/>
    </main>
  )
}

export default App
