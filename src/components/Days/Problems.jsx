import React from "react";

function Problems({ problems = [] }) {
  return (
    <div className="my-5">
      <h5 className="mb-2 text-quicksand-medium">Problems</h5>
      <ul className="list-group">
        {problems.map((problem, index) => (
          <a
            key={problem.link}
            className="list-group-item text-nunito-regular"
            href={problem.link}
          >
            <span>{index + 1}.</span> {problem.name}
          </a>
        ))}
      </ul>
    </div>
  );
}

export default Problems;