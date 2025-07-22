import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Row,
  Card,
  Table,
  Container,
} from "react-bootstrap";
import Select from "react-select";
import { BASE_URL_API_TRANXT_UAT_API } from "../Utils/Constant";
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";
import Nav from "./Nav";
import Footer from "./Footer";
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
          className="d-flex justify-content-center mb-5"
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
                          border: "1px solid  white",
                          borderRadius: "0",
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          height: "48px",
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
                      <Select
                        options={domainTypeOptions}
                        value={selectedDomainType}
                        onChange={setSelectedDomainType}
                        classNamePrefix="react-select"
                        styles={{
                          control: (base) => ({
                            ...base,
                            background: "#2E3C56",
                            color: "#fff",
                            borderRadius: 0,
                            border: "1px solid #cbd5e1",
                            minHeight: "48px",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                          }),
                          singleValue: (base) => ({
                            ...base,
                            color: "#fff",
                          }),
                          menu: (base) => ({
                            ...base,
                            background: "#2E3C56",
                            color: "#fff",
                          }),
                          option: (base, state) => ({
                            ...base,
                            background: state.isFocused ? "#3a4a6a" : "#2E3C56",
                            color: "#fff",
                          }),
                          placeholder: (base) => ({
                            ...base,
                            color: "#cbd5e1",
                          }),
                        }}
                        placeholder="Subdomains"
                      />
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
              {/* backlink checker div */}
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
                    <h3 style={{ fontWeight: "600", marginBottom: "1rem" ,color:"white" , fontSize:"2.5rem"}}>
                      The most powerful backlink checker
                    </h3>
                    <p style={{ fontSize: "1.2rem", color: "#fff" }}>
                      SEOBIX has the&nbsp;
                      <span style={{ color: "#F80", fontWeight: "400" }}>
                        second most active web crawler&nbsp;
                      </span>
                      after Google, which means we have the&nbsp;
                      <span style={{ color: "#F80", fontWeight: "400" }}>
                        best backlink database&nbsp;
                      </span>
                      in the industry.
                    </p>
                    <p style={{ fontSize: "1.2rem", color: "#fff" }}>
                      Our backlink index is updated with fresh data every 15
                      minutes.
                    </p>
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col
                        xs={6}
                        style={{ textAlign: "center", marginBottom: "2rem" }}
                      >
                        <div style={{ fontSize: "4rem", fontWeight: "600" }}>
                          492B
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
                          28T
                        </div>
                        <div style={{ fontSize: "1.2rem", color: "#cbd5e1" }}>
                          Internal backlinks
                        </div>
                      </Col>
                      <Col xs={6} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "4rem", fontWeight: "600" }}>
                          500M
                        </div>
                        <div style={{ fontSize: "1.2rem", color: "#cbd5e1" }}>
                          Domains
                        </div>
                      </Col>
                      <Col xs={6} style={{ textAlign: "center" }}>
                        <div style={{ fontSize: "4rem", fontWeight: "600" }}>
                          35T
                        </div>
                        <div style={{ fontSize: "1.2rem", color: "#cbd5e1" }}>
                          External backlinks
                          <br />
                          <span style={{ fontSize: "1rem" }}>
                            (historical records)
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        <Footer />
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
