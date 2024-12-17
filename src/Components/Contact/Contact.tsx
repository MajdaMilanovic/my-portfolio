import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

   const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    setLoading(true);

    if (form.current?.checkValidity()) {
      emailjs
      .sendForm(
        "service_a5pnmmt", // Replace with your EmailJS Service ID
        "template_c93uq0m", // Replace with your EmailJS Template ID
        form.current!,
        "Amh0qJ6PYANLqKjDl" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess(true);
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setError(true);
        }
      )
      .finally(() => setLoading(false));
       } else {
      setLoading(false);
      form.current?.reportValidity();
    }
  };




  return (
    <div className="contact-container">
      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-item">
          <span className="info-title">Email:</span>
          <p>milanovicmajda521@gmail.com</p>
        </div>
        <div className="info-item">
          <span className="info-title">Phone:</span>
          <p>+387 61 056 789</p>
        </div>
        <div className="info-item">
          <span className="info-title">Location:</span>
          <p>Mostar, Bosna i Hercegovina</p>
        </div>
      </div>
      <div className="contact-container">
      <h2>Contact Me</h2>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="from_name" placeholder="Your Name" required minLength={2}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="from_email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
        {loading ? "Sending..." : "Send Message"}
      </form>

      {/* Success/Error Messages */}
      {success && <p className="success-message">Message sent successfully!</p>}
      {error && <p className="error-message">Something went wrong. Please try again.</p>}

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://linkedin.com/in/majda-milanovic-335908267" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/MajdaMilanovic" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://x.com/Majdaaam" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
    </div>
  );
};


