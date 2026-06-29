import React from 'react';
import Navbar from './Navbar';

const plans = [
  {
    title: 'Monthly',
    price: '$29',
    cadence: 'Billed monthly',
    benefits: ['Unlimited products', 'Basic analytics', 'Email support'],
  },
  {
    title: 'Yearly',
    price: '$299',
    cadence: 'Billed annually (save 15%)',
    benefits: ['Everything in Monthly', 'Priority onboarding', '1:1 optimization workshops'],
  },
];

function Payment() {
  return (
    <div className="payment-page">
      <Navbar />
      <section className="payment-hero">
        <div>
          <p className="tagline">Flexible billing</p>
          <h1>Choose the plan that suits your growth.</h1>
          <p className="hero-sub">
            We built flexible plans for lean startups, growing teams, and large enterprises. Pick the cadence that
            keeps your team onboarded and billing predictable.
          </p>
        </div>
      </section>

      <section className="plan-grid">
        {plans.map((plan) => (
          <article className="plan-card" key={plan.title}>
            <p className="plan-badge">{plan.title} plan</p>
            <h2>{plan.price}</h2>
            <p className="plan-cadence">{plan.cadence}</p>
            <ul>
              {plan.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <button className="btn primary">Select {plan.title}</button>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Payment;