import React from "react";
import "../Styles/ContactForm.module.css";

function Contact() {
  return (
    <div>
      <h1 className="textcenter padding " style={{ margin: "3em" }}>
        Get a word
      </h1>

      <form name="contact" method="POST" className={`padding margin3`} action="/thanks">
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Your Name: <input type="text" name="name" />
        </label>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
        <button name="button" className="btn margin3" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
