import React, {useState, useEffect} from "react";
import { Code2 } from "lucide-react";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 30);
        }

        window.addEventListener('scroll', onScroll)
        return () => { window.removeEventListener('scroll', onScroll)}

    }, [])

    return(
        <div className={scrolled ? 'nav scrolled': 'nav'}>
            <div className="site-brand">
                <Code2 color="#c68dfe" size='40px' id='logo'></Code2>
                <h1>Clifford<span>Wilson</span></h1>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;