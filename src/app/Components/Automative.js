"use client";
import React, { useEffect, useRef, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

import Image from "next/image";

import IshwarLogo from "../AutomativeImages/IshwarLogo.png";
import BgMain from "../AutomativeImages/automativeBg.jpg";

import LsImg1 from "../AutomativeImages/Category1.jpg";
import LsImg2 from "../AutomativeImages/Category2.jpg";
import LsImg3 from "../AutomativeImages/Category3.jpg";

import Bcategory1 from "../AutomativeImages/bcategory1.png";
import Bcategory2 from "../AutomativeImages/bcategory2.png";
import Bcategory3 from "../AutomativeImages/bcategory3.png";

import LatestPosts from "../AutomativeImages/LastestPosts.json";

import LatestPostsImg1 from "../AutomativeImages/LatestPostsImg1.jpg";
import LatestPostsImg2 from "../AutomativeImages/LatestPostsImg2.jpg";
import LatestPostsImg3 from "../AutomativeImages/LatestPostsImg3.jpg";
import LatestPostsImg4 from "../AutomativeImages/LatestPostsImg4.jpg";

import FacebookIconFooter from "../AutomativeImages/FacebookIcon.png";
import linkdinIconFooter from "../AutomativeImages/linkdinIcon.png";
import InstagramIconFooter from "../AutomativeImages/InstagramIcon.png";
import XiconFooter from "../AutomativeImages/Xicon.png";

import upNextData from "../AutomativeImages/UpNextData.json";
import ytPfp from "../AutomativeImages/ytImageIcon.jpg";
import { FaShareAlt } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

import RSlider1 from "../AutomativeImages/RoadaheadSlider1.jpg";
import RSlider2 from "../AutomativeImages/RoadaheadSlider2.jpg";
import RSlider3 from "../AutomativeImages/RoadaheadSlider3.jpg";

import Dslider1 from "../AutomativeImages/DubSlider1.jpg";
import Dslider2 from "../AutomativeImages/DubSlider2.jpg";
import Dslider3 from "../AutomativeImages/DubSlider3.jpg";

import Auto1 from "../AutomativeImages/Auto1.jpg";
import Auto2 from "../AutomativeImages/Auto2.jpg";
import Auto3 from "../AutomativeImages/Auto3.jpg";

import Bike1 from "../AutomativeImages/Bike1.jpg";
import Bike2 from "../AutomativeImages/Bike2.jpg";
import Bike3 from "../AutomativeImages/Bike3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";

const Automative = () => {
  return (
    <div>
      <AutomativeNav />
      {/* <MainPage /> */}
      {/* <AutomativeVid /> */}

      <AutomativeFooter />
    </div>
  );
};

export default Automative;

export const AutomativeNav = () => {
  return (
    <>
      <div className="container-fluid px-0">
        {/* navbar */}
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
                />{" "}
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
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                      <a href="/podcast" className="nav-link text-white">
                        BLOGS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/guest" className="nav-link text-white">
                        NEWS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/about" className="nav-link text-white">
                        REVIEWS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/about" className="nav-link text-white">
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
        img: Bcategory1.src,
        category: "Podcast",
        guest: "Neil D'Silva",
      },
      {
        img: Bcategory2.src,
        category: "Podcast",
        guest: "Glenn McGrath",
      },
      {
        img: Bcategory3.src,
        category: "Podcast",
        guest: "Sri Rameshwar Swami",
      },
      {
        img: Bcategory1.src,
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
      <div>
        {/* Unbiased Reviews,Real Performance.  */}
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
                    color: "#FFFFFF",
                  }}
                >
                  Unbiased Reviews,
                  <br /> Real Performance.
                </h1>
                <p
                  className="lead mt-3"
                  style={{
                    fontFamily: "inter",
                    fontWeight: "400",
                    lineHeight: "45px",
                    fontSize: "28px",
                    color: "#FFFFFF",
                  }}
                >
                  Our go-to source for honest reviews, comparisons, and insights
                  on the latest cars, bikes, EVs, and trends shaping the
                  automotive world.
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
        <div
          className="container-fluid py-5"
          style={{ backgroundColor: "#252525" }}
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
                      color: "#fff",
                      fontSize: "2rem",
                      fontFamily: "var(--font-playfair), serif",
                    }}
                  >
                    Browse By Category
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
                      style={{ borderColor: "#fff" }}
                    >
                      <FaArrowLeft style={{ color: "#fff" }} />
                    </button>
                    <button
                      onClick={() => scrollByCard(browseCategoryRef, 1)}
                      className="btn rounded-circle"
                      style={{ borderColor: "#fff" }}
                    >
                      <FaArrowRight style={{ color: "#fff" }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Slider Row */}
              <div className="col-12">
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
        {/* latest post div */}
        <LatestPostsCon />
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
            style={{ flex: "0 0 auto", width: "417px" }}
            className="text-start"
          >
            <img
              src={item.img}
              className="w-100 rounded"
              alt={`Slide ${index + 1}`}
              style={{ objectFit: "cover", height: "250px" }}
            />
            <div
              className="px-3 py-2 row"
              style={{
                backgroundColor: "#FFFFFF80",
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

const LatestPostsCon = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [activePage, setActivePage] = useState("list");
  const [wordLimit, setWordLimit] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  const imageMap = {
    "LatestPostsImg1.jpg": LatestPostsImg1,
    "LatestPostsImg2.jpg": LatestPostsImg2,
    "LatestPostsImg3.jpg": LatestPostsImg3,
    "LatestPostsImg4.jpg": LatestPostsImg4,
  };

  const limitWords = (text, limit) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return text;
  };

  const filteredBlogs = LatestPosts.blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-md-1 d-flex d-md-block"></div>
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
                Latest Posts
              </h3>
              <div className="flex-grow-1 d-none d-md-block mx-3">
                <hr className="m-0" style={{ borderTop: "2px solid black" }} />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            {/* Left: Main Blog List */}
            <div className="col-md-8">
              {currentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="mb-5 shadow-sm bg-white rounded p-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedBlog(blog);
                    setActivePage("view");
                  }}
                >
                  <div className="row">
                    <div className="col-md-8">
                      <span className="text-muted small">{blog.category}</span>
                      <h4 className="fw-semibold mb-1">{blog.title}</h4>
                      <p className="text-secondary">
                        {limitWords(blog.excerpt, wordLimit)}
                      </p>
                      <p className="text-muted mb-0 small">
                        {blog.date} | By {blog.author}
                      </p>
                    </div>
                    <div className="col-md-4">
                      <Image
                        src={imageMap[blog.image]}
                        alt={blog.title}
                        className="img-fluid rounded"
                        style={{
                          height: "200px",
                          objectFit: "cover",
                          width: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              {filteredBlogs.length > blogsPerPage && (
                <nav aria-label="Blog pagination" className="mt-4">
                  <ul
                    className="pagination justify-content-center"
                    style={{ gap: "0.5rem" }}
                  >
                    {/* Previous Button */}
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        style={{
                          border: "none",
                          background: "transparent",
                          color: currentPage === 1 ? "#ccc" : "black",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      >
                        &lt;
                      </button>
                    </li>

                    {/* Page Numbers */}
                    {Array.from({
                      length: Math.min(4, totalPages),
                    }).map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(index + 1)}
                          style={{
                            border: "none",
                            background:
                              currentPage === index + 1
                                ? "black"
                                : "transparent",
                            color:
                              currentPage === index + 1 ? "white" : "black",
                            borderRadius: "50%",
                            width: "36px",
                            height: "36px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}

                    {/* Ellipsis */}
                    {totalPages > 4 && (
                      <li className="page-item disabled">
                        <span
                          className="page-link"
                          style={{
                            border: "none",
                            background: "transparent",
                            padding: "0 0.5rem",
                          }}
                        >
                          ...
                        </span>
                      </li>
                    )}

                    {/* Next Button */}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        style={{
                          border: "none",
                          background: "transparent",
                          color: currentPage === totalPages ? "#ccc" : "black",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      >
                        &gt;
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </div>

            {/* Right: Recent Posts Sidebar */}
            <div className="col-md-4 mt-5 mt-md-0">
              {filteredBlogs.slice(0, 5).map((blog) => (
                <div
                  key={blog.id}
                  className="d-flex mb-4"
                  style={{
                    borderBottom: "1px solid #eaeaea",
                    paddingBottom: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSelectedBlog(blog);
                    setActivePage("view");
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "70px",
                      overflow: "hidden",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <Image
                      src={imageMap[blog.image]}
                      alt={blog.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="ms-3">
                    <h6
                      className="fw-semibold mb-1"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {blog.title}
                    </h6>
                    <small className="text-muted d-block">{blog.date}</small>
                    <small className="text-muted">By {blog.author}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-1 d-none d-md-block"></div>
      </div>
    </div>
  );
};

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

const AutomativeVid = () => {
  const [videoSrc, setVideoSrc] = useState("./videoplayback.mp4");

  const [roadahead, setRoadahead] = useState([]);
  const [indonasia, setIndonasia] = useState([]);
  const [japan, setJapan] = useState([]);
  const [dubai, setDubai] = useState([]);
  const roadaheadRef = useRef(null);
  const indonasiaRef = useRef(null);
  const japanRef = useRef(null);
  const dubaiRef = useRef(null);

  const scrollByCard = (ref, direction) => {
    if (!ref.current) return;
    const card = ref.current.querySelector("div");
    if (!card) return;
    const cardWidth = card.offsetWidth + 40;
    ref.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  useEffect(() => {
    setRoadahead([
      {
        img: RSlider1.src,
        title:
          "DELHI Travel Vlog 🇮🇳 | Exploring Street Food, Markets & Monuments!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: RSlider2.src,
        title:
          "JAIPUR in Full Color 🎨 | Forts, Food & the Pink City Experience!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: RSlider3.src,
        title: "VARANASI Unfiltered 🔥 | Ganga Aarti, Ghats & Spiritual Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: RSlider1.src,
        title: "Hidden Delhi Spots 🔍 | Offbeat Local Markets & Food Hunt!",
        views: "1.5M views",
        date: "4 days ago",
      },
      {
        img: RSlider2.src,
        title:
          "JAIPUR in Full Color 🎨 | Forts, Food & the Pink City Experience!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: RSlider3.src,
        title: "VARANASI Unfiltered 🔥 | Ganga Aarti, Ghats & Spiritual Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
    setJapan([
      {
        img: Dslider1.src,
        title: "TOKYO Unleashed! Neon Streets, Sushi Spots & Hidden Alleys",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Dslider2.src,
        title: "Chasing Mount Fuji! 🚄 Scenic Trains, Hot Springs & Fuji Views",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Dslider3.src,
        title: "OSAKA Street Food Heaven 🍜 | Dotonbori, Vibes & Nightlife",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: Dslider1.src,
        title: "TOKYO Unleashed! Neon Streets, Sushi Spots & Hidden Alleys",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Dslider2.src,
        title: "Chasing Mount Fuji! 🚄 Scenic Trains, Hot Springs & Fuji Views",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Dslider3.src,
        title: "OSAKA Street Food Heaven 🍜 | Dotonbori, Vibes & Nightlife",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
    setIndonasia([
      {
        img: Auto1.src,
        title:
          "BALI Like Never Before! 🇮🇩 Hidden Gems, Rice Terraces & Beach Vibes!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Auto2.src,
        title:
          "INSANE VIEWS in NUSA PENIDA 😱 | Island Hopping & Cliffside Wonders!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Auto3.src,
        title: "DRAGONS & PARADISE 🐉🌊 | Exploring KOMODO ISLANDS by Boat!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: Auto1.src,
        title:
          "BALI Like Never Before! 🇮🇩 Hidden Gems, Rice Terraces & Beach Vibes!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Auto2.src,
        title:
          "INSANE VIEWS in NUSA PENIDA 😱 | Island Hopping & Cliffside Wonders!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Auto3.src,
        title: "DRAGONS & PARADISE 🐉🌊 | Exploring KOMODO ISLANDS by Boat!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);

    setDubai([
      {
        img: Bike1.src,
        title: "Into the DUBAI Desert! 🐪 Dune Bashing, Camels & Sunset Magic",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Bike2.src,
        title: "DUBAI in Style! 🏙️ Skyscrapers, Supercars & Sky Views!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Bike3.src,
        title: "DUBAI After Dark 🌃 | Night Markets, Skyline Views & Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: Bike1.src,
        title: "Into the DUBAI Desert! 🐪 Dune Bashing, Camels & Sunset Magic",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Bike2.src,
        title: "DUBAI in Style! 🏙️ Skyscrapers, Supercars & Sky Views!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Bike3.src,
        title: "DUBAI After Dark 🌃 | Night Markets, Skyline Views & Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
  }, []);
  const imageMap = {
    "LatestPostsImg1.jpg": LatestPostsImg1,
    "LatestPostsImg2.jpg": LatestPostsImg2,
    "LatestPostsImg3.jpg": LatestPostsImg3,
    "LatestPostsImg4.jpg": LatestPostsImg4,
  };

  return (
    <>
      <div style={{ background: "#fff" }}>
        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <h2
              className="text-center"
              style={{
                marginTop: "3rem",
                fontStyle: "bold",
                fontWeight: "1000",
                fontSize: "3rem",
                color: "#008CA7",
                lineHeight: "100%",
              }}
            >
              Adventures worth sharing
            </h2>
            <p
              className="text-center"
              style={{
                fontWeight: "400",
                fontSize: "1.6rem",
                color: "#008CA7",
                lineHeight: "100%",
              }}
            >
              These are the destinations I've visited
            </p>

            <div className="col-md-12 col-12">
              <div className="row">
                {/* Video Section */}
                <div
                  className="col-md-8 col-12 d-flex flex-column mt-3"
                  style={{ height: "100%" }}
                >
                  <video
                    src={videoSrc}
                    controls
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginBottom: "20px",
                    }}
                  ></video>

                  <h4
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    HOW TO TRAVEL BALI - 14 DAYS in Paradise
                  </h4>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Image
                        src={ytPfp}
                        alt="Host"
                        width={40}
                        height={40}
                        style={{
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />{" "}
                      &nbsp; &nbsp;
                      <div>
                        <div style={{ fontWeight: "bold" }}>Ishwaar</div>
                        <div style={{ fontSize: "12px", color: "gray" }}>
                          12K Subscribers
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #252525",
                          color: "#252525",
                          borderRadius: "1rem",
                        }}
                      >
                        <FaShareAlt
                          className="mx-2"
                          style={{ color: "#252525", fontSize: "1.2rem" }}
                        />
                        Share
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #252525",
                          color: "#252525",
                          borderRadius: "1rem",
                        }}
                      >
                        <FaThumbsUp
                          className="mx-2"
                          style={{ color: "#252525", fontSize: "1.2rem" }}
                        />
                        35K
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #252525",
                          color: "#252525",
                          borderRadius: "1rem",
                        }}
                      >
                        <FaEye
                          className="mx-2"
                          style={{ color: "#252525", fontSize: "1.2rem" }}
                        />
                        50K views
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #252525",
                          color: "#252525",
                          borderRadius: "1rem",
                        }}
                      >
                        <MdWatchLater
                          className="mx-2"
                          style={{ color: "#252525", fontSize: "1.4rem" }}
                        />
                        2 hours ago
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sidebar - Up Next */}
                <div className="col-md-4 col-12 mt-3">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <h5
                      style={{
                        fontWeight: "700",
                        margin: 0,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      Up Next
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>Autoplay</span>
                      <label
                        className="form-check form-switch"
                        style={{ margin: 0 }}
                      >
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </label>
                    </div>
                  </div>

                  <div
                    style={{
                      maxHeight: "50vh",
                      overflowY: "auto",
                      paddingRight: "10px",
                    }}
                  >
                    {upNextData.blogs.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setVideoSrc(item.videoSrc)}
                        style={{
                          display: "flex",
                          marginBottom: "15px",
                          cursor: "pointer",
                        }}
                      >
                        <Row>
                          <Col md={5}>
                            <Image
                              src={imageMap[item.image]}
                              alt="Thumbnail"
                              height={100}
                              style={{
                                objectFit: "cover",
                                borderRadius: "4px",
                                width: "100%",
                              }}
                            />
                          </Col>
                          <Col>
                            <div
                              style={{ marginLeft: "10px", overflow: "hidden" }}
                            >
                              <div
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "14px",
                                  marginBottom: "4px",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {item.title}
                              </div>
                              <div style={{ fontSize: "12px", color: "gray" }}>
                                {item.author}
                              </div>
                              <div style={{ fontSize: "12px", color: "gray" }}>
                                {item.views} • {item.date}
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* slider */}
              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2>Roadahead</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    className="btn  rounded-circle me-2"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(roadaheadRef, -1)}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="btn rounded-circle"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(roadaheadRef, 1)}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <SliderSection
                title="roadahead"
                images={roadahead}
                containerRef={roadaheadRef}
              />

              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2>Dubai International Motor Show 2019</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    style={{ borderColor: "#252525", color: "#252525" }}
                    className="btn  rounded-circle me-2"
                    onClick={() => scrollByCard(indonasiaRef, -1)}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    style={{ borderColor: "#252525", color: "#252525" }}
                    className="btn  rounded-circle"
                    onClick={() => scrollByCard(indonasiaRef, 1)}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <SliderSection
                title="indonasia"
                images={indonasia}
                containerRef={indonasiaRef}
              />

              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2>2022 Auto EXPO</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    className="btn  rounded-circle me-2"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(japanRef, -1)}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="btn  rounded-circle"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(japanRef, 1)}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <SliderSection
                title="japan"
                images={japan}
                containerRef={japanRef}
              />

              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2>Car/Bike Reviews & Impressions</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    className="btn  rounded-circle me-2"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(dubaiRef, -1)}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="btn  rounded-circle"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(dubaiRef, 1)}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <SliderSection
                title="dubai"
                images={dubai}
                containerRef={dubaiRef}
              />

              <div className="col-md-1"></div>
            </div>
          </Col>
        </Row>
        <div className="mb-5"></div>
      </div>
    </>
  );
};

function SliderSection({ images, containerRef }) {
  return (
    <div className="mt-3">
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
          <div key={index} style={{ flex: "0 0 auto", width: "300px" }}>
            <img
              src={item.img}
              className="w-100 rounded"
              alt={`Slide ${index + 1}`}
              style={{
                objectFit: "cover",
                height: "274px",
              }}
            />
            <div style={{ marginLeft: "5px", marginTop: "5px" }}>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginBottom: "4px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: "12px", color: "gray" }}>
                {item.views} • {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
