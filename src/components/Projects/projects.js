import React from "react";
import "./projects.css";
import "./project_responsive.css";

import cycle from "../../images/cycle.png";
import aventra from "../../images/aventra.png";
import ida from "../../images/ida_img.png";
import blossom from "../../images/blossom_img.png";
import proofEasy from "../../images/proof_easy.png";
import vita from "../../images/vita.png";
import trailer from "../../images/trailer.png";
import flayboard from "../../images/flayboard.png";
import marci from "../../images/marci.png";
import urlsvg from "../../images/url-link.png";

const Projects = () => {
  return (
    <div className="text-center" id="projects">
      <div className="main-container">
        <div className="container-column">
          <h1>Projects</h1>

          <div className="projectContainer d-flex flex-wrap justify-content-center align-items-center gap-4">

            <div className="parent-card">
              <div className="cardProj">
                <img src={cycle} alt="Cycle & Strength project" />
              </div>
              <div className="img-hover d-flex justify-content-center align-items-center">
                <div className="img-logo">
                  <a
                    href="https://cycleandstrength.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={urlsvg} alt="Visit website" className="responsive-img" />
                  </a>
                </div>
              </div>
            </div>

            <div className="parent-card">
              <div className="cardProj">
                <img src={aventra} alt="Aventra Management project" />
              </div>
              <div className="img-hover d-flex justify-content-center align-items-center">
                <div className="img-logo">
                  <a
                    href="https://aventramanagement.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={urlsvg} alt="Visit website" className="responsive-img" />
                  </a>
                </div>
              </div>
            </div>

            <div className="parent-card">
              <div className="cardProj">
                <img src={ida} alt="Intuitive Data Analytics project" />
              </div>
              <div className="img-hover d-flex justify-content-center align-items-center">
                <div className="img-logo">
                  <a
                    href="https://www.intuitivedataanalytics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={urlsvg} alt="Visit website" className="responsive-img" />
                  </a>
                </div>
              </div>
            </div>

            <div className="parent-card">
              <div className="cardProj">
                <img src={blossom} alt="Blossom Ecommerce project" />
              </div>
              <div className="img-hover d-flex justify-content-center align-items-center">
                <div className="img-logo">
                  <a
                    href="https://blossomecom.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={urlsvg} alt="Visit website" className="responsive-img" />
                  </a>
                </div>
              </div>
            </div>

            <div className="parent-card">
              <div className="cardProj">
                <img src={proofEasy} alt="ProofEasy project" />
              </div>
              <div className="img-hover d-flex justify-content-center align-items-center">
                <div className="img-logo">
                  <a
                    href="https://proofeasy.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={urlsvg} alt="Visit website" className="responsive-img" />
                  </a>
                </div>
              </div>
            </div>

            <div className="parent-card">
              <div className="cardProj">
                <img src={vita} alt="Vita Natural project" />
              </div>
              <div className="img-hover d-flex justify-content-center align-items-center">
                <div className="img-logo">
                  <a
                    href="https://vitanatural.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={urlsvg} alt="Visit website" className="responsive-img" />
                  </a>
                </div>
              </div>
            </div>

            <div className="parent-card">
              <div className="cardProj">
                <img src={trailer} alt="AL Trailer Rentals project" />
              </div>
              <div className="img-hover d-flex justify-content-center align-items-center">
                <div className="img-logo">
                  <a
                    href="https://www.altrailerrentals.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={urlsvg} alt="Visit website" className="responsive-img" />
                  </a>
                </div>
              </div>
            </div>

            <div className="parent-card">
              <div className="cardProj">
                <img src={flayboard} alt="Flyboard project" />
              </div>
              <div className="img-hover d-flex justify-content-center align-items-center">
                <div className="img-logo">
                  <a
                    href="https://johnb562.sg-host.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={urlsvg} alt="Visit website" className="responsive-img" />
                  </a>
                </div>
              </div>
            </div>

            <div className="parent-card">
              <div className="cardProj">
                <img src={marci} alt="Marci Metzger project" />
              </div>
              <div className="img-hover d-flex justify-content-center align-items-center">
                <div className="img-logo">
                  <a
                    href="https://marci-metzger.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={urlsvg} alt="Visit website" className="responsive-img" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;