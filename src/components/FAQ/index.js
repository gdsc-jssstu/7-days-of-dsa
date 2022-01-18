import React from "react";
import faq from "../../data/faq";

function FAQ() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-2 mx-md-auto bg-light rounded-3 p-4">
          <h3 className="text-center mb-4 text-quicksand-medium">
            Frequently Asked Questions!
          </h3>
          <div className="accordion" id="accordionExample">
            {faq.map((item, index) => (
              <div class="accordion-item" key={item.question + index}>
                <h2
                  className="accordion-header"
                  id={`accordion-heading-${index + 1}`}
                >
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse-${index + 1}`}
                    aria-expanded="true"
                    aria-controls={`collapse-${index + 1}`}
                  >
                    {index + 1}. {item.question}
                  </button>
                </h2>
                <div
                  id={`collapse-${index + 1}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`accordion-heading-${index + 1}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
