import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  ProgressBar,
  Row,
  Table,
} from "react-bootstrap";
// import loaderGif from "../Images/loader.gif";
// import swal from "sweetalert";
// import { GlobalContext } from "../Context/GlobalState";
import { BASE_URL_API_TRANXT_UAT_API } from "../Utils/Constant";

import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

const Magickeyword = () => {
  //   const { siteid, user } = useContext(GlobalContext);
  const regionOptions = [
    { value: "en-US", label: "United States (en-US)" },
    { value: "en-GB", label: "United Kingdom (en-GB)" },
    { value: "en-CA", label: "Canada (English) (en-CA)" },
    { value: "en-AU", label: "Australia (en-AU)" },
  ];
  const [formData, setFormData] = useState({
    Keyword: "",
    region: regionOptions[0],
  });
  const [history, setHistory] = useState([]);
  const [loading, setloading] = useState(false);
  const [expandedRow, setExpandedRow] = useState(null);
  const [keywordMetrics, setKeywordMetrics] = useState(null);
  const [questionKeywords, setQuestionKeywords] = useState([]);
  const [normalKeywords, setNormalKeywords] = useState([]);
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
  const handleRowExpand = (index, keyword) => {
    if (expandedNormalRow === index) {
      setExpandedRow(null);
    } else {
      setExpandedRow(index);
      Checkkeywordmetrics(keyword);
    }
  };
  const CheckRankingKeywords = async () => {
    // setTransactionLoaderState(true);
    try {
      const uuid = generateUUID();
      const res = await fetch(
        `${BASE_URL_API_TRANXT_UAT_API}/api/Seo/CheckRankingKeywords`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userid: 1,
            uuid: 1,
            keyword: formData.Keyword,
            locale: formData.region?.value,
            device: "desktop",
            engine: "google",
          }),
        }
      );
      const data = await res.json();
      if (
        data.status === "0" &&
        data.msg === "Success" &&
        data.data.length > 0
      ) {
        setKeywordMetrics(data.data[0]);
        // setTransactionLoaderState(false);
      }
    } catch (error) {
      console.error("Error fetching keyword metrics:", error);
    }
    // setTransactionLoaderState(false);
  };
  const fetchKeywordSuggestions = async () => {
    // setTransactionLoaderState(true);
    setloading(true);
    try {
      const uuid = generateUUID();
      const res = await fetch(
        `${BASE_URL_API_TRANXT_UAT_API}/api/Seo/KeywordSuggestions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            uuid: uuid,
            keyword: formData.Keyword,
            locale: formData.region?.value,
            device: "desktop",
            engine: "google",
          }),
        }
      );
      const data = await res.json();
      const questions = [];
      const normals = [];

      // Parse the new response structure
      data.data.forEach((item) => {
        if (
          /^(what|how|why|who|where|when|which|can|is|does|do|should)/i.test(
            item.suggested_keyword
          )
        ) {
          questions.push({
            keyword: item.suggested_keyword,
            relevance: parseFloat(item.relevance),
          });
        } else {
          normals.push({
            keyword: item.suggested_keyword,
            relevance: parseFloat(item.relevance),
          });
        }
      });

      setQuestionKeywords(questions);
      setNormalKeywords(normals);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      // setTransactionLoaderState(false);
      setloading(false);
    }
  };

  const formatNumber = (number) => {
    if (number >= 1_000_000_000) {
      return (number / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (number >= 1_000_000) {
      return (number / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (number >= 1_000) {
      return (number / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return number.toString();
  };

  const [expandedNormalRow, setExpandedNormalRow] = useState(null);

  const handleNormalRowExpand = (index, keyword) => {
    if (expandedNormalRow === index) {
      setExpandedNormalRow(null);
    } else {
      setExpandedNormalRow(index);
      Checkkeywordmetrics(keyword);
    }
  };
  const [keywordStats, setKeywordStats] = useState({});
  const Checkkeywordmetrics = async (keyword) => {
    // setTransactionLoaderState(true);
    try {
      const uuid = generateUUID();
      const res = await fetch(
        `${BASE_URL_API_TRANXT_UAT_API}/api/Seo/CheckRankingKeywords`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userid: 1,
            uuid: uuid,
            keyword: keyword,
            locale: "en-US",
            device: "desktop",
            engine: "google",
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        if (res.status === 404) {
          console.warn("No keyword metrics found:", errorData);
          setKeywordStats((prevStats) => ({
            ...prevStats,
            [keyword]: {
              volume: 0,
              difficulty: 0,
              organic_ctr: 0,
              priority: 0,
            },
          }));
        } else {
          throw new Error(`API Error: ${errorData.message || res.statusText}`);
        }
        return;
      }

      const data = await res.json();
      console.log("Keyword Metrics Response:", data);

      if (data.status === "0" && data.data.length > 0) {
        setKeywordStats((prevStats) => ({
          ...prevStats,
          [keyword]: data.data[0],
        }));
      }
    } catch (error) {
      console.error("Error fetching keyword metrics:", error.message);
    }
    // setTransactionLoaderState(false);
  };

  const GetUserKeywordsSugestion = async () => {
    // setTransactionLoaderState(true);
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        userid: 1,
        // userid: "1",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const res = await fetch(
        `${BASE_URL_API_TRANXT_UAT_API}/api/Seo/GetUserKeywordsSugestion`,
        requestOptions
      );
      const data = await res.json();

      if (data.status === "0" && Array.isArray(data.data)) {
        setHistory(data.data);
        // setTransactionLoaderState(false);
      } else {
        // swal(
        //   "Error",
        //   data.msg || "Failed to fetch keyword suggestions.",
        //   "error"
        // );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      //   swal("Error", "Error occurred while processing your request.", "error");
    }
    // setTransactionLoaderState(false);
  };

  const [hasLoaded, setHasLoaded] = useState(false);
  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const start = 0;
      const increment = end / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [end, duration]);

    const formatted = count.toLocaleString();

    return <span>{formatted}+</span>;
  };

  useEffect(() => {
    GetUserKeywordsSugestion();
    setTimeout(() => {
      setHasLoaded(true);
    }, 500);
  }, []);

  return (
    <div className="m-3">
      <div
        className="mb-4 p-4 text-white"
        style={{
          background:
            "linear-gradient(to right, #AFDDFF 0%, #C5E7FF 30%, #DAF0FF 60%, #EDF8FF 85%, #FFFFFF 100%)",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1 className="mb-3 text-center" style={{ color: " rgb(9, 0, 64)" }}>
          Explore Keyword Suggestions for Your Domain
        </h1>
        <p
          className="mt-2 text-center"
          style={{
            fontSize: "1rem",
            color: " rgb(9, 0, 64)",
          }}
        >
          Discover high-impact keywords for your domain to boost SEO and drive
          traffic. We'll analyze your domain's <br /> performance and recommend
          keywords to improve rankings.
        </p>
        <Row className="p-0 align-items-center">
          <Col md={8} className="p-0">
            <Form.Control
              type="text"
              placeholder="Enter a Keyword"
              value={formData.Keyword}
              onChange={(e) => handleChange("Keyword", e.target.value)}
              required
              style={{
                color: "#090040",
                borderRadius: "0.25rem",
                fontSize: "1.2rem",
                fontWeight: "400",
                height: "48px",
                border: "1px solid #ccc",
                marginRight: "8px",
              }}
            />
          </Col>

          <Col md={2} className="p-0">
            <select
              className="form-select"
              value={formData.region?.value || ""}
              onChange={(e) =>
                handleChange("region", {
                  value: e.target.value,
                  label:
                    regionOptions.find((opt) => opt.value === e.target.value)
                      ?.label || "",
                })
              }
              style={{
                height: "48px",
                borderRadius: "0.25rem",
                border: "1px solid #ccc",
                fontSize: "0.9rem",
                fontWeight: "500",
                color: "#090040",
                padding: "0 10px",
                marginRight: "8px", // 👈 added spacing
              }}
            >
              <option value="">Region</option>
              {regionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Col>

          <Col md={2} className="p-0">
            <Button
              style={{
                background: "#FF8000",
                color: "#fff",
                border: "none",
                fontWeight: "bold",
                fontSize: "1.2rem",
                height: "48px",
                width: "100%",
                borderRadius: "0.25rem",
              }}
              onClick={() => {
                CheckRankingKeywords();
                fetchKeywordSuggestions();
              }}
            >
              Analyze
            </Button>
          </Col>
        </Row>
        <>
          {keywordMetrics && (
            <div
              className="mb-2 p-2"
              style={{
                background:
                  "linear-gradient(to right, #AFDDFF 0%, #C5E7FF 30%, #DAF0FF 60%, #EDF8FF 85%, #FFFFFF 100%)",
                borderRadius: ".4rem",
              }}
            >
              <h5 className="text-center" style={{ color: " rgb(9, 0, 64)" }}>
                Result of Entered Keywords
              </h5>
              <Row>
                {[
                  { label: "Volume", value: keywordMetrics.volume },
                  { label: "Difficulty", value: keywordMetrics.difficulty },
                  { label: "Organic CTR", value: keywordMetrics.organic_ctr },
                  { label: "Priority", value: keywordMetrics.priority },
                ].map((metric, index) => {
                  const percentage = Math.min(Number(metric.value) || 0, 100);
                  const radius = 36;
                  const circumference = 2 * Math.PI * radius;
                  const offset =
                    circumference - (percentage / 100) * circumference;

                  return (
                    <Col md={3} key={index}>
                      <Card
                        className="p-1 text-center"
                        style={{ background: "#fff", borderRadius: "0.4rem" }}
                      >
                        <h6>
                          <b>{metric.label}</b>
                        </h6>
                        <div
                          style={{
                            position: "relative",
                            width: "80px",
                            height: "80px",
                            margin: "0 auto",
                          }}
                        >
                          <svg
                            width="80"
                            height="80"
                            style={{ transform: "rotate(-90deg)" }}
                          >
                            <circle
                              cx="40"
                              cy="40"
                              r={radius}
                              stroke="#ddd"
                              strokeWidth="8"
                              fill="none"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r={radius}
                              stroke="#1f91e3ff"
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={circumference}
                              strokeDashoffset={offset}
                              strokeLinecap="round"
                            />
                          </svg>
                          <div
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              fontSize: "1rem",
                              fontWeight: "bold",
                              color: "#441752",
                            }}
                          >
                            {metric.value
                              ? formatNumber(Number(metric.value))
                              : "N/A"}
                          </div>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}
        </>

        <>
          <div>
            {loading ? (
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "60vh" }}
              >
                {/* <img src={loaderGif} alt="Loading..." width="100" /> */}
              </div>
            ) : (
              <>
                <Row>
                  {questionKeywords.length > 0 && (
                    <Col>
                      <Row className="pt-0 pb-0">
                        <Col>
                          {" "}
                          <h5>Question Keywords</h5>
                        </Col>
                      </Row>
                      <div>
                        <Table borderless>
                          <thead>
                            <tr>
                              <th>Keyword</th>
                              <th>Relevance</th>
                              <th className="text-center">Metrics</th>
                            </tr>
                          </thead>
                          <tbody>
                            {questionKeywords.slice(0, 6).map((item, index) => (
                              <React.Fragment key={item.id}>
                                <tr>
                                  <td>{item.keyword}</td>
                                  <td style={{ width: "50%" }}>
                                    <ProgressBar
                                      now={item.relevance * 100}
                                      label={`${(item.relevance * 100).toFixed(
                                        2
                                      )}%`}
                                      style={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                      }}
                                      className="custom-progress-bar"
                                    />
                                  </td>
                                  <td className="text-center">
                                    {expandedRow === index ? (
                                      <FaArrowAltCircleDown
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleRowExpand(null)}
                                      />
                                    ) : (
                                      <FaArrowAltCircleRight
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          handleRowExpand(index, item.keyword)
                                        }
                                      />
                                    )}
                                  </td>
                                </tr>
                                {expandedRow === index && (
                                  <tr>
                                    <td colSpan="4" className="p-0">
                                      <div className="p-1 bg-light">
                                        {keywordStats[item.keyword] ? (
                                          <div className="d-flex justify-content-around">
                                            {[
                                              {
                                                label: "Volume",
                                                key: "volume",
                                                color: "#441752",
                                              },
                                              {
                                                label: "Difficulty",
                                                key: "difficulty",
                                                color: "#d9534f",
                                              },
                                              {
                                                label: "Organic CTR",
                                                key: "organic_ctr",
                                                color: "#5cb85c",
                                              },
                                              {
                                                label: "Priority",
                                                key: "priority",
                                                color: "#f0ad4e",
                                              },
                                            ].map(({ label, key, color }) => {
                                              const value =
                                                Number(
                                                  keywordStats[item.keyword][
                                                    key
                                                  ]
                                                ) || 0;
                                              const percent = Math.min(
                                                value,
                                                100
                                              );
                                              const radius = 36;
                                              const circumference =
                                                2 * Math.PI * radius;
                                              const offset =
                                                circumference -
                                                (percent / 100) * circumference;

                                              const labelValue =
                                                key === "volume" && value > 999
                                                  ? `${(value / 1000).toFixed(
                                                      1
                                                    )}K`
                                                  : value || "N/A";

                                              return (
                                                <div
                                                  key={key}
                                                  className="text-center"
                                                >
                                                  <p
                                                    className="mb-1"
                                                    style={{
                                                      fontSize: ".8rem",
                                                      fontWeight: "600",
                                                    }}
                                                  >
                                                    {label}
                                                  </p>
                                                  <div
                                                    style={{
                                                      position: "relative",
                                                      width: 80,
                                                      height: 80,
                                                    }}
                                                  >
                                                    <svg
                                                      width="80"
                                                      height="80"
                                                      style={{
                                                        transform:
                                                          "rotate(-90deg)",
                                                      }}
                                                    >
                                                      <circle
                                                        cx="40"
                                                        cy="40"
                                                        r={radius}
                                                        stroke="#ddd"
                                                        strokeWidth="8"
                                                        fill="none"
                                                      />
                                                      <circle
                                                        cx="40"
                                                        cy="40"
                                                        r={radius}
                                                        stroke={color}
                                                        strokeWidth="8"
                                                        fill="none"
                                                        strokeDasharray={
                                                          circumference
                                                        }
                                                        strokeDashoffset={
                                                          offset
                                                        }
                                                        strokeLinecap="round"
                                                      />
                                                    </svg>
                                                    <div
                                                      style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform:
                                                          "translate(-50%, -50%)",
                                                        fontSize: "0.75rem",
                                                        fontWeight: "bold",
                                                        color: color,
                                                      }}
                                                    >
                                                      {labelValue}
                                                    </div>
                                                  </div>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        ) : (
                                          <p className="text-center text-muted">
                                            No keyword statistics available.
                                          </p>
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                )}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  )}

                  {normalKeywords.length > 0 && (
                    <Col>
                      <Row className="pt-0 pb-0">
                        <Col>
                          {" "}
                          <h5>Normal Keywords</h5>
                        </Col>
                      </Row>
                      <div>
                        <Table borderless>
                          <thead>
                            <tr>
                              <th>Keyword</th>
                              <th>Relevance</th>
                              <th className="text-center">Metrics</th>
                            </tr>
                          </thead>
                          <tbody>
                            {normalKeywords.slice(0, 6).map((item, index) => (
                              <React.Fragment key={index}>
                                <tr>
                                  <td>{item.keyword}</td>
                                  <td style={{ width: "50%" }}>
                                    <ProgressBar
                                      now={item.relevance * 100}
                                      label={`${(item.relevance * 100).toFixed(
                                        2
                                      )}%`}
                                      style={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                      }}
                                      className="custom-progress-bar"
                                    />
                                  </td>
                                  <td className="text-center">
                                    {expandedNormalRow === index ? (
                                      <FaArrowAltCircleDown
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          handleNormalRowExpand(null)
                                        }
                                      />
                                    ) : (
                                      <FaArrowAltCircleRight
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                          handleNormalRowExpand(
                                            index,
                                            item.keyword
                                          )
                                        }
                                      />
                                    )}
                                  </td>
                                </tr>

                                {expandedNormalRow === index && (
                                  <tr>
                                    <td colSpan="4" className="p-0">
                                      <div className="p-1 bg-light">
                                        {keywordStats[item.keyword] ? (
                                          <div className="d-flex justify-content-around">
                                            {[
                                              {
                                                label: "Volume",
                                                key: "volume",
                                                color: "#441752",
                                              },
                                              {
                                                label: "Difficulty",
                                                key: "difficulty",
                                                color: "#d9534f",
                                              },
                                              {
                                                label: "Organic CTR",
                                                key: "organic_ctr",
                                                color: "#5cb85c",
                                              },
                                              {
                                                label: "Priority",
                                                key: "priority",
                                                color: "#f0ad4e",
                                              },
                                            ].map(({ label, key, color }) => {
                                              const value =
                                                Number(
                                                  keywordStats[item.keyword][
                                                    key
                                                  ]
                                                ) || 0;
                                              const percent = Math.min(
                                                value,
                                                100
                                              );
                                              const radius = 36;
                                              const circumference =
                                                2 * Math.PI * radius;
                                              const offset =
                                                circumference -
                                                (percent / 100) * circumference;

                                              const labelValue =
                                                key === "volume" && value > 999
                                                  ? `${(value / 1000).toFixed(
                                                      1
                                                    )}K`
                                                  : value || "N/A";

                                              return (
                                                <div
                                                  key={key}
                                                  className="text-center"
                                                >
                                                  <p
                                                    className="mb-1"
                                                    style={{
                                                      fontSize: ".8rem",
                                                      fontWeight: "600",
                                                    }}
                                                  >
                                                    {label}
                                                  </p>
                                                  <div
                                                    style={{
                                                      position: "relative",
                                                      width: 80,
                                                      height: 80,
                                                    }}
                                                  >
                                                    <svg
                                                      width="80"
                                                      height="80"
                                                      style={{
                                                        transform:
                                                          "rotate(-90deg)",
                                                      }}
                                                    >
                                                      <circle
                                                        cx="40"
                                                        cy="40"
                                                        r={radius}
                                                        stroke="#ddd"
                                                        strokeWidth="8"
                                                        fill="none"
                                                      />
                                                      <circle
                                                        cx="40"
                                                        cy="40"
                                                        r={radius}
                                                        stroke={color}
                                                        strokeWidth="8"
                                                        fill="none"
                                                        strokeDasharray={
                                                          circumference
                                                        }
                                                        strokeDashoffset={
                                                          offset
                                                        }
                                                        strokeLinecap="round"
                                                      />
                                                    </svg>
                                                    <div
                                                      style={{
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform:
                                                          "translate(-50%, -50%)",
                                                        fontSize: "0.75rem",
                                                        fontWeight: "bold",
                                                        color: color,
                                                      }}
                                                    >
                                                      {labelValue}
                                                    </div>
                                                  </div>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        ) : (
                                          <p className="text-center text-muted">
                                            No keyword statistics available.
                                          </p>
                                        )}
                                      </div>
                                    </td>
                                  </tr>
                                )}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </Col>
                  )}
                </Row>
              </>
            )}
          </div>
        </>
        <Row className="mt-4">
          <div className="col-12 col-md-12 text-center">
            {/* Blue content */}
            <div
              className="row "
              style={{
                backgroundColor: "#0c1d35",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <div className="col-md-4 mb-3 mt-3">
                <h4 style={{ fontWeight: "bold" }}>
                  <Counter end={60416} duration={2000} />
                </h4>
                <p className="mb-0">Registered Websites</p>
              </div>

              <div className="col-md-4 mb-3 mt-3">
                <h4 style={{ fontWeight: "bold" }}>
                  <Counter end={34750} duration={2000} />
                </h4>
                <p className="mb-0">Publishers & Writers</p>
              </div>

              <div className="col-md-4 mb-3 mt-3">
                <h4 style={{ fontWeight: "bold" }}>
                  <Counter end={365304} duration={2000} />
                </h4>
                <p className="mb-0">Tasks Completed</p>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Magickeyword;
