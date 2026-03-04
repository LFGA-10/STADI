import React from 'react';
import { PlayCircle } from 'lucide-react';
import '../AppPages.css';

export const VideoLibrary = () => (
    <div className="page-container">
        <div className="page-header">
            <h2>Visual Synthesis Library</h2>
            <p>High-density visual breakdowns generated from your weakest syllabus points.</p>
        </div>

        <div className="video-grid">
            {[
                { t: 'Vectors & Scalars in 3D', dur: '4:12' },
                { t: 'Cellular Respiration ATP Breakdown', dur: '6:45' },
                { t: 'Macroeconomics: Supply Shocks', dur: '3:20' },
                { t: 'Integration by Parts (Visual Proof)', dur: '8:10' },
                { t: 'The French Revolution Timeline', dur: '12:05' },
                { t: 'Python Async/Await Explained', dur: '5:50' }
            ].map((vid, i) => (
                <div key={i} className="panel-card video-card">
                    <div className="vid-thumbnail">
                        <PlayCircle size={48} className="play-icon" />
                        <span className="vid-dur">{vid.dur}</span>
                    </div>
                    <h4 className="vid-title">{vid.t}</h4>
                    <p className="vid-sub">Generated for Visual Profile</p>
                </div>
            ))}
        </div>
    </div>
);
