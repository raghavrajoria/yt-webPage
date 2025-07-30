"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import IshwarLogo from "../AstrologyImg/IshwarLogo.png";
import Chakra from "../AstrologyImg/Chakra.png";
import Person1 from "../AstrologyImg/PersonImg1.png";

import PodcastImg1 from "../AstrologyImg/SeenSlider1.png";
import PodcastImg2 from "../AstrologyImg/SeenSlider2.png";
import PodcastImg3 from "../AstrologyImg/SeenSlider3.png";

import CardImage1 from "../AstrologyImg/CardImg1.jpg";
import CardImage2 from "../AstrologyImg/CardImg2.jpg";
import CardImage3 from "../AstrologyImg/CardImg3.jpg";
import CardImage4 from "../AstrologyImg/CardImg4.jpg";

import SideImageTop from "../AstrologyImg/sideImageTopRight.png";
import SideImageBottom from "../AstrologyImg/sideImageBottomLeft.png";

import Person2 from "../AstrologyImg/PrPerson.png";
import Person3 from "../AstrologyImg/JourneyPerson.png";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Astrology = () => {
  return (
    <div>
      <AstrologyNav />
      <HelpHeal />
      <SeenDiv />
      <Remedies />
      <TestimonialSlider />
      <Journey />
      <CardSlider />
      <Footer />
    </div>
  );
};

export const AstrologyNav = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      <div className="container-fluid px-0">
        <div className="row g-0" style={{ backgroundColor: "#2C3D27" }}>
          <div className="col-md-1 d-none d-lg-block"></div>

          <div className="col-12 col-lg-10">
            <nav
              className="navbar navbar-expand-lg navbar-dark"
              style={{ backgroundColor: "#2C3D27" }}
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
                        Service
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => setActiveSection("news")}
                        className="nav-link text-white btn btn-link p-0"
                      >
                        Videos
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => setActiveSection("reviews")}
                        className="nav-link text-white btn btn-link p-0"
                      >
                        Blogs
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => setActiveSection("about")}
                        className="nav-link text-white btn btn-link p-0"
                      >
                        About Us
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-end">
                  <ul className="navbar-nav">
                    <li className="nav-item ms-2">
                      <button
                        className="btn btn-light rounded-pill"
                        style={{ color: "#2C3D27", background: "#B9D8A9" }}
                      >
                        <b> Book Consultancy</b>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div
            className="col-md-1 d-none d-md-block"
            style={{ backgroundColor: "#2C3D27" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export const HelpHeal = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row" style={{ backgroundColor: "black" }}>
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <div
              className="col-md-6"
              style={{
                marginTop: "10rem",
              }}
            >
              <h1
                style={{
                  fontSize: "2.2rem",
                  fontWeight: "700",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "#2C3D27",
                }}
              >
                Helping You Heal Through <br /> the Language of the Universe
              </h1>
              <p
                className="mt-3"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  color: "#2C3D27",
                  lineHeight: "1.9rem",
                }}
              >
                I’m Ishwaar, a YouTube astrologer trusted by thousands. My
                readings blend ancient wisdom with modern clarity, helping you
                navigate love, career, health, and life’s turning points.
              </p>
              <button
                className="btn btn-light rounded-pill mt-5 "
                style={{ color: "white", background: "#2C3D27" }}
              >
                <b> Book Consultancy</b>
              </button>
            </div>
            <div
              className="col-md-6"
              style={{
                backgroundImage: `url(${Chakra.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                zIndex: "2",
              }}
            >
              <Image
                style={{
                  marginLeft: "4.5rem",
                  marginTop: "40px",
                  height: "595px",
                  width: "400px",
                }}
                src={Person1}
                alt="person-img"
              />
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export const SeenDiv = () => {
  const [podcast, setPodcast] = useState();
  const podcastRef = useRef(null);

  useEffect(() => {
    setPodcast([
      {
        img: PodcastImg1.src,
        category: "Podcast",
        guest: "Neil D'Silva",
      },
      {
        img: PodcastImg2.src,
        category: "Podcast",
        guest: "Glenn McGrath",
      },
      {
        img: PodcastImg3.src,
        category: "Podcast",
        guest: "Sri Rameshwar Swami",
      },
      {
        img: PodcastImg1.src,
        category: "Podcast",
        guest: "Neil D'Silva",
      },
    ]);
  }, []);
  const scrollByCard = (ref, direction) => {
    if (!ref.current) return;
    const card = ref.current.querySelector("div");
    if (!card) return;
    const cardWidth = card.offsetWidth + 40;
    ref.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };
  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "#F3DDBB" }}
      >
        <div className="row">
          <div className="col-md-1 d-none d-md-block"></div>

          <div className="col-md-10">
            {/* Header Row */}
            <div className="row mt-5">
              <div className="col-12 d-flex align-items-center justify-content-between flex-wrap gap-2">
                <h3
                  className="m-0"
                  style={{
                    color: "#B56F01",
                    fontSize: "2rem",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  Seen by Millions, Trusted by Hearts
                </h3>

                {/* Arrows */}
                <div className="d-flex">
                  <button
                    className="btn rounded-pill"
                    style={{ color: "#B56F01", borderColor: "#B56F01" }}
                  >
                    View All <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>

            {/* Slider Row */}

            <div className="col-12">
              <button
                onClick={() => scrollByCard(podcastRef, -1)}
                className="btn rounded-circle me-2 align-item-center"
                style={{ borderColor: "#fff" }}
              >
                <FaArrowLeft style={{ color: "#fff" }} />
              </button>
              <SeenSlider
                title="podcast"
                images={podcast}
                containerRef={podcastRef}
              />
              <button
                onClick={() => scrollByCard(podcastRef, 1)}
                className="btn rounded-circle"
                style={{ borderColor: "#fff" }}
              >
                <FaArrowRight style={{ color: "#fff" }} />
              </button>
            </div>
          </div>

          <div className="col-md-1 d-none d-md-block"></div>
        </div>
      </div>
    </>
  );
};

function SeenSlider({ images, containerRef }) {
  return (
    <div className="mt-4">
      <div
        className="d-flex"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          gap: "40px",
        }}
        ref={containerRef}
      >
        {(images ?? []).map((item, index) => (
          <div
            key={index}
            style={{ flex: "0 0 auto", width: "20rem" }}
            className="text-start"
          >
            <img
              src={item.img}
              className="w-100 rounded"
              alt={`Slide ${index + 1}`}
              style={{ objectFit: "cover", height: "250px" }}
            />
            <div
              className=" row"
              style={{
                backgroundColor: "#B56F01",
                backdropFilter: "blur(10px)",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <div className="col-2 d-flex align-items-center justify-content-center">
                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    padding: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                  }}
                >
                  <button className="btn">
                    <FaCirclePlay
                      style={{ color: "#fff", fontSize: "1.5rem" }}
                    />
                  </button>
                </div>
              </div>

              <div className="col-8">
                <p
                  className="mb-1"
                  style={{ fontSize: "14px", color: "white", opacity: 0.9 }}
                >
                  {item.category}
                </p>
                <h5 style={{ fontWeight: "600", color: "white" }}>
                  {item.guest}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Remedies = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row mt-5">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <h2
            className="text-center"
            style={{
              fontWeight: "400",
              fontSize: "2.1rem",
              lineHeight: "2rem",
              color: "#B56F01",
              letterSpacing: "0.01%",
            }}
          >
            Personalized Readings & Remedies
          </h2>

          <div className="row align-items-center mt-5">
            {/* Left Text Cards */}
            <div className="col-lg-8">
              <div className="row g-4">
                <div
                  className="col-md-6 p-3"
                  style={{ backgroundColor: "#F3DDBB", borderRadius: "16px" }}
                >
                  <h5>Astrology Consultation</h5>
                  <p>
                    Get expert guidance on career, marriage, business, health,
                    and every other aspect of life to help you make confident,
                    informed decisions for a brighter future.
                  </p>
                </div>

                <div
                  className="col-md-6 p-3"
                  style={{ backgroundColor: "#F3DDBB", borderRadius: "16px" }}
                >
                  <h5>Vastu & Hawan Consultation</h5>
                  <p>
                    Our Vastu and Hawan services harmonize energies, balance
                    spaces, and promote spiritual well-being and prosperity.
                  </p>
                </div>

                <div
                  className="col-md-6 p-3"
                  style={{ backgroundColor: "#F3DDBB", borderRadius: "16px" }}
                >
                  <h5>Meditation & Life Coaching</h5>
                  <p>
                    Experience personalized meditation and coaching to restore
                    balance, deepen self-awareness, and support your personal
                    growth.
                  </p>
                </div>

                <div
                  className="col-md-6 p-3"
                  style={{ backgroundColor: "#F3DDBB", borderRadius: "16px" }}
                >
                  <h5>Numerology Consultation</h5>
                  <p>
                    Unlock your true potential with personalized numerology
                    readings that reveal your life’s purpose and guide you
                    toward balanced, meaningful growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-4 text-center mt-4 mt-lg-0">
              <Image
                src={Person2}
                alt="person-img"
                height={600}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    text: "Get expert guidance on career, marriage, business, health, and every other aspect of life to help you make confident, informed decisions for a brighter future.",
    author: "Varshant Atray",
  },
  {
    text: "Our Vastu and Hawan services harmonize energies, balance spaces, and promote spiritual well-being and prosperity.",
    author: "Suhas Suryavanshi",
  },
  {
    text: "Experience personalized meditation and coaching to restore balance, deepen self-awareness, and support your personal growth.",
    author: "Hemant Singh",
  },
  {
    text: "Astrology can help you align your goals with cosmic timing for best outcomes.",
    author: "Ritika Sharma",
  },
  {
    text: "Tarot readings are a powerful way to gain insight and clarity in life's decisions.",
    author: "Rohan Mehra",
  },
  {
    text: "Harnessing the energies of gemstones can enhance various aspects of your life.",
    author: "Priya Verma",
  },
];

const TestimonialSlider = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const handleDotClick = (index) => {
    setPageIndex(index);
  };

  const getCurrentItems = () => {
    const start = pageIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <div className="py-5" style={{ backgroundColor: "#B9D8A9" }}>
      <div className="container text-center">
        <h3 className="mb-5" style={{ color: "#2C3D27" }}>
          Seen by Millions, Trusted by Hearts
        </h3>

        <div className="row justify-content-center">
          {getCurrentItems().map((item, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div
                style={{
                  backgroundColor: "#FAE9D2",
                  borderRadius: "10px",
                  padding: "30px 20px",
                  minHeight: "250px",
                  position: "relative",
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <FaQuoteLeft size={30} color="#BF7E04" />
                <p className="mt-3">{item.text}</p>
                <h5
                  className="mt-4"
                  style={{ color: "#2C3D27", fontWeight: "bold" }}
                >
                  {item.author}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-4">
          {[...Array(totalPages)].map((_, i) => (
            <span
              key={i}
              onClick={() => handleDotClick(i)}
              style={{
                height: "12px",
                width: "12px",
                margin: "0 6px",
                backgroundColor: pageIndex === i ? "#2C3D27" : "#fff",
                border: "1px solid #2C3D27",
                borderRadius: "50%",
                display: "inline-block",
                cursor: "pointer",
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Journey = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div style={{ backgroundColor: "#f8f9fa", padding: "80px 0" }}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div style={{ position: "relative" }}>
                  {/* Decorative star - top left */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-30px",
                      left: "-30px",
                      color: "#6366f1",
                      opacity: "0.6",
                    }}
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                      <path d="M12 2v20" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>

                  <Image
                    src={Person3}
                    alt="person-img"
                    height={400}
                    width={600}
                    style={{
                      borderRadius: "15px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      width: "100%",
                      maxWidth: "31.2rem",
                      height: "20rem",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6" style={{ position: "relative" }}>
                {/* Decorative star - top right */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "0",
                    color: "#6366f1",
                    opacity: "0.6",
                  }}
                >
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                    <path d="M4.93 4.93l14.14 14.14" />
                    <path d="M4.93 19.07l14.14-14.14" />
                  </svg>
                </div>

                <h3
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: "400",
                    color: "black",
                    marginBottom: "20px",
                    lineHeight: "1.2",
                  }}
                >
                  My Journey Into the Stars
                </h3>

                <p
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8rem",
                    color: "#4a5568",
                    marginBottom: "30px",
                  }}
                >
                  I've spent years decoding the celestial language and sharing
                  it with the world through YouTube. My approach combines
                  Vedic/Western astrology with spiritual wisdom and practical
                  grounding. My goal is to make astrology accessible,
                  empowering, and deeply personal for you.
                </p>

                <button
                  className="btn rounded-pill"
                  style={{
                    backgroundColor: "#2C3D27",
                    color: "white",
                    padding: "12px 30px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    border: "none",
                    boxShadow: "0 4px 15px rgba(44, 61, 39, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.transform = "translateY(-2px)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.transform = "translateY(0px)")
                  }
                >
                  Book Consultancy
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
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

const Footer = () => {
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

export default Astrology;
