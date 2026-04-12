import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const FitfuelCaseStudy = () => {
    const resultBigRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll reveal logic
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 60);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        reveals.forEach(el => observer.observe(el));

        // Counter animation logic
        const animateCounter = (el: HTMLElement, target: number, _suffix = '', _prefix = '') => {
            const duration = 1800;
            const start = performance.now();

            const update = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = _prefix + Math.round(eased * target) + _suffix;
                if (progress < 1) requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
        };

        const resultObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && resultBigRef.current) {
                    animateCounter(resultBigRef.current, 112);
                    resultObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        if (resultBigRef.current) resultObserver.observe(resultBigRef.current);

        // Scroll to top on mount
        window.scrollTo(0, 0);

        return () => {
            observer.disconnect();
            resultObserver.disconnect();
        };
    }, []);

    return (
        <div className="fitfuel-case-study">
            <nav>
                <Link to="/" className="nav-brand">AT — Arjun Thapa</Link>
                <Link to="/#work" className="nav-back">← Back to Portfolio</Link>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <div className="hero-tag">Google Ads · Case Study · 2024</div>
                    <h1>FIT<span>FUEL</span><br />NUTRITION</h1>
                    <p className="hero-sub">
                        Building a Google Ads account from zero — strategic campaign architecture,
                        data collection, and scaling to 112 conversions in 60 days on a €1,000/month budget.
                    </p>
                    <div className="hero-stats">
                        <div>
                            <div className="hero-stat-num">112</div>
                            <div className="hero-stat-label">Conversions / 60 Days</div>
                        </div>
                        <div>
                            <div className="hero-stat-num">300%</div>
                            <div className="hero-stat-label">Target ROAS</div>
                        </div>
                        <div>
                            <div className="hero-stat-num">€1.25</div>
                            <div className="hero-stat-label">Avg CPC (Month 2)</div>
                        </div>
                    </div>
                </div>
                <div className="scroll-hint">Scroll</div>
            </section>

            {/* OVERVIEW */}
            <section>
                <div className="section-label">Project Overview</div>
                <h2>The <span>Brand</span></h2>
                <div className="overview-grid reveal">
                    <div className="overview-cell">
                        <div className="overview-cell-label">Client</div>
                        <div className="overview-cell-val">FitFuel Nutrition</div>
                    </div>
                    <div className="overview-cell">
                        <div className="overview-cell-label">Founded</div>
                        <div className="overview-cell-val">2021 · Berlin, Germany</div>
                    </div>
                    <div className="overview-cell">
                        <div className="overview-cell-label">Products</div>
                        <div className="overview-cell-val">Whey & vegan protein, supplements, gym apparel</div>
                    </div>
                    <div className="overview-cell">
                        <div className="overview-cell-label">Target Audience</div>
                        <div className="overview-cell-val">Health & fitness enthusiasts, 18–40, Berlin · Hamburg · Munich</div>
                    </div>
                    <div className="overview-cell">
                        <div className="overview-cell-label">Review Score</div>
                        <div className="overview-cell-val">4.8 ⭐ Trustpilot</div>
                    </div>
                    <div className="overview-cell">
                        <div className="overview-cell-label">Monthly Budget</div>
                        <div className="overview-cell-val">€1,000 / month</div>
                    </div>
                </div>
            </section>

            <hr className="sep" />

            {/* CHALLENGE */}
            <section className="challenge-section">
                <div className="section-label">The Problem</div>
                <h2>Business <span>Challenge</span></h2>
                <div className="pain-points reveal">
                    <div className="pain-card">
                        <div className="pain-num">01</div>
                        <div className="pain-title">Zero Google Visibility</div>
                        <div className="pain-desc">No presence on high-intent search terms while competitors like MyProtein dominated results.</div>
                    </div>
                    <div className="pain-card">
                        <div className="pain-num">02</div>
                        <div className="pain-title">No Historical Data</div>
                        <div className="pain-desc">Brand-new Google Ads account — no prior signals, audiences, or conversion data to build on.</div>
                    </div>
                    <div className="pain-card">
                        <div className="pain-num">03</div>
                        <div className="pain-title">Stalled Growth</div>
                        <div className="pain-desc">Sales plateau despite good products and 4.8★ reviews. Over-reliance on Instagram and influencers.</div>
                    </div>
                    <div className="pain-card">
                        <div className="pain-num">04</div>
                        <div className="pain-title">Weak CVR</div>
                        <div className="pain-desc">Website conversion rate stuck at 1.5% with no urgency signals or visible social proof.</div>
                    </div>
                    <div className="pain-card">
                        <div className="pain-num">05</div>
                        <div className="pain-title">Discount Dependency</div>
                        <div className="pain-desc">Heavy reliance on discounts to drive any sales — unsustainable unit economics long-term.</div>
                    </div>
                </div>
            </section>

            {/* KPIs */}
            <section>
                <div className="section-label">Goals</div>
                <h2>KPI <span>Framework</span></h2>
                <div className="kpi-row reveal">
                    <div className="kpi-primary">
                        <div className="kpi-primary-label">Primary KPI</div>
                        <div className="kpi-primary-val">100+<br />Conv.</div>
                        <div className="kpi-primary-sub">In 60 days with sustainable Customer Acquisition Cost</div>
                    </div>
                    <div className="kpi-secondary">
                        <div className="kpi-item">
                            <div className="kpi-icon">🔍</div>
                            <div className="kpi-text">Improve search visibility for high-intent supplement & nutrition queries in Germany</div>
                        </div>
                        <div className="kpi-item">
                            <div className="kpi-icon">📊</div>
                            <div className="kpi-text">Collect actionable audience data and build first-party signals from scratch</div>
                        </div>
                        <div className="kpi-item">
                            <div className="kpi-icon">🔁</div>
                            <div className="kpi-text">Build a scalable, conversion-focused funnel across campaign phases</div>
                        </div>
                        <div className="kpi-item">
                            <div className="kpi-icon">🎯</div>
                            <div className="kpi-text">Drive high-intent traffic to category-specific landing pages</div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="sep" />

            {/* STRATEGY TIMELINE */}
            <section>
                <div className="section-label">Strategic Approach</div>
                <h2>Two-Phase <span>Strategy</span></h2>
                <div className="timeline reveal">
                    <div className="phase-card">
                        <div className="phase-num">1</div>
                        <div className="phase-tag">Month 1 · Data Collection</div>
                        <div className="phase-title">MAXIMIZE<br />CLICKS</div>
                        <div className="phase-period">Days 1–30 · Budget: €500</div>
                        <div className="phase-details">
                            <div className="phase-detail">New account with zero historical data — algorithm needs to learn</div>
                            <div className="phase-detail">Maximize Clicks keeps CPC controlled while gathering search term data</div>
                            <div className="phase-detail">Focus on phrase match+exact match (15–20 tightly controlled keywords)</div>
                            <div className="phase-detail">Build negative keyword list, test keyword-to-page alignment</div>
                            <div className="phase-detail">Audience signals: Fitness Enthusiasts, Weightlifters, Sports Nutrition In-Market</div>
                        </div>
                    </div>
                    <div className="phase-card phase-2">
                        <div className="phase-num">2</div>
                        <div className="phase-tag">Month 2 · Scaling Phase</div>
                        <div className="phase-title">TARGET<br />ROAS</div>
                        <div className="phase-period">Days 31–60 · Budget: €1,500 (both campaigns)</div>
                        <div className="phase-details">
                            <div className="phase-detail">Sufficient data collected — switch to Conversion Value / Target ROAS 300%</div>
                            <div className="phase-detail">Prioritises buyers with higher spend — not just any click</div>
                            <div className="phase-detail">Campaign 1 continues at €500 for ongoing data collection</div>
                            <div className="phase-detail">Campaign 2 gets €1,000 optimised for whey protein, vegan blends, pre-workout</div>
                            <div className="phase-detail">Negative keywords refined, Quality Score improves, CPC drops</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAMPAIGN STRUCTURE */}
            <section style={{ paddingTop: 0 }}>
                <div className="section-label">Campaign Architecture</div>
                <h2>Ad Group <span>Structure</span></h2>
                <div className="campaign-grid reveal">
                    <div className="ad-group-card">
                        <div className="ag-label">Ad Group 01</div>
                        <div className="ag-name">Whey Protein</div>
                        <div className="ad-copy-lines">
                            <div className="ad-line h1"><span className="ad-line-tag">H1 — Keyword</span>Best Protein Online</div>
                            <div className="ad-line h2"><span className="ad-line-tag">H2 — USP</span>100% Isolate Whey</div>
                            <div className="ad-line h3"><span className="ad-line-tag">H3 — CTA</span>Fuel Your Workout Today</div>
                        </div>
                    </div>
                    <div className="ad-group-card">
                        <div className="ag-label">Ad Group 02</div>
                        <div className="ag-name">Supplements</div>
                        <div className="ad-copy-lines">
                            <div className="ad-line h1"><span className="ad-line-tag">H1 — Keyword</span>High Quality Sports Nutrition</div>
                            <div className="ad-line h2"><span className="ad-line-tag">H2 — USP</span>Boost Energy and Recovery</div>
                            <div className="ad-line h3"><span className="ad-line-tag">H3 — CTA</span>Unlock Peak Nutrition</div>
                        </div>
                    </div>
                    <div className="ad-group-card">
                        <div className="ag-label">Ad Group 03</div>
                        <div className="ag-name">Gym Accessories</div>
                        <div className="ad-copy-lines">
                            <div className="ad-line h1"><span className="ad-line-tag">H1 — Keyword</span>Premium Gym Apparel</div>
                            <div className="ad-line h2"><span className="ad-line-tag">H2 — USP</span>High-Comfort Activewear</div>
                            <div className="ad-line h3"><span className="ad-line-tag">H3 — CTA</span>Grab Your Gym Essentials Today</div>
                        </div>
                    </div>
                </div>

                {/* Extensions */}
                <div className="section-label" style={{ marginTop: '3rem' }}>Ad Extensions</div>
                <div className="bidding-layout reveal">
                    <div className="bid-card">
                        <div className="bid-subtitle">Sitelink Strategy</div>
                        <div className="bid-title">SITE<br />LINKS</div>
                        <div className="bid-reasons" style={{ marginTop: '1.2rem' }}>
                            <div className="bid-reason">Customer Service — 24/7 support link</div>
                            <div className="bid-reason">New Arrivals — fresh supplements & apparel drops</div>
                            <div className="bid-reason">Deals & Discounts — bundle offers, member exclusives</div>
                            <div className="bid-reason">Best Sellers — highest-rated products</div>
                        </div>
                    </div>
                    <div className="bid-card">
                        <div className="bid-subtitle">Trust Signals</div>
                        <div className="bid-title">CALL<br />OUTS</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '1.5rem' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', border: '1px solid rgba(255,92,26,0.3)', background: 'var(--orange-dim)', color: 'var(--orange)', padding: '0.4rem 0.8rem' }}>Easy Returns</span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', border: '1px solid rgba(255,92,26,0.3)', background: 'var(--orange-dim)', color: 'var(--orange)', padding: '0.4rem 0.8rem' }}>Quality & Safety</span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', border: '1px solid rgba(255,92,26,0.3)', background: 'var(--orange-dim)', color: 'var(--orange)', padding: '0.4rem 0.8rem' }}>Money Back Guarantee</span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', border: '1px solid rgba(255,92,26,0.3)', background: 'var(--orange-dim)', color: 'var(--orange)', padding: '0.4rem 0.8rem' }}>Free Delivery Over €59</span>
                        </div>
                        <div style={{ marginTop: '1.5rem', padding: '1rem', border: '1px solid var(--border)', background: 'rgba(255,255,255,0.02)' }}>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Lead Form</div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>10% off for new customers · Collects name, email, phone, city — builds first-party data</div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="sep" />

            {/* RESULTS */}
            <section className="results-section">
                <div className="section-label">Performance</div>
                <h2>Campaign <span>Results</span></h2>
                <div className="results-hero reveal">
                    <div>
                        <div className="result-big" ref={resultBigRef}>0</div>
                        <div className="result-big-label">Total Conversions</div>
                    </div>
                    <div>
                        <p style={{ fontSize: '1rem', color: 'var(--muted)', maxWidth: '480px', marginBottom: '1.5rem' }}>
                            After 60 days running both campaigns in parallel, the account exceeded the primary KPI — delivering 112 conversions while establishing sustainable unit economics for ongoing scaling.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            <div>
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--teal)' }}>Month 1</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>Learning phase · Max Clicks</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--border)', fontSize: '1.5rem' }}>→</div>
                            <div>
                                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--orange)' }}>Month 2</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>Scaling phase · Target ROAS</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="results-metrics reveal">
                    <div className="metric-card">
                        <div className="metric-val">€1.19<span>→</span>1.25</div>
                        <div className="metric-label">Avg CPC (M1 → M2)</div>
                        <div className="metric-note">Stable across phases</div>
                        <div className="metric-bar"></div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">6.5<span>–</span>10.8%</div>
                        <div className="metric-label">Conversion Rate Range</div>
                        <div className="metric-note">Across ad groups</div>
                        <div className="metric-bar"></div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">€12<span>–</span>40</div>
                        <div className="metric-label">CPA Range</div>
                        <div className="metric-note">New fitness brand benchmark</div>
                        <div className="metric-bar"></div>
                    </div>
                    <div className="metric-card">
                        <div className="metric-val">300<span>%</span></div>
                        <div className="metric-label">Target ROAS Achieved</div>
                        <div className="metric-note">Campaign 2 · Month 2</div>
                        <div className="metric-bar"></div>
                    </div>
                </div>
            </section>

            {/* NEGATIVE KEYWORDS */}
            <section>
                <div className="section-label">Optimisation</div>
                <h2>Negative <span>Keywords</span></h2>
                <div className="neg-kw-grid reveal">
                    <div className="neg-kw-group">
                        <div className="neg-kw-title">Low Purchase Intent</div>
                        <div className="neg-kw-tags">
                            <span className="neg-tag">free</span>
                            <span className="neg-tag">cheap</span>
                            <span className="neg-tag">DIY</span>
                            <span className="neg-tag">homemade</span>
                            <span className="neg-tag">recipe</span>
                            <span className="neg-tag">natural foods</span>
                        </div>
                    </div>
                    <div className="neg-kw-group">
                        <div className="neg-kw-title">Non-Commercial / Research</div>
                        <div className="neg-kw-tags">
                            <span className="neg-tag">what is protein</span>
                            <span className="neg-tag">how to make</span>
                            <span className="neg-tag">wiki</span>
                            <span className="neg-tag">definition</span>
                            <span className="neg-tag">side effects</span>
                        </div>
                    </div>
                    <div className="neg-kw-group">
                        <div className="neg-kw-title">Competitors</div>
                        <div className="neg-kw-tags">
                            <span className="neg-tag">myprotein</span>
                            <span className="neg-tag">foodspring</span>
                            <span className="neg-tag">bulk</span>
                            <span className="neg-tag">optimum nutrition</span>
                        </div>
                    </div>
                </div>
                <div className="impact-grid reveal">
                    <div className="impact-card">
                        <div className="impact-num">18–22%</div>
                        <div className="impact-desc">Estimated reduction in wasted ad spend after negative keyword implementation</div>
                    </div>
                    <div className="impact-card">
                        <div className="impact-num">↑ CTR</div>
                        <div className="impact-desc">Improved click-through rate by filtering irrelevant audiences improving ad relevance</div>
                    </div>
                    <div className="impact-card">
                        <div className="impact-num">↑ CVR</div>
                        <div className="impact-desc">Higher conversion rate by ensuring only high-intent users were reaching the landing page</div>
                    </div>
                </div>
            </section>

            <hr className="sep" />

            {/* LANDING PAGE AUDIT */}
            <section>
                <div className="section-label">UX Insights</div>
                <h2>Landing Page <span>Audit</span></h2>
                <div className="audit-items reveal">
                    <div className="audit-item">
                        <div className="audit-icon">📱</div>
                        <div>
                            <div className="audit-title">Slow Mobile Load Time</div>
                            <div className="audit-desc">High mobile drop-off rate identified. Page speed issues directly impacted Quality Score and conversion rate. Mobile optimisation was flagged as priority for month 2.</div>
                        </div>
                    </div>
                    <div className="audit-item">
                        <div className="audit-icon">⚡</div>
                        <div>
                            <div className="audit-title">Lack of Urgency & Social Proof</div>
                            <div className="audit-desc">Product pages missing "Best Seller", "Trending", and "Low Stock" labels. These micro-signals directly influence impulse-driven purchases in the health & fitness vertical.</div>
                        </div>
                    </div>
                    <div className="audit-item">
                        <div className="audit-icon">🔐</div>
                        <div>
                            <div className="audit-title">Hidden Trust Elements</div>
                            <div className="audit-desc">Reviews, certificates, and money-back guarantees buried at the bottom of the page. Moving these above the fold was recommended to improve above-the-fold credibility.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEARNINGS */}
            <section style={{ paddingTop: 0 }}>
                <div className="section-label">Key Takeaways</div>
                <h2>Insights & <span>Learnings</span></h2>
                <div className="learnings-grid reveal">
                    <div className="learning-card">
                        <div className="learning-num">01</div>
                        <div className="learning-title">Account Architecture Matters</div>
                        <div className="learning-desc">Building a clean campaign structure from scratch — themed ad groups, tightly controlled keywords, and phased bidding — is the foundation that everything else rests on.</div>
                    </div>
                    <div className="learning-card">
                        <div className="learning-num">02</div>
                        <div className="learning-title">Data Before Conversion Bidding</div>
                        <div className="learning-desc">Jumping straight to Target ROAS with zero account history would have wasted budget. The two-phase approach respects Google's learning algorithm and produces far better results.</div>
                    </div>
                    <div className="learning-card">
                        <div className="learning-num">03</div>
                        <div className="learning-title">Ad Copy is a Conversion Asset</div>
                        <div className="learning-desc">Structuring headlines as keyword → benefit → CTA, combined with dynamic keyword insertion, directly improved Quality Score and reduced CPCs over time.</div>
                    </div>
                    <div className="learning-card">
                        <div className="learning-num">04</div>
                        <div className="learning-title">Negative Keywords=ROI Protection</div>
                        <div className="learning-desc">Proactively building a negative keyword list reduced wasted spend by 18–22% and meaningfully improved conversion rates by filtering out research-intent traffic.</div>
                    </div>
                    <div className="learning-card">
                        <div className="learning-num">05</div>
                        <div className="learning-title">Ads ≠ Full Funnel</div>
                        <div className="learning-desc">The landing page audit revealed that paid traffic doesn't fix UX problems. Ad performance is a ceiling set by the quality of the destination page — especially on mobile.</div>
                    </div>
                    <div className="learning-card">
                        <div className="learning-num">06</div>
                        <div className="learning-title">Budget Constraints Force Creativity</div>
                        <div className="learning-desc">€1,000/month demands precision. Every euro had to be accountable — leading to sharper keyword themes, smarter match types, and prioritising high-intent over broad awareness.</div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <div className="footer-credit">
                    Case Study by <strong>Arjun Thapa</strong> · Digital Marketing & Frontend Specialist<br />
                    <span style={{ fontSize: '0.62rem', opacity: 0.5 }}>Google Ads · GA4 · Paid Search · Campaign Strategy</span>
                </div>
                <Link to="/" className="back-btn">← View Full Portfolio</Link>
            </footer>
        </div>
    );
};

export default FitfuelCaseStudy;
