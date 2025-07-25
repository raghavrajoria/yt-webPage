import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import Nav from "./Nav";
import Footer from "./Footer";
import SideTab from "./Toolstab";
// import trend1 from "../Images/trend1.png";
// import trend3 from "../Images/trend3.png";
import {
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";

const Googletrend = () => {
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
          <ContentTrends />
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

const ContentTrends = () => {
  return (
    <div>
      <Col>
        <div className="mx-2">
          <h1 className="text-center">
            Best Free Google Trends Tool For Better Ranking
          </h1>

          <p>
            Google Trends is a tool, helps to find what people are searching for
            on Google. It shows what popular topics on Google are trending now
            and how these topics have changed over time. For example, if
            everyone is searching for “AI tools” this week, Google Trends will
            show that spike in interest.
          </p>

          <p>
            With this tool. You can see what is hot, what’s fading, and what’s
            staying strong. And if you write content or build websites, this is
            very useful for you. Because now you do not need to guess what to
            talk about. It provides you the real-time data.
          </p>
          <div className="d-flex justify-content-center">
            {/* <img
                className="mb-3"
                src={trend1}
                alt="seobix"
                style={{ width: "65vw" }}
              /> */}
          </div>
          <h2>How Does Google Trends Help in SEO?</h2>

          <p>
            Google Trends helps you to find what is popular right now, so you
            can create content around those topics. Instead of guessing
            keywords, you get real data on what’s trending, what’s rising, and
            how interest changes over time. This helps you stay ahead of the
            curve, pick better keywords, and target topics. This gives you a
            chance to rank higher on search results.
          </p>

          <p>
            But trends don’t last forever. Some topics get hot fast and then
            disappear. Others grow slowly over time. That’s why timing is so
            important. You need to know not just what’s trending, but also when
            to jump in. And that’s where SeoBix comes in to make your life
            easier.
          </p>
          <Plancard />
          <h2>What is SeoBix's Keyword Trends Feature?</h2>

          <p>
            The keyword Trends feature in SeoBix allows you to know what the
            latest topics are in search. What is rapidly growing, and how a
            topic's interest has developed over the years. It's like having a
            real-time view of trends online. Whether you plan to write an
            article, design content, or are simply curious about new topics,
            SeoBix delivers insights in straightforward and easy-to-understand
            terms. And yes, you don't need to be an SEO professional to access
            this exciting feature at no cost.
          </p>

          <h2>How SeoBix's Keyword Trends Feature Helps?</h2>

          <p>
            SeoBix takes keyword Trends and gives it an SEO twist. You do not
            have to go anywhere to find trending Keywords, which keywords are
            rising, and which are out of trend. SeoBix makes it easy by
            providing all these things on one roof. We made it simple, useful,
            and perfect for anyone who wants to rank higher on Google. Here are
            some feature that makes SeoBix Google Trends special
          </p>

          <h3>Trending Now</h3>

          <p>
            This feature shows you the hottest topics people are searching for
            right now. You don’t need to guess or search—we bring the latest
            trends straight to your screen.
          </p>

          <p>
            Let’s say “eco-friendly tech” is trending. With SeoBix, you’ll not
            only see that—it’ll also tell you if this is a good keyword to use.
            Is it too competitive? Is it easy to rank for? You get answers fast,
            so you can create smart content before others even notice the trend.
          </p>

          <h3>Interest Over Time</h3>

          <p>
            Once you spot a trending topic, the next question is: Will this
            trend last?
          </p>

          <p>
            SeoBix shows you a simple graph of how interest in that topic has
            gone up or down over time. Maybe it’s been growing for months—or
            maybe it’s already peaked. Knowing this helps you decide when to
            post your content.
          </p>

          <p>
            This way, you won’t waste time on dying trends or miss your chance
            when something’s just getting started.
          </p>

          <h3>Rising Topics</h3>

          <p>
            Now here’s the real magic: SeoBix’s Rising Topics feature. These are
            topics that aren’t super popular yet, but they’re starting to grow
            fast.
          </p>

          <p>
            Getting in early on a rising topic gives you a huge advantage. You
            can be one of the first to write about it, which means you could
            rank on Google before the topic explodes. That’s how smart content
            creators stay ahead.
          </p>

          <p>
            And yes, we make it easy to check if that rising topic is good for
            SEO. We show you keyword difficulty, monthly searches, and even
            related keywords—all in a few clicks.
          </p>
          <div className="d-flex justify-content-center">
            {/* <img
                className="mb-3"
                src={trend3}
                alt="seobix"
                style={{ width: "65vw" }}
              /> */}
          </div>
          <h2>How SeoBix Helps You Take Action on Trends</h2>

          <p>Finding a trend is great, but what happens next?</p>

          <p>
            That’s where SeoBix goes beyond just showing data. After you find a
            trending keyword or topic, you can instantly analyze it using
            SeoBix’s SEO tools. You’ll know how easy it is to rank for that
            keyword, what related terms you can use, and how your website is
            currently performing for those terms.
          </p>

          <p>
            You don’t have to jump between tools or open a dozen tabs.
            Everything is right there, in one simple platform. SeoBix helps you
            go from trend discovery to content strategy in minutes.
          </p>

          <p>
            And yes, many of these tools are available for free, so you can
            start improving your site without spending anything.
          </p>

          <h2>Final Thoughts</h2>
          <ul>
            <li>
              Google Trends is a great way to know what people care about. But
              it doesn’t always tell you how to use that info for your website.
              That’s where SeoBix helps.
            </li>

            <li>
              With our features like What’s Trending Now, Interest Over Time,
              Rising Topics, you can turn hot topics into real results. More
              traffic. Better rankings. Smarter content.
            </li>

            <li>
              So the next time you’re stuck on what to write, or you want to
              know what the internet is talking about, just open SeoBix. We’ll
              show you what’s trending and help you use it the smart way.
            </li>

            <li>
              Trends are happening all around you. SeoBix helps you catch them
              before they pass.
            </li>
          </ul>
        </div>
        <ToolSlider />
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

export default Googletrend;
