import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, BarChart2 } from 'lucide-react';
import './MasterpieceLanding.css';

// Animated Counter Component
const AnimatedCounter = ({ from = 0, to, suffix = "", duration = 2 }) => {
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(from, to, {
                duration: duration,
                onUpdate(value) {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = Math.round(value) + suffix;
                    }
                },
            });
            return () => controls.stop();
        }
    }, [from, to, isInView, duration, suffix]);

    return <span ref={nodeRef}>{from}{suffix}</span>;
};

const MasterpieceLanding = ({ onEnterApp, onNavigateAuth }) => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const yHeroText = useTransform(scrollY, [0, 800], [0, -150]);
    const opacityHero = useTransform(scrollY, [100, 500], [1, 0]);

    // Generate stars for background
    const stars = Array.from({ length: 150 });

    return (
        <div className="masterpiece-landing">
            {/* Deep Space Starry Background */}
            <div className="star-field">
                {stars.map((_, i) => {
                    const size = Math.random() * 2 + 1;
                    const x = Math.random() * 100;
                    const y = Math.random() * 100;
                    const delay = Math.random() * 5;
                    const duration = Math.random() * 3 + 2;
                    return (
                        <motion.div
                            key={i}
                            className="star"
                            style={{
                                width: size,
                                height: size,
                                left: `${x}%`,
                                top: `${y}%`,
                            }}
                            animate={{
                                opacity: [0.2, 1, 0.2],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: duration,
                                repeat: Infinity,
                                delay: delay,
                                ease: "easeInOut"
                            }}
                        />
                    );
                })}
                {/* Shooting Stars / Comets */}
                <div className="comet comet-1"></div>
                <div className="comet comet-2"></div>
                <div className="comet comet-3"></div>
            </div>

            <nav className="mpl-nav" style={{
                background: isScrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
                borderBottomColor: isScrolled ? 'rgba(255,255,255,0.05)' : 'transparent'
            }}>
                <div className="mpl-logo">
                    <img src="/src/assets/logo.png" alt="STADI" className="mpl-logo-img" />
                    <span>STADI</span>
                </div>

                <div className="mpl-links">
                    <a href="#vision">Vision</a>
                    <a href="#timeline">The Engine</a>
                    <a href="#stats">Metrics</a>
                </div>

                <div className="mpl-auth">
                    <button className="mpl-login" onClick={() => onNavigateAuth('login')}>Log In</button>
                    <button className="mpl-cta-btn" onClick={() => onNavigateAuth('signup')}>
                        Start Free Trial <ArrowRight size={14} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
                    </button>
                </div>
            </nav>

            <section className="mpl-hero" id="vision">
                <motion.div
                    className="mpl-hero-content"
                    style={{ y: yHeroText, opacity: opacityHero }}
                >
                    <h1 className="mpl-hero-title">
                        The Operating System for <br />
                        <span className="gradient-text-primary">Human Cognition</span>
                    </h1>

                    <p className="mpl-hero-subtitle">
                        People don’t fail because they’re lazy. They fail because the system they’re using doesn’t match them. STADI maps your neural patterns, tracks focus degradation, and dynamically builds an environment around your brain.
                    </p>

                    <div className="mpl-hero-actions">
                        <button className="mpl-btn-massive" onClick={() => onNavigateAuth('signup')}>
                            Build Your Profile
                        </button>
                        <button className="mpl-btn-ghost" onClick={onEnterApp}>
                            Enter Prototype App
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Narrative Timeline Engine (No Clunky Boxes) */}
            <section className="mpl-timeline-section" id="timeline">
                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="timeline-dot"></div>
                        <h3>1. Deep Psychological Onboarding</h3>
                        <p>We don't just ask your age. We profile your learning style, attention limits, energy rhythm (morning vs night brain), and motivation type. This data forms your cognitive baseline.</p>
                    </motion.div>

                    <motion.div
                        className="timeline-item right"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="timeline-dot"></div>
                        <h3>2. Dynamic Living Schedules</h3>
                        <p>Instead of "study 6-8pm", STADI detects your best learning windows. It assigns hard subjects to peak brain hours and shifts schedules live if you skip a session. The schedule is alive, not fixed.</p>
                    </motion.div>

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="timeline-dot"></div>
                        <h3>3. Adaptive Delivery & Retention</h3>
                        <p>Same content, different delivery. Visual learners get diagrams; analytical learners get step-by-step text. We track your retention over time and prompt reviews right before memory decay hits.</p>
                    </motion.div>

                    <motion.div
                        className="timeline-item right"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="timeline-dot"></div>
                        <h3>4. Goal-to-Habit Pipeline</h3>
                        <p>You set a life goal: "Get into University X". STADI breaks that into milestones, then daily tasks, wrapped in a rigid focus mode that demands accountability. We optimize the person, not just the content.</p>
                    </motion.div>

                </div>
            </section>

            {/* Massive Counting Metrics */}
            <section className="mpl-stats-section" id="stats">
                <div className="stats-grid">
                    <div className="stat-block">
                        <div className="stat-number">
                            <AnimatedCounter from={0} to={87} suffix="%" duration={2.5} />
                        </div>
                        <div className="stat-label">Faster Problem Mastery</div>
                    </div>
                    <div className="stat-block">
                        <div className="stat-number">
                            <AnimatedCounter from={0} to={3} suffix="x" duration={2} />
                        </div>
                        <div className="stat-label">Retention Increase</div>
                    </div>
                    <div className="stat-block">
                        <div className="stat-number">
                            <AnimatedCounter from={0} to={45} suffix="m" duration={2} />
                        </div>
                        <div className="stat-label">Daily Study Time Saved</div>
                    </div>
                    <div className="stat-block">
                        <div className="stat-number">
                            <AnimatedCounter from={0} to={100} suffix="%" duration={2.5} />
                        </div>
                        <div className="stat-label">Personalized Delivery</div>
                    </div>
                </div>
            </section>

            {/* Footer Edge */}
            <footer className="mpl-footer">
                <div className="mpl-footer-grid">
                    <div className="mpl-footer-brand">
                        <div className="mpl-logo">
                            <img src="/src/assets/logo.png" alt="STADI" className="mpl-logo-img" />
                            <span>STADI</span>
                        </div>
                        <p>The definitive operating system for human cognition and accelerated learning. Engineered for the precision-oriented student.</p>
                        <div style={{ display: 'flex', gap: '16px', marginTop: '24px', color: '#a0a5b8' }}>
                            <Cpu size={20} /> <ShieldCheck size={20} /> <BarChart2 size={20} />
                        </div>
                    </div>
                </div>

                <div className="mpl-footer-bottom">
                    <div>© {new Date().getFullYear()} STADI Inc. Blueprint.</div>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>System Status</a>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.3s' }}>Privacy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MasterpieceLanding;
