import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './App.css';

const stats = [
  { label: 'Monthly Revenue', value: '$128,400', detail: 'Up 15% vs last month' },
  { label: 'New Customers', value: '72', detail: 'Onboarded this period' },
  { label: 'Average Order Value', value: '$482', detail: 'Driven by premium tiers' },
];

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="tagline">All-in-one sales companion</p>
            <h1>Scale revenue faster with smarter insights.</h1>
            <p className="hero-sub">
              Track leads, close deals, and keep buyers engaged from onboarding to renewals. The intuitive dashboard
              helps your sales team focus on what matters.
            </p>
            <div className="hero-actions">
              <Link to="/dashboard" className="btn primary">
                View dashboard
              </Link>
              <Link to="/payment" className="btn ghost">
                See payment plans
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <p className="hero-card-title">Live revenue snapshot</p>
            <p className="hero-card-value">$72,400</p>
            <p className="hero-card-sub">+18% vs last week</p>
            <div className="progress-bar">
              <span style={{ width: '72%' }} />
            </div>
            <div className="hero-pill">Bookings 128 / 180</div>
          </div>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-card" key={stat.label}>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-detail">{stat.detail}</p>
            </article>
          ))}
        </section>

        <section className="product-section">
          <div className="section-heading">
            <p>Products</p>
            <h2>Featured packages</h2>
          </div>
          <ProductList />
        </section>
      </main>
    </div>
  );
}

export default App;