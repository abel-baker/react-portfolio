import React from 'react';

function Project({ title, subtitle, link, github }) {

  return (
    <div className="col-lg-5">
      <div id="gathr-card" className="card project-card card-cover h-100 overflow-hidden text-light bg-dark rounded-5 shadow-lg">
        <div className="d-flex flex-column h-100 p-5 pb-3 text-light text-shadow-2">

          <h2 className="pt-5 mt-5 mb-1 display-6 lh-1 fw-bold"><a href={link} target="_blank" style={{textDecoration: "none", color: "#606c38"}}>{title}</a></h2>
          <p className="mb-4"><small>{subtitle}</small></p>
          <div className="d-flex list-unstyled mt-auto">
            <li className='me-auto'>
              <a href={github}><i className='bi-github'></i></a>
            </li>
            <li className='d-flex align-items-center ms-auto me-3'>
              <i className='bi bi-link-45deg me-1'></i>
              <small>live</small>
            </li>
            <li className='d-flex align-items-center'>
              <i className='bi bi-code-square me-1'></i>
              <small>MERN</small>
            </li>
          </div>

        </div>
        <div className='blur-image'></div>
      </div>
    </div>
  );
};

export default Project;