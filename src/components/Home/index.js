import React from "react";
import Header from "./Header";
import Timeline from "./Timeline";
import Footer from "../../containers/Footer";

function Home() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-2 mx-md-auto">
            <Header />
            <Timeline />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
