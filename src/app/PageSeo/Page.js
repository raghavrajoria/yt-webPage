import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import Nav from "./Nav";
import Footer from "./Footer";
import SideTab from "./Toolstab";
import {
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";
// import page2 from "../Images/page2.svg";
// import page1 from "../Images/page1.svg";
// import page3 from "../Images/page3.png";
// import pay from "../Images/pay.png";
const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement("script");
    script.type = "module";
    script.src = "/off_seo.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container fluid className="p-0" style={{ overflowX: "hidden" }}>
      {/* <div
          className="d-flex justify-content-center"
          style={{ background: "#fdca40" }}
        >
          <p className="p-2 m-0 text-center">
            Start with free trial of <b>SeoBix!</b> - boost your SEO
            game&nbsp;&nbsp;
            <Button size="sm" variant="success">
              Know More
            </Button>
          </p>
        </div> */}
      <Nav />

      <Container fluid className="p-0 mt-5">
        <Row className="justify-content-center" style={{ margin: "0" }}>
          <Col md={10}>
            <Row className="justify-content-between">
              <Col md={9}>
                <ContainerOnPage />
              </Col>

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
      </Container>

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
  );
};

const ContainerOnPage = () => {
  return (
    <div>
      <div className="mx-2">
        <h1 className="text-center mb-4">
          SeoBix On Page SEO Checker: Your Gateway to Higher Rankings
        </h1>
        <p>
          <i>
            “SeoBix helps you quickly spot issues with your on-page SEO for any
            URL and target keyword. You’ll also get clear, step-by-step guidance
            on how to fix the most important problems.”.
          </i>
        </p>
        <p>
          Are you having difficulty getting your website seen by search engines?
          You can take charge of this with SeoBix On-Page SEO tools. Our
          reliable and ingenious SEO checker enables you to analyse, improve,
          and optimize your website for better and higher performance and
          visibility.
        </p>
        <h2>What is On-Page SEO?</h2>
        <p>
          On-page SEO is the process of optimizing individual web pages on your
          website to enhance their comparative visibility in search engine
          results. This would be done through the adjustment of various key
          elements like titles, headings, content, and URLs, or even internal
          linking with image tags, among others-but all within your site. Its
          goal is to present the search engine with the objective of a page
          while making it more user-oriented and comprehensible.
        </p>
        <div className="d-flex justify-content-center">
          {/* <img
                className="mb-3"
                src={page2}
                alt="seobix"
                style={{ width: "70vw" }}
              /> */}
        </div>
        <h3>Why Is On-Page SEO Important?</h3>
        <p>
          Without the on-page SEO, even the best material will not reach your
          audience. See the search engine how your pages are structured, how
          relevant your content is, and how fast your website is loaded. By
          customizing these factors, the search engine helps to understand your
          site better and reward you with better ranking.
        </p>
        <p>
          <b>Benefits of strong on-page SEO with SeoBix:</b>
        </p>
        <ul>
          <li> Increased organic traffic</li>
          <li>Better user experience</li>
          <li> Higher engagement and lower bounce rates</li>
          <li>More qualified leads and conversions</li>
        </ul>
        <div className="mt-5">
          <ToolSlider />
        </div>
        <h3> How SeoBix On-Page SEO Checker Works</h3>
        <p>
          In order to make the SEO checker for a website development, every key
          on-page element should be checked so that it can generate a very
          detailed and easy-to-understand report. Be it a blog or an eCommerce
          store or a business site, SeoBix shows you exactly what needs to be
          fixed.
        </p>
        <p>
          <i>Here’s what we analyze:</i>
        </p>
        <ul>
          <li>
            <b>Title Tags & Meta Descriptions:</b> Are they compelling and
            keyword-optimized?
          </li>
          <li>
            <b>Headings (H1, H2, H3):</b> Is your content structured properly?
          </li>
          <li>
            <b>Keyword Usage:</b> Are you targeting the right keywords in the
            right places?
          </li>
          <li>
            <b>URL Structure:</b> Is your URL short, clean, and SEO-friendly?
          </li>
          <li>
            <b>Internal Linking:</b> Are you guiding users and bots across
            relevant pages?
          </li>
          <li>
            <b>Image Optimization:</b> Are your images using alt tags and
            loading fast?
          </li>
          <li>
            <b>Page Speed & Mobile Friendliness:</b> Does your site perform well
            across all devices?
          </li>
        </ul>
        <h4>Simple, Fast & Effective On-Page SEO Checks</h4>
        <p>
          No need to download anything. Simply enter your URL, hit the “Check
          SEO” button, and within seconds you’ll get a full report showing
          what’s good and what needs improvement. It’s that easy.
        </p>
        <p>
          Plus, SeoBix gives actionable tips, so you don’t just get data—you get
          solutions.
        </p>
        <h4>Optimize Smarter with SeoBix</h4>
        <p>
          Most <b>SEO checkers</b> give you technical jargon. SeoBix translates
          the data into plain, actionable advice that you can use immediately.
          It’s like having an SEO expert by your side 24/7.
        </p>
        <p>
          <i>If you’re optimizing a blog post or your homepage, we help you:</i>
        </p>
        <ul>
          <li>Fix critical SEO issues fast</li>
          <li>Improve content relevance</li>
          <li>Ensure mobile responsiveness</li>
          <li>Increase page loading speed</li>
          <li>Strengthen keyword placement and readability</li>
        </ul>
        <h4> Start Optimizing with Confidence</h4>
        <p>
          Search engines keep evolving, but one thing remains the same: a
          well-optimized page will certainly perform better. SeoBix helps you
          stay just a little ahead with exact and up-to-date SEO checks aligned
          with Google's latest set of standards
        </p>
        <p>
          Keep your on-page elements optimized all the time, and then you'll be
          able to gain some rankings and also give your visitors a smooth and
          engaging experience.
        </p>
        <p>
          With SeoBix, you are not just analyzing. You are analyzing with a
          goal.
        </p>
        <h4>Frequently Asked Questions (FAQs)</h4>
        <p>
          <b>What does the SeoBix on-page SEO checker do?</b>
        </p>
        <p>
          This analyzes your page content, composition, and SEO components and
          shows you what is good and what you need to improve to help you better
          secure in search engines.
        </p>
        <p>
          <b>Is the SeoBix SEO checker usable for beginners?</b>
        </p>
        <p>
          Yes. We designed this tool to be beginner-friendly, but it is also
          powerful enough to satisfy advanced users.
        </p>
        <p>
          <b>Is this SEO checker free?</b>
        </p>
        <p>
          Yes, SeoBix offers a free version, so you can evaluate the product
          with no risk. You can upgrade later for deeper insights and more
          advanced features.
        </p>
        <p>
          <b>Will Seobix improve my Google search ranking?</b>
        </p>
        <p>
          If you follow the methodology within our on-page SEO checker and
          continue to create great content, you can only enhance your chances of
          improving your rankings.
        </p>
      </div>
      <Plancard />
      <Specialoffer />
    </div>
  );
};

