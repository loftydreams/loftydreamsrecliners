import OfflineVsOnline from "./OfflineVsOnline";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <OfflineVsOnline />
      <br />
      <div className="wrapper">
        <form
          className="form"
          autoComplete="off"
          name="contactForm"
          method="post"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <div className="pageTitle title">Contact Us </div>
          <div className="secondaryTitle title">
            Please fill this form to reach us.
          </div>
          <input
            type="text"
            name="name"
            id="name"
            className="name formEntry"
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="email"
            id="email"
            className="email formEntry"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            className="email formEntry"
            placeholder="Phone"
            required
          />
          <textarea
            name="message"
            id="message"
            className="message formEntry"
            placeholder="Message"
            required
          ></textarea>
          <button className="submit formEntry">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
