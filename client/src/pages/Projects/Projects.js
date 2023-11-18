import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";

const Projects = () => {
    return (
        <>
            <div className="continer project" id="projects">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    TOP RECENT PROJECTS
                </h2>
                <hr />
                <p className="pb-3 text-center">
                    In my portfolio, you'll find a diverse range of projects that
                    showcase my proficiency in both front-end and back-end development.
                    From crafting responsive and engaging user interfaces using HTML, CSS,
                    and React, to building robust server-side solutions with Express and
                    Node.js, my work reflects a commitment to delivering seamless and
                    dynamic web applications. Explore these projects to witness the
                    synergy of aesthetics and functionality in my development journey.
                </p>
                {/* card design */}
                <div className="row" id="ads">
                    <Spin>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Full Stack</span>
                                    <img
                                        src="https://topsoftwarecompanies.co/front_assets/img/blog/ec.jpg"
                                        alt="project1"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">Mongodb</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h6 className="text-uppercase">
                                            Shop World Ecommerce Website
                                        </h6>
                                    </div>
                                    <a
                                        className="ad-btn"
                                        href="https://github.com/ankita-2591/Shop-World--Ecommerce-App/upload/main"
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge"> Front End </span>
                                    <img
                                        src="https://th.bing.com/th/id/OIP.sxmI1WcahL83MPxs02UlGwHaHU?pid=ImgDet&w=206&h=202&c=7&dpr=1.3"
                                        alt="project2"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">HTML</span>

                                    <span className="card-detail-badge">CSS</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase"> PetNes Website</h5>
                                    </div>
                                    <a
                                        className="ad-btn"
                                        href="https://github.com/ankita-2591/PetNes-Project"
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Backend</span>
                                    <img
                                        src="https://www.bing.com/th?id=OIP.V81YaH_nGzVG4PVxpSEkoAHaFB&w=149&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                                        alt="project1"
                                    />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">Express</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title m-auto">
                                        <h5 className="text-uppercase">QR Generator</h5>
                                    </div>
                                    <a className="ad-btn"
                                        href="https://github.com/ankita-2591/QR-Code-Project">
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
