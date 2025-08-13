import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h4>Top Products</h4>
          <ul>
            <li>
              <a href="#">Managed Website</a>
            </li>
            <li>
              <a href="#">Manage Reputation</a>
            </li>
            <li>
              <a href="#">Power Tools</a>
            </li>
            <li>
              <a href="#">Marketing Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Brand Assets</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Features</h4>
          <ul>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Brand Assets</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Research</a>
            </li>
            <li>
              <a href="#">Experts</a>
            </li>
            <li>
              <a href="#">Agencies</a>
            </li>
          </ul>
        </div>
        <div className="footer-col newsletter">
          <h4>Newsletter</h4>
          <p>Heaven fruitful doesn’t over lesser in days. Appear creeping</p>
          <form>
            <input type="email" placeholder="Email Address" required />
            <button type="submit">subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright ©2025 All rights reserved</p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i className="fab fa-twitter" />
          </a>
          <a href="#">
            <i className="fas fa-globe" />
          </a>
          <a href="#">
            <i className="fab fa-behance" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
