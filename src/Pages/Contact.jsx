import React from "react";

function Contact() {
  return (
    <>
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
    </>
  );
}

export default Contact;
