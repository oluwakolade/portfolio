import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="body">
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-details-name">
              <span className="pry-text">
                {" "}
                Hello, I'm <span className="highlight-txt">Kolade</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="pry-text">
                {" "}
                <h1>
                  {""}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Frontend Developer ",
                      1000,
                      "Wed Designer",
                      1000,
                      "Mobile Developer",
                      1000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  lets build beautiful and functional apps!
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">
                {""}
                Hire Me{""}
              </button>
              <a href="#">
                <button className=" btn highlighted-btn">Download CV</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="service-header">
          <span className="skill-txt"> Skill-set</span>
        </div>
        <div className="card">
          <div className="card1">
            <h1 className="card-title">Web Development</h1>
            <p className="card-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="card1">
            <h1 className="card-title">Web Design</h1>
            <p className="card-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="card1">
            <h1 className="card-title">Mobile Development</h1>
            <p className="card-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="proj">
        <div className="service-header">
          <span className="skill-txt"> Projects</span>
        </div>
        <div className="card">
          <div className="project1"> <img src="assets/home/projects.jpg"></img></div>
          <div className="project1"><img src="assets/home/projects.jpg"></img></div>
          <div className="project1"><img src="assets/home/projects.jpg"></img></div>
        </div>
      </div>

      {/* contact */}
      <div className="contact">
      <div className="service-header">
          <span className="skill-txt"> contacts</span>

        </div>
        <a href="#">
            <i className="fa fa-facebook-square"></i>
        </a>
        <a href="#">
            <i className="fa fa-github-square"></i>
        </a>
        <a href="#">
            <i className="fa fa-twitter-square"></i>
        </a>
      </div>
    </div>
  );
}
