import { MatrixText } from "./MatrixText";
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          <MatrixText text="My career" className="text-inherit" /> <span><MatrixText text="&" className="text-inherit" initialDelay={600} /></span> <MatrixText text="experience" className="text-inherit" initialDelay={800} />
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
              Right now, I’m in Berlin finishing my MBA. It’s where I’m really starting to bridge the gap between business strategy and the more technical side of marketing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Marketing Specialist</h4>
                <h5>Antrajaal, India</h5>
              </div>
              <h3>2024 25</h3>
            </div>
            <p>
              I was heavily involved in social media marketing, running ads across different platforms and figuring out what content actually gets people to stop scrolling. It was all about testing new ideas and making sure our social campaigns were bringing in high-quality leads.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales & Marketing Executive</h4>
                <h5>Saket Fincorp, India</h5>
              </div>
              <h3>2023 24</h3>
            </div>
            <p>
              This is where I learned the ropes of sales and marketing. I worked on reaching out to customers and started to understand what really makes people decide to engage with a brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
