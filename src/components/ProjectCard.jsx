import { Github, Link } from "lucide-react";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="image">
                <img src={project.image} />
            </div>
            <div className="text">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="icons">
                    <span>
                        <a href={project.github} target="_blank"><Github size={20} color="#000" className="icon"/></a> 
                        <a href={project.link} target="_blank"><Link size={20} color="#000" className="icon"/></a> 
                    </span>
                </div>           
            </div>
        </div>
    )
}

export default ProjectCard;