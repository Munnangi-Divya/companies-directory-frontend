import React from 'react';

const CompanyCard = ({ company }) => {
  return (
    <div className="company-card">
      <h3>{company.name}</h3>
      <p><strong>Location:</strong> {company.location}</p>
      <p><strong>Industry:</strong> {company.industry}</p>
    </div>
  );
};

export default CompanyCard;
