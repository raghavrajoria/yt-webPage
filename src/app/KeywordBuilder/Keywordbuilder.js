import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import Nav from "./Navbar";
import Footer from "./Footer";
import builder1 from "../Images/builder1.png";
import builder2 from "../Images/builder2.png";
import SideTab from "./Toolstab";
import {
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";
import pay from "../Images/pay.png";

const Keywordbuilder = () => {
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
        <Nav />
      </div>

      <Row className="d-flex justify-content-center mt-4">
        <Col md={8}>
          <ContentKey />
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

const ContentKey = () => {
  return (
    <div>
      <Col>
        <div className="mx-2">
          <h1 className="text-center m-md-3 m-2">
            Construct Your SEO Success with Keyword Builder
          </h1>

          <p className="mt-4">
            Keyword Builder is your ultimate companion in setting a path for a
            sound SEO strategy. In the competitive online world today, finding
            the right keywords isn't regard-edly important — it is everything.
            Hence we have created a tool that goes beyond keyword suggestion
            tools to provide you with data-driven insights to crush your niche.
          </p>

          <p>
            Keyword Builder has everything you need to have all the critical
            metrics in place so that you can make smarter decisions, faster.
          </p>

          <div className="d-flex justify-content-center">
            <img
              className="mb-3"
              src={builder1}
              alt="seobix"
              style={{ width: "70vw" }}
            />
          </div>
          <Plancard />
          <h2>The Powerful Features You Get In Keyword Builder Include :</h2>

          <h3>1. Search Volume</h3>
          <p>
            Find out how many people are searching for a keyword every month, in
            real-time volume data. This helps you see the high-demand topics
            potentially driving traffic to your website. With right with
            searchable volume keywords, you can balance between an extremely
            competitive term and a cool niche opportunity. Stay ahead of trends
            and make the most out of what your audience is currently looking
            for. So Keyword Builder helps you to channel your effort into
            working where demand actually exists.
          </p>

          <h3>2. Keyword Difficulty</h3>
          <p>
            Before you chase after a keyword, it is good to know how hard it
            would be to rank for it. In this way, our keyword difficulty score
            shows you the level of competition for each term. Whether you're in
            it for quick wins or planning to take on tougher battlegrounds, this
            will help beyond your expectations. It saves time, optimizes your
            SEO strategy, and lets you concentrate on keywords that will let you
            cash in quicker. Plan smarter, compete better.
          </p>

          <h3>3. Click Through Rate (CTR)</h3>
          <p>
            Being in the top ranking is great, but letting the users click is
            really what gives results. Based on our criterion, click rate or
            CTR, the click ability of these keywords will be presented. Thus, by
            careful CTR estimation, go for keywords that will not only bring in
            impressions but also maximize your website hits. Know the user
            better and encourage the term(s) that effectively drives organic
            traffic. Better engagement is possible for the content efforts in a
            manner where higher ROI can be realized.
          </p>

          <h3>4. Priority Score</h3>
          <p>
            If you are not able to decide as for which keywords to direct your
            attention, the Priority Score tool is there to show the way.
            Priority Score has a formula that summarizes search volume,
            difficulty, and CTR data into a clear comparative metric. This score
            helps in the assessment of the best possible keywords combining in a
            striking way potential with feasibility of success. So you won't
            even have to guess anymore; you just determine the best-suited
            keywords for your goals. This translates into your quicker SEO
            decisions and, for sure, toward development of a smarter growth.
          </p>

          <h3>5. Actionable Recommendations</h3>
          <p>
            Data is power but action leads to result. Keyword Builder does not
            simply deliver data; it connects you with the next strategic steps
            for each keyword. You will be offered individual suggestions that
            could be about optimizing some existing content, adding new content,
            or even enhancing your backlinks. These practical tips will save
            your time, slash through the guesswork, and gets you moving with
            clarity toward desired outcomes. Put insights into actionable SEO
            gains without breaking a sweat.
          </p>
          <div className="d-flex justify-content-center">
            <img
              className="mb-3"
              src={builder2}
              alt="seobix"
              style={{ width: "70vw" }}
            />
          </div>
          <h3>6. Storage</h3>
          <p>
            You can easily organize and save your favorite keywords using
            Storage from Keyword Builder. Store essential keywords into
            personalized lists for easy future reference. There is no need to
            export or forget about them; manage all your keyword research from
            one secure location. Storage assists you with systematic campaign
            planning, revisiting strategies, and staying organized. It's perfect
            for ongoing projects, SEO audits, and client reports.
          </p>

          <h2>Why Choose Keyword Builder ?</h2>

          <h4>Time-Saving :</h4>
          <p>
            Instantly filter the best opportunities at a glance, sidestepping
            endless data.
          </p>

          <h4>Work Smart :</h4>
          <p>Put your SEO efforts in the place that matters.</p>

          <h4>Grow Fast :</h4>
          <p>Build your SEO success with data, not by assumptions.</p>

          <p>
            Whether you are an SEO specialist, a content marketer, or a business
            owner, Keyword Builder will help you understand what to do to win
            over your competitors.
          </p>

          <h2>Ready to create your SEO success ?</h2>

          <p>
            Start using Keyword Builder today and convert insight into impact.
          </p>
        </div>
        <div className="mt-5">
          <ToolSlider />
          <Specialoffer />
        </div>
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
      image: pay,
    },
    {
      title: "Basic",
      monthly: "$150/mo",
      features: ["5 Projects", "Standard Reports", "Email Support"],
      buttonText: "Buy Plan",
      color: "#e7f5ff",
      border: "#339af0",
      image: pay,
    },
    {
      title: "Standard",
      monthly: "$350/mo",
      features: ["10 Projects", "Advanced Reports", "Priority Support"],
      buttonText: "Buy Plan",
      color: "#e6fcf5",
      border: "#20c997",
      image: pay,
    },
    {
      title: "Premium",
      monthly: "$750/mo",
      features: ["Unlimited Projects", "All Features", "24/7 Support"],
      buttonText: "Buy Plan",
      color: "#fff3bf",
      border: "#fcc419",
      image: pay,
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
export default Keywordbuilder;
