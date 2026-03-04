import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import AuthPage from './AuthPage';
import { SmartSchedule, AssessPractice, KnowledgeBase, PerformanceInsight, GoalsHabits, AudioListening, VideoLibrary } from './pages';
import { LayoutDashboard, CalendarClock, BrainCircuit, Library, TrendingUp, Target, Mic, FileVideo, Bell, Search, Hexagon, Quote } from 'lucide-react';
import './App.css';

// --------------------------------------------------------------------------
// REUSABLE DASHBOARD CARD
// --------------------------------------------------------------------------
const DashCard = ({ title, icon: Icon, children, color = "#00f2fe", className = "" }) => (
  <div className={`dash-card ${className}`}>
    <div className="dash-card-header">
      <div className="dch-icon" style={{ color: color, background: `${color}15` }}><Icon size={18} /></div>
      <div className="dch-title">{title}</div>
    </div>
    <div className="dash-card-body">
      {children}
    </div>
  </div>
);

// --------------------------------------------------------------------------
// MAIN APP COMPONENT
// --------------------------------------------------------------------------
function App() {
  const [appRoute, setAppRoute] = useState('landing'); // 'landing', 'auth', 'dashboard'
  const [authMode, setAuthMode] = useState('signup');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNavigateAuth = (mode) => {
    setAuthMode(mode);
    setAppRoute('auth');
  };

  if (appRoute === 'landing') {
    return <MasterpieceLanding onEnterApp={() => setAppRoute('dashboard')} onNavigateAuth={handleNavigateAuth} />;
  }

  if (appRoute === 'auth') {
    return <AuthPage mode={authMode} onBack={() => setAppRoute('landing')} onEnterApp={() => setAppRoute('dashboard')} />;
  }

  // Define tabs matching user specifications
  const TABS = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'schedule', label: 'Smart Schedule', icon: CalendarClock },
    { id: 'practice', label: 'Assess & Practice', icon: BrainCircuit },
    { id: 'knowledge', label: 'Knowledge Base', icon: Library },
    { id: 'metrics', label: 'Performance Insight', icon: TrendingUp },
    { id: 'goals', label: 'Goals & Habits', icon: Target },
    { id: 'audio', label: 'Audio Listening', icon: Mic },
    { id: 'videos', label: 'Video Library', icon: FileVideo },
  ];

  return (
    <div className="stadi-app-layout">
      {/* SIDEBAR */}
      <aside className="stadi-sidebar">
        <div className="sidebar-logo">
          <img src="/src/assets/logo.png" alt="S" className="s-icon" />
          <span>STADI</span>
        </div>

        <div className="sidebar-menu">
          <div className="menu-label">SYSTEM</div>
          {TABS.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`menu-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={18} /> {tab.label}
              </button>
            )
          })}
        </div>

        <div className="sidebar-bottom">
          <div className="user-profile">
            <div className="avatar">A</div>
            <div className="user-info">
              <div className="u-name">Alex M.</div>
              <div className="u-status">Acoustic / Night Owl</div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="stadi-main">
        {/* HEADER */}
        <header className="stadi-header">
          <div className="header-search">
            <Search size={16} />
            <input type="text" placeholder="Search cognitive profile, modules, or tasks..." />
          </div>
          <div className="header-actions">
            <div className="time-display">{time}</div>
            <button className="icon-btn"><Bell size={18} /></button>
          </div>
        </header>

        {/* Dynamic Inner Content */}
        <div className="stadi-content-scroll">
          {activeTab === 'dashboard' && (
            <div className="dashboard-grid">

              {/* Top Banner / Greeting */}
              <div className="welcome-banner">
                <h1>Neural Sync Active.</h1>
                <p>Your cognitive rhythm is currently at <strong>Peak Capacity</strong>. Recommended action: High-density conceptual breakdown.</p>
              </div>

              {/* Data Row 1 */}
              <div className="grid-row-2">
                {/* Best way to learn right now */}
                <DashCard title="Current Optimal Mode" icon={BrainCircuit} color="#00f2fe">
                  <div className="optimal-huge">Visual + Auditory</div>
                  <div className="optimal-sub">Current mental fatigue predicts high unresponsiveness to pure text. Switch to diagram and audio explanations.</div>
                </DashCard>

                {/* Next best time to deep learn */}
                <DashCard title="Next Deep Flow Window" icon={CalendarClock} color="#7f00ff">
                  <div className="flow-timeline">
                    <div className="flow-time">Tonight 21:00 — 23:30</div>
                    <div className="flow-bar">
                      <div className="f-fill" style={{ width: '80%' }}></div>
                    </div>
                    <div className="flow-desc">Circadian rhythm predicts 80% focus capacity spike. Ideal for SAT Math Practice.</div>
                  </div>
                </DashCard>
              </div>

              {/* Data Row 2 */}
              <div className="grid-row-3">
                {/* Upcoming Events */}
                <DashCard title="Upcoming Milestones" icon={Target} color="#ff3b30">
                  <ul className="event-list">
                    <li>
                      <div className="e-date">Sat, 14 Nov</div>
                      <div className="e-detail">
                        <strong>Official SAT Test</strong>
                        <span>Readiness: 88%</span>
                      </div>
                    </li>
                    <li>
                      <div className="e-date">Mon, 16 Nov</div>
                      <div className="e-detail">
                        <strong>AP Physics Midterm</strong>
                        <span>Readiness: 62% (Needs Review)</span>
                      </div>
                    </li>
                  </ul>
                </DashCard>

                {/* General Improvement Status */}
                <DashCard title="Trajectory Vector" icon={TrendingUp} color="#34c759">
                  <div className="trajectory-view">
                    <span className="traj-val">+14%</span>
                    <span className="traj-label">vs Last Week Baseline</span>
                    <div className="mini-chart">
                      {/* Fake mini bar chart */}
                      {[20, 30, 25, 45, 40, 70, 80].map((h, i) => (
                        <div key={i} className="m-bar" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </DashCard>

                {/* Great Accomplishments */}
                <DashCard title="Recent Triumphs" icon={Hexagon} color="#ffcc00">
                  <div className="triumph-badge">
                    <div className="t-icon">14</div>
                    <div className="t-text">Day unbroken focus streak achieved.</div>
                  </div>
                  <div className="triumph-badge">
                    <div className="t-icon" style={{ background: 'rgba(0,242,254,0.1)', color: '#00f2fe' }}>A+</div>
                    <div className="t-text">Mastered Advanced Vectors faster than 92% of peers.</div>
                  </div>
                </DashCard>
              </div>

              {/* Dark & Cold Value of the Week */}
              <div className="dark-cold-value">
                <Quote size={28} color="rgba(255,255,255,0.2)" />
                <div className="quote-text">"Don't talk about your next move. Execute it."</div>
                <div className="quote-label">OPERATIONAL DIRECTIVE // WEEK 42</div>
              </div>

            </div>
          )}

          {activeTab === 'schedule' && <SmartSchedule />}
          {activeTab === 'practice' && <AssessPractice />}
          {activeTab === 'knowledge' && <KnowledgeBase />}
          {activeTab === 'metrics' && <PerformanceInsight />}
          {activeTab === 'goals' && <GoalsHabits />}
          {activeTab === 'audio' && <AudioListening />}
          {activeTab === 'videos' && <VideoLibrary />}

        </div>
      </main>
    </div>
  );
}

export default App;
