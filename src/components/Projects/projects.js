import React from 'react';
import '../Projects/projects.css';
import '../Projects/project_responsive.css';

import cycle from '../../images/cycle.png';
import aventra from '../../images/aventra.png';
import ida from '../../images/ida_img.png';
import blossom from '../../images/blossom_img.png';
import proofEasy from '../../images/proof_easy.png';
import vita from '../../images/vita.png';
import trailer from '../../images/trailer.png';
import flayboard from '../../images/flayboard.png';
import marci from '../../images/marci.png';
import urlsvg from '../../images/url-link.png';

const Projects = () => {
  const projects = [
    { img: cycle, link: 'https://cycleandstrength.com/' },
    { img: aventra, link: 'https://aventramanagement.com/' },
    { img: ida, link: 'https://www.intuitivedataanalytics.com/' },
    { img: blossom, link: 'https://blossomecom.com/' },
    { img: proofEasy, link: 'https://proofeasy.io/' },
    { img: vita, link: 'https://vitanatural.nl/' },
    { img: trailer, link: 'https://www.altrailerrentals.com/' },
    { img: flayboard, link: 'https://johnb562.sg-host.com/' },
    { img: marci, link: 'https://marci-metzger.netlify.app/' },
  ];

  return (
    <div className='text-center' id='projects'>
      <div className='main-container'>
        <div className='container-column'>
          <h1>Projects</h1>

          <div className='projectContainer d-flex flex-wrap justify-content-center align-items-center gap-4'>

            {projects.map((p, i) => (
              <div className='parent-card' key={i}>
                <div className='cardProj'>
                  <img src={p.img} alt="Project screenshot" />
                </div>

                <div className='img-hover d-flex justify-content-center align-items-center'>
                  <div className='img-logo'>
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      <img src={urlsvg} alt="Visit link" className="responsive-img" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;