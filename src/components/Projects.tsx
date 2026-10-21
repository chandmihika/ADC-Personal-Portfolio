const projects = [
    {
      id: 1,
      name: "Personal Portfolio",
      description: "A portfolio built using React and TypeScript.",
      github: "https://github.com/chandmihika/ADC-Personal-Portfolio",
    },
  ];
  
  function Projects() {
    return (
      <section id="projects" className="page-section">
        <h2>Projects</h2>
  
        <div className="project-grid">
          {projects.map((project) => (
            <div className="content-card" key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
  
              <a href={project.github} target="_blank" rel="noreferrer">
                View GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;