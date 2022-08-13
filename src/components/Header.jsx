import React from 'react';
import Avatar from '../img-assets/abel-baker.jpg';

function Header() {

  return (
    <>
      <header id="header" className="sticky-top mb-2">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-sm">
            <span className="navbar-brand mb-0 h1 text-nowrap">Abel Baker</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-5">
                <a className="nav-link" href="#section-projects">Projects</a>
                <a className="nav-link" href="#section-contact">Contact</a>
              </div>
            </div>

          </div>
        </nav>
      </header>

      <section className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
                <img src={Avatar} alt="avatar of abel-baker" className="d-block mx-auto me-lg-1 img-fluid shadow-lg" height="237" loading="lazy" style={{borderRadius: '3px'}} />
            </div>
            <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3" style={{textShadow: '1rem 1rem 3rem rgba(0,0,0,.25)'}}><span className="text-nowrap">Abel Baker,</span> <span className="text-nowrap">silly billy</span></h1>
                <p className="lead"></p>front-end developer, back-end apprentice
            </div>
        </div>
      </section>
    </>
  );
};

export default Header;