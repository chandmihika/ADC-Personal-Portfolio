import { useEffect, useState } from "react";

const sections = [
  "intro",
  "experience",
  "projects",
  "contact",
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <a href="#intro" className="logo">MC.</a>

      <div className="nav-links">
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