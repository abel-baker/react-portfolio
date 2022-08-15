import React from 'react';

function Project({ id, colSpan, title, subtitle, link, github, titleColor = "#fff", articleClass, divClass, img, filter = "blur(3px)", transform = "scale(1.1)", icons }) {

  return (
    <div className={colSpan && `col-lg-${colSpan}`} id={id} key={id}>
      <article id={`${id}-card`} className={`card project-card card-cover h-100 overflow-hidden rounded-4 shadow-lg ${articleClass}`}>
        <div className={`d-flex flex-column h-100 p-5 pb-3 ${divClass} text-shadow-2`}>

          <h2 className="pt-5 mt-5 mb-1 display-6 lh-1 fw-bold">
            
            {link ? 
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: titleColor }}>
              <span>{title}</span>
            </a>
            : 
            <span style={{ textDecoration: "none", color: titleColor }}>{title}</span>
            }
          </h2>
          <p className="mb-4"><small>{subtitle}</small></p>
          
          <div className="d-flex list-unstyled mt-auto">
            {github &&
              <li className='me-auto' key='github-icon'>
                <a href={github} className={divClass}><i className='bi-github'></i></a>
              </li>
            }
            
            {icons && icons.map((icon, index) => (
              <li className={`d-flex align-items-center ${index == 0 ? 'ms-auto' : 'ms-3'}`}>
                <i className={`bi ${icon.i} me-1`}></i>
                <small>{icon.t}</small>
              </li>
            ))}
          </div>

        </div>
        <div className='blur-image' style={{ backgroundImage: `url(${img})`, filter, transform }}></div>
      </article>
    </div>
  );
};

export default Project;
