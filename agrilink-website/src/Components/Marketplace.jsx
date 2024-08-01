import React from 'react';
import { Link } from 'react-router-dom';
import { farmersListings, buyersRequests } from '../data/mockData';

const Marketplace = () => (
  <div id="marketplace">
    <h1>Marketplace</h1>
    <div className="listings">
      <h2>Farmers' Listings</h2>
      {farmersListings.map((listing) => (
        <div className="listing" key={listing.id}>
          <h3>{listing.name}</h3>
          <p>Product: {listing.product}</p>
          <p>Price: {listing.price}</p>
          <p>Location: {listing.location}</p>
        </div>
      ))}
    </div>
    <div className="listings">
      <h2>Buyers' Requests</h2>
      {buyersRequests.map((request) => (
        <div className="listing" key={request.id}>
          <h3>{request.name}</h3>
          <p>Product: {request.product}</p>
          <p>Price: {request.price}</p>
          <p>Location: {request.location}</p>
          <Link to={`/buyer-details/${request.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Marketplace;
