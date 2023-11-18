import React from 'react';
import "./Education.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";

const Education = () => {
    return (
        <>
            <div className=" education" id="education">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Education Details
                </h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2019 - 2023"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachlore's Of Engineering</h3>
                        <h2 className="vertical-timeline-element-subtitle">
                            University Of Mumbai
                            <h6>(80.63%)</h6>
                        </h2>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2018 - 2019"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">HSC</h3>
                        <h2 className="vertical-timeline-element-subtitle">
                            DMJC, Pune
                            <h6>(72%)</h6>
                        </h2>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2016 - 2017"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">HSC</h3>
                        <h2 className="vertical-timeline-element-subtitle">
                            Shri Sadguru Sitaram Maharaj Vidyalaya, Pimpri-Pendhar
                            <h6>(90%)</h6>
                        </h2>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Education