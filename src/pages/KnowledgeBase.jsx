import React from 'react';
import { BookOpen } from 'lucide-react';
import '../AppPages.css';

export const KnowledgeBase = () => (
    <div className="page-container">
        <div className="page-header">
            <h2>Knowledge Matrix</h2>
            <p>Your entire academic syllabus, broken down into neural maps and interconnected concepts.</p>
        </div>

        <div className="knowledge-grid">
            {['Advanced Physics', 'Machine Learning', 'World History II', 'Psychology 101', 'Calculus III'].map((subj, i) => (
                <div key={i} className="panel-card k-card">
                    <BookOpen size={24} className="k-icon" />
                    <h3>{subj}</h3>
                    <div className="k-progress">
                        <div className="k-fill" style={{ width: `${Math.floor(Math.random() * 60) + 20}%` }}></div>
                    </div>
                    <div className="k-meta"><span>{Math.floor(Math.random() * 40) + 10} Modules</span> <span>Active</span></div>
                </div>
            ))}
            <div className="panel-card k-card-add">
                <div className="plus-icon">+</div>
                <h3>Ingest New Syllabus</h3>
                <p>Drop PDF/Doc. STADI will generate the neural map.</p>
            </div>
        </div>
    </div>
);
