import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import LandingPage from './LandingPage'
import AuthPage from './AuthPage'
import './App.css'

// Reusable Circular Progress SVG Component
const CircularProgress = ({ percentage, size, strokeWidth, color }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={dashoffset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.8s ease-in-out", transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
      />
      <text x="50%" y="50%" dy=".3em" textAnchor="middle" fill="#fff" fontSize={size * 0.22} fontWeight="700">
        {Math.round(percentage)}%
      </text>
    </svg>
  );
};

// Weekly Habit Tracker Component
const WeeklyTracker = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = ['12 Nov', '13 Nov', '14 Nov', '15 Nov', '16 Nov', '17 Nov', '18 Nov'];

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2dd4bf', '#00f2fe', '#7f00ff', '#fbbf24']
    });
  };

  const [habits, setHabits] = useState([
    { id: 1, name: 'Deep Work (2hr)', days: [false, true, true, false, true, true, false] },
    { id: 2, name: 'Review Notes', days: [true, true, true, true, true, false, false] },
    { id: 3, name: 'Read Research', days: [false, false, true, true, true, true, true] },
    { id: 4, name: 'Algorithmic Prep', days: [true, false, false, true, false, false, true] },
    { id: 5, name: 'No Social Media', days: [true, true, true, true, true, false, true] },
  ]);

  const [dailyTasks, setDailyTasks] = useState([
    { day: 0, completion: 50, tasks: [{ id: 1, text: 'Weekly Review', done: true }, { id: 2, text: 'Grocery run', done: false }] },
    { day: 1, completion: 100, tasks: [{ id: 3, text: 'CS50 Lecture', done: true }, { id: 4, text: 'Read ch 4', done: true }] },
    { day: 2, completion: 50, tasks: [{ id: 5, text: 'Math P-Set', done: true }, { id: 6, text: 'Lab work', done: false }] },
    { day: 3, completion: 50, tasks: [{ id: 7, text: 'Study group', done: true }, { id: 8, text: 'Quiz prep', done: false }] },
    { day: 4, completion: 0, tasks: [{ id: 9, text: 'Draft essay', done: false }] },
    { day: 5, completion: 0, tasks: [{ id: 10, text: 'Project demo', done: false }] },
    { day: 6, completion: 0, tasks: [{ id: 11, text: 'Rest & recover', done: false }] },
  ]);

  const toggleHabit = (habitId, dayIndex) => {
    setHabits(habits.map(h => {
      if (h.id === habitId) {
        const newDays = [...h.days];
        newDays[dayIndex] = !newDays[dayIndex];

        const wasCompletedCount = h.days.filter(Boolean).length;
        const isCompletedCount = newDays.filter(Boolean).length;
        if (wasCompletedCount < 7 && isCompletedCount === 7) {
          triggerConfetti();
        }

        return { ...h, days: newDays };
      }
      return h;
    }));
  };

  const toggleTask = (dayIndex, taskId) => {
    setDailyTasks(dailyTasks.map((d, i) => {
      if (i === dayIndex) {
        const newTasks = d.tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t);
        const comp = newTasks.filter(t => t.done).length / newTasks.length * 100 || 0;

        if (d.completion < 100 && comp === 100) {
          triggerConfetti();
        }

        return { ...d, tasks: newTasks, completion: comp };
      }
      return d;
    }));
  }

  // Calculate Overall Progress
  const totalCompletedHabits = habits.reduce((acc, hab) => acc + hab.days.filter(Boolean).length, 0);
  const totalHabitsPossible = habits.length * 7;
  const overallProgress = (totalCompletedHabits / totalHabitsPossible) * 100;

  return (
    <div className="tracker-layout">
      <div className="tracker-top-row">

        {/* Overall Progress */}
        <div className="tracker-card glass-panel">
          <div className="card-title">Overall Analytics</div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flex: 1 }}>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '110px' }}>
              {[40, 70, 60, 45, 80, 50, 60].map((h, i) => (
                <div key={i} style={{ width: '14px', height: `${h}%`, background: 'rgba(45, 212, 191, 0.2)', borderRadius: '4px', position: 'relative' }}>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: `${h * 0.7}%`, background: 'var(--success)', borderRadius: '4px' }}></div>
                </div>
              ))}
            </div>

            <CircularProgress percentage={overallProgress} size={130} strokeWidth={12} color="var(--success)" />
          </div>
        </div>

        {/* Habit Tracker Matrix */}
        <div className="tracker-card glass-panel">
          <div className="card-title">Habit Matrix</div>
          <div className="habit-table-container">
            <table className="habit-table">
              <thead>
                <tr>
                  <th>Target Habit</th>
                  {daysOfWeek.map(d => <th key={d}>{d.charAt(0)}</th>)}
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {habits.map(habit => {
                  const completed = habit.days.filter(Boolean).length;
                  const progress = (completed / 7) * 100;
                  return (
                    <tr key={habit.id}>
                      <td>{habit.name}</td>
                      {habit.days.map((isDone, i) => (
                        <td key={i}>
                          <div
                            className={`checkbox-custom ${isDone ? 'checked' : ''}`}
                            onClick={() => toggleHabit(habit.id, i)}
                          >
                            {isDone && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                          </div>
                        </td>
                      ))}
                      <td>
                        <div className="habit-progress-bar">
                          <div className="habit-progress-fill" style={{ width: `${progress}%`, background: progress === 100 ? 'var(--warning)' : 'var(--success)' }}></div>
                        </div>
                        <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{Math.round(progress)}% {progress === 100 && '👑'}</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Days Grid Map */}
      <div className="days-grid">
        {daysOfWeek.map((day, i) => (
          <div className="day-column glass-panel" key={day}>
            <div className="day-header">
              <div className="day-title" style={{ color: dates[i] === '15 Nov' ? 'var(--success)' : '' }}>{day}</div>
              <div className="day-date">{dates[i]}</div>
            </div>

            <CircularProgress percentage={dailyTasks[i].completion} size={70} strokeWidth={6} color={dailyTasks[i].completion > 0 ? "var(--success)" : "rgba(255,255,255,0.1)"} />

            <div className="task-list" style={{ marginTop: '16px' }}>
              <div className="task-list-header">Tasks</div>
              {dailyTasks[i].tasks.map(task => (
                <div className={`task-item ${task.done ? 'completed' : ''}`} key={task.id} onClick={() => toggleTask(i, task.id)} style={{ cursor: 'pointer' }}>
                  <div className={`checkbox-custom ${task.done ? 'checked' : ''}`} style={{ width: '12px', height: '12px', minWidth: '12px', borderRadius: '2px' }}>
                    {// Only show check if done
                      task.done && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    }
                  </div>
                  <span style={{ lineHeight: '1.2' }}>{task.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Layout
function App() {
  const [appRoute, setAppRoute] = useState('landing'); // 'landing', 'auth', 'dashboard'
  const [authMode, setAuthMode] = useState('signup'); // 'signup', 'login'
  const [activeTab, setActiveTab] = useState('analytics'); // Default to our new tab to show it off
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleNavigateAuth = (mode) => {
    setAuthMode(mode);
    setAppRoute('auth');
  };

  if (appRoute === 'landing') {
    return <LandingPage onEnterApp={() => setAppRoute('dashboard')} onNavigateAuth={handleNavigateAuth} />;
  }

  if (appRoute === 'auth') {
    return <AuthPage mode={authMode} onBack={() => setAppRoute('landing')} onEnterApp={() => setAppRoute('dashboard')} />;
  }

  return (
    <div className="dashboard-layout">
      {/* Background Blobs for Atmosphere */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2" style={{ background: 'radial-gradient(circle, rgba(45, 212, 191, 0.08), rgba(0,0,0,0) 70%)' }}></div>

      {/* Sidebar */}
      <nav className="sidebar glass-panel">
        <div className="logo-container">
          <div className="logo-dot"></div>
          <h1 className="logo-text text-gradient">STADI</h1>
        </div>
        <ul className="nav-menu">
          <li className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"></rect><rect x="14" y="3" width="7" height="5" rx="1"></rect><rect x="14" y="12" width="7" height="9" rx="1"></rect><rect x="3" y="16" width="7" height="5" rx="1"></rect></svg>
            Dashboard
          </li>
          <li className={`nav-item ${activeTab === 'learning' ? 'active' : ''}`} onClick={() => setActiveTab('learning')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            Study Plan
          </li>
          <li className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveTab('analytics')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            Performance
          </li>
          <li className={`nav-item ${activeTab === 'goals' ? 'active' : ''}`} onClick={() => setActiveTab('goals')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            Goals
          </li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        <header className="header">
          <div>
            <h2 className="greeting-title">
              {activeTab === 'analytics' ? 'Performance Matrix' : 'Good Morning, '}<span className={activeTab !== 'analytics' ? "text-gradient" : "text-gradient"} style={{ color: activeTab === 'analytics' ? 'var(--success)' : '' }}>
                {activeTab === 'analytics' ? '' : 'Alex'}
              </span>
            </h2>
            <p className="greeting-subtitle">
              {activeTab === 'analytics'
                ? 'Your habit integration velocity is increasing. Keep tracking daily to optimize the engine.'
                : 'Your cognitive peak is expected in 45 minutes. We\'ve arranged your schedule to tackle Machine Learning during this window.'
              }
            </p>
          </div>
          <div className="profile-widget glass-panel">
            <div className="profile-info">
              <h4>Alex Learns</h4>
              <p>Pro Student</p>
            </div>
            <div className="avatar">
              <img src="https://ui-avatars.com/api/?name=Alex+L&background=0d0f14&color=fff&size=100" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <section className="dashboard-grid">
            <div className="card-main glass-panel">
              <div className="card-title">
                Current Focus
                <span className="badge badge-live">● Tracking Live</span>
              </div>

              <div className="focus-stats">
                <div className="stat-item">
                  <span className="stat-value text-gradient">78%</span>
                  <span className="stat-label">Retention Probability</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">55m</span>
                  <span className="stat-label">Remaining in Session</span>
                </div>
              </div>

              <div>
                <div className="stat-label">Neural Optimization Progress</div>
                <div className="progress-container">
                  <div className="progress-bar"></div>
                </div>
              </div>

              <button className="btn-primary" style={{ marginTop: '20px' }}>
                Launch Study Environment
              </button>
            </div>

            <div className="card-side glass-panel">
              <div className="card-title">
                Dynamic Schedule
                <span className="badge">AI Optimized</span>
              </div>
              <div className="schedule-list">
                <div className="schedule-item">
                  <div className="schedule-time">09:00</div>
                  <div className="schedule-detail">
                    <h5>Data Structures</h5>
                    <p>Visual Learning Format</p>
                  </div>
                  <div className="schedule-status active"></div>
                </div>

                <div className="schedule-item" style={{ borderColor: 'rgba(127, 0, 255, 0.3)' }}>
                  <div className="schedule-time text-gradient">{time}</div>
                  <div className="schedule-detail">
                    <h5 className="text-gradient">Machine Learning</h5>
                    <p>Peak Cognitive Target</p>
                  </div>
                  <div className="schedule-status upcoming"></div>
                </div>

                <div className="schedule-item">
                  <div className="schedule-time">13:30</div>
                  <div className="schedule-detail">
                    <h5>Physics Review</h5>
                    <p>Active Recall Quiz</p>
                  </div>
                  <div className="schedule-status"></div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Analytics / Habit Tracker Tab */}
        {activeTab === 'analytics' && (
          <WeeklyTracker />
        )}

      </main>
    </div>
  )
}

export default App
