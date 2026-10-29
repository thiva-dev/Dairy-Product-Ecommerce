import React from "react";
import { Link } from "react-router-dom";
import { FaLeaf, FaTruck, FaHeart, FaAward } from "react-icons/fa";
import "./About.css";

function About() {
  const values = [
    { icon: <FaLeaf />, title: "100% Fresh", text: "Farm-fresh dairy delivered the same day, with no preservatives." },
    { icon: <FaTruck />, title: "Doorstep Delivery", text: "Early morning delivery so your day starts with purity." },
    { icon: <FaHeart />, title: "Made with Care", text: "Every product is tested for quality and hygiene." },
    { icon: <FaAward />, title: "Trusted Quality", text: "Loved by thousands of happy families." },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "50+", label: "Dairy Products" },
    { number: "25+", label: "Partner Farms" },
    { number: "5+", label: "Years of Trust" },
  ];

  const products = ["/Milk.jpg", "/curd.png", "/butter.png", "/ghee.png"];

  return (
    <div className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>Bringing the goodness of pure dairy from our farms to your family</p>
          <div className="about-breadcrumb">
            <Link to="/">Home</Link> <span>/</span> About
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="container about-story">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <div className="story-images">
              <img src="/Milk.jpg" alt="Fresh milk" className="story-img-main" />
              <img src="/curd.png" alt="Fresh curd" className="story-img-small" />
            </div>
          </div>
          <div className="col-md-6">
            <span className="section-tag">Our Story</span>
            <h2>Pure Dairy, Straight From The Farm</h2>
            <p>
              We started with a simple idea: every family deserves fresh, honest dairy.
              Working directly with local farmers, we skip the middlemen so that milk,
              curd, butter, ghee and sweets reach you at their freshest.
            </p>
            <p>
              Today, we deliver a wide range of dairy products with a promise of quality,
              hygiene and taste in every pack.
            </p>
            <Link to="/categories" className="btn btn-primary about-btn">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div className="container">
          <div className="row text-center">
            {stats.map((s) => (
              <div className="col-6 col-md-3 mb-3" key={s.label}>
                <h2>{s.number}</h2>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="container about-values">
        <div className="text-center mb-5">
          <span className="section-tag">Why Choose Us</span>
          <h2>What Makes Us Different</h2>
        </div>
        <div className="row g-4">
          {values.map((v) => (
            <div className="col-md-3 col-sm-6" key={v.title}>
              <div className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h5>{v.title}</h5>
                <p>{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT STRIP */}
      <section className="container about-gallery">
        <div className="text-center mb-4">
          <span className="section-tag">Our Products</span>
          <h2>Fresh Every Day</h2>
        </div>
        <div className="row g-3">
          {products.map((img) => (
            <div className="col-6 col-md-3" key={img}>
              <div className="gallery-item">
                <img src={img} alt="Dairy product" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;