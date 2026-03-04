import React from 'react';
import '../AppPages.css';

export const PerformanceInsight = () => (
    <div className="page-container">
        <div className="page-header">
            <h2>Performance Vectors</h2>
            <p>Uncompromising visibility into your cognitive growth and focus degradation patterns.</p>
        </div>

        <div className="metrics-grid">
            <div className="panel-card m-main">
                <h3 className="card-title">Focus Depreciation Curve</h3>
                <p className="card-sub">Analysis of how fast your attention decays during complex tasks.</p>
                <div className="decay-chart">
                    {/* Abstract CSS Chart */}
                    <svg viewBox="0 0 100 40" className="chart-svg">
                        <path d="M0,10 Q20,10 40,20 T100,38" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" />
                        <path d="M0,5 Q30,5 60,15 T100,25" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeDasharray="4" />
                    </svg>
                    <div className="chart-legend">
                        <span><div className="l-dot root"></div> Baseline</span>
                        <span><div className="l-dot stadi"></div> With STADI Interference</span>
                    </div>
                </div>
            </div>

            <div className="panel-card m-side">
                <h3 className="card-title">Learning Style Distribution</h3>
                <div className="dist-bars">
                    <div className="d-bar-row">
                        <span className="d-label">Visual</span>
                        <div className="d-track"><div className="d-fill visual" style={{ width: '65%' }}></div></div>
                        <span className="d-val">65%</span>
                    </div>
                    <div className="d-bar-row">
                        <span className="d-label">Auditory</span>
                        <div className="d-track"><div className="d-fill auditory" style={{ width: '85%' }}></div></div>
                        <span className="d-val">85%</span>
                    </div>
                    <div className="d-bar-row">
                        <span className="d-label">Kinesthetic</span>
                        <div className="d-track"><div className="d-fill kin" style={{ width: '30%' }}></div></div>
                        <span className="d-val">30%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
