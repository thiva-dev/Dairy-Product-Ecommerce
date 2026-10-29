import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: axios.post("http://127.0.0.1:8000/api/contact/", form)
    console.log(form);
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const info = [
    { icon: <FaPhoneAlt />, title: "Call Us", text: "+91 98765 43210" },
    { icon: <FaEnvelope />, title: "Email Us", text: "support@dairyfresh.com" },
    { icon: <FaMapMarkerAlt />, title: "Visit Us", text: "12, Anna nagar, Chennai, India" },
    { icon: <FaClock />, title: "Working Hours", text: "Mon - Sun: 5:00 AM - 9:00 PM" },
  ];

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
          <p>We would love to hear from you</p>
          <div className="contact-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> Contact
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="container contact-info">
        <div className="row g-4">
          {info.map((i) => (
            <div className="col-md-3 col-sm-6" key={i.title}>
              <div className="info-card">
                <div className="info-icon">{i.icon}</div>
                <h5>{i.title}</h5>
                <p>{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORM + IMAGE */}
      <section className="container contact-main">
        <div className="row g-0 contact-box">
          <div className="col-md-6 contact-image">
            <img src="/Milk.jpg" alt="Fresh dairy" />
            <div className="contact-image-text">
              <h3>Fresh Dairy, Fresh Support</h3>
              <p>Questions about orders, products or delivery? Send us a message.</p>
            </div>
          </div>

          <div className="col-md-6 contact-form-side">
            <h3>Send Us a Message</h3>
            <p className="text-muted">Fill the form and we will reply within 24 hours.</p>

            {sent && <div className="alert alert-success">Thank you! Your message has been sent.</div>}

            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <div className="row">
                <div className="col-md-6">
                  <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <textarea name="message" rows="5" placeholder="Your Message" value={form.message} onChange={handleChange} required />
              <button type="submit" className="btn btn-primary contact-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;