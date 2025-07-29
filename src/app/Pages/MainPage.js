import React, { useEffect, useRef, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Image from "next/image";
import BgMain from "../AutomativeImages/automativeBg.jpg";

import LsImg1 from "../AutomativeImages/Category1.jpg";
import LsImg2 from "../AutomativeImages/Category2.jpg";
import LsImg3 from "../AutomativeImages/Category3.jpg";

import Bcategory1 from "../AutomativeImages/bcategory1.png";
import Bcategory2 from "../AutomativeImages/bcategory2.png";
import Bcategory3 from "../AutomativeImages/bcategory3.png";

import LatestPostsImg1 from "../AutomativeImages/LatestPostsImg1.jpg";
import LatestPostsImg2 from "../AutomativeImages/LatestPostsImg2.jpg";
import LatestPostsImg3 from "../AutomativeImages/LatestPostsImg3.jpg";
import LatestPostsImg4 from "../AutomativeImages/LatestPostsImg4.jpg";

import LatestPosts from "../AutomativeImages/LastestPosts.json";

import { FaCirclePlay } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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

export default MainPage;
