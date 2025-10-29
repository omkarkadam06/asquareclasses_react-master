import React from "react";

const ProgramCard = ({ icon: Icon, title, desc }) => {
  return (
    <div
      className="rounded-4 border border-white border-opacity-25 p-4 transform-div"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(6px)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
      }
    >
      <div className="d-flex align-items-start gap-3">
        <div className="bg-warning p-3 rounded-3 d-flex align-items-center justify-content-center">
          <Icon size={24} className="text-primary-emphasis" />
        </div>
        <div>
          <h6 className="fw-bold text-warning fs-5 mb-2">{title}</h6>
          <p className="text-light mb-0">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
