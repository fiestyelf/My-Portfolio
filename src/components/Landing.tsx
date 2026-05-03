import { PropsWithChildren } from "react";
import { MatrixText } from "./MatrixText";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2><MatrixText text="Hello, I am" className="text-inherit" initialDelay={200} /></h2>
            <h1>
              <MatrixText text="ARJUN" className="text-inherit" initialDelay={500} />
              <br />
              <span>
                <MatrixText text="THAPA" className="text-inherit" initialDelay={1000} />
              </span>
            </h1>
          </div>
          <div className="landing-info">
            <h3><MatrixText text="PERFORMANCE MARKETING &" className="text-inherit" initialDelay={1500} noWrap={true} /></h3>
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
