import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";

import Nav from "./Nav";
import Footer from "./Footer";
// import trend2 from "../Images/trend2.png";
// import trend4 from "../Images/trend4.png";
import SideTab from "./Toolstab";
import {
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";

const Trendingnow = () => {
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
      <div>
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
      </div>

      <Row className="d-flex justify-content-center mt-4">
        <Col md={8}>
          <ContentTrendingNow />
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

const ContentTrendingNow = () => {
  return (
    <div>
      <Col>
        <div className="mx-2">
          <h1 className="text-center">
            Discover What’s Hot On Google With Trending Now
          </h1>

          <p>
            In SEO, timing makes a big difference. You have the best content,
            but publishing it at the wrong time will not give you the desired
            result. That’s where SeoBix's “Trending Now” feature can help you by
            providing the keyword’s insights. It helps you to find what is
            trending in the market, so you get more traffic.
          </p>

          <p>
            Now let's dive into the “Trending Now” feature. What this feature is
            actually about, how it works, and why it is an important feature for
            your SEO featurebox.
          </p>
          <div className="d-flex justify-content-center">
            {/* <img
                className="mb-3"
                src={trend2}
                alt="seobix"
                style={{ width: "65vw" }}
              /> */}
          </div>
          <h2>What Is Trending Now On Google</h2>

          <p>
            The “Trending Now” feature helps you find the keywords, topics that
            are currently trending across the world. Instead of working on
            outdated topics or broad keyword lists, this feature helps you focus
            on market trends. You can find the right keywords and real-time
            insights
          </p>
          <Plancard />
          <h3>How “Trending Now” Helps You Rank Faster</h3>
          <p>
            Awareness of the trends makes you ahead of the game, allowing you to
            create community-created content and seize a chance to rank for
            keywords before they become overcrowded.
          </p>
          <h3>Find Fresh Content Ideas</h3>

          <p>
            Finding new ideas for blog posts from social media updates is not
            much effective, you can use "Trending Now" to identify content ideas
            that are already popular. This makes you stay up to date and release
            content your audience actually cares about.
          </p>

          <h3>Target High-Potential Keywords</h3>

          <p>
            Once you find trending topics, you want keywords so you can use them
            to find the right audience for your topic. The Trending Now feature
            helps you by providing user search queries. This helps you make
            smart decisions about which keywords to focus on for your next blog
            or landing page.
          </p>

          <h3>Optimize for Local and Global Audiences</h3>

          <p>
            With filtering options, you can see what’s trending in your specific
            region or industry. This is perfect for local SEO or niche markets.
            Whether you’re a travel blogger, tech startup, or local bakery,
            you’ll always know what topics are gaining traction near you.
          </p>

          <h3>Real-Time Insights for Smarter SEO</h3>

          <p>
            SeoBix constantly monitors the operations of search engines to
            analyze trends and digital signals, which may indicate valid spikes
            in keyword interest. This information is then systematically
            arranged for your benefit and displayed on an easy-to-read dashboard
            with real-time updates.
          </p>

          <p>
            With such information, you will be able to see which topics are
            heating up, to what degree they are attracting attention, and if
            such trends are applicable to your audience or territory. It is like
            having your own SEO trend radar at your fingertips
          </p>

          <h2>Why Should You Use Trending Now?</h2>
          <div className="d-flex justify-content-center">
            {/* <img
                className="mb-3"
                src={trend4}
                alt="seobix"
                style={{ width: "65vw" }}
              /> */}
          </div>
          <h3>Stay Ahead of the Competition</h3>

          <p>
            SEO is a race, and if you’re not ahead of the trends, you’re behind.
            “Trending Now” helps you get a jump on hot topics before they become
            oversaturated. The earlier you target trending keywords, the better
            your chances of ranking high on Google.
          </p>

          <h3>Improve Your Timing</h3>

          <p>
            When you use “Trending Now”, you’re not just guessing. You’re
            working with real-time data that shows you what’s gaining traction
            right now. This allows you to create and publish content at the
            perfect moment to catch the wave of interest.
          </p>

          <h3>Boost Your Traffic</h3>

          <p>
            Content related to trending topics can attract the maximum number of
            visitors. The more desirable a topic is for people to click on, the
            more attractive it becomes to host on the site trending list, which
            essentially puts forth the voices of current audience needs.
          </p>
          <div className="mt-5">
            <ToolSlider />
          </div>
          <h2>Conclusion</h2>

          <p>
            In the fast-paced world of trends, it is very important to be at the
            lead. With SeoBix's "Trending Now" feature, you will never have to
            guess what your audience wants- you will know for sure. It helps you
            to catch rising trends very early, write content related to them,
            and achieve faster ranking.
          </p>

          <p>
            Whether you are an absolute beginner to SEO, someone who engages in
            blogging, or a working digital agency, "Trending Now" gives you the
            wisdom to be able to lead rather than follow..
          </p>

          <p>
            <b>
              Try SeoBix today and start ranking for what matters right now.
            </b>
          </p>
        </div>

        <Specialoffer />
      </Col>
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
                🎉
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

export default Trendingnow;
