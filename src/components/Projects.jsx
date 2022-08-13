import React from 'react';
import Project from './Project';

function Projects() {

  return (
    <section className="container px-4 py-5" id="project-cards">
      <h2 className="pb-2 border-bottom">Projects</h2>

      <div className="row row-cols-1 align-items-stretch g-4 py-5">

        <Project title="Gathr" subtitle="plan, host, gather" link="https://gathr.herokuapp.com/" github="https://github.com/Rbenney15/gathr"/>
        <Project title="Gathr" subtitle="plan, host, gather" link="https://gathr.herokuapp.com/" github="https://github.com/Rbenney15/gathr"/>
        
        {/* <Product key={item.id} img={item.img} link={item.link} description={item.description} github={item.github} /> */}




      </div>
    </section>
  );
};

export default Projects;