import React from "react";
import ".//WhatIsEta.css";
function Commission() {
  return (
    <>
      <section
        className="container-fluid section py-5"
        style={{
          backgroundColor: "#32065B",
          backgroundImage: 'url("images/wave-01.svg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1
            className="display-4 "
            style={{
              fontFamily: "Poppins",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "64px",
              lineHeight: "96px",
              color: "#FFAE02",
            }}
          >
            Commission
          </h1>
        </div>
        <div className="container">
          <center>
            <div className="col-md-12">
              {" "}
              <div className="col-md-10">
                <div className="row">
                  <div className="col-lg-5 px-4 mr-lg-5 mb-4 left-side">
                    <h2>
                      Round No:<span className="text-white">03</span>
                    </h2>
                    <h2>
                      Round No:<span className="text-white">03</span>
                    </h2>
                    {/* Table */}
                    <table class="table table-borderless text-white text-center">
                      <thead>
                        <tr style={{ backgroundColor: "#953659" }}>
                          <th scope="col">Price</th>
                          <th scope="col">Order</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>$1.05</td>
                          <td>13,500</td>
                        </tr>
                        <tr>
                          <td>$1.05</td>
                          <td>13,500</td>
                        </tr>
                        <tr>
                          <td>$1.05</td>
                          <td>13,500</td>
                        </tr>
                        <tr className="bg-warning">
                          <td>$1.05</td>
                          <td>13,500</td>
                        </tr>
                        <tr>
                          <td>$1.05</td>
                          <td>13,500</td>
                        </tr>
                        <tr>
                          <td>$1.05</td>
                          <td>13,500</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-6 px-4 ml-lg-4 text-white">
                    {/* Sec1 */}
                    <div className="col-md-12 left-side py-4 mb-5">
                      {" "}
                      <strong>
                        <p
                          className="col-12 text-left pr-1 py-3 "
                          style={{
                            borderRadius: "10px",
                            backgroundColor: "#953659",
                          }}
                        >
                          <i> USDT Balance: </i>{" "}
                          <span style={{ fontWeight: 400, marginLeft: "20px" }}>
                            {" "}
                            $2800.00
                          </span>
                        </p>
                      </strong>
                      {/* Button */}
                      <div class="d-grid gap-2">
                        <button
                          class="btn btn-lg"
                          type="button"
                          style={{
                            backgroundColor: "#FFAE02",
                            color: "#FFFFFF",
                          }}
                        >
                          Withdraw USDT
                        </button>
                      </div>
                    </div>
                    {/* sec2 */}
                    <div className="col-md-12 left-side py-4 ">
                      {" "}
                      <strong>
                        <p
                          className="col-12 text-left pr-1 py-3 "
                          style={{
                            borderRadius: "10px",
                            backgroundColor: "#953659",
                          }}
                        >
                          <i> USDACE Balance: </i>{" "}
                          <span style={{ fontWeight: 400, marginLeft: "20px" }}>
                            {" "}
                            $2800.00
                          </span>
                        </p>
                      </strong>
                      {/* Button */}
                      <div class="d-grid gap-2">
                        <button
                          class="btn btn-lg"
                          type="button"
                          style={{
                            backgroundColor: "#FFAE02",
                            color: "#FFFFFF",
                          }}
                        >
                          Withdraw USDACE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </center>
        </div>
      </section>
    </>
  );
}

export default Commission;
