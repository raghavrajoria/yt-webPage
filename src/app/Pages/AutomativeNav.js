import React, { useEffect, useRef, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Image from "next/image";

import IshwarLogo from "../AutomativeImages/IshwarLogo.png";

export const AutomativeNav = ({ setActiveSection }) => {
  return (
    <div className="container-fluid px-0">
      <div className="row g-0" style={{ backgroundColor: "#252525" }}>
        <div className="col-md-1 d-none d-lg-block"></div>

        <div className="col-12 col-lg-10">
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#252525" }}
          >
            <div className="container-fluid">
              <Image
                src={IshwarLogo}
                alt="Ishwaar Logo"
                style={{ width: "4rem" }}
              />
              &nbsp;
              <a style={{ color: "#fff", fontSize: "2rem" }}>Ishwaar</a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav align-items-center gap-3">
                  <li className="nav-item">
                    <button
                      onClick={() => setActiveSection("blogs")}
                      className="nav-link text-white btn btn-link p-0"
                    >
                      BLOGS
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => setActiveSection("news")}
                      className="nav-link text-white btn btn-link p-0"
                    >
                      NEWS
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => setActiveSection("reviews")}
                      className="nav-link text-white btn btn-link p-0"
                    >
                      REVIEWS
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => setActiveSection("about")}
                      className="nav-link text-white btn btn-link p-0"
                    >
                      ABOUT US
                    </button>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-end">
                <ul className="navbar-nav">
                  <li className="nav-item ms-2">
                    <button
                      className="btn btn-light rounded-pill"
                      style={{ color: "#252525" }}
                    >
                      SUBSCRIBE
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div
          className="col-md-1 d-none d-md-block"
          style={{ backgroundColor: "#252525" }}
        ></div>
      </div>
    </div>
  );
};
