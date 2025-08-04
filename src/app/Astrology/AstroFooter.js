"use client";
import React from "react";
import IshwarLogo from "../AstrologyImg/IshwarLogo.png";
import Image from "next/image";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const AstroFooter = () => {
  return (
    <footer
      style={{ background: "#2C3D27", color: "white", padding: "3rem 0" }}
    >
      <div className="container">
        <div className="row text-white g-4">
          {/* ISHWAAR + description */}
          <div className="col-md-4">
            <div className="d-flex align-items-center mb-3">
              {/* Logo/Icon */}
              <div>
                <Image
                  src={IshwarLogo}
                  alt="Ishwaar Logo"
                  style={{ width: "4rem" }}
                />
              </div>
              <h3
                style={{
                  fontWeight: "bold",
                  marginBottom: "0",
                  fontSize: "1.8rem",
                }}
              >
                Ishwaar
              </h3>
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: "1.6",
                color: "#B8C8A1",
                marginBottom: "0",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="col-md-2">
            <div className="d-flex flex-column">
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginBottom: "0.75rem",
                  fontSize: "0.95rem",
                }}
              >
                Service
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginBottom: "0.75rem",
                  fontSize: "0.95rem",
                }}
              >
                Videos
              </a>
              <a
                href="#"
                style={{
                  color: "white",
                  textDecoration: "none",
                  marginBottom: "0.75rem",
                  fontSize: "0.95rem",
                }}
              >
                Blogs
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <div className="mb-3">
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "0.95rem",
                  marginBottom: "0.5rem",
                  color: "white",
                }}
              >
                About us
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  marginBottom: "1.5rem",
                  color: "#B8C8A1",
                }}
              >
                Support: +91 973 820 2032
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  marginBottom: "0",
                  color: "#B8C8A1",
                }}
              >
                Email: support.Ishwaar@gmail.com
              </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-2 d-flex justify-content-md-end justify-content-start align-items-start">
            <div className="d-flex gap-3">
              <a href="#" style={{ textDecoration: "none" }}>
                <div
                  className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "35px", height: "35px" }}
                >
                  <FaFacebook size={18} color="#2C3D27" />
                </div>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <div
                  className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "35px", height: "35px" }}
                >
                  <FaLinkedin size={18} color="#2C3D27" />
                </div>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <div
                  className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "35px", height: "35px" }}
                >
                  <FaInstagram size={18} color="#2C3D27" />
                </div>
              </a>
              <a href="#" style={{ textDecoration: "none" }}>
                <div
                  className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "35px", height: "35px" }}
                >
                  <FaXTwitter size={18} color="#2C3D27" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr
          style={{
            borderColor: "#B8C8A1",
            opacity: 0.3,
            marginTop: "2.5rem",
            marginBottom: "1.5rem",
          }}
        />

        {/* Footer bottom text */}
        <div
          className="text-center"
          style={{
            fontSize: "0.9rem",
            color: "#B8C8A1",
          }}
        >
          2024 © Ishwaar.com All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default AstroFooter;
