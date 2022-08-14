import React from 'react';
import Project from './Project';

import data from '../assets/data';

function Projects() {

  return (
    <section className="container px-4 py-5" id="project-cards">
      <h2 className="pb-2 border-bottom">Projects</h2>

      <div className="row row-cols-1 align-items-stretch g-4 py-5">

        {/* <Product key={item.id} img={item.img} link={item.link} description={item.description} github={item.github} /> */}

        {data.map((project) => (
          <Project
            id={project.id}
            colSpan={project.colSpan}
            key={project.id}
            title={project.title} 
            subtitle={project.subtitle} 
            link={project.link}
            github={project.github}
            titleColor={project.titleColor}
            articleClass={project.articleClass}
            divClass={project.divClass}
            img={project.bgImg}
            filter={project.bgFilter}
            transform={project.bgTransform}
          />
        ))}


      </div>
    </section>
  );
};

export default Projects;