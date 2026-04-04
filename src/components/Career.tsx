import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MBA Candidate</h4>
                <h5>Univ. of Europe for App. Sci., Berlin</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pursuing an MBA in International Business. Graduated with a BBA in Business Analytics from Christ University in 2023.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Specialist</h4>
                <h5>Antrajaal, India</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Provided L2 technical support for a Salesforce-based B2B telecommunications platform, escalating complex issues via Jira and coordinating with engineering teams to resolve bugs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales & Marketing Executive</h4>
                <h5>Saket Fincorp, India</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Developed frontend features for an enterprise airline booking platform using React, TypeScript, and Redux. Participated in client requirement discussions and collaborated closely with backend developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
