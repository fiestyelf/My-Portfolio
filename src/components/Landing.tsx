import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ARJUN
              <br />
              <span>THAPA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>PERFORMANCE MARKETING &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI AGENTS</div>
              <div className="landing-h2-2">ANALYTICS</div>
            </h2>
            <h2>
              <div className="landing-h2-info">ANALYTICS</div>
              <div className="landing-h2-info-1">AI AGENTS</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
