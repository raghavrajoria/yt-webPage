import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Row, Form, Container } from "react-bootstrap";

const Seoauditt = () => {
  const url = sessionStorage.getItem("selectedURLLabel");
  const [URL, setURL] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleChange = (event) => {
    setURL(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowResults(true);
  };

  const handleGoBack = () => {
    setShowResults(false);
    setURL("");
  };

  return (
    <div
      className=" mt-4"
      style={{
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {!showResults ? (
        <Container
          fluid
          className="px-4 py-5"
          style={{
            background:
              "linear-gradient(to right, #AFDDFF 0%, #C5E7FF 30%, #DAF0FF 60%, #EDF8FF 85%, #FFFFFF 100%)",
          }}
        >
          <div className="text-center mb-5">
            <h1
              className="fw-bold"
              style={{ fontSize: "4rem", color: "#090040" }}
            >
              SEO Audit Tool
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#090040" }}>
              Try the free version of SEOBIX SEO Auditor. Get a glimpse <br />
              into the power of our premium tool.
            </p>
          </div>

          <Form onSubmit={handleSubmit} className="mb-5">
            <Row className="g-2 justify-content-center">
              <Col md={7}>
                <Form.Group controlId="formURLInput">
                  <Form.Label className="visually-hidden">
                    Website URL
                  </Form.Label>
                  <Form.Control
                    value={URL}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter domain (e.g. seobix.com)"
                    className="shadow-sm px-4"
                    style={{
                      color: "#090040",
                      borderRadius: 0,
                      fontSize: "1.2rem",
                      height: "48px",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Button
                  type="submit"
                  className="w-100"
                  style={{
                    background: "#F80",
                    color: "#fff",
                    border: "none",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    borderRadius: 0,
                    height: "48px",
                  }}
                >
                  Inspect
                </Button>
              </Col>
            </Row>
          </Form>

          <Row>
            <Col md={6}>
              <h3
                className="fw-semibold mb-3"
                style={{ fontSize: "2.5rem", color: "#090040" }}
              >
                The most powerful backlink checker
              </h3>
              <p style={{ fontSize: "1.2rem", color: "#090040" }}>
                SeoBix's Backlinks Checker
                <span style={{ color: "#F80" }}>tracks and monitors</span> every
                backlink, giving you precise insights that help you grow faster.
              </p>
              <p
                className="mb-4"
                style={{ fontSize: "1.5rem", color: "#090040" }}
              >
                Start Your SEO Journey with SeoBix!
              </p>
              <a
                href="https://dashboard.seobix.com/Register"
                className="btn btn-warning me-3"
              >
                Sign Up with 3 month free trial
              </a>
              <span style={{ color: "#F80", fontWeight: 400 }}>
                <b>OR</b>
              </span>
              <a
                href="https://dashboard.seobix.com/Register"
                className="btn btn-outline-warning ms-3"
              >
                Explore More Tools
              </a>
            </Col>

            <Col md={6}>
              <Row>
                <Col xs={6} className="text-center mb-4">
                  <div
                    style={{
                      fontSize: "4rem",
                      fontWeight: 600,
                      color: "#090040",
                    }}
                  >
                    1M+
                  </div>
                  <div style={{ fontSize: "1.2rem", color: "#090040" }}>
                    Pages in index
                  </div>
                </Col>
                <Col xs={6} className="text-center mb-4">
                  <div
                    style={{
                      fontSize: "4rem",
                      fontWeight: 600,
                      color: "#090040",
                    }}
                  >
                    60K+
                  </div>
                  <div style={{ fontSize: "1.2rem", color: "#090040" }}>
                    Internal backlinks
                  </div>
                </Col>
                <Col xs={6} className="text-center">
                  <div
                    style={{
                      fontSize: "4rem",
                      fontWeight: 600,
                      color: "#090040",
                    }}
                  >
                    100+
                  </div>
                  <div style={{ fontSize: "1.2rem", color: "#090040" }}>
                    Domains
                  </div>
                </Col>
                <Col xs={6} className="text-center">
                  <div
                    style={{
                      fontSize: "4rem",
                      fontWeight: 600,
                      color: "#090040",
                    }}
                  >
                    200K+
                  </div>
                  <div style={{ fontSize: "1.2rem", color: "#090040" }}>
                    External backlinks
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="m-3">
          <div className="row">
            <div className="col justify-content-end d-flex">
              <Button
                size="sm"
                className="btn btn-primary"
                onClick={handleGoBack}
              >
                Go Back and Analyze
              </Button>
            </div>
          </div>
          {/* <Seoanalyzeres url={URL} /> */}
        </div>
      )}
    </div>
  );
};

export default Seoauditt;
