import React from 'react';
import { SiReact } from "react-icons/si";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
    return (
        <>
            <div className="work" id="work">
                <div className="container work-exp">
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Internship Experience
                    </h2>
                    <hr />
                    <VerticalTimeline lineColor="#1e1e2c">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: "#1e1e2c" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  white",
                            }}
                            date="2021 February –
                            2021 February"
                            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Python Developer Intern
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                Dezignolics Web and Software Solutions
                            </h5>
                            <p>
                                Learned key concepts like OOPS, basics of file handling, Pandas and
                                Numpy. Developed practical skills in problem solving and coding
                                through hands-on exercises and project.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
};

export default WorkExp