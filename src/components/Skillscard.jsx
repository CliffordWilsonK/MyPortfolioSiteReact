const Skillscard = ({skills}) => {
    return(
        <div className="skills-card">
            {skills.map((skill, index) => (
                <div key={index} className="skill">{skill}</div>
            )) }
        </div>
    )
}

export default Skillscard;