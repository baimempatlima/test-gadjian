import React from "react";
import gadjian from "./gadjian.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample"></span>
          </button>
          <a className="navbar-brand me-auto" href="/#">
            <img src={gadjian} alt="" width="90" height="40" class="d-inline-block align-text-top" />
          </a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <div className="ms-auto">
              <h6 className="text-muted me-2" style={{ display: "inline" }}>
                Hallo,
              </h6>
              <h6 className="text-black-50 me-2" style={{ marginLeft: "1px", display: "inline" }}>
                Gadjian User
              </h6>
              <a className="navbar-brand" href="/#">
                <img src={gadjian} alt="photos" width="40" height="40" style={{ marginLeft: "8px", display: "inline" }} className="border border-secondary rounded-circle" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start sidebar-nav" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-body p-0">
          <nav className="navbar-light">
            <ul className="navbar-nav text-start py-2 small text-muted fw-bold">
              <li>
                <a href="/#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="fa-solid fa-house-chimney"></i>
                  </span>
                  <span className="ms-2">Beranda</span>
                </a>
              </li>
              <li>
                <a href="/#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="fa-solid fa-users"></i>
                  </span>
                  <span className="ms-1">Personal List</span>
                </a>
              </li>
              <li>
                <a href="/#" className="nav-link px-3">
                  <span className="me-2">
                    <i className="fa-solid fa-calendar-days"></i>
                  </span>
                  <span className="ms-2">Daily Attendance</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
