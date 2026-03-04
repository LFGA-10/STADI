import React, { useState } from 'react';
import '../AppPages.css';

export const AssessPractice = () => {
    const [activeCard, setActiveCard] = useState(false);

    return (
        <div className="page-container">
            <div className="page-header">
                <h2>Neural Assessment</h2>
                <p>Dynamic evaluation. We test what you're about to forget, right before memory decays.</p>
            </div>

            <div className="practice-layout">
                <div className="panel-card main-test">
                    <div className="card-top">
                        <span className="badge-warn">Memory Decay Imminent (14 mins)</span>
                        <span>Topic: Vector Calculus</span>
                    </div>
                    <div className="flashcard-container" onClick={() => setActiveCard(!activeCard)}>
                        <div className={`flashcard ${activeCard ? 'flipped' : ''}`}>
                            <div className="front">
                                <h3>Explain the geometric interpretation of the cross product of two vectors in 3D space.</h3>
                                <p className="click-hint">Click / Tap to Reveal Optimal Solution</p>
                            </div>
                            <div className="back">
                                <h3>Solution</h3>
                                <p>The magnitude of the cross product represents the area of the parallelogram formed by the two vectors. Its direction is orthogonal to both vectors, determined by the right-hand rule.</p>
                                <div className="reaction-btns">
                                    <button className="btn-fail">Forgot</button>
                                    <button className="btn-hard">Hard (Review Soon)</button>
                                    <button className="btn-easy">Easy (Mastered)</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="side-stats">
                    <div className="panel-card">
                        <h3 className="card-title">Current Session</h3>
                        <div className="stat-row"><span>Items Mastered:</span> <strong>24</strong></div>
                        <div className="stat-row"><span>Items Failing:</span> <strong className="danger">3</strong></div>
                        <div className="stat-row"><span>Predicted Retention:</span> <strong className="success">94%</strong></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
