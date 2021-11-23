import React from "react";
import "./Contact.css";

const Contact = () => {
  const source =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.5516019203997!2d-122.21690104822967!3d37.77711087965974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f8660b1db6391%3A0x8fdef6d0182f445e!2sPuff%20n%20Stuff%20Head%20Shop!5e0!3m2!1sen!2sus!4v1637611680685!5m2!1sen!2sus";
  return (
    <div className="contact-container">
      <h1 className="contact-title p-2">Contact</h1>
      <iframe
        className="maps"
        title="google maps"
        src={source}
        width="600"
        height="400"
      />
      <form action="https://formsubmit.co/your@email.com" method="POST">
        <div>
          <input type="text" name="name" required placeholder="Name" />
        </div>
        <div>
          <input type="email" name="email" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
