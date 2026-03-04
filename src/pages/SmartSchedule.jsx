import React from 'react';
import { CheckCircle, Activity, Brain } from 'lucide-react';
import '../AppPages.css';

export const SmartSchedule = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h2>Dynamic Living Schedule</h2>
                <p>Your timeline shifts automatically based on real-time focus degradation and energy levels. We predict your peaks and re-arrange hard subjects.</p>
            </div>

            <div className="schedule-layout">
                {/* Peak timeline visualizer */}
                <div className="panel-card peak-viz">
                    <div className="card-top">
                        <h3 className="card-title">Circadian Cognitive Map</h3>
                        <span className="badge-cyan">Synchronized</span>
                    </div>
                    <p className="card-sub">Mapping your mental acuity for the next 12 hours.</p>
                    <div className="brain-wave-graph">
                        {/* Abstract wave representation */}
                        <div className="wave-line"></div>
                        <div className="time-marker" style={{ left: '20%' }}>
                            <div className="t-dot pulse-cyan"></div>
                            <span>Now</span>
                        </div>
                        <div className="time-marker best" style={{ left: '60%' }}>
                            <div className="t-dot pulse-purple"></div>
                            <span>Peak Window (21:00)</span>
                        </div>
                    </div>
                </div>

                {/* Task Blocks */}
                <div className="task-blocks">
                    <div className="t-block past">
                        <div className="tb-time">14:00</div>
                        <div className="tb-content">
                            <h4>Organic Chemistry Review</h4>
                            <p>Completed during normal energy state. Retention: 82%</p>
                        </div>
                        <div className="tb-status"><CheckCircle size={20} /></div>
                    </div>

                    <div className="t-block current">
                        <div className="tb-time">16:30</div>
                        <div className="tb-content">
                            <h4>Rest & Cognitive Recovery</h4>
                            <p>AI detected a 40% focus drop. Forced micro-break initiated to prevent burnout.</p>
                        </div>
                        <div className="tb-status"><Activity size={20} className="spin-slow" /></div>
                    </div>

                    <div className="t-block peak">
                        <div className="tb-time">21:00</div>
                        <div className="tb-content">
                            <h4>Deep Flow: SAT Math Mechanics</h4>
                            <p>Scheduled during your biological peak. High-density problem-solving.</p>
                        </div>
                        <div className="tb-status"><Brain size={20} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
