import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../containers/NotFound";
import list from "../../data/list";
import Header from "./Header";
import Problems from "./Problems";
import Resources from "./Resources";

function Days() {
  const { slug } = useParams();
  const item = list.find((_item) => _item.slug === slug);

  if (!item) {
    return <NotFound msg="OOPs, You just hit a wrong route..." />;
  }

  if (!moment().isAfter(item.date)) {
    return (
      <NotFound
        msg={`Not Available Today, Unlocks on ${moment(item.date).format(
          "Do MMM YYYY"
        )}`}
      />
    );
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-7 mx-2 mx-md-auto p-5 bg-light rounded-3">
          <Header day={item.day} topic={item.topic} date={item.date} />
          <div className="my-2">
            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
          </div>
          <Resources resources={item.resources} />
          <Problems problems={item.problems} />
        </div>
      </div>
    </div>
  );
}

export default Days;
