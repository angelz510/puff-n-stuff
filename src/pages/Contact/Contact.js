import React from "react";
import "./Contact.css";

const Contact = () => {
  const source =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5516019203997!2d-122.21690104822967!3d37.77711087965974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8660b1db6391%3A0x8fdef6d0182f445e!2sPuff%20n%20Stuff%20Head%20Shop!5e0!3m2!1sen!2sus!4v1637611680685!5m2!1sen!2sus";
  return (
    <div className="contact-container">
      <h1 className="contact-title pt-3">Contact</h1>
      <form
        action="https://formsubmit.co/your@email.com"
        method="POST"
        className="contact-wrapper"
      >
        <div className="name-group">
          <label for="first name" className="contact-text">
            Name
          </label>
          <input
            type="first name"
            id="first name"
            className="name-input-size"
            placeholder="Name"
          />
          <label for="email" className="contact-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="name-input-size"
            placeholder="Email"
          />
        </div>
        <div className="category-message-group">
          <label for="Category" className="contact-text">
            Category
          </label>
          <select id="category" className="category-group">
            <option value="Questions">Questions</option>
            <option value="Item Inquiry" selected>
              Item Inquiry
            </option>
            <option value="Comments">Comments</option>
          </select>
          <label for="message" className="contact-text">
            Message
          </label>
          <textarea
            name=""
            id="message"
            rows="3"
            className="message-group"
            placeholder="Please tell us your thoughts"
          ></textarea>
        </div>
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>

      <iframe
        className="maps"
        title="google maps"
        src={source}
        width="80%"
        height="400"
      />
      <div className="contact-details">
        <br />
        <strong>Hours</strong>
        <p>Monday-Saturday 10:30am - 8:00pm</p>
        <p>Sunday 12:00pm - 6:00pm</p>
        <br />
      </div>
    </div>
  );
};

export default Contact;
