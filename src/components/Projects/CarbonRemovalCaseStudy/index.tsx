import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

/* ── Evidence screenshots ── */
import evidenceEngagement from "../../../assets/carbon/evidence-engagement.png";
import evidenceFollowers from "../../../assets/carbon/evidence-followers.png";
import evidenceViews from "../../../assets/carbon/evidence-views.png";

/* ── Animated counter hook ── */
function useCounter(target: number, duration = 1800, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setValue(target); clearInterval(timer); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return value;
}

/* ── Scroll-reveal hook ── */
function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Scroll progress bar ── */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="carbon-progress-track">
      <div className="carbon-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}

/* ── Lightbox ── */
interface LightboxProps {
  images: { src: string; label: string }[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}
function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="carbon-lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="carbon-lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      <button
        className="carbon-lightbox-nav carbon-lightbox-prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >‹</button>
      <div className="carbon-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <img src={images[index].src} alt={images[index].label} className="carbon-lightbox-img" />
        <div className="carbon-lightbox-label">{images[index].label}</div>
        <div className="carbon-lightbox-counter">{index + 1} / {images.length}</div>
      </div>
      <button
        className="carbon-lightbox-nav carbon-lightbox-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >›</button>
    </div>
  );
}

/* ── Evidence Gallery ── */
const evidenceImages = [
  { src: evidenceFollowers,   label: "Facebook: 3,704 Total Followers — +501.6% growth in 122 days" },
  { src: evidenceEngagement,  label: "Facebook: 85 Engagement — +100% from previous 122 days" },
  { src: evidenceViews,       label: "Facebook: 2,168 Views — +100% from previous 122 days" },
];

