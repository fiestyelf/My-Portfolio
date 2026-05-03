import { useState, useCallback } from "react";
import { MatrixText } from "./MatrixText";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "ADKraft",
    category: "AI-Powered Performance Marketing",
    description: "An AI platform that builds performance marketing strategies and ad copy in seconds using advanced language models.",
    tools: "Next.js, Antigravity, Claude, Meta/Google Ads Strategy",
    image: "/images/adkraft.png",
    link: "https://adkraft-website.vercel.app/",
  },
  {
    title: "FitFuel Nutrition",
    category: "Performance Marketing Case Study",
    description: "A deep dive into scaling a nutrition brand through aggressive Google Ads testing and conversion tracking optimization.",
    tools: "Google Ads (Search & Discovery), GTM, GA4, Scaling Strategy",
    image: "/images/fitfuel.png",
    link: "/project/fitfuel",
  },
  {
    title: "IdeaValidator",
    category: "AI Market Research Tool",
    description: "An automated research tool that uses AI agents to validate startup ideas and analyze market demand instantly.",
    tools: "React, AI Agents, Market Analysis, Rapid Prototyping",
    image: "/images/ideavalidator.png",
    link: "https://idea-validator-cyan.vercel.app/",
  },
  {
    title: "Carbon Removal Credit",
    category: "Social Media & NGO Growth",
    description: "Strategic organic growth and community building for an environmental NGO, focused on driving awareness for carbon credits.",
    tools: "Content Strategy, Meta Business Suite, Organic Growth, NGO Branding",
    image: "/images/carbon_removal.png",
    link: "/project/carbon-removal",
  }
];


const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          <MatrixText text="My" className="text-inherit" /> <span><MatrixText text="Work" className="text-inherit" initialDelay={400} /></span>
        </h2>

        <div className="carousel-wrapper">
          {projects.length > 1 && (
            <>
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={goToPrev}
                aria-label="Previous project"
                data-cursor="disable"
              >
                <MdArrowBack />
              </button>
              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={goToNext}
                aria-label="Next project"
                data-cursor="disable"
              >
                <MdArrowForward />
              </button>
            </>
          )}

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <p className="project-description">{project.description}</p>
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          {projects.length > 1 && (
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                    }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
