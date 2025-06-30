import { Info } from "lucide-react";

const About = () => {
    return (
        <div className="About" id='about'>
            <div className="section-title">
                <h1>About Me </h1>
                <hr />
            </div>
            <div className="text">
                <p>
                    👋 Hi there! I'm Clifford, a passionate developer and tech enthusiast who loves turning ideas into real, useful things that make life better.
                    Whether it's designing clean user interfaces, writing smart code, or building tools that help people connect and grow,
                    I'm all about creating with purpose.
                </p>
                <p>I believe technology should be helpful, and maybe even a little magical.
                    From coding late into the night to sketching out the next big idea, I’m constantly learning, building, and sharing.</p>
                <p> When I'm not coding, you'll probably find me exploring new tech trends, working on a mission-driven startup,
                    or serving in ways that make a positive impact.
                </p>
                <p className="special">Let's build something amazing together. 🚀</p>
            </div>
        </div>
    )
}

export default About;