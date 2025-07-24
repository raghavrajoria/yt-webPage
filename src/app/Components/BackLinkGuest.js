import React, { useState } from "react";

import { Table, Button, Pagination } from "react-bootstrap";
import BgWomen from "..//LinkGuestImgs/employeeBg.png";
import Feature1 from "..//LinkGuestImgs/featured-1.png";
import Feature2 from "..//LinkGuestImgs/featured-2.png";
import Feature3 from "..//LinkGuestImgs/featured-3.png";
import Feature4 from "..//LinkGuestImgs/featured-4.png";
import Feature5 from "..//LinkGuestImgs/featured-5.png";
import Feature6 from "..//LinkGuestImgs/featured-6.png";
import Card1 from "..//LinkGuestImgs/White-Label-Assurance.png";
import Card2 from "..//LinkGuestImgs/Comprehensive-Research.png";
import Card3 from "..//LinkGuestImgs/Effective-Clustering.png";
import Card4 from "..//LinkGuestImgs/Cost-Effective-Solutions.png";
import { FaDollarSign } from "react-icons/fa";
import { CgLogIn } from "react-icons/cg";
import { FaGlobe, FaLanguage, FaRegClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const BackLinkGuest = () => {
  const dummyData = [
    {
      website: "newssite.com",
      categories: ["General", "All Niches"],
      traffic: "29,043,069",
      ahrefs: 82,
      moz: 78,
      lang: "English",
      price: "$19.95",
    },
    {
      website: "venturespot.io",
      categories: ["General", "News and Media", "All Niches"],
      traffic: "48,882",
      ahrefs: 77,
      moz: 64,
      lang: "English",
      price: "$39.90",
    },
    {
      website: "timelynews.org",
      categories: ["General", "Marketing", "News and Media"],
      traffic: "42,652",
      ahrefs: 71,
      moz: 60,
      lang: "English",
      price: "$19.95",
    },
    {
      website: "bigbiz.com",
      categories: ["Business", "Lifestyle", "Sports"],
      traffic: "147,520",
      ahrefs: 77,
      moz: 66,
      lang: "English",
      price: "$19.95",
    },
    {
      website: "pathforward.net",
      categories: ["General", "All Niches"],
      traffic: "117,720,751",
      ahrefs: 93,
      moz: 91,
      lang: "English",
      price: "$19.95",
    },
    {
      website: "contentboost.co",
      categories: ["General", "SEO", "Marketing"],
      traffic: "31,500",
      ahrefs: 70,
      moz: 68,
      lang: "English",
      price: "$24.99",
    },
    {
      website: "contentboost.co",
      categories: ["General", "SEO", "Marketing"],
      traffic: "31,500",
      ahrefs: 70,
      moz: 68,
      lang: "English",
      price: "$24.99",
    },
    {
      website: "contentboost.co",
      categories: ["General", "SEO", "Marketing"],
      traffic: "31,500",
      ahrefs: 70,
      moz: 68,
      lang: "English",
      price: "$24.99",
    },
    {
      website: "contentboost.co",
      categories: ["General", "SEO", "Marketing"],
      traffic: "31,500",
      ahrefs: 70,
      moz: 68,
      lang: "English",
      price: "$24.99",
    },
  ];
  const PlatformData = [
    {
      id: 1,
      title: "Buyer Registration and Account Setup",
      description:
        "Prospective buyers start their journey on the iCopify guest posting marketplace by registering an account. They can sign up using their email address or social media accounts like Facebook or Gmail. Once registered, they receive a confirmation email and are ready to begin accessing thousands of quality sites for guest posting.",
    },
    {
      id: 2,
      title: "Publisher Search and Task Assignment",
      description:
        "Buyers navigate through the platform's inventory to search for suitable publishers to collaborate with. They can utilize various filters to refine their search based on metrics like domain authority, domain rating, and organic traffic. After identifying preferred publishers, buyers can send direct tasks to initiate collaboration.",
    },
    {
      id: 3,
      title: "Task Creation and Submission",
      description:
        "Buyers proceed to create tasks for the selected publishers, specifying their requirements and providing URLs for promotion. They have the option to choose between Content Placement, Content Creation & Placement, and Link Insertions. Tasks are submitted immediately for publisher review.",
    },
    {
      id: 4,
      title: "Task Progress Monitoring and Communication",
      description:
        "Buyers utilize the MY ORDERS section to track the progress of their tasks and communicate directly with publishers regarding any task-related queries. Buyers can explore features like Open Offer to receive suggestions from publishers who are open to collaboration.",
    },
  ];
  const WhyChooseData = [
    {
      id: "1",
      title: "Extensive Network Access",
      text: "iCopify's guest posting marketplace provides access to a vast network of blogs and websites across numerous industries. This diverse selection allows users to target specific audiences effectively, maximizing the reach and impact of their content.",
      image: Card1,
    },
    {
      id: "2",
      title: "Quality Assurance Standards",
      text: "iCopify maintains stringent editorial standards to ensure the guest post's quality. Through vetting processes and adherence to industry best practices, users can trust that their content will be published on reputable platforms, enhancing their brand credibility and authority",
      image: Card2,
    },
    {
      id: "3",
      title: "Seamless Collaboration Tools",
      text: "The platform offers intuitive collaboration tools that facilitates smooth communication between Advertisers(Buyers) and publishers. From negotiating terms to submitting content and tracking progress, Icopify streamlines the guest posting process, fostering efficient and productive partnerships.",
      image: Card3,
    },
    {
      id: "4",
      title: "Cost-Effective Solutions",
      text: "iCopify offers competitive pricing options, making guest posting accessible to businesses of all sizes. Whether operating on a limited budget or seeking to maximize ROI, users can find cost-effective solutions that align with their financial goals while still reaping the benefits of guest posting.",
      image: Card4,
    },
  ];
  const testimonials = [
    {
      name: "Gary G.",
      text: "Being a startup company, we were very pleased with the performance and ranking results delivered through iCopify platform. We were able to achieve quality backlinks & branded guest blogs on our website in a relatively short period of time. The team has been very responsive in addressing any type of query.",
    },
    {
      name: "David R.",
      text: "The work of an SEO manager is an ongoing process with lots of ups & downs. But, since I have been associated with iCopify, my SEO procedures have become very seamless. Getting sponsored articles along with the highest level of transparency and professionalism has been the biggest benefit.",
    },
    {
      name: "Michaela W.",
      text: "Being a marketeer, I understand the importance of content marketing strategy and getting relevant content placed on the website. I have had a great experience working with iCopify as it helped me connect with professionals who could provide me cost-effective & top-notch content.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const paginatedData = dummyData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const totalPages = Math.ceil(dummyData.length / perPage);

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        className="min-vh-100 d-flex align-items-center"
        style={{
          backgroundImage: `url(${BgWomen})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div
          className="w-100 h-100"
          style={{
            // background:
            //   "linear-gradient(to right, rgb(175, 221, 255), rgb(255, 255, 255))",

            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-md-2"></div>
            <div className="col-12 col-md-8">
              <h1
                className="fw-bold text-white mb-3"
                style={{
                  fontSize: "3rem",
                  fontWeight: 700,
                }}
              >
                Premium Guest Posting&nbsp;
                <span style={{ color: "#FFD600" }}>Services</span>
              </h1>
              <h3
                className="fw-bold text-white mb-2"
                style={{ fontSize: "1.5rem" }}
              >
                Get <span style={{ color: "#FFD600" }}>Backlinks</span> From
                High-Quality Websites
              </h3>
              <h4
                className="text-white mb-4"
                style={{ fontWeight: 400, fontSize: "1.1rem" }}
              >
                Only Pay If You Are Satisfied With The Results
              </h4>
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mb-2">
                <a
                  href="/register-1"
                  className="btn btn-light btn-lg fw-bold me-md-3 mb-2 mb-md-0"
                  style={{ minWidth: 180 }}
                >
                  <i className="fa fa-sign-in-alt me-2" /> <CgLogIn /> Sign Up
                  Now
                </a>
                <a
                  href="#viewPricing"
                  className="btn btn-primary btn-lg fw-bold"
                  style={{ minWidth: 180 }}
                >
                  <FaDollarSign className="me-2" /> View Pricing
                </a>
              </div>
              <div
                className="text-warning fw-bold mt-2"
                style={{ fontSize: "1rem" }}
              >
                * Starting From <span style={{ color: "#10ff5c" }}>$9.98</span>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>

      <div className="row ">
        <div className="col-12 col-md-12 text-center">
          {/* Blue content */}
          <div
            className="row mb-4"
            style={{ backgroundColor: "#0c1d35", color: "white" }}
          >
            <div className="col-md-4 mb-3 mt-3">
              <h4 style={{ fontWeight: "bold" }}>60,416+</h4>
              <p className="mb-0">Registered Websites</p>
            </div>
            <div className="col-md-4 mb-3 mt-3">
              <h4 style={{ fontWeight: "bold" }}>34,750+</h4>
              <p className="mb-0">Publishers & Writers</p>
            </div>
            <div className="col-md-4 mb-3 mt-3">
              <h4 style={{ fontWeight: "bold" }}>365,304+</h4>
              <p className="mb-0">Tasks Completed</p>
            </div>
          </div>

          {/* Feature logos */}
        </div>
        <div className="bg-light py-4 px-2 rounded">
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
            <img src={Feature1} alt="Feature1" height="40" />
            <img src={Feature2} alt="Feature2" height="40" />
            <img src={Feature3} alt="Feature3" height="40" />
            <img src={Feature4} alt="Feature4" height="40" />
            <img src={Feature5} alt="Feature5" height="40" />
            <img src={Feature6} alt="Feature6" height="40" />
          </div>
        </div>
      </div>

      {/* increasing the visibility div */}
      <div>
        <div className="container my-5">
          {/* Header */}
          <div className="text-center mb-4">
            <h2 className="fw-bold">
              Increasing The Visibility Of Your Website
            </h2>
            <p className="text-muted">
              Accelerate Your Business Growth With Our Services
            </p>
          </div>

          {/* Table */}
          <div className="container my-5">
            <div className="bg-light p-3 rounded">
              <h6 className="mb-3 fw-bold text-primary">
                60416 Websites & Blogs That Accept Guest Posts
              </h6>
              <div className="table-responsive">
                <table className="table table-bordered align-middle text-center">
                  <thead className="table-light">
                    <tr>
                      <th>Website</th>
                      <th>Categories</th>
                      <th>Monthly Traffic</th>
                      <th>Ahrefs DR</th>
                      <th>Moz DA</th>
                      <th>Language</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedData.map((site, index) => (
                      <tr key={index}>
                        <td>
                          <FaGlobe className="me-1" />
                          <span className="fw-medium">{site.website}</span>
                          <br />
                          <small className="text-muted">
                            Max 03 DoFollow links
                            <br />
                            <FaRegClock className="me-1" />
                            Turnaround Time:
                            <span className="text-primary">1 day</span>
                          </small>
                        </td>
                        <td>
                          {site.categories.map((cat, i) => (
                            <span key={i} className="badge bg-secondary me-1">
                              {cat}
                            </span>
                          ))}
                        </td>
                        <td>
                          <span className="text-warning fw-semibold">
                            📈 {site.traffic}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-primary">
                            DR {site.ahrefs}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-info text-dark">
                            DA {site.moz}
                          </span>
                        </td>
                        <td>
                          <FaLanguage className="me-1" />
                          {site.lang}
                        </td>
                        <td>
                          <div className="action-buttons">
                            <div className="btn-combo">
                              <button
                                className="left-btn"
                                onClick={() =>
                                  (window.location.href = "/user-pages/login-2")
                                }
                              >
                                Buy Post
                              </button>
                              <button
                                className="right-btn"
                                onClick={() =>
                                  (window.location.href = "/user-pages/login-2")
                                }
                              >
                                {site.price}
                              </button>
                            </div>
                            <button
                              className="btn btn-view w-100"
                              onClick={() =>
                                (window.location.href = "/user-pages/login-2")
                              }
                            >
                              View Details
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination - Hidden if only 1 page */}
              {totalPages > 1 && (
                <nav className="d-flex justify-content-end mt-3">
                  <ul className="pagination pagination-sm mb-0">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <li
                        key={i}
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            {/* Custom styles */}
            <style jsx>{`
              .table tbody tr:hover {
                background-color: #f3f6fa;
              }

              /* Make category column narrower */
              .table td:nth-child(2) {
                width: 160px;
              }

              .action-buttons {
                display: flex;
                flex-direction: column;
                gap: 4px;
                align-items: center;
              }

              .btn-combo {
                display: flex;
                font-size: 0.85rem;
                width: 100%;
                border-radius: 0.375rem;
                overflow: hidden;
                border: 1px solid #ccc;
              }

              .btn-combo .left-btn {
                background-color: #f0f0f0;
                color: #333;
                padding: 0.4rem 0.6rem;
                flex: 1;
                text-align: center;
              }

              .btn-combo .right-btn {
                background-color: #2c7be5;
                color: #fff;
                padding: 0.4rem 0.6rem;
                flex-shrink: 0;
                text-align: center;
              }

              .btn-combo .right-btn:hover {
                background-color: #1b63c1;
              }

              .btn-view {
                font-size: 0.75rem;
                padding: 0.3rem 0.5rem;
              }

              @media (max-width: 576px) {
                .btn-combo {
                  flex-direction: column;
                }
                .btn-combo .left-btn,
                .btn-combo .right-btn {
                  width: 100%;
                }
              }
              .btn-combo {
                display: flex;
                width: 100%;
                height: 36px;
                border-radius: 5px;
                overflow: hidden;
                box-shadow: 0 0 0 1px #ccc;
              }

              .left-btn,
              .right-btn {
                flex: 1;
                border: none;
                font-size: 14px;
                padding: 6px 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                height: 100%;
              }

              .left-btn {
                background-color: #f8f9fa;
                color: #000;
              }

              .left-btn:hover {
                background-color: #e2e6ea;
              }

              .right-btn {
                background-color: #2c7be5;
                color: #fff;
              }

              .right-btn:hover {
                background-color: #2566c8;
              }

              .btn-view {
                margin-top: 6px;
                font-size: 14px;
                color: #dc3545;
                border: 1px solid #dc3545;
              }

              .btn-view:hover {
                background-color: #dc3545;
                color: #fff;
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* how our platform works div */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#3c5a99" }}>
          How Our Platform Works
        </h2>
        <div className="row g-4">
          {PlatformData.map((item) => (
            <div className="col-12 col-sm-6 col-lg-3" key={item.id}>
              <div className="card h-100 border border-primary rounded-3 shadow-sm">
                <div className="card-body">
                  <div className="d-flex align-items-start">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-2 shadow-sm"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: "#3c5a99",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    >
                      {item.id}
                    </div>
                    <h6
                      className="card-title  mb-2"
                      style={{ color: "#3c5a99", fontWeight: "bold" }}
                    >
                      {item.title}
                    </h6>
                  </div>
                  <p className="card-text mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>
          {`
            .card-title {
              font-size: 1rem;
            }

            .card-text {
              font-size: 0.95rem;
              line-height: 1.5;
            }

            .shadow-sm {
              box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08) !important;
            }
          `}
        </style>
      </div>

      {/* why choose us div */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#3c5a99" }}>
          Why Choose Us
        </h2>
        <div className="row justify-content-center">
          {WhyChooseData.map((item) => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-3" key={item.id}>
              <div className="card border h-100 border-primary">
                <div className="card-img-top bg-soft-primary text-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    width="300px"
                  />
                </div>
                <div className="card-body">
                  <div className="card-title text-facebook font-weight-bold align-items-center d-flex">
                    <span
                      style={{ color: "#3c5a99", fontWeight: "bold" }}
                      className="flex-1"
                    >
                      {item.title}
                    </span>
                  </div>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackLinkGuest;
