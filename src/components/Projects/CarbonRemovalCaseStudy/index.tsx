import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const CarbonRemovalCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="carbon-case-study-body">
      <div className="carbon-page">
        <nav className="carbon-nav">
          <Link to="/" className="carbon-nav-back">
            Work
          </Link>
          <span className="carbon-nav-label">Case Study</span>
        </nav>

        <section className="carbon-hero">
          <div className="carbon-hero-eyebrow">
            <span className="carbon-tag carbon-tag-green">Social Media</span>
            <span className="carbon-tag carbon-tag-outline">NGO · Climate Tech</span>
          </div>
          <h1 className="carbon-hero-title">
            Carbon<br />
            <em>Removal</em> Credit
          </h1>
          <p className="carbon-hero-sub">
            From the atmosphere to the field — building a community from the ground up to advocate for biochar, carbon sequestration, and empowering farmers in Africa.
          </p>
        </section>

        <div className="carbon-divider"></div>

        <section className="carbon-content-section">
          <div className="carbon-section-header">
            <p className="carbon-section-label">The Mission</p>
            <h2 className="carbon-section-title">Humus instead of <em>hopelessness</em>.</h2>
          </div>
          <p className="carbon-text-block">
            In many regions of Africa, smallholder farmers face growing challenges: climate change, depleted soils, and limited access to modern resources. The mission was clear: use the proceeds from carbon sink credits to provide these farmers with biochar and training.
          </p>
          <p className="carbon-text-block">
            My role was to translate this complex, science-heavy initiative into a compelling social media narrative. It wasn't just about posting; it was about building a movement around <strong>#CarbonRemoval</strong> and demonstrating that true resilience is the ultimate climate impact.
          </p>
        </section>

        <section className="carbon-stats-section">
          <div className="carbon-section-header">
            <p className="carbon-section-label">The Impact</p>
            <h2 className="carbon-section-title">Growth driven by <em>purpose</em>.</h2>
          </div>
          <div className="carbon-stats-grid">
            <div className="carbon-stat-cell">
              <div className="carbon-stat-number">+500%</div>
              <div className="carbon-stat-change">Facebook Growth</div>
              <div className="carbon-stat-desc">Followers gained in just 3 months, scaling to 3,708 highly engaged advocates.</div>
            </div>
            <div className="carbon-stat-cell">
              <div className="carbon-stat-number">1,948</div>
              <div className="carbon-stat-change">Instagram Community</div>
              <div className="carbon-stat-desc">Followers built entirely from zero, focusing on visual storytelling and education.</div>
            </div>
            <div className="carbon-stat-cell">
              <div className="carbon-stat-number">30%</div>
              <div className="carbon-stat-change">Real World Yield</div>
              <div className="carbon-stat-desc">The crop yield increase experienced by farmers using the biochar we advocated for.</div>
            </div>
          </div>
        </section>

        <section className="carbon-content-section">
          <div className="carbon-section-header">
            <p className="carbon-section-label">The Strategy</p>
            <h2 className="carbon-section-title">Education as a <em>catalyst</em>.</h2>
          </div>
          <ul className="carbon-work-list">
            <li className="carbon-work-item">
              <span className="carbon-work-num">01</span>
              <div className="carbon-work-text">
                <strong>Foundation & Identity</strong>
                Launched both Facebook and Instagram pages from scratch. Established a premium, grounded visual identity and a tone of voice that balanced scientific rigor with human empathy.
              </div>
            </li>
            <li className="carbon-work-item">
              <span className="carbon-work-num">02</span>
              <div className="carbon-work-text">
                <strong>Simplifying the Science</strong>
                Developed content pillars designed to educate the public on biochar, the carbon cycle, and soil health. We made the abstract concept of "negative emissions" tangible and actionable.
              </div>
            </li>
            <li className="carbon-work-item">
              <span className="carbon-work-num">03</span>
              <div className="carbon-work-text">
                <strong>Organic Discovery Engine</strong>
                Optimized content architecture for discoverability. Over 80% of our Facebook page views came from non-followers, proving the content was breaking out of echo chambers and reaching new audiences.
              </div>
            </li>
          </ul>
        </section>

        <section className="carbon-content-section">
          <div className="carbon-quote-block">
            <p className="carbon-quote-text">
              "I took this on voluntarily because the mission resonated. Using biochar to remove carbon while simultaneously empowering farmers felt like a cause worth showing up for. It’s proof that purposeful content strategy can drive real-world climate action."
            </p>
            <div className="carbon-quote-author">— Personal Note</div>
          </div>
        </section>

        <div className="carbon-meta-bar">
          <div className="carbon-meta-pills">
            <span className="carbon-meta-pill">Content Strategy</span>
            <span className="carbon-meta-pill">Social Media</span>
            <span className="carbon-meta-pill">NGO</span>
            <span className="carbon-meta-pill">Climate Tech</span>
          </div>
          <span className="carbon-meta-period">Sep – Nov 2025 · Voluntary</span>
        </div>
      </div>
    </div>
  );
};

export default CarbonRemovalCaseStudy;
