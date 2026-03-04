import React from 'react';
import { Target, Check, Activity, AlertTriangle } from 'lucide-react';
import '../AppPages.css';

export const GoalsHabits = () => (
    <div className="page-container">
        <div className="page-header">
            <h2>Operational Objectives</h2>
            <p>Goals are vanity until reduced to daily discipline. Here is your execution pipeline.</p>
        </div>

        <div className="goals-layout">
            <div className="master-goal panel-card">
                <div className="mg-top">
                    <Target size={32} className="mg-icon" />
                    <div>
                        <h3 className="mg-title">Master Objective: Enter Stanford Engineering</h3>
                        <p className="mg-sub">"Make the sacrifice now, or your goal becomes the sacrifice."</p>
                    </div>
                </div>
                <div className="mg-progress">
                    <div className="mg-fill" style={{ width: '42%' }}></div>
                </div>
                <div className="mg-meta">42% Trajectory Alignment</div>
            </div>

            <div className="daily-pipeline">
                <h3 className="pipeline-title">Required Daily Protocols</h3>
                <div className="protocol-list">
                    <div className="protocol-item done">
                        <Check size={20} />
                        <div className="p-info">
                            <h4>Physics Core Review</h4>
                            <span>Completed in 24m 12s. Focus: 94%</span>
                        </div>
                    </div>
                    <div className="protocol-item active">
                        <Activity size={20} className="pulse-cyan" />
                        <div className="p-info">
                            <h4>Calculus Integrals (Deep State)</h4>
                            <span>Scheduled for 21:00 peak window.</span>
                        </div>
                    </div>
                    <div className="protocol-item locked">
                        <AlertTriangle size={20} />
                        <div className="p-info">
                            <h4>End of Day Review</h4>
                            <span>Locked. Awaiting completion of prior protocols.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
