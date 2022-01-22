import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import list from "../../data/list";

function Timeline() {
  let solvedProblems = localStorage.getItem("dsa-solved-problems");

  return (
    <div className="">
      {/* <h4 className="text-quicksand-medium">Timeline</h4> */}
      <div className="">
        {list.map((item) =>
          moment().isAfter(item.date) ? (
            (() => {
              let percentage = 0;
              if (solvedProblems) {
                let _solvedProblems = JSON.parse(solvedProblems);
                // console.log(_solvedProblems);
                let completed = 0;
                item.problems.forEach((_prob) => {
                  if (_solvedProblems.includes(_prob.name)) {
                    completed++;
                  }
                }, 0);
                let total = item.problems.length;
                percentage = Math.floor((completed / total) * 100);
                // console.log(item.topic + " :" + percentage);
              }

              return (
                <Link
                  key={item.slug}
                  to={`/${item.slug}`}
                  className="text-decoration-none"
                >
                  <div className="my-2 bg-dark text-light rounded-3 py-2 px-3">
                    <div className="d-flex align-self-start justify-content-between shadow">
                      <div className="text-nunito-regular">
                        <h5>{item.day}</h5>
                        <h6>{item.topic}</h6>
                      </div>
                      <div>
                        <p className="text-primary mb-0">
                          {item.problems.length} Problems
                        </p>
                        <p
                          style={{ fontSize: "0.8rem" }}
                          className="text-secondary"
                        >
                          {moment(item.date).format("Do MMM YYYY")}
                        </p>
                      </div>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${percentage}%`,
                        }}
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {percentage}%
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })()
          ) : (
            <div
              key={item.slug}
              className="my-2 bg-light rounded-3 py-2 px-3 shadow"
            >
              <div className="d-flex align-self-end justify-content-between">
                <div className="text-nunito-regular">
                  <h5>{item.day}</h5>
                  <h6>{item.topic}</h6>
                </div>
                <p style={{ fontSize: "0.8rem" }}>
                  Unlocks on <br /> {moment(item.date).format("Do MMM YYYY")}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Timeline;
