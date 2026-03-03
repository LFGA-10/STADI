import React, { useState } from 'react';
import './AuthPage.css';

const AuthPage = ({ mode = 'signup', onBack, onEnterApp }) => {
    const [isLogin, setIsLogin] = useState(mode === 'login');

    return (
        <div className="auth-layout">
            <header className="auth-header">
                <div className="auth-logo" onClick={onBack}>
                    <div className="logo-dot"></div> STADI
                </div>
                <div className="auth-nav">
                    <span onClick={onBack}>Features</span>
                    <span onClick={onBack}>Solutions</span>
                    <span onClick={onBack}>Resources</span>
                    <span onClick={onBack}>Pricing</span>
                    <button className="btn-auth-nav" onClick={onEnterApp}>Access Dashboard</button>
                </div>
            </header>

            <main className="auth-main">
                {/* Left Side: Immersive Feature Image Panel */}
                <section className="auth-split-left">
                    <div className="auth-left-content">
                        <h2>Join 10k+ top performers &<br />automate your cognitive load</h2>
                        <div className="auth-features-list">
                            <div className="auth-feature-item">
                                <div className="auth-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                Predictive AI Engine
                            </div>
                            <div className="auth-feature-item">
                                <div className="auth-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                Dynamic Scheduling
                            </div>
                            <div className="auth-feature-item">
                                <div className="auth-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                120+ Analytics Metrics
                            </div>
                            <div className="auth-feature-item">
                                <div className="auth-feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                Active Recall Prompts
                            </div>
                        </div>
                    </div>
                </section>

                {/* Right Side: Form Container */}
                <section className="auth-split-right">
                    <div className="auth-form-container">
                        <h2>{isLogin ? 'Sign in to STADI' : 'Sign up for Optimization'}</h2>
                        <p className="auth-subtitle">
                            {isLogin ? "Don't have an account? " : 'Already have an account? '}
                            <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign up' : 'Login'}</span>
                        </p>

                        <form onSubmit={(e) => { e.preventDefault(); onEnterApp(); }}>

                            {!isLogin && (
                                <div className="form-group">
                                    <label>First & Last name</label>
                                    <div className="input-wrapper">
                                        <div className="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                                        <input type="text" placeholder="Enter your full name" required />
                                    </div>
                                </div>
                            )}

                            <div className="form-group">
                                <label>Email address</label>
                                <div className="input-wrapper">
                                    <div className="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                                    <input type="email" placeholder="Enter email to get started" required />
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: isLogin ? '10px' : '24px' }}>
                                <label>Password</label>
                                <div className="input-wrapper">
                                    <div className="input-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
                                    <input type="password" placeholder="Enter your password" required />
                                </div>
                            </div>

                            {isLogin && <div style={{ fontSize: '13px', color: '#b185fa', textAlign: 'right', marginBottom: '24px', cursor: 'pointer' }}>Forgot password?</div>}

                            <button type="submit" className="btn-submit">
                                {isLogin ? 'Sign in' : 'Sign up'}
                            </button>

                            <div className="social-auth">
                                <button type="button" className="btn-social">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12h20M2 12a10 10 0 1 0 20 0M2 12a10 10 0 1 1 20 0"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                    {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
                                </button>
                                <button type="button" className="btn-social">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    {isLogin ? 'Sign in with Facebook' : 'Sign up with Facebook'}
                                </button>
                            </div>

                            <p className="legal-text">
                                This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> &amp; <a href="#">Terms of Service</a>. Not a medical system.
                            </p>
                        </form>

                    </div>
                </section>

            </main>
        </div>
    );
};

export default AuthPage;
