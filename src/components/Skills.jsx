import Skillscard from "./Skillscard";
const Skills = () => {
    const languages = ['HTML','CSS','JS','Python','PHP', 'SQL']
    const libraries = ['React','Redux','Luicide-React','Firebase']
    const frameworks = ['Django','Machine Learning','Blockchain Development','Cloud Computing']
    return(
        <div className="Skills" id="skills">
            <div className="section-title">
                <h1>Skills</h1>
                <hr />
            </div>
            <div><p>🎯Here are the key tools, languages, and frameworks I work with to build clean, functional, and impactful digital solutions, both on the front and back end.🪄</p></div>
            <div className="skills-container">
                <Skillscard skills={languages} />
                <Skillscard skills={libraries}/>
                <Skillscard skills={frameworks}/>
            </div>
        </div>
    )
}

export default Skills;