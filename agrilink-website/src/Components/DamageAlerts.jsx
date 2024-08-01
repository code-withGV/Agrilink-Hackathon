// src/Components/DamageAlerts.jsx
import React from 'react';
import { damageAlerts } from '../data/mockData';

const DamageAlerts = () => (
  <div id="damage-alerts">
    <h1>Damage Alerts</h1>
    {damageAlerts.map((alert) => (
      <div className="alert" key={alert.id}>
        <h3>{alert.type}</h3>
        <p>{alert.details}</p>
      </div>
    ))}
  </div>
);

export default DamageAlerts;