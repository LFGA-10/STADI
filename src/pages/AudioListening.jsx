import React from 'react';
import { Mic, SkipForward, Pause } from 'lucide-react';
import '../AppPages.css';

export const AudioListening = () => (
    <div className="page-container">
        <div className="page-header">
            <h2>Neural Audio Generation</h2>
            <p>Custom-generated auditory breakdowns of your complex texts, precisely calibrated to your speed and tone preference.</p>
        </div>

        <div className="audio-layout">
            <div className="audioplayer-card panel-card">
                <div className="track-info">
                    <Mic size={48} className="track-icon" />
                    <div className="t-details">
                        <h3>Chapter 4: Neural Networks Backpropagation</h3>
                        <p>Source: CS231 Syllabus • AI Voice: Deep Analytical</p>
                    </div>
                </div>

                <div className="audio-scrubber">
                    <span className="time">14:22</span>
                    <div className="scrubber-track">
                        <div className="scrubber-fill" style={{ width: '65%' }}></div>
                        <div className="scrubber-knob" style={{ left: '65%' }}></div>
                    </div>
                    <span className="time">22:15</span>
                </div>

                <div className="audio-controls">
                    <button className="ctrl-btn sub"><SkipForward size={24} style={{ transform: 'rotate(180deg)' }} /></button>
                    <button className="ctrl-btn main"><Pause size={32} /></button>
                    <button className="ctrl-btn sub"><SkipForward size={24} /></button>
                </div>
            </div>

            <div className="audio-transcript panel-card">
                <h3 className="card-title">Live Transcript Tracking</h3>
                <div className="transcript-content">
                    <p>"...the gradient of the loss function with respect to the weights is calculated using the chain rule. <span className="highlight-text">This backward pass effectively distributes the error</span> back through the layers of the network..."</p>
                </div>
            </div>
        </div>
    </div>
);
