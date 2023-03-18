import React from "react";

function WithDraw() {
  return (
    <>
      <div
        className="contanier-fluid py-4"
        style={{
          backgroundColor: "#32065B",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="conatiner-fluid">
          <div className="container text-white">
            <center>
              {" "}
              <div className="col-md-12">
                <div className="col-md-10">
                  <div className="container ">
                    <div className="row">
                      <div className="col-md-6"></div>
                      <div className="col-md-6">
                        <strong>
                          <p
                            className="col-12 py-3 "
                            style={{
                              borderRadius: "10px",
                              backgroundColor: "#953659",
                            }}
                          >
                            <i> Total Commission Earned: </i>{" "}
                            <span
                              style={{ fontWeight: 400, marginLeft: "20px" }}
                            >
                              {" "}
                              $ 3,1000
                            </span>
                          </p>
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div
                    className="container tableContainer"
                    style={{
                      backgroundColor: "rgba(172, 0, 165, 0.42)",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="col-md-12 py-4 px-0">
                      <div className="container">
                        <table class="table table-borderless text-white text-center">
                          <thead>
                            <tr style={{ backgroundColor: "#953659" }}>
                              <th scope="col">No</th>
                              <th scope="col">TXID</th>
                              <th scope="col">USDT Earned</th>
                              <th scope="col">USDACE Earned</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>546145dasdsa</td>
                              <td>$200.00</td>
                              <td>$800.00</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>546145dasdsa</td>
                              <td>$200.00</td>
                              <td>$800.00</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>546145dasdsa</td>
                              <td>$200.00</td>
                              <td>$800.00</td>
                            </tr>
                            <tr className="bg-warning">
                              <td>4</td>
                              <td>546145dasdsa</td>
                              <td>$200.00</td>
                              <td>$800.00</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>546145dasdsa</td>
                              <td>$200.00</td>
                              <td>$800.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="container tableContainer"
                    style={{
                      backgroundColor: "rgba(172, 0, 165, 0.42)",
                      borderRadius: "10px",
                    }}
                  >
                    <div className="col-md-12 mt-4 py-4 px-0">
                      <div className="container">
                        <div>
                          <h1
                            className="display-4 "
                            style={{
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: 700,
                              fontSize: "40px",
                              lineHeight: "40px",
                              color: "#FFAE02",
                            }}
                          >
                            Withdrawal History
                          </h1>
                        </div>
                        <table class="table table-borderless text-white text-center">
                          <thead>
                            <tr style={{ backgroundColor: "#953659" }}>
                              <th scope="col">No</th>
                              <th scope="col">TXID</th>
                              <th scope="col">USDT Earned</th>
                              <th scope="col">USDACE Earned</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>546145dasdsa</td>
                              <td>$200.00</td>
                              <td>$800.00</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>546145dasdsa</td>
                              <td>$200.00</td>
                              <td>$800.00</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>546145dasdsa</td>
                              <td>$200.00</td>
                              <td>$800.00</td>
                            </tr>
                            <tr className="bg-warning">
                              <td>4</td>
                              <td>546145dasdsa</td>
                              <td>$200.00</td>
                              <td>$800.00</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>546145dasdsa</td>
                              <td>$200.00</td>
                              <td>$800.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}

export default WithDraw;