const relatedTools = [
  {
    name: "Google Trends Insights",
    icon: <FaSearch size={24} color="#0A3981" />,
    desc: "Explore real-time search trends across the globe. Identify what people are searching for right now to align your content with trending topics and seasonal interests.",
    href: "/trending-now-on-google",
  },
  {
    name: "Google Analytics Overview",
    icon: <FaChartBar size={24} color="#0A3981" />,
    desc: "Understand how users interact with your website. Track sessions, bounce rates, and traffic sources to make data-driven decisions and optimize performance.",
    href: "/google-analytics",
  },
  {
    name: "Search Console Monitor",
    icon: <FaFileAlt size={24} color="#0A3981" />,
    desc: "Monitor your site’s visibility in Google Search. Analyze clicks, impressions, and keyword rankings to uncover opportunities and fix indexing issues.",
    href: "/search-console",
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
    <div style={{ position: "relative" }}>
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

const Plancard = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = [
    {
      title: "Free",
      monthly: "$0",
      yearly: "$0",
      Free: "3 Month Free Trial",
      features: ["Limited Access"],
      buttonText: "Buy Plan",
      color: "#e0f2fe",
      border: "#38bdf8",
      image: "pay",
    },
    {
      title: "Basic",
      monthly: "$150/mo",
      features: ["5 Projects", "Standard Reports", "Email Support"],
      buttonText: "Buy Plan",
      color: "#e7f5ff",
      border: "#339af0",
      image: "pay",
    },
    {
      title: "Standard",
      monthly: "$350/mo",
      features: ["10 Projects", "Advanced Reports", "Priority Support"],
      buttonText: "Buy Plan",
      color: "#e6fcf5",
      border: "#20c997",
      image: "pay",
    },
    {
      title: "Premium",
      monthly: "$750/mo",
      features: ["Unlimited Projects", "All Features", "24/7 Support"],
      buttonText: "Buy Plan",
      color: "#fff3bf",
      border: "#fcc419",
      image: "pay",
    },
  ];

  return (
    <Container className="my-5">
      <div className="text-center mb-4">
        <h2 style={{ fontWeight: "700", fontSize: "2rem" }}>
          Boost Your SEO With Our Amazing Plans
        </h2>
        <h4 className="font-weight-bold mb-4" style={{ color: "#441752" }}>
          🚀 Boost Your Rankings Risk-Free —{" "}
          <span style={{ color: "#FC4100" }}>Free for 3 Months</span>, Limited
          Time Only!
        </h4>
        <p style={{ color: "#6b7280" }}>
          Flexible pricing plans designed for every stage of your journey
        </p>
        <div className="d-flex justify-content-center mt-4">
          <div className="d-flex align-items-center gap-2">
            <span style={{ fontWeight: "500" }}>Monthly</span>

            <div
              className="m-2"
              style={{ transform: "scale(1.5)", transformOrigin: "center" }}
            >
              <Form.Check
                type="switch"
                id="custom-switch"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
            </div>

            <div className="d-flex align-items-center gap-2">
              <span style={{ fontWeight: "500" }}>Yearly</span>

              <div
                className="start-now-btn mx-3"
                style={{
                  backgroundColor: "#e6f4ea",
                  color: "#2f855a",
                  padding: "6px 12px",
                  borderRadius: "8px solid",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  border: "1px solid #20c997",
                }}
              >
                🎉{" "}
                <span style={{ color: "#0B1D51" }}>
                  Get{" "}
                  <span style={{ color: "#0B1D51" }}>
                    <b>30% OFF</b>
                  </span>{" "}
                  on Yearly Plans
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Row className="g-4 justify-content-center">
        {plans.map((plan, idx) => (
          <Col md={6} lg={3} key={idx}>
            <div style={{ position: "relative" }}>
              {plan.title === "Free" && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: 0,
                    right: 0,
                    height: "32px",
                    backgroundColor: "#38bdf8",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1rem",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    zIndex: 2,
                  }}
                >
                  {plan.Free}
                </div>
              )}

              <Card
                className="p-2"
                style={{
                  backgroundColor: plan.color,
                  border: `2px solid ${plan.border}`,
                  borderRadius: "16px",
                  textAlign: "center",
                  height: "100%",
                  boxShadow:
                    plan.title === "Free"
                      ? "0 12px 28px rgba(56, 189, 248, 0.5)"
                      : "0 4px 12px rgba(0,0,0,0.05)",
                  marginTop: plan.title === "Free" ? "16px" : "0",
                }}
              >
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                    {plan.title}
                  </Card.Title>
                  <h3 style={{ fontWeight: "bold", margin: "1rem 0" }}>
                    {isYearly
                      ? plan.title === "Free"
                        ? plan.yearly
                        : (() => {
                            const monthlyPrice = parseFloat(
                              plan.monthly.replace(/[^0-9.]/g, "")
                            );
                            const yearlyRaw = monthlyPrice * 12;
                            const discounted = yearlyRaw * 0.7;
                            return `$${Math.round(discounted)}/yr`;
                          })()
                      : plan.monthly}
                  </h3>
                  <a
                    href="https://dashboard.seobix.com/Register"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      backgroundColor: plan.border,
                      color: "white",
                      textDecoration: "none",
                      borderRadius: "999px",
                      padding: "8px 20px",
                      fontWeight: "600",
                      marginTop: "1rem",
                    }}
                  >
                    {plan.buttonText}
                  </a>

                  <div className="mt-3">
                    <img
                      src={plan.image}
                      alt={plan.title}
                      style={{
                        // width: "15vw",
                        objectFit: "contain",
                        marginBottom: "1rem",
                      }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
const Specialoffer = () => {
  return (
    <div
      className="start-now-btn p-2"
      style={{
        background: "#799EFF",
        borderRadius: "24px",
        color: "white",
        textAlign: "center",
        margin: "3rem auto",
        width: "90%",
        maxWidth: "1000px",
        position: "relative",
      }}
    >
      <h2 className="mb-3" style={{ fontSize: "2rem", fontWeight: "bold" }}>
        Let’s do this! Start unlocking powerful backlink insights.
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="https://dashboard.seobix.com/Register"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "12px 24px",
            borderRadius: "12px",
            fontWeight: "600",
            textDecoration: "none",
            minWidth: "150px",
            textAlign: "center",
          }}
        >
          Start 3 Months Free Trial
        </a>
      </div>

      <p style={{ color: "#fff", marginTop: "20px", fontSize: "14px" }}>
        <b> Full access — No Credit card Needed.</b>
      </p>
    </div>
  );
};

export default Page;
