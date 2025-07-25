import React, { useContext, useEffect, useState, useRef } from "react";
import {
  Button,
  Col,
  Form,
  Row,
  Card,
  Table,
  Container,
} from "react-bootstrap";
import { BASE_URL_API_TRANXT_UAT_API } from "../Utils/Constant";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
  FaSearch,
  FaChartBar,
  FaFileAlt,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import RootDomain from "..//Images/Root Domain.png";
import LinkingDomainImg from "..//Images/Linking Domain.png";
import domainAuthority from "..//Images/Domain Authority.png";
import LinkPropensity from "..//Images/LinkPropensity.png";
import SpamScore from "..//Images/SpamScore.png";
import Footer from "./Footer";
import Nav from "./Navbar";
import SideTab from "./Toolstab";
const Backlinkchecker = () => {
  const [visibleRows, setVisibleRows] = useState(10);
  const [transactionLoaderState, setTransactionLoaderState] = useState(false);
  const [linkingDomains, setLinkingDomains] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [selectedDomainType, setSelectedDomainType] = useState({
    value: "root",
    label: "Root Domain",
  });
  const domainTypeOptions = [
    { value: "root", label: "🌐 Root Domain" },
    { value: "sub", label: "🔗 Sub Domain" },
  ];
  const FetchLinkingDomain = async () => {
    if (!domainInput) {
      alert("Please enter a valid domain.");
      return;
    }

    setTransactionLoaderState(true);

    try {
      const res = await fetch(
        `${BASE_URL_API_TRANXT_UAT_API}/api/Seo/FetchBacklinks`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: domainInput,
          }),
        }
      );

      const data = await res.json();

      if (Array.isArray(data.results) && data.results.length > 0) {
        setTableData(data.results);
      } else {
        setTableData([]);
      }
    } catch (error) {
      console.error("Error fetching linking domain data:", error);
      setTableData([]);
    }

    setTransactionLoaderState(false);
  };

  const FetchLinkingDomainLinks = async (sourceUrl, sourceUrlId) => {
    console.log(sourceUrl);
    if (!domainInput) {
      alert("Please enter a valid domain.");
      return;
    }
    setTransactionLoaderState(true);
    try {
      const res = await fetch(
        `${BASE_URL_API_TRANXT_UAT_API}/api/Seo/FetchLinkingDomainLinks`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            targetUrl: domainInput,
            sourceUrl: sourceUrl,
            sourceUrlId: sourceUrlId,
            type: "0",
          }),
        }
      );
      const result = await res.json();
      if (result.status === "0" && result.data) {
        setLinkingDomains(result.data);
      } else {
        console.error("Error fetching data:", result.msg);
      }
    } catch (error) {
      console.error("Error fetching linking domain data:", error);
    }
    setTransactionLoaderState(false);
  };

  const handleRowExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };
  const generateUUID = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  };
  const [siteMetrics, setSiteMetrics] = useState(null);
  const FetchSiteMetrics = async (type) => {
    setTransactionLoaderState(true);
    try {
      const uuid = generateUUID();
      const res = await fetch(
        `${BASE_URL_API_TRANXT_UAT_API}/api/Seo/FetchSiteMetrics`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uuid: uuid,
            url: domainInput,
            scope: "domain",
            type: type,
          }),
        }
      );
      const data = await res.json();
      if (
        data.status === "0" &&
        data.msg === "Success" &&
        data.data.length > 0
      ) {
        setSiteMetrics(data.data[0]);
      } else {
        console.log("No site metrics found.");
      }
    } catch (error) {
      console.error("Error fetching site metrics:", error);
    } finally {
      setTransactionLoaderState(false);
    }
  };
  useEffect(() => {
    const styleSheet = document.styleSheets[0];

    const keyframes = `
 @keyframes fadeInUp {
 from {
 opacity: 0;
 transform: translateY(20px);
 }
 to {
 opacity: 1;
 transform: translateY(0);
 }
 }
 `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, []);
  const [domainInput, setDomainInput] = useState("");

  const handleInputChange = (e) => {
    setDomainInput(e.target.value);
  };
  //   slider

  return (
    <>
      <style>
        {`
.table-wrapper {
 position: relative;
 min-height: 300px;
 overflow: hidden;
}
.view-more-overlay {
 position: sticky;
 bottom: 0;
 left: 0;
 right: 0;
 height: 60px;
 display: flex;
 justify-content: center;
 align-items: flex-end;
 z-index: 10;
 background: linear-gradient(to bottom, transparent, white);
}


 .blur-bg {
 position: absolute;
 bottom: 0;
 height: 60px;
 width: 100%;
 backdrop-filter: blur(6px);
 background: linear-gradient(to bottom, transparent, white);
 z-index: 1;
 pointer-events: none;
 }

 .view-more-btn {
 z-index: 2;
 pointer-events: auto;
 margin-bottom: 10px;
 }
`}
      </style>

      <Container
        fluid
        className="p-0"
        style={{
          overflowX: "hidden",
        }}
      >
        <div>
          <Nav />
        </div>
        <Row
          className="d-flex justify-content-center "
          style={{ background: "#2E3C56" }}
        >
          <Col
            md={10}
            className="mt-4"
            style={{
              borderRadius: "1rem",
            }}
          >
            {transactionLoaderState && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  height: "100vh",
                  width: "100vw",
                  background: "rgba(255,255,255,0.6)",
                  zIndex: 9999,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            <div className="m-3">
              <style>
                {`
 .hide-scrollbar::-webkit-scrollbar {
 display: none; }
 `}
              </style>

              <h1
                style={{ fontSize: "4.5rem", fontWeight: "400", color: "#fff" }}
              >
                Backlink Checker
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "400",
                  color: "#cbd5e1",
                }}
              >
                Try the free version of SEOBIX Backlink Checker. Get a glimpse
                <br />
                into the power of our premium tool.
              </p>

              <Form className="mb-4">
                <Row className="g-2 ">
                  <Col md={7}>
                    <Form.Group controlId="formDomainInput">
                      <Form.Label className="visually-hidden">
                        Domain
                      </Form.Label>
                      <Form.Control
                        value={domainInput}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter domain (e.g. seobix.com)"
                        style={{
                          background: "#2E3C56",
                          color: "#white",
                          border: "1px solid white",
                          borderRadius: "0",
                          fontSize: "1.2rem",
                          fontWeight: "400",
                          height: "48px",
                          color: "#fff",
                        }}
                        className="shadow-sm px-4"
                      />
                      <style>
                        {`
 input::placeholder {
 color: white !important;
 opacity: 1;
 }
 `}
                      </style>
                    </Form.Group>
                  </Col>
                  <Col md={3}>
                    <Form.Group controlId="formDomainType">
                      <Form.Label className="visually-hidden">
                        Domain Type
                      </Form.Label>
                      <Form.Select
                        value={selectedDomainType.value}
                        onChange={(e) =>
                          setSelectedDomainType({
                            value: e.target.value,
                            label:
                              e.target.value === "root"
                                ? "🌐 Root Domain"
                                : "🔗 Sub Domain",
                          })
                        }
                        style={{
                          background: "#2E3C56",
                          color: "#fff",
                          border: "1px solid #cbd5e1",
                          borderRadius: 0,
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          height: "48px",
                        }}
                      >
                        <option value="root">🌐 Root Domain</option>
                        <option value="sub">🔗 Sub Domain</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Button
                      className="w-100"
                      style={{
                        background: "#F80",
                        color: "#fff",
                        border: "none",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        borderRadius: 0,
                        height: "48px",
                      }}
                      onClick={() => {
                        FetchLinkingDomain("1");
                        FetchSiteMetrics("1");
                      }}
                    >
                      Analyze
                    </Button>
                  </Col>
                </Row>
              </Form>

              {siteMetrics && (
                <div
                  className="mb-2 p-2"
                  style={{
                    background: "rgba(234,229,244)",
                    borderRadius: ".4rem",
                  }}
                >
                  <h5 className="text-center" style={{ color: "#441752" }}>
                    Result for {siteMetrics.url}
                  </h5>
                  <Row>
                    <Col md={3}>
                      <Card
                        className="p-1"
                        style={{ background: "#fff", borderRadius: "0.4rem" }}
                      >
                        <h6 className="text-center">
                          <b>Domain Authority</b>
                        </h6>
                        <div className="d-flex align-items-center justify-content-center">
                          <CustomPieChart
                            value={Number(siteMetrics.da)}
                            fillColor="#c96117ff"
                          />
                        </div>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card
                        className="p-1"
                        style={{ background: "#fff", borderRadius: "0.4rem" }}
                      >
                        <h6 className="text-center">
                          <b>Page Authority</b>
                        </h6>
                        <div className="d-flex align-items-center justify-content-center">
                          <CustomPieChart
                            value={Number(siteMetrics.pa)}
                            fillColor="#003366"
                          />
                        </div>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card
                        className="p-1"
                        style={{ background: "#fff", borderRadius: "0.4rem" }}
                      >
                        <h6 className="text-center">
                          <b>Linking Domains</b>
                        </h6>
                        <div className="d-flex align-items-center justify-content-center">
                          <CustomPieChart
                            value={Number(siteMetrics.linking_domain)}
                            fillColor="#ffc107"
                          />
                        </div>
                      </Card>
                    </Col>
                    <Col md={3}>
                      <Card
                        className="p-1"
                        style={{ background: "#fff", borderRadius: "0.4rem" }}
                      >
                        <h6 className="text-center">
                          <b>Spam Score</b>
                        </h6>
                        <div className="d-flex align-items-center justify-content-center">
                          <CustomPieChart
                            value={Number(siteMetrics.spam_score)}
                            fillColor="#ff0055"
                          />
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              )}
              {tableData.length > 0 && (
                <div className="table-wrapper position-relative">
                  <Table className="mt-4" responsive bordered>
                    <thead>
                      <tr>
                        <th>Root Domain</th>
                        <th>Linking Domains</th>
                        <th>Domain Authority</th>
                        <th>Link Propensity</th>
                        <th>Spam Score</th>
                        <th>Pages</th>
                        <th>Nofollow</th>
                        <th>Redirect</th>
                        <th>Deleted</th>
                        <th className="text-center">Expand</th>
                      </tr>
                    </thead>

                    <tbody>
                      {tableData.length > 0 ? (
                        tableData.slice(0, visibleRows).map((item, index) => (
                          <React.Fragment key={index}>
                            <tr>
                              <td>{item.root_domain}</td>
                              <td>{item.root_domains_to_root_domain}</td>
                              <td>{item.domain_authority}</td>
                              <td>
                                {parseFloat(item.link_propensity).toFixed(2)}
                              </td>
                              <td>
                                {item.spam_score >= 0
                                  ? `${item.spam_score}%`
                                  : "N/A"}
                              </td>
                              <td>{item.to_target?.pages ?? 0}</td>
                              <td>{item.to_target?.nofollow_pages ?? 0}</td>
                              <td>{item.to_target?.redirect_pages ?? 0}</td>
                              <td>{item.to_target?.deleted_pages ?? 0}</td>

                              <td className="text-center">
                                {expandedRow === index ? (
                                  <FaArrowAltCircleDown
                                    style={{ cursor: "pointer" }}
                                    onClick={() => handleRowExpand(index)}
                                  />
                                ) : (
                                  <FaArrowAltCircleRight
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      handleRowExpand(index);
                                      if (item?.root_domain) {
                                        FetchLinkingDomainLinks(
                                          item.root_domain,
                                          index
                                        );
                                      }
                                    }}
                                  />
                                )}
                              </td>
                            </tr>

                            {expandedRow === index && (
                              <tr>
                                <td colSpan="10">
                                  <Table responsive bordered>
                                    <thead>
                                      <tr>
                                        <th>URL</th>
                                        <th>Domain Authority (DA)</th>
                                        <th>Page Authority (PA)</th>
                                        <th>Spam Score</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {linkingDomains.length > 0 ? (
                                        linkingDomains.map((item, index) => (
                                          <tr key={index}>
                                            <td>
                                              <a
                                                href={`https://${item.url}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                {item.url}
                                              </a>
                                            </td>

                                            <td style={{ width: 100 }}>
                                              <CustomPieChart
                                                value={Number(item.da)}
                                                fillColor="#007bff"
                                              />
                                            </td>

                                            <td style={{ width: 100 }}>
                                              <CustomPieChart
                                                value={Number(item.pa)}
                                                fillColor="#28a745"
                                              />
                                            </td>

                                            <td style={{ width: 100 }}>
                                              <CustomPieChart
                                                value={Number(item.spamScore)}
                                                fillColor="#dc3545"
                                              />
                                            </td>
                                          </tr>
                                        ))
                                      ) : (
                                        <tr>
                                          <td
                                            colSpan="5"
                                            className="text-center"
                                          >
                                            No data available
                                          </td>
                                        </tr>
                                      )}
                                    </tbody>
                                  </Table>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center">
                            No data available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                  {visibleRows < tableData.length && (
                    <div className="text-center mt-3">
                      <Button
                        variant="primary"
                        onClick={() => {
                          window.location.href =
                            "https://dashboard.seobix.com/Register";
                        }}
                      >
                        View More
                      </Button>
                    </div>
                  )}
                </div>
              )}
              <div
                style={{
                  background: "#2E3C56",
                  margin: "2rem 0",
                  padding: "2rem 1rem",
                  color: "#fff",
                  borderTop: "1px solid #495670",
                  borderBottom: "1px solid #495670",
                }}
              >
                <Row>
                  <Col md={6}>
                    <h3
                      style={{
                        fontWeight: "600",
                        marginBottom: "1rem",
                        color: "white",
                        fontSize: "2.5rem",
                      }}
                    >
                      The most powerful backlink checker
                    </h3>
                    <p style={{ fontSize: "1.2rem", color: "#fff" }}>
                      SeoBix 's Backlinks Checker &nbsp;
                      <span style={{ color: "#F80", fontWeight: "400" }}>
                        tracks and monitors &nbsp;
                      </span>
                      every backlink, gives you precise insights that help you
                      to grow faster.
                    </p>
                    <p
                      className="mb-4"
                      style={{ fontSize: "1.5rem", color: "#fff" }}
                    >
                      Start Your SEO Journey with SeoBix!
                    </p>
                    <a
                      href="https://dashboard.seobix.com/Register"
                      className="start-now-btn"
                    >
                      Sign Up with 3 month free trial
                    </a>
                    &nbsp;&nbsp;{" "}
                    <span style={{ color: "#F80", fontWeight: "400" }}>
                      <b>OR</b>
                    </span>{" "}
                    &nbsp; &nbsp;{" "}
                    <a
                      href="https://dashboard.seobix.com/Register"
                      className="start-now-btn"
                    >
                      Explore More Tools
                    </a>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col
                        xs={6}
                        style={{ textAlign: "center", marginBottom: "2rem" }}
                      >
                        <div style={{ fontSize: "4rem", fontWeight: "600" }}>
                          1M+
                        </div>
                        <div style={{ fontSize: "1.2rem", color: "#cbd5e1" }}>
                          Pages in index
                        </div>
                      </Col>
                      <Col
                        xs={6}
                        style={{ textAlign: "center", marginBottom: "2rem" }}
                      >
                        <div style={{ fontSize: "4rem", fontWeight: "600" }}>
                          60K+
                        </div>
                        <div style={{ fontSize: "1.2rem", color: "#cbd5e1" }}>
                          Internal backlinks
                        </div>
                      </Col>
                      <Col xs={6} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "4rem", fontWeight: "600" }}>
                          50+
                        </div>
                        <div style={{ fontSize: "1.2rem", color: "#cbd5e1" }}>
                          Domains
                        </div>
                      </Col>
                      <Col xs={6} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "4rem", fontWeight: "600" }}>
                          90K+
                        </div>
                        <div style={{ fontSize: "1.2rem", color: "#cbd5e1" }}>
                          External backlinks
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3" style={{ margin: "0" }}>
          <Col md={10}>
            <Row className="justify-content-between">
              {/* Content */}
              <Content />
              {/* sideTab */}
              <Col md={3}>
                <div
                  className="mb-5"
                  style={{
                    position: "sticky",
                    top: "100px",
                    zIndex: 10,
                    background: "#f8f9fa",
                    padding: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <h5
                    className="text-center mb-4"
                    style={{
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      color: "#fff",
                      backgroundColor: "#799EFF",
                      display: "inline-block",
                      padding: "6px 16px",
                      borderRadius: "0.5rem",
                    }}
                  >
                    🚀 Explore More SEO Tools
                  </h5>
                  <SideTab />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div
          className="m-0 p-0"
          style={{
            overflow: "hidden",
            background:
              "linear-gradient(to right, rgb(175, 221, 255), rgb(255, 255, 255))",

            borderTopRightRadius: "2rem",
            borderTopLeftRadius: "2rem",
          }}
        >
          <Footer />
        </div>
      </Container>
    </>
  );
};
const CustomPieChart = ({ value, fillColor = "#441752" }) => {
  const radius = 36;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#ddd"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={fillColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset, transition: "stroke-dashoffset 0.35s" }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={fillColor}
        fontSize="12"
        fontWeight="bold"
      >
        {value}
      </text>
    </svg>
  );
};

export default Backlinkchecker;

const relatedTools = [
  {
    name: "Backlink Checker",
    icon: <FaSearch size={24} color="#0A3981" />,
    desc: " Generate high-quality backlinks instantly with Backlinks Generator, strengthen your website authority and improve Search engine rankings.",
    href: "backlink-generator",
  },
  {
    name: "Link Building Tool",
    icon: <FaChartBar size={24} color="#0A3981" />,
    desc: "Store backlinks with Link Building Tool,  check your backlinks anytime, and secure your website from broken links.",
    href: "/link-building-tool",
  },
  {
    name: "Top Pages",
    icon: <FaFileAlt size={24} color="#0A3981" />,
    desc: "Identify your highest-performing pages by traffic and engagement. Use this insight to replicate success and refine your SEO content strategy effectively.",
    href: "/check-top-linking-domain",
  },
];
const ToolSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="mt-4" style={{ position: "relative" }}>
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        style={{
          position: "absolute",
          left: "0",
          top: "-9%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "#799EFF",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={scrollRight}
        style={{
          position: "absolute",
          right: "0",
          top: "-9%",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "#799EFF",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <FaChevronRight />
      </button>

      <div
        ref={sliderRef}
        className="mb-4"
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "1rem",
          gap: "1rem",
          scrollbarWidth: "none",
          scrollBehavior: "smooth",
        }}
      >
        {relatedTools.map((tool, idx) => (
          <div
            key={idx}
            style={{
              minWidth: "250px",
              flex: "0 0 auto",
              background: "#f4f8ff",
              borderRadius: "12px",
              padding: "1rem",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
          >
            <div style={{ marginBottom: "0.5rem" }}>{tool.icon}</div>
            <h6 style={{ color: "#0A3981", fontWeight: "bold" }}>
              {tool.name}
            </h6>
            <p
              style={{
                fontSize: "0.9rem",
                minHeight: "60px",
                lineHeight: "1.4",
              }}
            >
              {tool.desc
                .split(" ")
                .map((word, i) =>
                  (i + 1) % 7 === 0 ? word + "\n" : word + " "
                )
                .join("")
                .split("\n")
                .map((line, idx) => (
                  <span key={idx}>
                    {line.trim()}
                    <br />
                  </span>
                ))}
            </p>
            <a
              href={tool.href}
              style={{
                color: "#fff",
                backgroundColor: "#799EFF",
                padding: "6px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-block",
                fontWeight: "bold",
              }}
            >
              Try Now →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <>
      <Col md={8}>
        <h3>Why Are Backlinks Important?</h3>
        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          1. Improves SEO Rankings
        </p>
        <p>
          Backlinks act like endorsements from other websites, signaling to
          search engines that your content is valuable and trustworthy. The more
          high-quality backlinks you have especially from authoritative domains
          the higher your chances of ranking on the first page of Google. Search
          engine algorithms use backlinks as a major ranking factor, making them
          critical for SEO success.
        </p>
        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          2. Increases Website Traffic
        </p>
        <p>
          Backlinks placed on relevant or high-traffic websites can bring
          targeted visitors directly to your site. When users click on those
          links, they are directed to your content, which increases your chances
          of conversions. This referral traffic is often highly engaged as it
          comes from users already interested in related topics.
        </p>
        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          3. Builds Credibility and Authority
        </p>
        <p>
          Earning backlinks from reputable sources adds credibility to your
          brand in the eyes of both search engines and users. It shows that
          other trusted websites find your content valuable enough to reference.
          Over time this helps improve your site’s domain authority and
          positions you as a thought leader in your niche.
        </p>
        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          4. Faster Indexing by Search Engines
        </p>
        <p>
          Search engine bots discover and crawl the web by following links. If
          your website receives backlinks from already indexed and frequently
          crawled websites it increases the chances of your content being found
          and indexed faster. This is especially helpful for new websites or
          newly published pages.
        </p>
        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          5. Strengthens Brand Visibility
        </p>
        <p>
          Backlinks from industry-specific websites, blogs, or news outlets help
          put your brand in front of the right audience. Each backlink serves as
          a gateway for new users to discover your brand, products, or services.
          Over time, this exposure contributes to increased brand recognition
          and authority in your market.
        </p>
        <div className="p-3">
          <ToolSlider />
        </div>
        <p style={{ fontSize: "1.2rem", fontWeight: "600" }}>
          Decode Your Backlink Profile: Root Domains, Spam Score & More
          Explained
        </p>

        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>1. Root Domain</p>
        <img
          className="mb-2"
          src={RootDomain}
          alt="Root Domain"
          style={{ height: "20rem", width: "100%" }}
        />

        <p>
          The root domain is the base-level domain name of a website, such as
          example.com, without any prefixes like “www” or subdomains like
          “blog.example.com.” In SEO, backlinks from different root domains are
          considered more valuable than multiple links from the same one. This
          is because each unique root domain acts as an independent vote of
          trust. Search engines prioritize backlinks from a variety of root
          domains to assess your site’s authority.
        </p>
        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          2. Linking Domain
        </p>
        <img
          className="mb-2"
          src={LinkingDomainImg}
          alt="Linking Domain"
          style={{ height: "20rem", width: "100%" }}
        />
        <p>
          A linking domain is any external website that provides at least one
          backlink to your site. Even if the same domain links to you multiple
          times from different pages, it still counts as one linking domain. The
          number of unique linking domains is a key indicator of your website’s
          backlink diversity and trustworthiness. More linking domains from
          reputable sites generally mean better search engine rankings.
        </p>

        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          3. Domain Authority
        </p>
        <img
          className="mb-2"
          src={domainAuthority}
          alt="Linking Domain"
          style={{ width: "50vw" }}
        />
        <p>
          Link propensity refers to how frequently a website links out to other
          domains. Websites with high link propensity often include many
          outbound links (like blogs or directories), while those with low link
          propensity (such as news sites or educational institutions) rarely do
          so. A backlink from a site with low link propensity is often more
          valuable as it suggests the link was earned through high-quality
          trusted content.
        </p>

        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>
          4. Link Propensity
        </p>
        <img
          className="mb-2"
          src={LinkPropensity}
          alt="Linking Domain"
          style={{ height: "20rem", width: "100%" }}
        />
        <p>
          Link propensity refers to how frequently a website links out to other
          domains. Websites with high link propensity often include many
          outbound links (like blogs or directories), while those with low link
          propensity (such as news sites or educational institutions) rarely do
          so. A backlink from a site with low link propensity is often more
          valuable as it suggests the link was earned through high-quality
          trusted content.
        </p>

        <p style={{ fontSize: "1.1rem", fontWeight: "600" }}>5. Spam Score</p>
        <img
          className="mb-2"
          src={SpamScore}
          alt="Linking Domain"
          style={{ height: "20rem", width: "100%" }}
        />
        <p>
          Spam Score is a metric developed to estimate the risk of a domain
          being flagged as spam by search engines. It’s usually expressed as a
          percentage higher values indicate a greater risk. This score is based
          on various red flags like low-quality content, keyword stuffing,
          excessive ads or linking to bad neighborhoods. Having backlinks from
          high spam score websites can harm your SEO and should be cleaned or
          disavowed.
        </p>
      </Col>
    </>
  );
};
