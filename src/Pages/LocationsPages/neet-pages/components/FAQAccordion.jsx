// import React from "react";
// import { ChevronDown } from "lucide-react";

// const FAQAccordion = ({ faqs = [], accordionId = "faqAccordion" }) => {
//   return (
//     <div className="accordion custom-accordion" id={accordionId}>
//       {faqs.map((item, index) => (
//         <div
//           className="accordion-item border-0 bg-white rounded-4 shadow-sm mb-3"
//           key={index}
//         >
//           <h2 className="accordion-header">
//             <button
//               className="accordion-button collapsed rounded-4 fw-medium"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target={`#${accordionId}-collapse${index}`}
//               aria-expanded={index === 0 ? "true" : "false"}
//               aria-controls={`${accordionId}-${index}`}
//             >
//               {item.q}
//               <ChevronDown className="ms-2" size={20} />
//             </button>
//           </h2>

//           <div
//             id={`${accordionId}-collapse${index}`}
//             className={`accordion-collapse collapse ${
//               index === 0 ? "show" : ""
//             }`}
//             data-bs-parent={`#${accordionId}`}
//           >
//             <div className="accordion-body text-muted">{item.a}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FAQAccordion;



import React, { useState } from "react";

const FAQAccordion = ({ faqs = [], accordionId = "faqAccordion" }) => {
  const [activeIndex, setActiveIndex] = useState(null); // all closed initially

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="custom-accordion" id={accordionId}>
      {faqs.map((item, index) => (
        <div
          className="accordion-item border-0 rounded-4 shadow-sm mb-3 faq-item"
          key={index}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button rounded-4 fw-medium d-flex justify-content-between align-items-center ${
                activeIndex === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-white">{item.q}</span>
              <span className="faq-icon text-white fs-4 fw-bold">
                {activeIndex === index ? "–" : "+"}
              </span>
            </button>
          </h2>

          <div
            id={`${accordionId}-collapse${index}`}
            className={`accordion-collapse collapse ${
              activeIndex === index ? "show" : ""
            }`}
          >
            <div className="accordion-body text-light">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
