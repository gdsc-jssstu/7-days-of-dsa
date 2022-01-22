import React, { useEffect, useState } from "react";

function Problems({ problems = [] }) {
  const [solvedProblems, setSolvedProblems] = useState([]);
  let LOCAL_STORAGE_SLUG = "dsa-solved-problems";

  useEffect(() => {
    if (problems.length) {
      const _solvedProblems = localStorage.getItem(LOCAL_STORAGE_SLUG);
      if (_solvedProblems) {
        setSolvedProblems(JSON.parse(_solvedProblems));
      }
    }
  }, [problems, LOCAL_STORAGE_SLUG]);

  const handleToggleProblem = (e, name) => {
    // console.log(e.target.checked);
    let _solvedProblems;
    if (e.target.checked) {
      _solvedProblems = [...solvedProblems, name];
    } else {
      _solvedProblems = solvedProblems.filter((_name) => _name !== name);
    }

    setSolvedProblems(_solvedProblems);
    localStorage.setItem(LOCAL_STORAGE_SLUG, JSON.stringify(_solvedProblems));
  };

  return (
    <div className="my-5">
      <h5 className="mb-2 text-quicksand-medium">Problems</h5>
      <ul className="list-group">
        {problems.map((problem, index) => (
          <div key={problem.link} className="list-group-item d-flex">
            <div style={{ marginRight: "15px" }}>
              <input
                type="checkbox"
                onChange={(e) => handleToggleProblem(e, problem.name)}
                value={solvedProblems.includes(problem.name)}
                checked={solvedProblems.includes(problem.name)}
              />
            </div>
            <a
              className="text-nunito-regular text-decoration-none text-dark"
              href={problem.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>{index + 1}.</span> {problem.name}
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Problems;
