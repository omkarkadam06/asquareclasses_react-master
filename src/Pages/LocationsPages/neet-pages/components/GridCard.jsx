import React from "react";

const GridCard = ({
  Icon,
  title,
  colorClass = "bg-gradient-blue",
  subtitle,
  extraText,
}) => {
  return (
    <div className="grid-card-modern h-100">
      <div className={`grid-card-top-line ${colorClass}`}></div>
      <div className="p-4 text-center">
        <div className={`grid-icon-circle ${colorClass} mb-4`}>
          <Icon size={40} color="white" />
        </div>

        <h6 className="fw-bold fs-5 mb-0">{title}</h6>

        {/* Optional subtitle and extra text */}
        {subtitle && <h6 className="fw-bold fs-5 mb-3 mt-2">{subtitle}</h6>}
        {extraText && (
          <p className="mb-0">
            <strong>{extraText}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default GridCard;
