import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/Logo.svg";
import {
  Button,
  Dropdown,
  Navbar,
  Nav as BsNav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { href, Link } from "react-router-dom";
import "./Navbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
  const submenuRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const submenuData = [
    {
      name: "Competitive Research",
      subMenu: [
        {
          name: "Domain Overview",
          desc: "Check your DA and PA for Free",
          href: "https://www.seobix.com/free-da-pa-checker",
        },
        {
          name: "Age Checker",
          desc: "Track domain age and its web evolution For Free",
          href: "https://www.seobix.com/domain-age-checker-track-website-journey",
        },
        {
          name: "SERP Simulator",
          desc: "Craft and test meta descriptions visually, instantly",
          href: "https://www.seobix.com/meta-description-preview-generator",
        },
        {
          name: "Keyword Gap",
          desc: "Find Competitor’s  Ranking keywords and grow your traffic",
          href: "https://www.seobix.com/discover-your-competitors-keywords-to-boost-your-rankings-with-seobix",
        },
        {
          name: "Linking Domain",
          desc: "Analyze your linking domains effortlessly with SeoBix",
          href: "https://www.seobix.com/linking-domain-checker",
        },
        {
          name: "Top Pages",
          desc: "Find the top domains linked to your website",
          href: "https://www.seobix.com/check-top-linking-domain",
        },
        {
          name: "Link Building Tool",
          desc: "Store Your Backlinks easily with SeoBix",
          href: "https://www.seobix.com/link-building-tool",
        },
      ],
    },
    {
      name: "Page Seo",
      subMenu: [
        {
          name: "SEO Audit",
          desc: "Detect Your Website Errors in Seconds",
          href: "https://www.seobix.com/free-seo-audit-services",
        },
        {
          name: "Pages",
          desc: "One click to optimize your entire site’s SEO",
          href: "https://www.seobix.com/one-click-to-every-page-and-your-ultimate-site-seo-is-ready",
        },
        {
          name: "Structure Data",
          desc: "Turn content into rich snippets with structured data",
          href: "https://www.seobix.com/transform-your-content-with-google-structured-data-for-better-search-results",
        },
        {
          name: "Internal Links",
          desc: "Optimize internal linking",
          href: "https://www.seobix.com/boost-your-seo-with-smart-internal-linking-strategies",
        },
        {
          name: "Sitemap",
          desc: "Generate a perfect sitemap in seconds",
          href: "https://www.seobix.com/generate-your-perfect-sitemap-in-seconds-with-our-seobix-tool",
        },
        {
          name: "Social Links",
          desc: "Manage your social media account with SeoBix",
          href: "https://www.seobix.com/boost-your-social-media-with-the-best-social-links-generator",
        },
        {
          name: "Robots.txt",
          desc: "Generate a perfect Crawler control file quickly.",
          href: "https://www.seobix.com/help-google-crawlers-manage-website",
        },
      ],
    },
    {
      name: "Content Checker",
      subMenu: [
        {
          name: "Content Generator",
          desc: "Generates content",
          href: "https://www.seobix.com/generate-your-perfect-sitemap-in-seconds-with-our-seobix-tool",
        },
        {
          name: "Quality Content Checker",
          desc: "Checks the quality of the content posted",
          href: "https://www.seobix.com/generate-your-perfect-sitemap-in-seconds-with-our-seobix-tool",
        },
        {
          name: "Humanizer",
          desc: "Checks for bots",
          href: "https://www.seobix.com/generate-your-perfect-sitemap-in-seconds-with-our-seobix-tool",
        },
      ],
    },
    {
      name: "Google Trends",
      subMenu: [
        {
          name: "Trending Now",
          desc: "Find What’s trending on Search engine",
          href: "https://www.seobix.com/trending-now-on-google",
        },
        {
          name: "Interest Overtime",
          desc: "See the consistency of keyword over time",
          href: "https://www.seobix.com/boost-google-ranking-with-keyword-interest",
        },
        {
          name: "Rising Topic",
          desc: "Find what will trend on the Browser",
          href: "https://www.seobix.com/increase-google-ranking-with-trending-topics",
        },
      ],
    },
    {
      name: "Keyword Research",
      subMenu: [
        {
          name: "Keyword Magic Tool",
          desc: "Find the best keywords for SEO success",
          href: "https://www.seobix.com/best-keyword-research-tool",
        },
        {
          name: "Keyword Builder",
          desc: "Store smart keyword ideas in seconds",
          href: "https://www.seobix.com/construct-your-seo-success-with-keyword-builder",
        },
      ],
    },

    {
      name: "Search Console",
      subMenu: [
        {
          name: "URL Inspection",
          desc: "Inspect your URL indexing status",
          href: "https://www.seobix.com/best-url-inspection-tool",
        },
        {
          name: "Sitemap",
          desc: "Generate a perfect sitemap in seconds",
          href: "https://www.seobix.com/generate-your-perfect-sitemap-in-seconds-with-our-seobix-tool",
        },
      ],
    },
  ];

  return (
    <>
      <Row className="d-flex justify-content-center mx-md-0 mx-2">
        <Col md={10}>
          <Navbar expand="lg" bg="white" expanded={expanded}>
            <Navbar.Brand as={Link} to="/" style={{ marginRight: "6rem" }}>
              <img src={logo} alt="Logo" style={{ height: "3rem" }} />
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setExpanded(!expanded)}
            />

            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{ overflowX: "hidden" }}
            >
              <BsNav className="me-auto d-flex align-items-lg-center gap-5">
                <div className="dropdown-wrapper" ref={submenuRef}>
                  <li className="nav-item dropdown position-static">
                    <a
                      className="nav-link  "
                      href="#"
                      id="toolsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="d-flex align-items-center gap-1 nav-link-underline">
                        Tools <MdKeyboardArrowDown size={18} />
                      </span>
                    </a>

                    <div
                      className="dropdown-menu mt-0 border-0 "
                      aria-labelledby="toolsDropdown"
                      style={{
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        left: 0,
                        right: 0,
                      }}
                    >
                      <Container>
                        <div className="row">
                          {submenuData.map((section, index) => (
                            <div key={index} className="col-md-6 col-lg-2 ">
                              <div className="list-group ">
                                <p className="mb-1 list-group-item text-uppercase fw-bold text-decoration-underline bg-white border-0">
                                  {section.name}
                                </p>
                                {section.subMenu.map((item, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={item.href}
                                    className="list-group-item list-group-item-action"
                                  >
                                    <i className="fas fa-caret-right "></i>
                                    <strong>{item.name}</strong>
                                    {item.desc && (
                                      <p
                                        style={{
                                          fontSize: "small",
                                          marginBottom: 0,
                                        }}
                                      >
                                        {item.desc}
                                      </p>
                                    )}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </Container>
                    </div>
                  </li>
                </div>

                <Link className="nav-link-underline">Solutions</Link>
                <Link className="nav-link-underline">Resources</Link>
                <a
                  href="https://www.seobix.com/blog"
                  className="nav-link-underline"
                >
                  Blogs
                </a>
                <Link
                  to="https://www.seobix.com/pricing-plans"
                  className="nav-link-underline"
                >
                  Pricing
                </Link>
              </BsNav>

              <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 mt-3 mt-lg-0">
                <span
                  style={{
                    color: "#333",
                    fontWeight: 500,
                    cursor: "pointer",
                    padding: "4px 12px",
                    border: "2px solid #007bff",
                    borderRadius: "6px",
                    fontSize: ".9rem",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() =>
                    window.open("https://dashboard.seobix.com/", "_blank")
                  }
                >
                  Login
                </span>

                <span
                  style={{
                    color: "#333",
                    fontWeight: 500,
                    cursor: "pointer",
                    padding: "4px 12px",
                    border: "2px solid #007bff",
                    borderRadius: "6px",
                    fontSize: ".9rem",
                    whiteSpace: "nowrap",
                  }}
                  onClick={() =>
                    window.open("https://dashboard.seobix.com/", "_blank")
                  }
                >
                  Book a Demo
                </span>

                <Link to="/pricing-plans">
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                      cursor: "pointer",
                      padding: "7px 12px",
                      border: "1px solid #007bff",
                      backgroundColor: "#007bff",
                      borderRadius: "6px",
                      fontSize: ".9rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Get Started Free
                  </span>
                </Link>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default Nav;
