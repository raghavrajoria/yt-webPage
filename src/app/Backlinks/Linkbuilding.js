import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import Nav from "./Nav";
import Footer from "./Footer";
import SideTab from "./Toolstab";
import toolten from "../Images/tool10.png";
import tool14 from "../Images/tool14.png";
import tool15 from "../Images/tool15.svg";
import pay from "../Images/pay.png";

import {
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";

const Linkbuilding = () => {
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
          <ContentLinkbuilding />
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

const ContentLinkbuilding = () => {
  return (
    <div>
      <Col>
        <div className="mx-2">
          <h1 className="text-center m-3 ">
            Link Building Tool: Know Every Link That Points to You
          </h1>

          <p>
            If you’re building a website and ignoring backlinks, you’re playing
            the game blind. Backlinks are how Google figures out if your site’s
            worth showing. Every link counts. But not all links are good, and
            keeping track of every single one? It’s a mess—unless you’ve got a
            tool built for the job.
          </p>
          <p>That’s where a backlink tracker tool makes sense.</p>
          <div className="d-flex justify-content-center mt-3 mb-3">
            <img
              className="mb-3"
              src={tool15}
              alt="seobix"
              style={{ width: "65vw" }}
            />
          </div>
          <Plancard />
          <h2>Why Should You Even Track Backlinks?</h2>

          <p>
            One day, your blog’s ranking will be great. The next, it drops out
            of nowhere. Why? Maybe you lost a high-authority backlink and didn’t
            even know. Or maybe some spammy site linked to you and dragged your
            SEO down. Either way, without a backlink monitoring tool, you won’t
            see it coming.
          </p>

          <h2>Keeps Your Backlink History Safe and Organized</h2>

          <p>
            Unlike other tools, Seobix gives you a full <b>backlink record</b>{" "}
            of any website — yours or your competitor's. Want to know which
            links were lost last month? Or which ones are newly added this week?
            Seobix keeps that history for you. That’s gold when you’re making a
            link-building strategy.
          </p>
          <p>
            You need a tool that quietly watches your backlinks while you focus
            on content and growth.
          </p>

          <h3>What This Tool Does</h3>
          <p>
            You pop in your URL, and the tool pulls up every link pointing to
            it. New links, lost links, good ones, shady ones, it catches them
            all. It’s more than a backlink checker online. It is like having a
            backstage pass to your SEO life.
          </p>
          <p>
            And the best part? It updates you when something changes. Lost a
            link? You know. Got a new one? You know. No guesswork.
          </p>

          <h3>How to Track Backlinks Without Getting Lost in Data</h3>
          <p>Tracking links sounds like a job for an analyst, right? Nope.</p>
          <p>
            It’s pretty simple when you've got the right system in place. Here’s
            how most people do it:
          </p>
          <ul>
            <li>Use a backlink management tool (like SeoBix or similar)</li>
            <li>Run a check on your website</li>
            <li>
              See a list of backlinks, fresh ones and the ones that disappeared
            </li>
            <li>Spot the good from the bad</li>
            <li>Keep checking in (or set alerts and forget it)</li>
          </ul>
          <p>That’s all. No spreadsheet nightmares. No detective work.</p>

          <h3>You Will Know Everything</h3>
          <p>
            Most people never realize they’re losing links. Someone takes down a
            blog post, moves their site, or changes the structure. And your
            backlink disappears. If it was a strong one, that’s gonna hurt your
            ranking. A proper backlink monitoring tool will ping you when that
            happens.
          </p>
          <p>
            The same goes for new links. If someone randomly mentions you and
            gives you credit, wouldn’t you want to know? You’d be surprised how
            often people link to you without you ever knowing. That’s traffic
            and trust you should be aware of.
          </p>

          <h3>What’s So Great About an Online Backlink Checker?</h3>
          <p>Honestly? It’s just faster.</p>
          <p>
            You don’t need to install anything. No updates. Just head online,
            plug in your link, and let the backlink checker online do the
            digging. It tells you where the links are coming from, what anchor
            text was used, and whether the link is dofollow or nofollow.
          </p>
          <p>
            And if you're into data, you can even get a backlink report
            generator. It shows you the full picture—who’s linking, how often,
            and what’s changed since last week.
          </p>

          <h3>Stay Organized with a Backlink Management Tool</h3>
          <p>
            If you’ve got more than a handful of links, you need some order.
            That’s where backlink management tools come in. These are built to
            keep your link-building clean. Tag links, filter by quality, or make
            notes for outreach. Whether you’re running a brand or an agency,
            this saves you from chaos.
          </p>
          <p>
            You’ll know which links came from guest posts, which came from PR,
            and which are junk.
          </p>

          <h3>Use a Backlink Analytics Tool If You Want the Full Picture</h3>
          <p>
            Getting links is just step one. The real move is understanding them.
            A backlink analytics tool helps break down the value of each link.
            Is it helping your ranking? Is the anchor text on point? Did your
            traffic spike when you got that backlink last week?
          </p>
          <p>
            With analytics, you’re not just collecting links—you’re learning
            from them.
          </p>

          <div className="d-flex justify-content-center mt-3 mb-3">
            <img
              className="m-4"
              src={tool14}
              alt="seobix"
              style={{ width: "65vw" }}
            />
          </div>
          <h3>FAQs</h3>
          <p>
            <strong>Q1. How do I track backlinks to my website?</strong>
            <br />
            You can use an online backlink tracker tool like SeoBix. Just add
            your domain, and it shows you every link pointing to your site in
            real-time.
          </p>
          <p>
            <strong>Q2. Why is monitoring lost backlinks important?</strong>
            <br />
            Lost backlinks can cause ranking drops. A backlink monitoring tool
            tells you when that happens so you can take action fast.
          </p>
          <p>
            <strong>Q3. Can I track competitor backlinks too?</strong>
            <br />
            Yup. Most tools let you see who’s linking to your competitors. It’s
            a great way to find link-building opportunities.
          </p>
          <p>
            <strong>Q4. Are free backlink checkers accurate?</strong>
            <br />
            Some are decent for surface-level info, but if you want full
            reports, alerts, and tracking, go with a premium backlink checker
            online.
          </p>
          <p>
            <strong>Q5. How often should I check my backlinks?</strong>
            <br />
            Weekly is fine for small sites. Bigger ones? Daily or auto-alerts
            work best.
          </p>

          <h3>Final Take</h3>
          <p>
            Backlinks are your site’s reputation in Google’s eyes. If you’re not
            keeping an eye on them, someone else is—probably your competitor.
          </p>
          <p>
            With a simple backlink tracker tool, you don’t need to micromanage
            or overthink. You just stay updated. You see what’s working. You
            catch what’s slipping. And you build smarter.
          </p>
          <p>It’s not about being perfect. It’s about staying sharp.</p>
          <p>
            Start tracking now. Before a lost backlink costs you the ranking you
            worked hard for.
          </p>
          <div className="mt-5">
            <ToolSlider />
          </div>
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

export default Linkbuilding;
