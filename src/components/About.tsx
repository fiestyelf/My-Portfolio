import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para intro">
          I'm Arjun, a marketer who thinks like an analyst and moves like an entrepreneur.
        </p>
        <p className="para">
          With 1.5+ years of experience across digital marketing, CRM management, and client
          acquisition, I've built campaigns, managed pipelines, and worked across financial services
          and tech environments. I get genuinely excited about a well-optimised Google Ads campaign,
          a clean outreach sequence that converts, or a dashboard that tells a story at a glance.
        </p>
        <p className="para">
          I'm currently pursuing my MBA in International Business in Berlin, deepening my expertise
          in performance marketing and analytics. Outside of work, you'll find me exploring the city,
          following markets, or figuring out how to say something clever in German — still a work in
          progress. 🇩🇪
        </p>
        <p className="para cta">
          If you're looking for someone who combines commercial instincts with data-driven thinking,
          let's talk.
        </p>
      </div>
    </div>
  );
};

export default About;
