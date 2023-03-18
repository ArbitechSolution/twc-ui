import React from "react";

function NavBar() {
  return (
    <>
      <nav
        className="navbar container-fluid navbar-expand-md navbar-dark bg-white"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src="images/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler bg-warning text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="nav col-12 m-auto col-md-auto mb-1 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 ">
                  What is ETA
                </a>
              </li>

              <li>
                <a href="#" className="nav-link px-2 ">
                  Comission
                </a>
              </li>

              <li>
                <a href="#" className="nav-link px-2 ">
                  ETA Portfolio
                </a>
              </li>

              <li>
                <a href="#" className="nav-link px-2 ">
                  Telegram
                </a>
              </li>

              <li>
                <a href="#" className="nav-link px-2 ">
                  Discord
                </a>
              </li>

              <li>
                <a href="#" className="nav-link px-2 ">
                  Faq
                </a>
              </li>
            </ul>
            <form>
              <button
                type="button"
                className="btn btn-nav btn-lg"
                style={{
                  backgroundColor: "#5C3F93",
                  color: "#FFFFFF",
                }}
              >
                Connect Wallet
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
