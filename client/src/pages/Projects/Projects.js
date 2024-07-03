import React from "react";
import "./Projects.css";
import myPic from '../../assets/images/p11.png';
import p2 from '../../assets/images/g1.png';
import p3 from '../../assets/images/ambuswift.png';
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          These are my projects that I have built using my knowledge in collaboration with my group members. These are either hackathon or college projects, except for the portfolio.
        </p>

        {/* First row of cards */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack + ML</span>
                  <img src={myPic} alt="Fly Detector" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <div>
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">React</span>
                    <span className="card-detail-badge">MongoDB</span>
                  </div>
                  <div>
                    <span className="card-detail-badge">CNN</span>
                    <span className="card-detail-badge">Roboflow</span>
                    <span className="card-detail-badge">Chatbot</span>
                  </div>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">FLY DETECTOR</h6>
                  </div>
                  <a className="ad-btn" href="https://github.com/JatinSinghBisht01/Aerothon_6.0_CodeByte">
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FULL STACK+ML</span>
                  <img src={p2} alt="Trans-Bill (APP+Website)" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <div>
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">React, React-Native</span>
                  </div>
                  <div>
                    <span className="card-detail-badge">MongoDB</span>
                    <span className="card-detail-badge">Chatbot</span>
                  </div>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Trans-Bill (APP+Website)</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/TRISHAHALDER/ByteVerse_Hackhive">
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">FULL STACK</span>
                  <img src={p3} alt="Ambuswift" />
                </div>
                <div className="card-image-overlay m-auto mt-3">
                  <div>
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">React</span>
                  </div>
                  <div>
                    <span className="card-detail-badge">CSS</span>
                    <span className="card-detail-badge">Bootstrap</span>
                  </div>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Ambuswift</h5>
                  </div>
                  <a className="ad-btn" href="https://github.com/Vaibhav2202-ECE/Web_Warriors_Team">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
