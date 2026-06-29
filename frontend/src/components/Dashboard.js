import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const stats = [
  { label: 'Revenue', value: '$128K', trend: '+12% MoM' },
  { label: 'Win Rate', value: '42%', trend: 'Target 37%' },
  { label: 'Sales Cycle', value: '18 days', trend: 'Down 3 days' },
];

const updates = [
  'Sales team closed 32 deals this month.',
  'Product bundle upsells contributed 28% of revenue.',
  'New integrations launched for payment reconciliation.',
];

function Dashboard() {
  return (
    <div className="dashboard-page">
      <Navbar />
      <section className="dashboard-hero">
        <div>
          <p className="tagline">Executive dashboard</p>
          <h1>Overview of every pipeline, everywhere.</h1>
          <p className="hero-sub">
            Monitor performance, compare teams, and drill into the metrics that move the needle. Start with the
            highlights and dive deeper when needed.
          </p>
          <div className="hero-actions">
            <Link to="/payment" className="btn primary">
              Upgrade plan
            </Link>
          </div>
        </div>
        <div className="dashboard-hero-card">
          <p>Next checkpoint</p>
          <h2>Daily Morning Brief</h2>
          <p className="hero-card-sub">10:00 AM • Zoom room</p>
          <div className="progress-bar">
            <span style={{ width: '60%' }} />
          </div>
          <p className="hero-pill">60% complete</p>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="dashboard-stats">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-detail">{stat.trend}</p>
            </article>
          ))}
        </div>
        <div className="dashboard-updates">
          <h3>Recent highlights</h3>
          <ul>
            {updates.map((update) => (
              <li key={update}>{update}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;