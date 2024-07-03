import React from "react";
import "./About.css";
import mypic from "../../assets/images/e.jpeg"
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src={mypic}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              My name is Sweety Kumari, and I am a student in the CSE department at NIT Patna. I have a strong interest in software development, especially in web development and machine learning. I thrive on challenging projects to showcase my skills and learn continuously. To push my boundaries, I participate in competitions and practice DSA and Competitive Programming on platforms like GeeksforGeeks, LeetCode, and Codeforces.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;