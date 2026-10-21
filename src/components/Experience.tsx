const experiences = [
    {
      id: 1,
      title: "Experience Title",
      role: "Your Role",
      date: "2026",
      description: "Describe what you worked on and learned.",
    },
  ];
  
  function Experience() {
    return (
      <section id="experience" className="page-section">
        <h2>Experience</h2>
  
        {experiences.map((experience) => (
          <div className="content-card" key={experience.id}>
            <h3>{experience.title}</h3>
            <p>{experience.role} | {experience.date}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </section>
    );
  }
  
  export default Experience;