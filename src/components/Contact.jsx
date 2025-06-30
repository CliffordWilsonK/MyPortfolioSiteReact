import { Mail, Phone, Globe } from "lucide-react";


const Contact = () => {
    return(
        <div className="Contact" id="contact">
            <div className="section-title">
                <h1>Contact Me</h1>
                <hr />
            </div>

            <div>
                <p id="text">You can reach out to me. Let's build amazing projects together.📞</p>
            </div>

            <div className="info">
                <div className="item">
                    <Mail size={30} color="#d286da" />
                    <span><a href="mailto:cliffordwilsonk@gmail.com">cliffordwilsonk@gmail.com</a></span>
                </div>
                <div className="item">
                    <Phone size={30} color="#d286da" />
                    <span>+233 55 294 2754</span>
                </div>
                 <div className="item">
                    <Globe size={30} color="#d286da" />
                    <span><a href="https://cliffsport.netlify.app">cliffsport.netlify.app</a></span>
                </div>
            </div>
        </div>
    )
}

export default Contact;