function EvidenceGallery() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openAt = useCallback((i: number) => setLightboxIndex(i), []);
  const close   = useCallback(() => setLightboxIndex(null), []);
  const prev    = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + evidenceImages.length) % evidenceImages.length : 0), []);
  const next    = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % evidenceImages.length : 0), []);

  return (
    <>
      <div ref={ref} className={`carbon-evidence-grid ${visible ? "carbon-reveal--visible" : "carbon-reveal"}`}>
        {evidenceImages.map((img, i) => (
          <button
            key={i}
            className="carbon-evidence-card"
            onClick={() => openAt(i)}
            style={{ transitionDelay: `${i * 120}ms` }}
            aria-label={`View: ${img.label}`}
          >
            <img src={img.src} alt={img.label} className="carbon-evidence-thumb" />
            <div className="carbon-evidence-overlay">
              <span className="carbon-evidence-zoom">⤢ Expand</span>
            </div>
            <div className="carbon-evidence-caption">{img.label.split("—")[0].trim()}</div>
          </button>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox images={evidenceImages} index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </>
  );
}

/* ── Stat card ── */
interface StatProps { number: number; suffix: string; label: string; desc: string; progress: number; delay: number; }
function StatCard({ number, suffix, label, desc, progress, delay }: StatProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const count = useCounter(number, 1800, visible);
  return (
    <div ref={ref} className={`carbon-stat-cell ${visible ? "carbon-stat-cell--visible" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="carbon-stat-number">{count.toLocaleString()}{suffix}</div>
      <div className="carbon-stat-change">{label}</div>
      <div className="carbon-stat-progress">
        <div className="carbon-stat-progress-bar" style={{ width: visible ? `${progress}%` : "0%", transitionDelay: `${delay + 300}ms` }} />
      </div>
      <div className="carbon-stat-desc">{desc}</div>
    </div>
  );
}

/* ── Strategy accordion ── */
interface StrategyItemProps { num: string; title: string; summary: string; detail: string; delay: number; visible: boolean; }
function StrategyItem({ num, title, summary, detail, delay, visible }: StrategyItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <li className={`carbon-work-item ${visible ? "carbon-work-item--visible" : ""} ${open ? "carbon-work-item--open" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      <span className="carbon-work-num">{num}</span>
      <div className="carbon-work-text">
        <button className="carbon-work-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
          <strong>{title}</strong>
          <span className="carbon-work-chevron">{open ? "−" : "+"}</span>
        </button>
        <p className="carbon-work-summary">{summary}</p>
        <div className={`carbon-work-detail ${open ? "carbon-work-detail--open" : ""}`}>
          <p>{detail}</p>
        </div>
      </div>
    </li>
  );
}

/* ── Timeline ── */
const timelineEvents = [
  { month: "Sep '25", event: "Pages launched",       detail: "Both FB & IG created from zero. Visual identity locked." },
  { month: "Oct '25", event: "Content pillars live", detail: "Biochar edu-series goes live. 80%+ reach from non-followers." },
  { month: "Nov '25", event: "Community peaks",      detail: "FB hits 3,704 followers. IG crosses 1,948. Farmers report 30% yield gains." },
];
function Timeline() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`carbon-timeline ${visible ? "carbon-timeline--visible" : ""}`}>
      {timelineEvents.map((ev, i) => (
        <div key={i} className="carbon-timeline-item" style={{ transitionDelay: `${i * 150}ms` }}>
          <div className="carbon-timeline-dot" />
          <div className="carbon-timeline-month">{ev.month}</div>
          <div className="carbon-timeline-event">{ev.event}</div>
          <div className="carbon-timeline-detail">{ev.detail}</div>
        </div>
      ))}
      <div className="carbon-timeline-line" />
    </div>
  );
}

/* ── Main ── */
const CarbonRemovalCaseStudy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const missionReveal  = useScrollReveal<HTMLElement>();
  const strategyReveal = useScrollReveal<HTMLElement>();
  const quoteReveal    = useScrollReveal<HTMLElement>();
  const evidReveal     = useScrollReveal<HTMLElement>();

  return (
    <div className="carbon-case-study-body">
      <ScrollProgress />
      <div className="carbon-page">

        <nav className="carbon-nav">
          <Link to="/" className="carbon-nav-back">Work</Link>
          <span className="carbon-nav-label">Case Study</span>
        </nav>

        <section className="carbon-hero">
          <div className="carbon-hero-eyebrow">
            <span className="carbon-tag carbon-tag-green">Social Media</span>
            <span className="carbon-tag carbon-tag-outline">NGO · Climate Tech</span>
          </div>
          <h1 className="carbon-hero-title">
            Carbon<br /><em>Removal</em> Credit
          </h1>
          <p className="carbon-hero-sub">
            From the atmosphere to the field — building a community from the ground up to advocate for biochar, carbon sequestration, and empowering farmers in Africa.
          </p>
          <div className="carbon-kpi-strip">
            <div className="carbon-kpi"><span>+501%</span><small>FB Growth</small></div>
            <div className="carbon-kpi-divider" />
            <div className="carbon-kpi"><span>1,948</span><small>IG Followers</small></div>
            <div className="carbon-kpi-divider" />
            <div className="carbon-kpi"><span>30%</span><small>Crop Yield ↑</small></div>
            <div className="carbon-kpi-divider" />
            <div className="carbon-kpi"><span>3mo</span><small>Timeline</small></div>
          </div>
        </section>

        <div className="carbon-divider" />

        <section ref={missionReveal.ref} className={`carbon-content-section ${missionReveal.visible ? "carbon-reveal--visible" : "carbon-reveal"}`}>
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
            <StatCard number={501}  suffix="%" label="Facebook Growth"     desc="Followers gained in 3 months, scaling to 3,704 highly engaged advocates."          progress={100} delay={0} />
            <StatCard number={1948} suffix=""  label="Instagram Community" desc="Followers built from zero, focusing on visual storytelling and education."           progress={65}  delay={120} />
            <StatCard number={30}   suffix="%" label="Real World Yield"    desc="Crop yield increase experienced by farmers using the biochar we advocated for."      progress={30}  delay={240} />
          </div>
        </section>

        <section ref={evidReveal.ref} className={`carbon-content-section ${evidReveal.visible ? "carbon-reveal--visible" : "carbon-reveal"}`}>
          <div className="carbon-section-header">
            <p className="carbon-section-label">The Proof</p>
            <h2 className="carbon-section-title">Real data, real <em>results</em>.</h2>
          </div>
          <p className="carbon-text-block">
            Click any screenshot to expand. Direct exports from Facebook Analytics, Sep–Nov 2025.
          </p>
          <EvidenceGallery />
        </section>

        <section className="carbon-content-section">
          <div className="carbon-section-header">
            <p className="carbon-section-label">The Journey</p>
            <h2 className="carbon-section-title">Three months that <em>mattered</em>.</h2>
          </div>
          <Timeline />
        </section>

        <section ref={strategyReveal.ref} className={`carbon-content-section ${strategyReveal.visible ? "carbon-reveal--visible" : "carbon-reveal"}`}>
          <div className="carbon-section-header">
            <p className="carbon-section-label">The Strategy</p>
            <h2 className="carbon-section-title">Education as a <em>catalyst</em>.</h2>
          </div>
          <ul className="carbon-work-list">
            <StrategyItem num="01" delay={0}   visible={strategyReveal.visible}
              title="Foundation & Identity"
              summary="Launched both Facebook and Instagram pages from scratch."
              detail="Established a premium, grounded visual identity and a tone of voice that balanced scientific rigor with human empathy. Every post had to feel credible to climate scientists yet accessible to a curious 22-year-old." />
            <StrategyItem num="02" delay={100} visible={strategyReveal.visible}
              title="Simplifying the Science"
              summary="Developed content pillars to educate the public on biochar, the carbon cycle, and soil health."
              detail="We made the abstract concept of 'negative emissions' tangible and actionable. Infographic carousels, farmer story arcs, and explainer threads distilled years of research into scroll-stopping content." />
            <StrategyItem num="03" delay={200} visible={strategyReveal.visible}
              title="Organic Discovery Engine"
              summary="Optimized content architecture for discoverability."
              detail="Over 80% of Facebook page views came from non-followers — content breaking out of echo chambers. Strategic hashtag clustering and native video outperformed all paid benchmarks." />
          </ul>
        </section>

        <section ref={quoteReveal.ref} className={`carbon-content-section ${quoteReveal.visible ? "carbon-reveal--visible" : "carbon-reveal"}`}>
          <div className="carbon-quote-block">
            <p className="carbon-quote-text">
              "I took this on voluntarily because the mission resonated. Using biochar to remove carbon while simultaneously empowering farmers felt like a cause worth showing up for."
            </p>
            <div className="carbon-quote-author">— Personal Note</div>
          </div>
        </section>

        <div className="carbon-meta-bar">
          <div className="carbon-meta-pills">
            {["Content Strategy", "Social Media", "NGO", "Climate Tech"].map(tag => (
              <span key={tag} className="carbon-meta-pill">{tag}</span>
            ))}
          </div>
          <span className="carbon-meta-period">Sep – Nov 2025 · Voluntary</span>
        </div>

      </div>
    </div>
  );
};

export default CarbonRemovalCaseStudy;
