import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    //handle submit button
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!name || !email || !msg) {
                toast.error("Please provide all fields");
            }
            const res = await axios.post("/api/v1/portfolio/sendEmail", {
                name,
                email,
                msg,
            });
            //validation success
            if (res.data.success) {
                toast.success(res.data.message);
                setname("");
                setEmail("");
                setMsg("");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className=" contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <LightSpeed>
                                        <img
                                            src="https://th.bing.com/th/id/R.f5137e02719e7af937bbb0460d268079?rik=TP6jDFkiM9Jsvw&riu=http%3a%2f%2fbusinessintheblack.com%2fwp-content%2fuploads%2f2011%2f10%2fcontact_me.jpg&ehk=2Ht5%2bfPEU0aCZceTX68Z0%2fMhqS2vASuecOb2NyNoH7k%3d&risl=&pid=ImgRaw&r=0"
                                            alt="ocontact"
                                            className="image"
                                        />
                                    </LightSpeed>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Rotate>
                                <div className="card2 d-flex card border-0 px-4 py-5">
                                    <div className="row">
                                        <div className="row">
                                            <h6>
                                                Contact With
                                                <a href="https://www.linkedin.com/in/ankita-khokale-93934822b" target="blank">
                                                    <BsLinkedin color="blue" size={30} className="ms-2" />
                                                </a>
                                                <a href='https://github.com/ankita-2591' target='blank'>
                                                    <BsGithub color="black" size={30} className="ms-2" />
                                                </a>
                                                <a href="https://www.instagram.com/invites/contact/?i=1ch4u2d7ds7g&utm_content=5dnn6hj"
                                                    target="blank">
                                                    <BsInstagram color='rgb(228, 64, 95)' size={30} className='ms-2' />
                                                </a>
                                            </h6>
                                        </div>

                                        <div className="row px-3 mb-4">
                                            <div className="line" />
                                            <small className="or text-center">OR</small>
                                            <div className="line" />
                                        </div>
                                        <div className="row px-3">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Enter your Name"
                                                className="mb-3"
                                                value={name}
                                                onChange={(e) => setname(e.target.value)}
                                            />
                                        </div>
                                        <div className="row px-3">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter Your Email Address"
                                                className="mb-3"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="row px-3">
                                            <textarea
                                                type="text"
                                                name="msg"
                                                placeholder="Write your message"
                                                className="mb-3"
                                                value={msg}
                                                onChange={(e) => setMsg(e.target.value)}
                                            />
                                        </div>
                                        <div className="row px-3">
                                            <button className="button" onClick={handleSubmit}>
                                                SEND MESSAGE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact