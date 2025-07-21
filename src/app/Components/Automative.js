"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import IshwarLogo from "../AutomativeImages/IshwarLogo.png";
import BgMain from "../AutomativeImages/automativeBg.jpg";
import LsImg1 from "../AutomativeImages/Category1.jpg";
import LsImg2 from "../AutomativeImages/Category2.jpg";
import LsImg3 from "../AutomativeImages/Category3.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Automative = () => {
  return (
    <div>
      <AutomativeNav />
      <MainPage />
    </div>
  );
};

export default Automative;

export const AutomativeNav = () => {
  return (
    <>
      <div className="container-fluid px-0">
        {/* navbar */}
        <div className="row g-0">
          <div
            className="col-md-1 d-none d-lg-block"
            style={{ backgroundColor: "#252525" }}
          ></div>

          <div className="col-12 col-lg-10">
            <nav
              className="navbar navbar-expand-lg navbar-dark"
              style={{ backgroundColor: "#252525" }}
            >
              <div className="container-fluid">
                <Image src={IshwarLogo} alt="logo" />
                <a className="navbar-brand fw-bold">Ishwaar</a>

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
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                      <a href="/BLOGS" className="nav-link text-white">
                        BLOGS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/news" className="nav-link text-white">
                        NEWS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/Reviews" className="nav-link text-white">
                        REVIEWS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/About-Us" className="nav-link text-white">
                        ABOUT US
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-end">
                  <ul className="navbar-nav">
                    <li className="nav-item ms-2">
                      <button
                        className="btn btn-light rounded-pill"
                        style={{ color: "#008CA7" }}
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
    </>
  );
};

