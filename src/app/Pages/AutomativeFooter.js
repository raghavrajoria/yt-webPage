"use client";
import React, { useEffect, useRef, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Image from "next/image";
import IshwarLogo from "../AutomativeImages/IshwarLogo.png";

import FacebookIconFooter from "../AutomativeImages/FacebookIcon.png";
import linkdinIconFooter from "../AutomativeImages/linkdinIcon.png";
import InstagramIconFooter from "../AutomativeImages/InstagramIcon.png";
import XiconFooter from "../AutomativeImages/Xicon.png";

const AutomativeFooter = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <footer
      style={{
        background: "#252525",
        color: "white",
        padding: "2rem 0",
        overflowX: "hidden",
      }}
    >
      <Row className="d-flex justify-content-center">
        <Col md={10}>
          <div className="row " style={{ justifyContent: "space-between" }}>
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center gap-2 mb-3 mb-md-0">
              <Image
                src={IshwarLogo}
                alt="Ishwaar Logo"
                style={{ height: "40px" }}
              />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "2rem",
                  fontFamily: "Montserrat",
                }}
              >
                Ishwaar
              </span>
            </div>

            <nav className="col-12 col-md-4 d-flex justify-content-center gap-4 mb-3 mb-md-0">
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                BLOGS
              </a>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                NEWS
              </a>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                REVIEWS
              </a>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                ABOUT US
              </a>
            </nav>
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-3">
              {[
                FacebookIconFooter,
                linkdinIconFooter,
                InstagramIconFooter,
                XiconFooter,
              ].map((icon, i) => (
                <a key={i} href="#" style={{ color: "white" }}>
                  <Image
                    src={icon}
                    alt={`icon-${i}`}
                    style={{
                      height: "32px",
                      width: "32px",
                      borderRadius: "50%",
                      background: "white",
                      padding: "4px",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <hr style={{ borderColor: "white", opacity: 0.5, marginTop: "1rem" }} />

      <div
        className="text-center"
        style={{ fontSize: "1.1rem", fontWeight: "400", marginTop: "1rem" }}
      >
        2024 © Ishwaar.com All rights reserved.
      </div>
    </footer>
  );
};

export default AutomativeFooter;
