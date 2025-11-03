import React from "react";
import { ChevronDown } from "lucide-react";

const FAQAccordion = ({ faqs = [], accordionId = "faqAccordion" }) => {
  return (
    <div className="accordion custom-accordion" id={accordionId}>
      {faqs.map((item, index) => (
        <div
          className="accordion-item border-0 bg-white rounded-4 shadow-sm mb-3"
          key={index}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed rounded-4 fw-medium"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${accordionId}-collapse${index}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`${accordionId}-collapse${index}`}
            >
              {item.q}
              <ChevronDown className="ms-2" size={20} />
            </button>
          </h2>

          <div
            id={`${accordionId}-collapse${index}`}
            className={`accordion-collapse collapse ${
              index === 0 ? "show" : ""
            }`}
            data-bs-parent={`#${accordionId}`}
          >
            <div className="accordion-body text-muted">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
