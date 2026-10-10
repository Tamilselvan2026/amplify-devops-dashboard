import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const services = [
  { name: 'Amazon EC2', tag: 'COMPUTE', icon: '▣', description: 'Virtual servers for hosting applications', status: 'Ready', color: 'blue' },
  { name: 'Amazon S3', tag: 'STORAGE', icon: '▤', description: 'Object storage for files and static assets', status: 'Ready', color: 'purple' },
  { name: 'Amazon CloudWatch', tag: 'OBSERVABILITY', icon: '◷', description: 'Metrics, logs, dashboards, and alarms', status: 'Practice next', color: 'orange' },
  { name: 'Amazon EKS', tag: 'CONTAINERS', icon: '⬡', description: 'Managed Kubernetes control plane', status: 'Practice next', color: 'green' }
];

function App() {
  const [checked, setChecked] = useState([false, false, false, false]);
  const [showTips, setShowTips] = useState(false);
  const done = checked.filter(Boolean).length;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand"><span className="brand-mark">C</span><span>CloudDeck</span></div>
        <div className="workspace-label">WORKSPACE</div>
        <a className="nav-item active" href="#overview"><span>◫</span> Overview</a>
        <a className="nav-item" href="#services"><span>◇</span> AWS Services</a>
        <a className="nav-item" href="#learning"><span>✓</span> Learning path</a>
        <div className="sidebar-bottom">
          <div className="mini-avatar">TS</div>
          <div><strong>Cloud learner</strong><small>Amplify practice project</small></div>
        </div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div className="breadcrumb">Workspace <span>/</span> Overview</div>
          <div className="topbar-right"><span className="live-dot"></span> Demo environment <span className="avatar">TS</span></div>
        </header>

        <section className="welcome">
          <div>
            <div className="eyebrow">CLOUD OPERATIONS CENTER</div>
            <h1>Your cloud journey,<br /><span>all in one place.</span></h1>
            <p>A sample dashboard to practise frontend hosting, Git-based deployments, and CI/CD with AWS Amplify.</p>
            <button className="primary-button" onClick={() => document.getElementById('learning').scrollIntoView({ behavior: 'smooth' })}>Continue learning <span>→</span></button>
          </div>
          <div className="hero-graphic" aria-hidden="true">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="cloud-symbol">☁</div><div className="orbit-node node-one">⌘</div><div className="orbit-node node-two">↗</div><div className="orbit-node node-three">◇</div>
          </div>
        </section>

        <section className="stats-grid" aria-label="Project summary">
          <article className="stat-card"><div className="stat-top"><span>Learning progress</span><span className="stat-icon violet">↗</span></div><div className="stat-number">{Math.round(done / 4 * 100)}<small>%</small></div><div className="progress-track"><div className="progress-fill" style={{ width: `${done / 4 * 100}%` }}></div></div><div className="stat-foot">{done} of 4 tasks completed</div></article>
          <article className="stat-card"><div className="stat-top"><span>Sample services</span><span className="stat-icon cyan">◇</span></div><div className="stat-number">04</div><div className="stat-foot">Illustrative service cards</div></article>
          <article className="stat-card"><div className="stat-top"><span>Deployment pipeline</span><span className="stat-icon green">⌁</span></div><div className="stat-number status-text">Ready to connect</div><div className="stat-foot"><span className="status-pill"><i></i> Awaiting your Git push</span></div></article>
        </section>

        <section className="section-block" id="services">
          <div className="section-heading"><div><div className="eyebrow">YOUR TOOLKIT</div><h2>AWS service explorer</h2></div><button className="text-button" onClick={() => setShowTips(!showTips)}>{showTips ? 'Hide tips' : 'Show practice tips'} <span>↗</span></button></div>
          {showTips && <div className="tip-panel"><strong>Practice tip:</strong> These are informational cards, not live AWS resource checks. First deploy this frontend, then try adding a real API or monitoring data in a separate project.</div>}
          <div className="service-grid">{services.map((service) => <article className="service-card" key={service.name}><div className={`service-icon ${service.color}`}>{service.icon}</div><div className="service-tag">{service.tag}</div><h3>{service.name}</h3><p>{service.description}</p><div className="service-footer"><span className={`service-status ${service.status === 'Ready' ? 'ready' : ''}`}><i></i>{service.status}</span><span className="card-arrow">↗</span></div></article>)}</div>
        </section>

        <section className="section-block learning-block" id="learning">
          <div className="section-heading"><div><div className="eyebrow">BUILD YOUR SKILLS</div><h2>Amplify deployment checklist</h2></div><span className="count-badge">{done}/4 complete</span></div>
          <div className="checklist">
            {[
              ['Connect your GitHub repository', 'Authorize Amplify to read your repository.'],
              ['Review the build settings', 'Amplify uses amplify.yml to install dependencies and build the app.'],
              ['Deploy your first version', 'Check the build logs and open the generated hosting URL.'],
              ['Trigger an automatic deployment', 'Change a heading, commit, and push to GitHub.']
            ].map(([title, description], index) => <label className={`check-row ${checked[index] ? 'checked' : ''}`} key={title}><input type="checkbox" checked={checked[index]} onChange={() => setChecked((old) => old.map((v, i) => i === index ? !v : v))} /><span className="custom-check">{checked[index] ? '✓' : ''}</span><span className="check-copy"><strong>{title}</strong><small>{description}</small></span><span className="row-chevron">›</span></label>)}
          </div>
        </section>

        <footer><span>CloudDeck <span className="footer-dot">•</span> Sample learning project</span><span>Built for AWS Amplify practice <span className="footer-heart">♥</span></span></footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);