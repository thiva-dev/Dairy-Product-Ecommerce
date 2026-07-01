import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import './Footer.css'
const Footer = () => {

  const footerLinks = {
    Company: [
      "About Us",
      "Careers",
      "Blog",
      "Contact Us",
    ],

    Categories: [
      "Milk",
      "Curd & Yogurt",
      "Butter & Ghee",
      "Ice Cream",
    ],

    "Customer Care": [
      "FAQ",
      "Shipping Policy",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-section logo-section">
          <div className="logo-box">
            <img src="/logo.png" alt="Dairy Fresh" className="footer-logo"/>

            <div>
              <p>Pure • Fresh • Healthy</p>
            </div>
          </div>

          <p className="description">
            We bring you the freshest and purest dairy
            products every day from our farms directly
            to your home.
          </p>

          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Dynamic Sections */}
        {Object.entries(footerLinks).map(
          ([title, links]) => (
            <div className="footer-section" key={title}>
              <h3>{title}</h3>

              <ul>
                {links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          )
        )}

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>

          <p>
            Subscribe for updates and exclusive
            dairy offers.
          </p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2026 Dairy Fresh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;