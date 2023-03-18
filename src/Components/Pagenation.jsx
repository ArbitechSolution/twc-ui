import React from "react";

const Pagenation = () => {
  return (
    <div
      className="container-fluid mb-0"
      style={{
        backgroundColor: "rgba(50, 6, 91, 1)",
      }}
    >
      <nav aria-label="...">
        <ul className="pagination text-white">
          <li className="page-item">
            <a className="page-link bg-warning " href="#" tabIndex={-1}>
              <i class="fa fa-arrow-circle-o-left"></i>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item  ">
            <a className="page-link " href="#">
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item ">
            <a className="page-link " href="#">
              3
            </a>
          </li>
          <li className="page-item ">
            <a className="page-link bg-warning" href="#">
              <i class="fa fa-arrow-circle-o-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagenation;
