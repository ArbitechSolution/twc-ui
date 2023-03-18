import React from "react";

function Footer() {
  return (
    <>
      <div className="">
        <footer
          className="container-fluid text-center py-md-4 d-flex flex-column flex-wrap align-items-center justify-content-center"
          style={{
            backgroundColor: "#32065B",
          }}
        >
          <div className="footer_logo my-4">
            <img src="images/Footer_logo.svg" alt="" />
          </div>
          <div class="my-4 text-white ">
            <a
              type="button"
              class="btn btn-floating bg-warning rounded-circle border-white btn-sm m-1"
            >
              <i class="fa fa-instagram "></i>
            </a>

            <a
              type="button"
              class="btn btn-floating rounded-circle border-white btn-sm m-1"
            >
              <i class="fa fa-dribbble"></i>
            </a>

            <a
              type="button"
              class="btn btn-floating rounded-circle border-white btn-sm m-1"
            >
              <i class="fa fa-twitter"></i>
            </a>

            <a
              type="button"
              class="btn btn-floating rounded-circle border-white btn-sm m-1"
            >
              <i class="fa fa-google"></i>
            </a>
          </div>
          <div
            className="text-center  p-3"
            style={{
              color: "#FFFFFF4F",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            <span>© 2020 Copyright: All Rights Reserved Asad Saeed</span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
