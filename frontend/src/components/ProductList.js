import React from 'react';

const products = [
  {
    name: 'Pro CRM Suite',
    price: '$199/mo',
    category: 'Sales Automation',
    description: 'Automates pipelines, tasks, and relationship scoring so reps can close confidently.',
  },
  {
    name: 'Retail POS',
    price: '$149/mo',
    category: 'Point of Sale',
    description: 'Omnichannel checkout, inventory syncing, and intelligent receipts for high-volume retailers.',
  },
  {
    name: 'Enterprise Insights',
    price: '$399/mo',
    category: 'Analytics',
    description: 'Executive dashboards, forecasting, and cohort analysis for multi-region teams.',
  },
];

function ProductList() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.name}>
          <div className="product-header">
            <h3>{product.name}</h3>
            <span className="product-category">{product.category}</span>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="product-footer">
            <p className="product-price">{product.price}</p>
            <button className="btn secondary">See details</button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProductList;