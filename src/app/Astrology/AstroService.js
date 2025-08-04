"use client";

import React, { useState } from "react";

import Image from "next/image";

import RemImg1 from "..//AstrologyImg/RemCard1.png";
import RemImg2 from "..//AstrologyImg/RemCard2.png";
import RemImg3 from "..//AstrologyImg/RemCard3.png";
import RemImg4 from "..//AstrologyImg/RemCard4.png";

import CardImage1 from "../AstrologyImg/CardImg1.jpg";
import CardImage2 from "../AstrologyImg/CardImg2.jpg";
import CardImage3 from "../AstrologyImg/CardImg3.jpg";
import CardImage4 from "../AstrologyImg/CardImg4.jpg";

import GuidanceImg from "..//AstrologyImg/GuidanceImg.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const AstroService = () => {
  const RemedyData = [
    {
      heading: "Astrology Consultation",
      content:
        "Get expert astrological guidance on career, marriage, business, health, relationships, finances, education, and every other important aspect of life to help you make confident, informed, and timely decisions for a more successful, balanced, and brighter future.",
      image: RemImg1.src,
    },
    {
      heading: "Vastu & Hawan Consultation",
      content:
        "Our Vastu and Hawan services harmonize energies, balance living and working spaces, remove negative influences, and promote spiritual well-being, inner peace, and lasting prosperity for individuals, families, and businesses.",
      image: RemImg2.src,
    },
    {
      heading: "Gemstone Consultation",
      content:
        "Get personalized gemstone recommendations based on your birth chart to enhance positive planetary influences, balance energies, and attract prosperity, health, and success in all areas of your life.",
      image: RemImg3.src,
    },
    {
      heading: "Spiritual Healing",
      content:
        "Experience deep spiritual healing through ancient practices that cleanse negative energies, restore inner balance, and connect you with your higher self for lasting peace and transformation.",
      image: RemImg4.src,
    },
  ];

  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        className="row"
        style={{ background: "#B9D8A9", paddingBottom: "80px" }}
      >
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <h2
            className="text-center mt-5 mb-3"
            style={{
              fontWeight: "400",
              fontSize: "2.2rem",
              lineHeight: "2.5rem",
              color: "#2C3D27",
              marginBottom: "20px",
            }}
          >
            Personalized Readings & Remedies
          </h2>
          <p
            className="text-center mb-5"
            style={{
              fontWeight: "400",
              fontSize: "1.2rem",
              lineHeight: "1.8rem",
              color: "#2C3D27",
              maxWidth: "800px",
              margin: "0 auto 60px auto",
            }}
          >
            Our astrology services help you align with cosmic energies and make
            confident, informed decisions through accurate, personalized
            guidance.
          </p>
          {/* Cards Grid */}
          <div className="row g-4">
            {RemedyData.map((item, index) => (
              <div className="col-md-6" key={index}>
                <div
                  style={{
                    backgroundColor: "#F3DDBB",
                    borderRadius: "20px",
                    padding: "0",
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image Section */}
                  <div
                    style={{
                      position: "relative",
                      height: "17rem",
                      padding: "2rem",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.heading}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Content Section */}
                  <div
                    style={{
                      padding: "30px",
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#2C3D27",
                        marginBottom: "15px",
                        lineHeight: "1.3",
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        color: "#2C3D27",
                        marginBottom: "0",
                        opacity: "0.8",
                      }}
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row mt-5 mb-3">
            <div className="col-md-6">
              <h2>
                Unlock the guidance of the stars with a personalized session
                with Ishwaar.
              </h2>
              <p>
                We offer a full spectrum of astrology services—blending Vedic
                and Western practices—to illuminate your life path with clarity
                and confidence. Whether you're facing important life decisions,
                seeking relationship insights, or exploring your soul’s purpose,
                we’re here to help you align with your true potential.
                <br /> Book your session today and begin a transformative
                journey with Ishwaar. Your stars are waiting to speak—let’s
                listen together.
              </p>
              <button
                className="btn btn-light rounded-pill"
                style={{ color: "#B9D8A9", background: "#2C3D27" }}
              >
                <b> Book Consultancy</b>
              </button>
            </div>
            <div className="col-md-6">
              <Image
                src={GuidanceImg}
                alt="Img"
                height={300}
                style={{ width: "100%", borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>

      <CardSlider />
    </div>
  );
};

const CardData = [
  {
    id: "1",
    img: CardImage1.src,
    tag: "Lunar Moon",
    text: "7 Best Product Ideas For Online Selling in 2025",
  },
  {
    id: "2",
    img: CardImage2.src,
    tag: "Havan & Puja",
    text: "7 Best Product Ideas For Online Selling in 2025",
  },
  {
    id: "3",
    img: CardImage3.src,
    tag: "Marriage",
    text: "7 Best Product Ideas For Online Selling in 2025",
  },
  {
    id: "4",
    img: CardImage4.src,
    tag: "Career",
    text: "7 Best Product Ideas For Online Selling in 2025",
  },
  {
    id: "5",
    img: CardImage2.src,
    tag: "Lunar Moon",
    text: "7 Best Product Ideas For Online Selling in 2025",
  },
  {
    id: "6",
    img: CardImage3.src,
    tag: "Lunar Moon",
    text: "7 Best Product Ideas For Online Selling in 2025",
  },
];

const CardSlider = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(CardData.length / itemsPerPage);

  const handleDotClick = (index) => {
    setPageIndex(index);
  };

  const getCurrentItems = () => {
    const start = pageIndex * itemsPerPage;
    return CardData.slice(start, start + itemsPerPage);
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div
        style={{
          backgroundColor: "#B8C8A1",
          padding: "80px 0",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          {/* Header Section */}
          <div className="row mb-5">
            <div className="col-md-6">
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "600",
                  color: "#2C3D27",
                  marginBottom: "0",
                }}
              >
                From the Astrologer's Desk
              </h2>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              <button
                className="btn"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #2C3D27",
                  color: "#2C3D27",
                  borderRadius: "25px",
                  padding: "10px 25px",
                  fontSize: "1rem",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                View All <FaArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="row">
            {getCurrentItems().map((item, i) => (
              <div className="col-md-3 mb-4" key={i}>
                <div
                  style={{
                    backgroundColor: "#2C3D27",
                    borderRadius: "15px",
                    padding: "0",
                    position: "relative",
                    boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image Section */}
                  <div style={{ position: "relative", height: "200px" }}>
                    <img
                      src={item.img}
                      alt="astrology topic"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "15px 15px 0 0",
                      }}
                    />
                    {/* Tag Badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-35px",
                        left: "15px",
                        borderRadius: "20px",
                        backgroundColor: "white",
                        color: "#2C3D27",
                        padding: "5px 15px",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                      }}
                    >
                      {item.tag}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    style={{
                      marginTop: "20px",
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flex: "1",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "1rem",
                        lineHeight: "1.4",
                        marginBottom: "20px",
                        fontWeight: "400",
                      }}
                    >
                      {item.text}
                    </p>

                    <button
                      className="btn"
                      style={{
                        color: "white",
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

          {/* Pagination Dots */}
          <div className="text-center mt-5">
            {[...Array(totalPages)].map((_, i) => (
              <span
                key={i}
                onClick={() => handleDotClick(i)}
                style={{
                  height: "12px",
                  width: "12px",
                  margin: "0 8px",
                  backgroundColor:
                    pageIndex === i ? "#2C3D27" : "rgba(255,255,255,0.6)",
                  borderRadius: "50%",
                  display: "inline-block",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstroService;
