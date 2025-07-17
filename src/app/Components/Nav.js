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
import { IoArrowRedoSharp } from "react-icons/io5";

const Nav = () => {
  const submenuRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const submenuData = [
    {
      name: "Competitive Research",
      subMenu: [
        {
          name: "Domain Authority",
          desc: "Check DA and PA and track your domain age for Free",
          href: "/free-da-pa-checker",
        },

        {
          name: "SERP Simulator",
          desc: "Craft and test meta descriptions visually, instantly",
          href: "/meta-description-preview-generator",
        },
        {
          name: "Keyword Gap",
          desc: "Find Competitor’s  Ranking keywords and grow your traffic",
          href: "/discover-your-competitors-keywords-to-boost-your-rankings-with-seobix",
        },
        // {
        //   name: "Linking Domain",
        //   desc: "Analyze your linking domains effortlessly with SeoBix",
        //   href: "/linking-domain-checker",
        // },
        // {
        //   name: "Top Pages",
        //   desc: "Find the top domains linked to your website",
        //   href: "/check-top-linking-domain",
        // },
        // {
        //   name: "Link Building Tool",
        //   desc: "Store Your Backlinks easily with SeoBix",
        //   href: "/link-building-tool",
        // },
      ],
    },
    {
      name: "Page Seo",
      subMenu: [
        {
          name: "SEO Audit",
          desc: "Audit Your Website Errors in Seconds",
          href: "/free-seo-audit-services",
        },
        {
          name: "On Pages Seo",
          desc: "One click to optimize your entire site’s SEO",
          href: "/one-click-to-every-page-and-your-ultimate-site-seo-is-ready",
        },
        {
          name: "Structure Data",
          desc: "Turn content into rich snippets with structured data",
          href: "/transform-your-content-with-google-structured-data-for-better-search-results",
        },
        {
          name: "Robots.txt",
          desc: "Generate a perfect Crawler control file quickly.",
          href: "/help-google-crawlers-manage-website",
        },
      ],
    },
    {
      name: "Content Checker",
      subMenu: [
        {
          name: "Content Generator",
          desc: "Generate Quality Content with SeoBix’s Content Generator",
          href: "/ai-content-generator",
        },
        {
          name: "Quality Content Checker",
          desc: "Analyze the AI content & quality of the content ",
          href: "/quality-content-checker",
        },
        {
          name: "Humanizer",
          desc: "Humanize AI-generated content with Humanizer",
          href: "/content-humanizer",
        },
      ],
    },
    {
      name: "Backlinks",
      subMenu: [
        {
          name: "Backlink Generator",
          desc: "Generate high-authority backlinks in entering your domain in minutes",
          href: "/trending-now-on-google",
        },
        {
          name: "Backlink Checker",
          desc: "Analyze the backlinks of your domains",
          href: "/boost-google-ranking-with-keyword-interest",
        },
        {
          name: "Link Building Tool",
          desc: "Store Your Backlinks easily with SeoBix",
          href: "/link-building-tool",
        },
        {
          name: "Top Pages",
          desc: "Find the top domains linked to your website",
          href: "/check-top-linking-domain",
        },
      ],
    },
    {
      name: "Keyword Research",
      subMenu: [
        {
          name: "Keyword Magic Tool",
          desc: "Find the best keywords for SEO success",
          href: "/best-keyword-research-tool",
        },
        {
          name: "Keyword Builder",
          desc: "Store smart keyword ideas in seconds",
          href: "/construct-your-seo-success-with-keyword-builder",
        },
        {
          name: "Position Tracker",
          desc: "Track the rankings of the keywords you’re optimizing",
          href: "/domain-age-checker-track-website-journey",
        },
      ],
    },

    {
      name: "Bix Lab With Google",
      subMenu: [
        {
          name: "Google Analytics",
          desc: "Integrated Google Analytics by connecting your domain.",
          href: "/best-url-inspection-tool",
        },
        {
          name: "Google Search Console",
          desc: "Analyze your domain traffic by linking your domain. ",
          href: "/generate-your-perfect-sitemap-in-seconds-with-our-seobix-tool",
        },
        {
          name: "Google Trends",
          desc: "Go with the trends and boost your traffic with SeoBix",
          href: "/generate-your-perfect-sitemap-in-seconds-with-our-seobix-tool",
        },
      ],
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{
          background:
            "linear-gradient(to right, #AFDDFF 0%, #C5E7FF 30%, #DAF0FF 60%, #EDF8FF 85%, #FFFFFF 100%)",
        }}
      >
        <div
          className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start p-2 m-0"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: ".9rem",
            fontWeight: "600",
            color: "#003366",
            letterSpacing: "0.5px",
            lineHeight: "1.6",
          }}
        >
          {/* <img
            src={helpIcon}
            alt="Help"
            style={{
              width: "2rem",
              height: "2rem",
              marginRight: "0.5rem",
              marginBottom: "0.5rem",
            }}
          /> */}
          <span>
            Inspect Your Website’s SEO Performance in detail with the help of
            Free SeoBix’s Tools
            <a
              href="/Sitereport"
              className="text-decoration-none"
              style={{
                marginLeft: "0.5rem",
                color: "inherit",
              }}
            >
              <span style={{ color: "#FC4100" }}>
                Inspect Now <IoArrowRedoSharp />
              </span>
            </a>
          </span>
        </div>
      </div>
      <div
        className={`sticky-navbar-wrapper ${isScrolled ? "shadow-sm" : ""}`}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1050,
          background: "white",
        }}
      >
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
                    <li
                      className="nav-item dropdown position-static"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <a
                        className="nav-link"
                        href="#"
                        id="toolsDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded={isDropdownOpen}
                      >
                        <span
                          className={`d-flex align-items-center gap-1 nav-link-underline ${
                            isDropdownOpen ? "active-underline" : ""
                          }`}
                        >
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
                              <div
                                key={index}
                                className="col-md-6 col-lg-2 mb-3"
                              >
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
                                      <strong style={{ fontSize: ".9rem" }}>
                                        {item.name}
                                      </strong>
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

                  <Link className="nav-link-underline">Resources</Link>
                  <a href="/blog" className="nav-link-underline">
                    Blogs
                  </a>
                  <Link to="/pricing-plans" className="nav-link-underline">
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
      </div>{" "}
    </>
  );
};

export default Nav;
