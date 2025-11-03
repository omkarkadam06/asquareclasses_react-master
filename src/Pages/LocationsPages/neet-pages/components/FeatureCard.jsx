import React from "react";

const FeatureCard = ({ Icon, title, description, className = "" }) => {
  return (
    <div className={`feature-card-custom d-flex gap-3 align-items-start p-3 ${className}`}>
      <div className="feature-icon-circle d-flex align-items-center justify-content-center">
        <Icon size={28} color="white" />
      </div>
      <div>
        <h3 className="h5 fw-bold mb-2">{title}</h3>
        <p className="text-secondary mb-0">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
