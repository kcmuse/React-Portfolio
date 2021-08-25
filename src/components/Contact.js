import React from "react";
import NavBar from "./NavBar";

export default function Contact() {
  return (
    <div className="about-main" id="contact">
      <div className="container">
            <div className="card-body">
                   <h2 className="about-main-title">Contact Me</h2>
                   <hr />
            </div>
      </div>
      <section className="section">
            <div className="container">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h6>Contact Form</h6>
                                <hr />
                                <div className="form-group">
                                    <label className= "mb-1">Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Name" />
                                </div>
                                <div className="form-group">
                                    <label className= "mb-1">Email</label>
                                    <input type="text" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="form-group">
                                    <label className= "mb-1">Message</label>
                                    <textarea rows="3" className="form-control" placeholder="Type your message..."></textarea>
                                </div>
                                <div className="form-group">
                                    <hr />
                                    <button type="button" className="btn btn-success shadow w-100">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
}