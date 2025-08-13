import React from "react";
import HeroSection from "../components/HeroSection";

const Contact = () => {
  return (
    <>
      <HeroSection title={"Contact Page"} />

     {/* Contact Section */}
<section className="contact">
  <div className="contact-container">
    {/* Left Side - Info */}
    <div className="contact-info">
      <h3>Get in Touch</h3>
      <p>
        We would love to hear from you! Feel free to reach out via email,
        phone, or the form.
      </p>
      <ul>
        <li>
          <i className="fas fa-map-marker-alt" /> 123 Decor Street, Mumbai,
          India
        </li>
        <li><i className="fas fa-phone" /> +91 98765 43210</li>
        <li><i className="fas fa-envelope" /> support@decorvista.com</li>
      </ul>
    </div>
    {/* Right Side - Form */}
    <div className="contact-form">
      <h3>Send Us a Message</h3>
      <form action="#">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required defaultValue={""} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
</section>

    </>
  );
};

export default Contact;