const MainPage = () => {
  const [latestNews, setLatestNews] = useState();
  const latestNewsRef = useRef(null);

  const [browseCategory, setBrowseCategory] = useState();
  const browseCategoryRef = useRef(null);

  useEffect(() => {
    setLatestNews([
      {
        img: LsImg1.src,
        category: "Category",
        title: "Avocado Bruschetta with Parma Ham and Poached",
        date: "Sep 24, 2025",
        author: "Ishwaar",
      },
      {
        img: LsImg2.src,
        category: "Category",
        title: "Avocado Bruschetta with Parma Ham and Poached",
        date: "Sep 24, 2025",
        author: "Ishwaar",
      },
      {
        img: LsImg3.src,
        category: "Category",
        title: "Avocado Bruschetta with Parma Ham and Poached",
        date: "Sep 24, 2025",
        author: "Ishwaar",
      },
      {
        img: LsImg3.src,
        category: "Category",
        title: "Avocado Bruschetta with Parma Ham and Poached",
        date: "Sep 24, 2025",
        author: "Ishwaar",
      },
    ]);

    setBrowseCategory([
      {
        img: LsImg1.src,
        category: "podcast",
        guest: "Neil D'Silva",
      },
      {
        img: LsImg1.src,
        category: "podcast",
        guest: "Glenn McGrath",
      },
      {
        img: LsImg1.src,
        category: "podcast",
        guest: "Sri Rameshwar Swami",
      },
      {
        img: LsImg1.src,
        category: "podcast",
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
      <div>
        {/* Adventures worth sharing  */}
        <div
          className="overflowx-hidden"
          style={{
            backgroundImage: `url(${BgMain.src})`,
            marginBottom: "3.5rem",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <div className="container-fluid">
            <div
              className="row align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="col-md-1 d-none d-lg-block"></div>

              <div className="col-12 col-lg-5 text-white">
                <h1
                  className="fw-bold"
                  style={{
                    fontWeight: "400",
                    fontSize: "50px",
                    lineHeight: "70px",
                    fontStyle: "semiBold",
                  }}
                >
                  Adventures <br /> Worth Sharing.
                </h1>
                <p
                  className="lead mt-3"
                  style={{
                    fontFamily: "inter",
                    fontWeight: "400",
                    lineHeight: "45px",
                    fontSize: "28px",
                  }}
                >
                  Join me, a passionate traveler documenting experiences from
                  cities, mountains, oceans, and hidden gems across the globe.
                </p>
                <button
                  className="btn btn-light rounded-pill px-4 mt-3"
                  style={{ color: "black" }}
                >
                  SUBSCRIBE
                </button>
              </div>

              <div className="col-md-1 d-none d-lg-block"></div>
            </div>
          </div>
        </div>

        {/* latestNews*/}
        <div className="container-fluid py-5">
          <div className="row ">
            <div className="col-md-1  d-flex d-md-block"></div>
            <div className="col-md-10">
              <div className="row mt-5">
                <div className="col-12 d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <h3
                    className="m-0"
                    style={{
                      color: "#252525",
                      fontSize: "2rem",
                      fontFamily: "var(--font-playfair), serif",
                    }}
                  >
                    Latest News
                  </h3>

                  <div className="flex-grow-1 d-none d-md-block mx-3">
                    <hr
                      className="m-0"
                      style={{ borderTop: "2px solid black" }}
                    />
                  </div>

                  {/* Arrows */}
                  <div className="d-flex">
                    <button
                      onClick={() => scrollByCard(latestNewsRef, -1)}
                      className="btn rounded-circle me-2"
                      style={{ borderColor: "black" }}
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={() => scrollByCard(latestNewsRef, 1)}
                      className="btn rounded-circle"
                      style={{ borderColor: "black" }}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 ">
                <SliderSectionLsNews
                  title="latest News"
                  images={latestNews}
                  containerRef={latestNewsRef}
                />
              </div>
            </div>
            <div className="col-md-1 d-none d-md-block"></div>
          </div>
        </div>

        {/* browse by category div */}
        <div className="container-fluid py-5">
          <div className="row ">
            <div className="col-md-1  d-flex d-md-block"></div>
            <div className="col-md-10">
              <div className="row mt-5">
                <div className="col-12 d-flex align-items-center justify-content-between flex-wrap gap-2">
                  <h3
                    className="m-0"
                    style={{
                      color: "#252525",
                      fontSize: "2rem",
                      fontFamily: "var(--font-playfair), serif",
                    }}
                  >
                    Latest News
                  </h3>

                  <div className="flex-grow-1 d-none d-md-block mx-3">
                    <hr
                      className="m-0"
                      style={{ borderTop: "2px solid black" }}
                    />
                  </div>

                  {/* Arrows */}
                  <div className="d-flex">
                    <button
                      onClick={() => scrollByCard(browseCategoryRef, -1)}
                      className="btn rounded-circle me-2"
                      style={{ borderColor: "black" }}
                    >
                      <FaArrowLeft />
                    </button>
                    <button
                      onClick={() => scrollByCard(browseCategoryRef, 1)}
                      className="btn rounded-circle"
                      style={{ borderColor: "black" }}
                    >
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 ">
                <SliderSectionBrowseCategory
                  title="BrowseCategory"
                  images={browseCategory}
                  containerRef={browseCategoryRef}
                />
              </div>
            </div>
            <div className="col-md-1 d-none d-md-block"></div>
          </div>
        </div>
      </div>
    </>
  );
};

function SliderSectionLsNews({ images, containerRef }) {
  return (
    <div className="mt-4">
      <div
        className="d-flex"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          gap: "40px",
          padding: "10px 0",
        }}
        ref={containerRef}
      >
        {(images ?? []).map((item, index) => (
          <div
            key={index}
            style={{ flex: "0 0 auto", width: "380px" }}
            className="text-start"
          >
            <img
              src={item.img}
              className="w-100 rounded"
              alt={`Slide ${index + 1}`}
              style={{ objectFit: "cover", height: "274px" }}
            />
            <p className="mt-3 mb-1 text-muted" style={{ fontSize: "0.9rem" }}>
              {item.category}
            </p>
            <h5 style={{ fontWeight: "600" }}>{item.title}</h5>
            <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
              {item.date} &nbsp; | &nbsp; By {item.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SliderSectionBrowseCategory({ images, containerRef }) {
  return (
    <div className="mt-4">
      <div
        className="d-flex"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          gap: "40px",
          padding: "10px 0",
        }}
        ref={containerRef}
      >
        {(images ?? []).map((item, index) => (
          <div
            key={index}
            style={{ flex: "0 0 auto", width: "380px" }}
            className="text-start"
          >
            <img
              src={item.img}
              className="w-100 rounded"
              alt={`Slide ${index + 1}`}
              style={{ objectFit: "cover", height: "274px" }}
            />
            <div className="" style={{ backgroundColor: "black" }}>
              <p style={{ color: "white" }}>{item.category}</p>
              <h5 style={{ fontWeight: "600", color: "white" }}>
                {item.guest}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
