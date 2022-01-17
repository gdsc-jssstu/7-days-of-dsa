import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import list from "../../list";

function Timeline() {
  return (
    <div className="mt-5">
      <h4>Timeline</h4>
      <div className="border-top pt-2">
        {list.map((item) =>
          moment().isAfter(item.date) ? (
            <Link
              key={item.slug}
              to={`/${item.slug}`}
              className="text-decoration-none"
            >
              <div
                className="my-2 bg-dark text-light rounded-3 py-2 px-3
			 d-flex align-self-start justify-content-between shadow
			  "
              >
                <div>
                  <h5>{item.day}</h5>
                  <h6>{item.topic}</h6>
                </div>
                <div>
                  <p className="text-primary mb-0">
                    {item.problems.length} Problems
                  </p>
                  <small className="text-secondary">
                    {moment(item.date).format("Do MMM YYYY")}
                  </small>
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={item.slug}
              className="my-2 bg-light rounded-3 py-2 px-3 shadow"
            >
              <div className="d-flex align-self-end justify-content-between">
                <div>
                  <h5>{item.day}</h5>
                  <h6>{item.topic}</h6>
                </div>
                <small>
                  Unlocks on <br /> {moment(item.date).format("Do MMM YYYY")}
                </small>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Timeline;
