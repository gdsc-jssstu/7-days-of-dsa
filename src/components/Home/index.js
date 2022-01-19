import React from "react";
import Header from "./Header";
import Timeline from "./Timeline";
import Footer from "../../containers/Footer";

function Home() {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12">
            <p className="text-center">
              Google Developer Student Clubs, JSSSTU presnts to you an informative Data Structures and Algorithms Roadmap to start your DSA journey!<br/>
              Happy problem solving!
            </p>
            <hr className="mb-5"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-2 mx-md-auto px-4 px-md-5">
            <Header />
          </div>
          <div className="col-md-6 mx-2 mx-md-auto px-4 px-md-5">
            <Timeline />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
