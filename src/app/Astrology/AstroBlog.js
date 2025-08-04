"use client";

import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import BlogImg1 from "../AstrologyImg/BlogImg1.png";
import BlogImg2 from "../AstrologyImg/BlogImg2.png";
import BlogImg3 from "../AstrologyImg/BlogImg3.png";
import BlogImg4 from "../AstrologyImg/BlogImg4.png";
import BlogImg5 from "../AstrologyImg/BlogImg5.png";
import BlogImg6 from "../AstrologyImg/BlogImg6.png";
import BlogImg7 from "../AstrologyImg/BlogImg7.png";
import BlogImg8 from "../AstrologyImg/BlogImg8.png";
import BlogImg9 from "../AstrologyImg/BlogImg9.png";

const AstroBlog = () => {
  const blogData = [
    {
      label: "Lunar Moon",
      heading: "What Is Vedic Astrology? A Beginner’s Guide",
      image: BlogImg1.src,
    },
    {
      label: "Hawan & Puja",
      heading: "Your Birth Chart: A Cosmic Mirror of Your Soul",
      image: BlogImg2.src,
    },
    {
      label: "Career",
      heading: "Vedic vs. Western: What Sets Them Apart?",
      image: BlogImg3.src,
    },
    {
      label: "Lunar Moon",
      heading: "The 12 Houses: How They Shape Your Life",
      image: BlogImg4.src,
    },
    {
      label: "Hawan & Puja",
      heading: "Discover the Power of Your Nakshatra",
      image: BlogImg5.src,
    },
    {
      label: "Career",
      heading: "How the Planets Influence Your Karma",
      image: BlogImg6.src,
    },
    {
      label: "Lunar Moon",
      heading: "Dashas Explained: Timing Your Life with Astrology",
      image: BlogImg7.src,
    },
    {
      label: "Hawan & Puja",
      heading: "Rahu and Ketu: The Karmic Game Changers",
      image: BlogImg8.src,
    },
    {
      label: "Career",
      heading: "Can Astrology Help You Find Your Life Purpose?",
      image: BlogImg9.src,
    },
    {
      label: "Lunar Moon",
      heading: "What Is Vedic Astrology? A Beginner’s Guide",
      image: BlogImg3.src,
    },
    {
      label: "Hawan & Puja",
      heading: "Your Birth Chart: A Cosmic Mirror of Your Soul",
      image: BlogImg4.src,
    },
    {
      label: "Career",
      heading: "Vedic vs. Western: What Sets Them Apart?",
      image: BlogImg5.src,
    },
    {
      label: "Lunar Moon",
      heading: "The 12 Houses: How They Shape Your Life",
      image: BlogImg6.src,
    },
    {
      label: "Hawan & Puja",
      heading: "Discover the Power of Your Nakshatra",
      image: BlogImg7.src,
    },
    {
      label: "Career",
      heading: "How the Planets Influence Your Karma",
      image: BlogImg8.src,
    },
    {
      label: "Lunar Moon",
      heading: "Dashas Explained: Timing Your Life with Astrology",
      image: BlogImg9.src,
    },
    {
      label: "Hawan & Puja",
      heading: "Rahu and Ketu: The Karmic Game Changers",
      image: BlogImg1.src,
    },
    {
      label: "Career",
      heading: "Can Astrology Help You Find Your Life Purpose?",
      image: BlogImg2.src,
    },
  ];

  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const goToPage = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="text-center mt-5 mb-4">
            <h2 style={{ color: "#914F09", fontWeight: "600" }}>
              Astro Insights for Daily Life
            </h2>
            <p className="text-muted">
              Read my thoughts on transits, rituals, energy shifts, and how they
              affect you.
            </p>
            <div className="row justify-content-center mt-4">
              {currentBlogs.map((item, i) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div
                    style={{
                      backgroundColor: "#B9D8A9",
                      borderRadius: "15px",
                      boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    {/* Image */}
                    <div style={{ height: "200px", overflow: "hidden" }}>
                      <img
                        src={item.image}
                        alt="astrology topic"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "15px 15px 0 0",
                        }}
                      />
                    </div>

                    {/* Label */}
                    <div
                      style={{
                        marginTop: "10px",
                        marginLeft: "20px",
                        alignSelf: "flex-start",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        color: "#2C3D27",
                        padding: "5px 12px",
                        fontSize: "0.8rem",
                        fontWeight: "500",
                      }}
                    >
                      {item.label}
                    </div>

                    {/* Content */}
                    <div
                      style={{
                        padding: "20px",
                        paddingTop: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        flex: 1,
                      }}
                    >
                      <p
                        style={{
                          color: "#2C3D27",
                          fontSize: "1rem",
                          lineHeight: "1.5",
                          marginBottom: "20px",
                          fontWeight: "500",
                        }}
                      >
                        {item.heading}
                      </p>

                      <button
                        className="btn"
                        style={{
                          color: "#2C3D27",
                          backgroundColor: "transparent",
                          border: "none",
                          padding: "0",
                          fontSize: "0.9rem",
                          fontWeight: "500",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          alignSelf: "flex-start",
                        }}
                      >
                        Continue Reading <FaArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4 mb-5">
            <nav>
              <ul className="pagination mb-0" style={{ gap: "10px" }}>
                <li className={`page-item ${currentPage === 1 && "disabled"}`}>
                  <button
                    className="page-link"
                    onClick={() => goToPage(currentPage - 1)}
                  >
                    &lt;
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    key={i + 1}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => goToPage(i + 1)}
                      style={{
                        backgroundColor:
                          currentPage === i + 1 ? "#2C3D27" : "white",
                        color: currentPage === i + 1 ? "white" : "black",
                        borderRadius: "8px",
                        border: "none",
                        width: "38px",
                        height: "38px",
                        fontWeight: "500",
                      }}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages && "disabled"
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => goToPage(currentPage + 1)}
                  >
                    &gt;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default AstroBlog;
