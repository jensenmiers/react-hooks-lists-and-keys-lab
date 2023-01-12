import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log('technologies: ', technologies);
  const technologiesArray = technologies.map(tech => 
    <span key={tech}>{tech}</span>
  )
 
  // projObj.map(proj => console.log(proj))
    // {proj.name, proj.about, proj.technologies})
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesArray}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
