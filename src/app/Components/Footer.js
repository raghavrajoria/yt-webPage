import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Images/Logo.svg";
import F2 from "../Images/instaFooter.svg";
import F3 from "../Images/instaFooter.svg";
import F4 from "../Images/instaFooter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <footer
        className="footer p-0 "
        style={{
          background:
            "linear-gradient(to right, rgb(175, 221, 255), rgb(255, 255, 255))",
        }}
      >
        <div className="container py-4">
          <div className="row d-flex">
            {/* Left side - All content sections */}
            <div className="col-md-9">
              <div className="row row-cols-2 row-cols-md-3 g-3">
                {/* Competitive Research */}
                <div className="col">
                  <h6>
                    <strong>Competitive Research</strong>
                  </h6>
                  <div className="mb-1">
                    <a
                      href="/free-da-pa-checker"
                      className="text-decoration-none text-dark"
                    >
                      Domain Overview
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/meta-description-preview-generator"
                      className="text-decoration-none text-dark"
                    >
                      SERP Simulator
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/discover-your-competitors-keywords-to-boost-your-rankings-with-seobix"
                      className="text-decoration-none text-dark"
                    >
                      Keyword Gap
                    </a>
                  </div>
                </div>

                {/* Page SEO */}
                <div className="col">
                  <h6>
                    <strong>Page SEO</strong>
                  </h6>
                  <div className="mb-1">
                    <a
                      href="/free-seo-audit-services"
                      className="text-decoration-none text-dark"
                    >
                      SEO Audit
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/transform-your-content-with-google-structured-data-for-better-search-results"
                      className="text-decoration-none text-dark"
                    >
                      Structure Data
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/one-click-to-every-page-and-your-ultimate-site-seo-is-ready"
                      className="text-decoration-none text-dark"
                    >
                      On Page Seo
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/help-google-crawlers-manage-website"
                      className="text-decoration-none text-dark"
                    >
                      Robots.txt
                    </a>
                  </div>
                </div>

                {/* Content Checker */}
                <div className="col">
                  <h6>
                    <strong>Content Checker</strong>
                  </h6>
                  <div className="mb-1">
                    <a
                      href="/generate-your-perfect-sitemap-in-seconds-with-our-seobix-tool"
                      className="text-decoration-none text-dark"
                    >
                      Content Generator
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/enerate-your-perfect-sitemap-in-seconds-with-our-seobix-tool"
                      className="text-decoration-none text-dark"
                    >
                      Quality Content Checker
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/generate-your-perfect-sitemap-in-seconds-with-our-seobix-tool"
                      className="text-decoration-none text-dark"
                    >
                      Humanizer
                    </a>
                  </div>
                </div>

                {/* Backlinks */}
                <div className="col">
                  <h6>
                    <strong>Backlinks</strong>
                  </h6>
                  <div className="mb-1">
                    <a
                      href="/best-keyword-research-tool"
                      className="text-decoration-none text-dark"
                    >
                      Backlink Generator
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/construct-your-seo-success-with-keyword-builder"
                      className="text-decoration-none text-dark"
                    >
                      Backlink Checker
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/construct-your-seo-success-with-keyword-builder"
                      className="text-decoration-none text-dark"
                    >
                      Link Building Tool
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/construct-your-seo-success-with-keyword-builder"
                      className="text-decoration-none text-dark"
                    >
                      Top Pages
                    </a>
                  </div>
                </div>

                {/* Keyword Research */}
                <div className="col">
                  <h6>
                    <strong>Keyword Research</strong>
                  </h6>
                  <div className="mb-1">
                    <a href="/" className="text-decoration-none text-dark">
                      Keyword Magic Tool
                    </a>
                  </div>
                  <div className="mb-1">
                    <a href="/" className="text-decoration-none text-dark">
                      Keyword Builder
                    </a>
                  </div>
                  <div className="mb-1">
                    <a href="/" className="text-decoration-none text-dark">
                      Position Tracker
                    </a>
                  </div>
                </div>

                {/* Bix Labs with Google */}
                <div className="col">
                  <h6>
                    <strong>Bix Labs with Google</strong>
                  </h6>
                  <div className="mb-1">
                    <a href="/" className="text-decoration-none text-dark">
                      Google Analytics
                    </a>
                  </div>
                  <div className="mb-1">
                    <a href="/" className="text-decoration-none text-dark">
                      Google Search Console
                    </a>
                  </div>
                  <div className="mb-1">
                    <a
                      href="/trending-now-on-google"
                      className="text-decoration-none text-dark"
                    >
                      Google Trends
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Connect With Us */}
            <div className="col-md-3 border-start ps-md-4">
              <h5 className="mb-3">
                <strong>Connect With Us</strong>
              </h5>
              <div className="d-flex gap-2 mb-3">
                <Link to="/">
                  <img style={{ height: "1.7rem" }} src={F2} alt="Social 1" />
                </Link>
                <Link to="/">
                  <img style={{ height: "1.7rem" }} src={F3} alt="Social 2" />
                </Link>
                <Link to="/">
                  <img style={{ height: "1.7rem" }} src={F4} alt="Social 3" />
                </Link>
              </div>

              <div className="mb-3">
                <a
                  href="/contact-us"
                  className="text-decoration-none text-dark"
                >
                  <strong>Contact the Help team</strong>
                </a>
              </div>

              <h5 className="mb-3">
                <strong>Join our newsletter</strong>
              </h5>

              <a href="/Register">
                <button
                  className="btn rounded-pill text-white px-3 py-1"
                  style={{
                    background: "linear-gradient(90deg, #574981, #0075a8)",
                  }}
                >
                  Sign Up now!
                </button>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-3" style={{ backgroundColor: "#002f50" }}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="mb-2 mb-md-0">
            <Link to="/">
              <img style={{ height: "1.7rem" }} src={logo} alt="seobix logo" />
            </Link>
          </div>
          <div className="text-center text-md-end">
            <p className="mb-0 text-white small">
              © 2025 SEOBIX, Pvt. Ltd. All rights reserved. SEOBIX is a
              registered trademark.
            </p>
            <div className="d-flex justify-content-center justify-content-md-end gap-2 mt-2">
              <a className="text-white small" href="/privacy-policy">
                Privacy Policy
              </a>
              <a className="text-white small" href="/terms-and-conditions">
                Terms of Use
              </a>
              <a className="text-white small" href="/faq">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
