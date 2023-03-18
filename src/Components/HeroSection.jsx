import React from "react";

function HeroSection() {
  return (
    <>
      <header className="hero">
        <div
          className="p-5 text-center bg-image row"
          style={{
            backgroundImage: 'url("images/herobg.png")',
            height: "640px",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="mask col-md-5">
            <div className="d-flex justify-content-left align-items-center h-100">
              <div className="text-white text-left">
                <h1 className="mb-3 ml-md-5 display-sm-3">
                  The Best Trade Cryptocurrency Assets
                </h1>

                <button
                  className="btn btn-lg ml-md-5 "
                  style={{
                    backgroundColor: "#FFAE02",
                    color: "#FFFFFF",
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7"></div>
        </div>
      </header>
    </>
  );
}

export default HeroSection;
