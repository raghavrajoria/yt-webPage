"use client";
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import BlogData from "../AutomativeImages/UpNextData.json";

import LatestPostsImg1 from "../AutomativeImages/LatestPostsImg1.jpg";
import LatestPostsImg2 from "../AutomativeImages/LatestPostsImg2.jpg";
import LatestPostsImg3 from "../AutomativeImages/LatestPostsImg3.jpg";
import LatestPostsImg4 from "../AutomativeImages/LatestPostsImg4.jpg";

import { FaArrowRight } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const News = ({ setActivePage, setSelectedBlog }) => {
  const [blogs, setBlogs] = useState(BlogData.blogs);
  const [filteredBlogs, setFilteredBlogs] = useState(BlogData.blogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(BlogData.blogs);
  //       const data = await response.json();
  //       setBlogs(data.blogs);
  //       setFilteredBlogs(data.blogs);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [searchTerm, blogs]);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };
  const imageMap = {
    "LatestPostsImg1.jpg": LatestPostsImg1,
    "LatestPostsImg2.jpg": LatestPostsImg2,
    "LatestPostsImg3.jpg": LatestPostsImg3,
    "LatestPostsImg4.jpg": LatestPostsImg4,
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-md-1 d-none d-md-block" />

        <div className="col-md-10 col-12 px-3 px-md-5">
          <h2
            className="mb-3 text-center"
            style={{
              marginTop: "3rem",
              fontWeight: "1000",
              fontSize: "3rem",
              color: "#252525",
              lineHeight: "100%",
            }}
          >
            News
          </h2>
          <p
            className="mb-4 text-center"
            style={{
              fontWeight: "400",
              fontSize: "1.6rem",
              color: "#252525",
              lineHeight: "100%",
            }}
          >
            These Are the Destinations I’ve Visited
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-5">
            <div className="d-flex justify-content-center mb-5">
              <div
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6c757d",
                    fontSize: "1.2rem",
                  }}
                >
                  <BsSearch />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 50px 12px 50px",
                    borderRadius: "50px",
                    border: "1px solid #ced4da",
                    fontSize: "1rem",
                    outline: "none",
                    paddingRight: "120px",
                  }}
                />
                <button
                  onClick={handleSearch}
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "#252525",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    padding: "8px 20px",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Blog + Trending */}
          <div className="row">
            {/* Blog Posts */}
            <div className="col-12 col-md-8">
              <div className="blog-posts">
                {currentBlogs.length > 0 ? (
                  currentBlogs.map((blog) => (
                    <div
                      key={blog.id}
                      className="blog-post mb-5 p-0 border-0"
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "1.25rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                        overflow: "hidden",
                      }}
                    >
                      <div className="row g-0 flex-column flex-md-row">
                        {/* Text content */}
                        <div className="col-12 col-md-7 order-2 order-md-1 p-4 d-flex flex-column">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-muted small">
                              By {blog.author}
                            </span>
                            <span className="text-muted small">
                              {blog.date}
                            </span>
                          </div>
                          <h3
                            className="mb-3"
                            style={{
                              color: "#252525",
                              fontWeight: 600,
                              fontSize: "1.6rem",
                              lineHeight: 1.2,
                            }}
                          >
                            {blog.title}
                            {blog.emoji && (
                              <span
                                style={{ fontSize: "1.2rem", marginLeft: 8 }}
                              >
                                {blog.emoji}
                              </span>
                            )}
                          </h3>
                          <p
                            className="mb-4"
                            style={{
                              lineHeight: "1.6",
                              color: "#222",
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {truncateText(blog.excerpt)}
                          </p>
                          <div className="mt-auto">
                            <button
                              onClick={() => {
                                setSelectedBlog(blog);
                                setActivePage("view");
                              }}
                              className="btn"
                              style={{
                                border: "2px solid #252525",
                                color: "#252525",
                                borderRadius: "2rem",
                                padding: "0.5rem 1.25rem",
                                fontWeight: 500,
                                background: "transparent",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                              }}
                            >
                              Continue Reading
                              <FaArrowRight style={{ fontSize: "1rem" }} />
                            </button>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="col-12 col-md-5 order-1 order-md-2">
                          <div
                            className="d-flex align-items-center justify-content-center p-3"
                            style={{
                              flex: 1,
                              minWidth: 0,
                              background: "#f8f9fa",
                              borderRadius: "1.25rem",
                              overflow: "hidden",
                              height: "240px",
                              margin: "1rem",
                            }}
                          >
                            {blog.image && (
                              <Image
                                src={imageMap[blog.image]}
                                alt={blog.title}
                                className="img-fluid h-100 w-100"
                                style={{
                                  objectFit: "cover",
                                  borderRadius: "0.75rem",
                                }}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-5">
                    <p>No blogs found matching your search.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Trending */}
            <div className="col-12 col-md-4 mt-4 mt-md-0">
              <h4>Trending</h4>
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
                      width: "12rem",
                      height: "8rem",
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

          {/* Pagination */}
          {filteredBlogs.length > blogsPerPage && (
            <nav aria-label="Blog pagination">
              <ul
                className="pagination justify-content-center flex-wrap"
                style={{ gap: "0.5rem" }}
              >
                {/* Previous */}
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage - 1)}
                    style={{
                      border: "none",
                      background: "transparent",
                      color: currentPage === 1 ? "#ccc" : "#252525",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    &lt;
                  </button>
                </li>

                {/* Page numbers */}
                {Array.from({
                  length: Math.min(
                    4,
                    Math.ceil(filteredBlogs.length / blogsPerPage)
                  ),
                }).map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                      style={{
                        border: "none",
                        background:
                          currentPage === index + 1 ? "#252525" : "transparent",
                        color: currentPage === index + 1 ? "white" : "#252525",
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
                {Math.ceil(filteredBlogs.length / blogsPerPage) > 4 && (
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

                {/* Next */}
                <li
                  className={`page-item ${
                    currentPage ===
                    Math.ceil(filteredBlogs.length / blogsPerPage)
                      ? "disabled"
                      : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage + 1)}
                    style={{
                      border: "none",
                      background: "transparent",
                      color:
                        currentPage ===
                        Math.ceil(filteredBlogs.length / blogsPerPage)
                          ? "#ccc"
                          : "#252525",
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

        <div className="col-md-1 d-none d-md-block" />
      </div>
    </div>
  );
};

export default News;
