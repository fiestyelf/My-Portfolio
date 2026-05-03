import { useEffect, useRef } from "react";
import { MatrixText } from "./MatrixText";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          <MatrixText text="WHAT" className="text-inherit" />
          <div>
            <MatrixText text="I DO" className="text-inherit" initialDelay={600} />
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DIGITAL MARKETING</h3>
              <h4>Client Acquisition & Analytics</h4>
              <p>
                I specialize in lead generation and client acquisition strategy. For me, it's not just about spending budget, it's about understanding the data, finding the gaps, and scaling what works.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Google Ads</div>
                <div className="what-tags">Meta Ads</div>
                <div className="what-tags">TikTok Ads</div>
                <div className="what-tags">Snapchat & Pinterest Ads</div>
                <div className="what-tags">Google Analytics GA4</div>
                <div className="what-tags">GTM & Conversion Tracking</div>
                <div className="what-tags">HubSpot & CRM</div>
                <div className="what-tags">Market Research</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>FRONTEND DEV & AI AUTOMATION</h3>
              <h4>Interactive UIs & Agentic Workflows</h4>
              <p>
                I'm deeply interested in the intersection of code and AI. Beyond building clean React interfaces, I'm constantly experimenting with agentic workflows and automation to make marketing and development faster and smarter.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React &amp; TypeScript</div>
                <div className="what-tags">n8n Automation</div>
                <div className="what-tags">Claude &amp; Claude Code</div>
                <div className="what-tags">Antigravity</div>
                <div className="what-tags">OpenAI API</div>
                <div className="what-tags">Stitch</div>
                <div className="what-tags">Agentic Workflows</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
