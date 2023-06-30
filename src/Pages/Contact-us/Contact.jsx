import React, { useState } from 'react';
// import './Contact.css'
import Navbar from '../../Components/Navbar/Navbar';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    company: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='contactus-body' >
      <div className="box">
        <div className="logo">
          <img src="https://image.ibb.co/new91k/logo.png" alt="Logo" />
        </div>
        <div className="text">
          <h1>Contact <span className="red">Us</span></h1>
          <hr className="redline" />
          <p>Have Questions? We have answers (may be)</p>
        </div>
      </div>

      <div className="touch">
        <h2>Get in touch</h2>
        <hr className="redline" />
      </div>

      <form onSubmit={handleSubmit} name="contact-form">
        <div className="container form-margin">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  name="firstname"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  name="company"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  required
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  name="lastname"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course"
                  value={formData.course}
                  onChange={handleChange}
                  name="course"
                  required
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="pager">
                <button type="submit" className="btn btn-success">
                  SEND MESSAGE
                </button>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
          </div>
        </div>
      </form>

      <div className="container address">
        {/* Address section */}
      </div>

      <div className="bottom-gap"></div>
    </div>
  );
}

export default ContactForm;
