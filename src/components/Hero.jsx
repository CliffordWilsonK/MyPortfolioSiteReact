const Hero = () => {
    return (
        <div className="Hero" id="home">
            <div className="text">
                <h1 className="salutation">
                    Hi! I'm <span>Clifford K Wilson</span>
                </h1>
                <h3 className="job">Software Engineer and Tech Enthusiast</h3>
                <div className="buttons">
                    <div className='btn1'>
                        <a href="#about">About Me</a>
                    </div>
                    <div className='btn2'>
                        <a href="#contact"> Hire me</a>
                    </div>
                </div>

            </div>
            <div className="pic">
                <img src="/cc.png" alt="Clifford's image" />
            </div>
        </div>
    )
}

export default Hero;