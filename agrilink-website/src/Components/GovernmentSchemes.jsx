// src/Components/GovernmentSchemes.jsx
import React from 'react';
import { governmentSchemes } from '../data/mockData';

const GovernmentSchemes = () => (
  <div id="government-schemes">
    <h1>Government Schemes</h1>
    {governmentSchemes.map((scheme) => (
      <div className="scheme" key={scheme.id}>
        <h3>{scheme.title}</h3>
        <p>{scheme.benefits}</p>
      </div>
    ))}
  </div>
);

export default GovernmentSchemes;