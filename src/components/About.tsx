import { MatrixText } from "./MatrixText";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">
          <MatrixText text="About Me" className="text-inherit" />
        </h3>
        <p className="about-para intro">
          I'm Arjun, a marketer who's always been fascinated by how data can tell a human story.
        </p>
        <p className="about-para">
          Over the last couple of years, I've lived at the intersection of digital marketing and client acquisition, building everything from high converting search campaigns to complex CRM pipelines. I genuinely enjoy the process of turning a raw set of numbers into a clear strategy that actually works.
        </p>
        <p className="about-para">
          Right now, I'm based in Berlin, finishing my MBA in International Business and diving deep into performance marketing and AI automation. When I'm not at my desk, I'm usually out exploring the city or trying to improve my German which, honestly, is still very much a work in progress.
        </p>
        <p className="about-para cta">
          I'm always open to new challenges and interesting conversations. If you think we'd work well together, let's connect.
        </p>
      </div>
    </div>
  );
};

export default About;
