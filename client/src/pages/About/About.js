import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";

const About = () => {
    return (
        <>
            <Jump>
                <div className="about" id="about">
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img
                                src="https://i.pinimg.com/originals/6f/91/6d/6f916d3474c6683d2a0926ebcd621b7f.jpg"
                                alt="profile_pic"
                            />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About me</h1>
                            <p>
                                I am a recent graduate student in 2023, holding a Bachelor of
                                Engineering degree in Electronics and Telecommunication from the
                                University of Mumbai. My passion for web development led me to
                                acquire skills in front-end technologies such as HTML, CSS, and
                                React, allowing me to craft visually appealing and user-friendly
                                websites. Additionally, I possess intermediate-level proficiency
                                in back-end development, specializing in technologies like
                                Express, Node.js, and creating RESTful APIs. I'm driven by a
                                desire to excel as a web developer, using my knowledge and
                                creativity to build innovative digital solutions that deliver a
                                seamless user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    );
};
export default About;
