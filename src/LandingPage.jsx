import React, { useEffect, useRef } from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnterApp, onNavigateAuth }) => {

    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        const hiddenElements = document.querySelectorAll('.animate-on-scroll');
        hiddenElements.forEach((el) => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(40px)';
            el.style.transition = 'all 0.8s ease-out';
            observerRef.current.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <div className="landing-page">

            {/* Background Ornaments */}
            <div className="landing-glow-core"></div>
            <div className="landing-glow-ring"></div>

            <div className="landing-line-container">
                <div className="landing-line-1"></div>
                <div className="landing-line-2"></div>
                <div className="landing-line-3"></div>
            </div>

            <header className="landing-header">
                <div className="landing-logo">STADI</div>
                <nav className="landing-nav">
                    <button>Solutions</button>
                    <button>Features</button>
                    <button>Pricing</button>
                    <button>Resources</button>
                </nav>
                <div className="landing-actions" style={{ gap: '12px' }}>
                    <button className="landing-login" onClick={() => onNavigateAuth('login')}>
                        Log In
                    </button>
                    <button className="btn-outline" style={{ padding: '8px 20px', fontSize: '13px' }} onClick={() => onNavigateAuth('signup')}>
                        Sign Up Free
                    </button>
                    <button className="landing-login" onClick={onEnterApp} style={{ marginLeft: '16px' }}>
                        <span>Demo</span>
                        <div className="dot-indicator"></div>
                    </button>
                </div>
            </header>

            <main className="landing-hero">
                <h1 className="landing-hero-title">
                    Master Your Flow, Maximize<br />Your Results
                </h1>
                <p className="landing-hero-subtitle">
                    STADI analyzes how you learn and builds a personalized, automated study system around you.
                </p>
                <div className="landing-actions">
                    <button className="btn-solid" onClick={() => onNavigateAuth('signup')}>Start Studying Free</button>
                    <button className="btn-outline" onClick={onEnterApp}>View Dashboard Prototype</button>
                </div>
            </main>

            {/* The Solution */}
            <section className="section-container animate-on-scroll">
                <h2 className="section-title">The Animated Solution</h2>
                <p className="section-subtitle">Watch how STADI automatically dynamically routes your learning paths based on your cognitive peaks.</p>

                <div className="solution-grid">
                    <div className="animated-card">
                        <div className="card-icon">🧠</div>
                        <h3 className="card-title">Cognitive Profiling</h3>
                        <p className="card-text">We first assess your unique learning style, attention span, and best focus hours before building any schedule.</p>
                    </div>
                    <div className="animated-card" style={{ transform: 'translateY(-20px)' }}>
                        <div className="card-icon">⚡</div>
                        <h3 className="card-title">Dynamic Scheduling</h3>
                        <p className="card-text">If you fail a test or lose focus, STADI instantly re-adjusts your future schedule. No static calendars.</p>
                    </div>
                    <div className="animated-card">
                        <div className="card-icon">📊</div>
                        <h3 className="card-title">Real-Time Retention</h3>
                        <p className="card-text">Track your memory degradation in real-time. STADI triggers active recall right before you forget.</p>
                    </div>
                </div>
            </section>

            {/* Why it's different & Exciting Parts */}
            <section className="section-container animate-on-scroll" style={{ paddingTop: '60px' }}>
                <h2 className="section-title">Why We Are Different</h2>
                <p className="section-subtitle">Traditional apps give you a calendar. STADI gives you an AI nervous system for your academia.</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginTop: '40px' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '30px', border: '1px solid rgba(138,43,226,0.2)' }}>
                        <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>Continuous Optimization</h3>
                        <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '20px' }}>
                            Every time you study, STADI analyzes your completion velocity. Over weeks, it predicts exactly when you will face burnout and pre-emptively schedules lighter tasks.
                        </p>
                        <ul style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 2, paddingLeft: '20px' }}>
                            <li>Predictive task delivery</li>
                            <li>Micro-reward cycles</li>
                            <li>Visual neural networking</li>
                        </ul>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div className="animated-card"><div style={{ fontSize: '18px', fontWeight: 500, color: '#b185fa' }}>🎯 "It just knows when I'm tired."</div></div>
                        <div className="animated-card"><div style={{ fontSize: '18px', fontWeight: 500, color: '#4285f4' }}>📈 "My retention went from 60% to 92%."</div></div>
                        <div className="animated-card"><div style={{ fontSize: '18px', fontWeight: 500, color: '#2dd4bf' }}>👑 "I actually enjoy hitting my daily limits."</div></div>
                    </div>
                </div>
            </section>

            {/* Pricing Section (Mimicking the image) */}
            <section className="section-container animate-on-scroll">
                <h2 className="section-title">Transparent Memberships</h2>
                <p className="section-subtitle">Start with a full featured free trial. Only upgrade when you feel the optimization.</p>

                <div className="pricing-grid">

                    <div className="pricing-card">
                        <div className="pricing-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                        <h3 className="pricing-tier">Starter Free</h3>
                        <p className="pricing-desc">All the basic features to build your initial learning habits.</p>
                        <ul className="pricing-features">
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Full Access to Dashboard</li>
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 5 Active Classes</li>
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Basic Insights</li>
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Community Support</li>
                        </ul>
                        <div className="pricing-price">Started Free • Up to 1 Month</div>
                        <button className="btn-pricing" onClick={() => onNavigateAuth('signup')}>Get Started</button>
                    </div>

                    <div className="pricing-card highlight">
                        <div className="pricing-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div>
                        <h3 className="pricing-tier">STADI Pro</h3>
                        <p className="pricing-desc">Advanced AI tracking to rapidly accelerate retention and scheduling.</p>
                        <ul className="pricing-features">
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Unlimited Classes</li>
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Dynamic Relocating AI Schedule</li>
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Custom Focus Modes</li>
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Priority Engine Processing</li>
                        </ul>
                        <div className="pricing-price">Starting from $19/month</div>
                        <button className="btn-pricing" onClick={() => onNavigateAuth('signup')}>Try Pro Free (1 Month)</button>
                    </div>

                    <div className="pricing-card">
                        <div className="pricing-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>
                        <h3 className="pricing-tier">Exclusive</h3>
                        <p className="pricing-desc">For massive teams, academic institutions, and bootcamps.</p>
                        <ul className="pricing-features">
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Bulk AI Analysis</li>
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Admin Organization Panels</li>
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> API Integration</li>
                            <li><svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 24/7 Priority Support</li>
                        </ul>
                        <div className="pricing-price">Starting from $99/month</div>
                        <button className="btn-pricing" onClick={() => onNavigateAuth('signup')}>Learn More</button>
                    </div>

                </div>
            </section>

            {/* Massive modern Footer */}
            <footer className="landing-modern-footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>STADI</h2>
                        <p>The definitive study optimization engine for high-performers. Don't just track time, optimize your neuro-capacity.</p>
                        <div className="footer-auth-btns">
                            <button className="btn-solid" onClick={() => onNavigateAuth('signup')} style={{ padding: '10px 20px', fontSize: '13px' }}>Sign Up</button>
                            <button className="btn-outline" onClick={() => onNavigateAuth('login')} style={{ padding: '10px 20px', fontSize: '13px' }}>Sign In</button>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#">Dashboard Features</a></li>
                            <li><a href="#">Learning Matrix</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Enterprise</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">Cognitive Whitepapers</a></li>
                            <li><a href="#">Learning Guides</a></li>
                            <li><a href="#">Video Tutorials</a></li>
                            <li><a href="#">Student Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact Support</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} STADI Education System. All Rights Reserved. Not a medical application.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
