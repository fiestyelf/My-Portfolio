import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a href="mailto:arjun8thaapa@gmail.com" data-cursor="disable">
                arjun8thaapa@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+4917623901703" data-cursor="disable">
                +49 176 23901703
              </a>
            </p>
            <h4>Education</h4>
            <p>
              MBA, International Business, University of Europe for Applied Sciences, Berlin — Present
            </p>
            <p>
              BBA in Business Analytics, Christ University — 2023
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="http://www.linkedin.com/in/arjun-thapa-49b788324"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Arjun Thapa</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
