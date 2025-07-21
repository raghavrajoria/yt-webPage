import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css"; // optional: your custom styles
import { BiChevronRight } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="container d-md-flex align-items-stretch">
      {/* Page Content */}
      <div id="content" className="p-4 p-md-5 pt-5">
        <h2 className="mb-4">Sidebar #08</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur...
        </p>
      </div>

      {/* Sidebar */}
      <nav id="sidebar">
        <div className="p-4 pt-5">
          <h5>TOOLS</h5>
          <ul className="list-unstyled components mb-5">
            {/* Competitive Research */}
            <li>
              <a
                href="#pageSubmenu1"
                data-bs-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle d-flex justify-content-between align-items-center"
              >
                Competitive Research
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu1">
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight /> Domain Overview
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span> <BiChevronRight />
                    SERP Simulator
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span> <BiChevronRight />
                    Keyword Gap
                  </a>
                </li>
              </ul>
            </li>

            {/* Page SEO */}
            <li>
              <a
                href="#pageSubmenu2"
                data-bs-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Page SEO
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu2">
                <li>
                  <a href="#">
                    <span className=" mr-2"></span> <BiChevronRight />
                    SEO Audit
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span> <BiChevronRight />
                    Structure Data
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    On Page Seo
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Robots.txt
                  </a>
                </li>
              </ul>
            </li>

            {/* Content Checker */}
            <li>
              <a
                href="#pageSubmenu3"
                data-bs-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Content Checker
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu3">
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Content Generator
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Quality Content Checker
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Humanizer
                  </a>
                </li>
              </ul>
            </li>

            {/* Backlinks */}
            <li>
              <a
                href="#pageSubmenu4"
                data-bs-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Backlinks
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu4">
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Backlink Generator
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Backlink
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Link Building Tool
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Top Pages
                  </a>
                </li>
              </ul>
            </li>

            {/* Keyword Research */}
            <li>
              <a
                href="#pageSubmenu5"
                data-bs-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Keyword Research
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu5">
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Keyword Magic tool
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Keyword Builder
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Position Tracker
                  </a>
                </li>
              </ul>
            </li>

            {/* Bix Labs with Google */}
            <li>
              <a
                href="#pageSubmenu6"
                data-bs-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Bix Labs with Google
              </a>
              <ul className="collapse list-unstyled" id="pageSubmenu6">
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Google Analytics
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Google Search Console
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className=" mr-2"></span>
                    <BiChevronRight />
                    Google Trends
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
