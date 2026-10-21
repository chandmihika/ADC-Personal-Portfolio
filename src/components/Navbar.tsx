import { useEffect, useState } from "react";

const sections = ["intro", "experience", "projects", "contact"];

function Navbar() {
    const [activeSection, setActiveSection] = useState(sections[0]);

    useEffect(() => {
        function handleScroll() {
            const sections = document.getElementById(section);

            if (element && Element.offsetTop <= scrollPosition) {
                setActiveSection(section);
            }
        }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className = "navbar">
            <a href = "#intro" className = "logo">MC.</a>

            <div className = "nav-links">
                {sections.map((section) => (
                    <a
                    key={section}
                    href={`#${section}`}
                    className={activeSection === section ? "active" : ""}
                    >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;