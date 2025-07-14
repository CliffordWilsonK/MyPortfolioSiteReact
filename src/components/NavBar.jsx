import React, {useState, useEffect} from "react";
import { Code2, Menu, X } from "lucide-react";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 30);
        }

        window.addEventListener('scroll', onScroll)
        return () => { window.removeEventListener('scroll', onScroll)}
    }, [])

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    return(
        <div className={scrolled ? 'nav scrolled': 'nav'}>
            <div className="site-brand">
                <Code2 color="#c68dfe" size='40px' id='logo'></Code2>
                <h1>Clifford<span>Wilson</span></h1>
            </div>
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
            <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <ul>
                    <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
                    <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;