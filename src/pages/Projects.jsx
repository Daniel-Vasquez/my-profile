import { Link } from 'react-router-dom'
import LittleCardProjectPost from "../components/LittleCardProjectPost";


function Projects() {
  return(
    <div>
      <h2>
        Proyectos
      </h2>
      <section>
        <LittleCardProjectPost />
      </section>
      <Link to='/main'>
        Home
      </Link>
    </div>
  )
}

export default Projects