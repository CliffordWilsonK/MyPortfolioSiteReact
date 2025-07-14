import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        { name: 'TechcosmoCamp', description: 'An Online Tech bootcamp that teaches students how to code.', image: './techcosmoCamp.png', link: 'https://techcosmo-camp.vercel.app/', github: 'https://github.com/CliffordWilsonK/TechcosmoCamp' },
        { name: 'CDC CMS', description: 'A Church Management System web app to simplify the tasks of the Church Secretary.', image: './CDC-CMS.png', link: 'https://cdc-salvationtemple.onrender.com/', github: 'https://github.com/CliffordWilsonK/CDC-cms' },
        { name: 'Portfolio Website', description: 'A Portfolio website to showcase my talents to potential clients.', image: './portfoliosite.png', link: 'https://cliffsport.netlify.app/', github: 'https://github.com/CliffordWilsonK/MyPortfolioSiteReact' },

    ]
    return (
        <div className="Projects" id="projects">
            <div className="section-title">
                <h1>Projects</h1>
                <hr />
            </div>
            <div>
                <p id="text">Checkout a few of my projects✨📱</p>
            </div>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;