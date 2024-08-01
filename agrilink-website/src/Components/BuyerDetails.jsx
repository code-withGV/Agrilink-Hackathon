import React from 'react';
import { useParams } from 'react-router-dom';
import { buyersRequests } from '../data/mockData';

const BuyerDetails = () => {
  const { id } = useParams();
  const buyer = buyersRequests.find((b) => b.id === parseInt(id));

  if (!buyer) {
    return <div>Buyer not found</div>;
  }

  return (
    <div className="buyer-details">
      <h1>Buyer Details</h1>
      <p><strong>Name:</strong> {buyer.name}</p>
      <p><strong>Product Needed:</strong> {buyer.product}</p>
      <p><strong>Price:</strong> {buyer.price}</p>
      <p><strong>Location:</strong> {buyer.location}</p>
      <p><strong>Details:</strong> {buyer.details}</p>
      <textarea placeholder="Message to the buyer"></textarea>
      <button>Send Message</button>
      <button>Contact</button>
      <button>Sell</button>
    </div>
  );
};

export default BuyerDetails;
