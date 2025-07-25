import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import Footer from "./Footer";
import toppage1 from "../Images/toppage1.svg";
import toppage2 from "../Images/toppage2.png";
import pay from "../Images/pay.png";
import SideTab from "./Toolstab";
import {
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";

const Toppages = () => {
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
          <ContentToppages />
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

const ContentToppages = () => {
  return (
    <div>
      <div className="mx-2">
        <h1 className="text-center m-4">
          Top Pages Linking to Your Website – Find Your Best Backlinks
        </h1>

        <p>
          Building backlinks is one thing. Knowing which backlinks matter is
          another. Not every backlink adds real value to your site’s SEO. Some
          come from low-authority domains that don’t move the needle.
          Others—those rare high-DA, high-PA links—can significantly boost your
          rankings and credibility.
        </p>
        <p>
          With the Top Pages feature by SeoBix, you can instantly identify which
          external pages are linking to your website, and more importantly,
          which ones carry the most authority.
        </p>
        <p>
          If you want to strengthen your backlink strategy, it starts by knowing
          your best assets. Let’s talk about it.
        </p>
        <div className="d-flex justify-content-center m-4">
          <img
            className=""
            src={toppage1}
            alt="seobix"
            style={{ width: "65vw" }}
          />
        </div>
        <h2>What Are Top Pages in This Context?</h2>
        <p>
          In SeoBix, Top Pages refers to external URLs that link to your
          website, sorted by Domain Authority (DA) and Page Authority (PA).
        </p>
        <p>
          So instead of showing your site’s most visited pages, this tool shows
          you:
        </p>
        <ul>
          <li>Which websites link to your domain</li>
          <li>The exact pages (URLs) where those links are placed</li>
          <li>
            How authoritative those linking pages are (based on DA/PA scores)
          </li>
        </ul>
        <p>
          It’s a snapshot of the highest quality links you’ve earned—your
          backlink powerhouses.
        </p>

        <h3>Why Knowing Your Top Linking Pages Matters</h3>
        <p>
          Let’s say you’ve built 500 backlinks. That sounds impressive, but what
          if only 10 of those links are from domains with a DA above 70?
        </p>
        <p>
          Without that insight, you’re flying blind. You may be spending time
          building links that don’t help you grow, or worse, links that could
          harm your rankings.
        </p>
        <p>By identifying top referring pages with high authority, you can:</p>
        <ul>
          <li>Double down on outreach strategies that work</li>
          <li>Build stronger relationships with powerful domains</li>
          <li>
            Prioritize backlinks that improve your site’s trust and rankings
          </li>
          <li>Spot spammy or weak backlinks that should be disavowed</li>
        </ul>

        <h3>Features of the SeoBix Top Pages Tool</h3>
        <p>
          This tool is built for clarity. No complex graphs, no bloated
          dashboards—just clean, focused information about the most valuable
          pages linking to your site.
        </p>
        <p>Here’s what you’ll see:</p>
        <ol>
          <li>
            <strong>Referring Page URL</strong>
            <br />
            See exactly which page contains a link to your site. This gives you
            context on where and how your link appears.
          </li>
          <li>
            <strong>Domain Authority (DA)</strong>
            <br />A score (0–100) that estimates the overall strength of the
            linking domain. Higher DA usually means better SEO value.
          </li>
          <li>
            <strong>Page Authority (PA)</strong>
            <br />
            Similar to DA, but specific to that single page. A high-PA link,
            even from a low-DA domain, can be very impactful.
          </li>
          <li>
            <strong>Anchor Text Used</strong>
            <br />
            Understand how your site is being linked—are they using branded
            text, keywords, or generic phrases?
          </li>
          <li>
            <strong>Link Type</strong>
            <br />
            Whether the link is dofollow or nofollow. Dofollow links pass SEO
            value; nofollow links are more informational but still useful.
          </li>
        </ol>
        <div className="d-flex justify-content-center m-4">
          <img
            className=""
            src={toppage2}
            alt="seobix"
            style={{ width: "65vw" }}
          />
        </div>
        <p>
          This information helps you see the quality and structure of your
          backlink profile, not just the quantity.
        </p>

        <h3>How to Use the Tool</h3>
        <p>
          The process is straightforward. You don’t need to install anything or
          log into a complicated system.
        </p>
        <ul>
          <li>Go to the SeoBix Top Pages Tool</li>
          <li>Enter your website’s domain</li>
          <li>Click Analyze</li>
          <li>
            Instantly view a list of top linking pages, sorted by authority
          </li>
        </ul>
        <p>
          You’ll have a clear, data-backed view of your best backlink sources
          within seconds.
        </p>

        <h3>Real Use Cases That Make a Difference</h3>
        <p>
          You just finished a guest posting campaign. You’ve built links across
          several sites, but only some performed well in terms of domain
          quality. By running a scan in SeoBix, you can see which links were
          most valuable and refine your outreach strategy.
        </p>
        <p>
          Or maybe you recently went viral and picked up a bunch of backlinks.
          Instead of assuming they’re all great, use the tool to filter by
          DA/PA. That way, you can reach out again and build long-term
          relationships with high-authority sites.
        </p>
        <p>
          If you’re managing a client’s SEO, this tool helps you clearly show
          them which backlinks are driving value, not just numbers, but quality.
        </p>
        <p>
          And if you’ve been hit with an algorithm update, this can help spot
          low-quality backlinks that need to be disavowed fast.
        </p>

        <h3>Who Should Use the Top Pages Feature?</h3>
        <ul>
          <li>SEO professionals use it to audit backlink profiles</li>
          <li>Marketers use it to improve content partnerships</li>
          <li>Business owners use it to understand their online reputation</li>
          <li>
            Freelancers and agencies use it for client reporting and
            link-building strategy
          </li>
        </ul>
        <p>
          Even if you’re new to SEO, the layout is clean and beginner-friendly.
          You won’t be overwhelmed with jargon or charts. It’s straight to the
          point.
        </p>
        <Plancard />
        <h3>Benefits of Tracking Top Linking Pages</h3>
        <p>
          Once you start tracking your top referring domains and URLs, your
          link-building becomes smarter.
        </p>
        <ul>
          <li>Which pages improve your authority</li>
          <li>Which backlinks to protect during a site redesign</li>
          <li>Which types of content attract high-DA links</li>
          <li>Where you can build deeper relationships for future campaigns</li>
        </ul>
        <p>
          SEO is no longer just about having “more links”—it’s about having the
          right links. SeoBix helps you see which ones those are.
        </p>

        <h3>FAQs</h3>
        <p>
          <strong>1. What are the Top Pages in SeoBix?</strong>
          <br />
          They are external pages (URLs) that link to your site, ranked by their
          Domain Authority and Page Authority. These are your highest-value
          backlinks.
        </p>
        <p>
          <strong>
            2. Is this the same as checking my most visited pages?
          </strong>
          <br />
          No. This feature is about backlinks, not traffic. It shows you which
          external pages are linking to your domain, not which of your pages are
          getting visits.
        </p>
        <p>
          <strong>3. How is Domain Authority calculated?</strong>
          <br />
          DA is based on a combination of linking root domains, total links, and
          quality signals. SeoBix uses trusted metrics from leading SEO sources.
        </p>
        <p>
          <strong>4. Can I check my competitor’s linking pages too?</strong>
          <br />
          Yes. You can enter any domain, not just your own. It’s great for
          competitive research and link-building ideas.
        </p>
        <p>
          <strong>5. Are nofollow links included?</strong>
          <br />
          Yes. Both dofollow and nofollow links appear in the list, and they’re
          labeled so you can filter them accordingly.
        </p>
        <p>
          <strong>6. How often is the data updated?</strong>
          <br />
          SeoBix updates data regularly to ensure backlink freshness and
          authority accuracy.
        </p>

        <h3>Final Thoughts</h3>
        <p>
          In a backlink strategy, not all links are equal. Ten strong backlinks
          from high-authority pages will always beat a hundred spammy ones.
        </p>
        <p>
          The SeoBix Top Pages feature helps you see your strongest linking
          URLs, and that knowledge changes everything. You will understand where
          your SEO strength comes from. You’ll stop wasting time chasing
          low-value links. And you’ll start building a backlink profile that
          helps you rank.
        </p>
        <p>
          Start using the SeoBix Top Pages Tool today, and discover where your
          real authority is coming from.
        </p>
        <div className="mt-5">
          <ToolSlider />
        </div>
        <Specialoffer />
      </div>
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

export default Toppages;
