import React from "react";

const SubjectCard = ({ title, desc }) => {
  return (
    <div
      className="p-4 rounded-4 mb-3 transform-div"
      style={{
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(5px)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.4)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.3)")
      }
    >
      <strong className="text-primary-emphasis fs-5">{title}:</strong>
      <p className="mt-2 mb-0">{desc}</p>
    </div>
  );
};

export default SubjectCard;
