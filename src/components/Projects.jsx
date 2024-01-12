import { projects } from '../data'
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <div className="sample-page">
      <h2 className="title">web creations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 tracking-normal sample-frame">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}
export default Projects
