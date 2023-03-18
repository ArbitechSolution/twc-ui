import React from "react";

function Sec1() {
  return (
    <>
      <section
        className="container-fluid py-5"
        style={{
          backgroundColor: "#32065B",
        }}
      >
        <div className="container-fluid text-white d-flex align-items-center h-100">
          <div className="col-md-12 d-flex flex-column align-items-center ">
            <div className="col-md-8 my-2 pl-md-5 note d-flex flex-wrap justify-content-start align-items-center">
              <span className="mr-4">
                <strong>Wallet Address :</strong>
              </span>{" "}
              <span>trd456sad123sad4566d123sad123</span>
            </div>
            <div className="col-md-8 my-2 pl-md-5 note d-flex flex-wrap justify-content-start align-items-center">
              {" "}
              <span className="mr-4">
                <strong>Referral Link :</strong>
              </span>{" "}
              <span>www.eta.app/trd456sad123sad4566d123sad123</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sec1;
