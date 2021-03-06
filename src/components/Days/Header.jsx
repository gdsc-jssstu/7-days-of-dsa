import moment from "moment";
import React from "react";

function Header({ day, date, topic }) {
  return (
    <div className="border-bottom pb-1 text-quicksand-medium">
      <h4 className="text-danger">
        {day}: {topic}
      </h4>
      <small>{moment(date).format("Do MMM YYYY")}</small>
      <br/>
    </div>
  );
}

export default Header;
