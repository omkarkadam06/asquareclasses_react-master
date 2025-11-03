import React from "react";

const MethodologyCard = ({ Icon, title, description }) => {
  return (
    <div className="methodology-card mb-3 d-flex gap-3 align-items-start">
      <div className="methodology-icon-box">
        <Icon size={24} color="#003399" />
      </div>
      <div>
        <h6 className="text-white fw-bold fs-5 mb-2">{title}</h6>
        <span className="text-white op">{description}</span>
      </div>
    </div>
  );
};

export default MethodologyCard;
