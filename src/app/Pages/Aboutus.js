"use client";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";
import BgImageAuto from "../AutomativeImages/BgImageAuto.jpg";

import Company1 from "../AutomativeImages/CompanyWork.png";
import Company2 from "../AutomativeImages/CompanyWork2.png";
import Person from "../AutomativeImages/GetIntouch.png";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Aboutus = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        style={{
          backgroundImage: `url(${BgImageAuto.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
          marginBottom: "3.5rem",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="container-fluid">
          <div
            className="row align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-lg-1 d-none d-lg-block"></div>

            <div className="col-12 col-lg-6 text-white text-center text-lg-start px-4 px-lg-0">
              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  lineHeight: "1.3",
                  fontWeight: "600",
                  color: "#fff",
                }}
              >
                About Us
              </h1>
              <p
                className="lead"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "300",
                  fontSize: "clamp(1.1rem, 3vw, 1.75rem)",
                  lineHeight: "1.7",
                  color: "#fff",
                }}
              >
                Hey! I’m Ishwaar, a passionate automobile enthusiast turned
                full-time YouTuber. Whether it's the thrill of acceleration or
                the fine print on a spec sheet — I break it all down in my
                videos.
                <br />
                <strong>
                  <em>
                    “I’m on a mission to help you buy smarter, ride better, and
                    stay updated with the ever-evolving auto world.”
                  </em>
                </strong>
              </p>
            </div>

            <div className="col-lg-1 d-none d-lg-block"></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-2"></div>

        <div className="col-12 col-md-8">
          <h3
            className="text-center mb-4"
            style={{
              fontFamily: "'Clash Display', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 5vw, 50px)",
              lineHeight: "1.3",
              letterSpacing: "0",
            }}
          >
            Brands I’ve Worked With
          </h3>
          <div className="row mb-5">
            <div className="col-md-12">
              <Image
                src={Company1}
                className="m-2"
                alt="company 1"
                style={{ maxWidth: "100%", width: "100%", height: "6rem" }}
              />

              <div className="col-md-12">
                <Image
                  src={Company2}
                  className="m-2"
                  alt="company 2"
                  style={{ maxWidth: "100%", width: "100%", height: "6rem" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-2"></div>
      </div>

      <div
        style={{
          backgroundColor: "#252525",
          padding: "60px 0",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
              <Image
                src={Person}
                alt="Person"
                width={400}
                height={400}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Right Form */}
            <div className="col-12 col-md-6">
              <h2
                style={{
                  fontFamily: "'Clash Display', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(24px, 4vw, 36px)",
                  color: "#fff",
                  marginBottom: "30px",
                }}
              >
                Get in Touch or Send Your Ride for Review
              </h2>

              <form>
                <div className="row mb-3">
                  <div className="col">
                    <h6>Name</h6>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                      style={inputStyle}
                    />
                  </div>
                  <div className="col">
                    <h6>Email</h6>
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <h6>Message</h6>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="form-control"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-light w-100"
                  style={{
                    padding: "12px 0",
                    fontWeight: "600",
                    borderRadius: "8px",
                  }}
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <div
            className="bg-white p-4 rounded-3 shadow-sm"
            style={{
              maxWidth: "500px",
              margin: "0 auto",
              border: "1px solid black",
            }}
          >
            <h3 className="mb-4">Join Community</h3>
            <p className="mb-4">
              Be part of Ishwaars journey through raw, real reviews across
              social platforms. Join the Ishwear community and keep supporting
            </p>
            <div className="d-flex justify-content-center gap-4">
              <a href="#" className="text-danger" style={{ fontSize: "2rem" }}>
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-pink"
                style={{ fontSize: "2rem", color: "#E1306C" }}
              >
                <FaInstagram />
              </a>
              <a href="#" className="text-primary" style={{ fontSize: "2rem" }}>
                <FaFacebook />
              </a>
              <a href="#" className="text-dark" style={{ fontSize: "2rem" }}>
                <FaXTwitter />
              </a>
            </div>
            <p className="mt-3 mb-0 text-muted">
              Connect with us on social media
            </p>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
const inputStyle = {
  backgroundColor: "transparent",
  border: "1px solid #ccc",
  borderRadius: "8px",
  color: "#fff",
  padding: "12px",
  fontSize: "16px",
};

export default Aboutus;
