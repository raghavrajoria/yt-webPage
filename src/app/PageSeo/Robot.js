import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import Nav from "./Nav";
import Footer from "./Footer";
import SideTab from "./Toolstab";
// import pay from "../Images/pay.png";
// import robot1 from "../Images/robot1.txt.svg";
// import robot2 from "../Images/robot2.svg";
// import tool11 from "../Images/tool11.svg";
import {
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";
const Robot = () => {
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
          <ContentRobot />
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

const ContentRobot = () => {
  return (
    <div>
      <Col>
        <div className="mx-2">
          <h1>Help the Google Crawlers & Manage Your Website </h1>

          <p>
            Welcome to SeoBix—the one-stop solution to boost your website's
            visibility and performance on search engines. With the present
            advancements in the digital world, managing your website effectively
            becomes a mandate, though smart means and tools are needed to do so.
            SeoBix thus simplifies the task of crawling Google and managing the
            SEO performance of your website.
          </p>
          <div className="d-flex justify-content-center mt-3">
            {/* <img
                className="m-3"
                src={robot2}
                alt="seobix"
                style={{ width: "60vw" }}
              /> */}
          </div>

          <h2>Google Crawlers–What Are They and Why Are They Important?</h2>

          <p>
            Google crawlers, or bots as they are commonly known, are automated
            programs that search engines deploy to discover and index content
            from throughout the web. These bots crawl through the links of your
            site and examine its design to determine the relevance and usability
            of your content from a user's perspective. Proper optimization for
            these crawlers is the bedrock of ensuring that your pages get
            indexed in the right way and rank very well in search results.
          </p>

          <h2>How Will SeoBix Help Guide Google Crawlers?</h2>

          <p>
            SeoBix includes features you can use to cut out of the optimization
            process of your website and make sure Google bots fully understand
            what your content relates to. Here is how it is done:
          </p>

          <h3>Optimization of Crawling Pathways</h3>

          <p>
            SeoBix follows a well-thought-out internal linking structure on your
            site so that crawlers can traverse easily through your site and
            quickly find all relevant pages. It optimally utilizes the crawl
            budget by ensuring that search engines gulp down time on
            high-priority pages.
          </p>

          <h3>Robots.txt Management</h3>

          <p>
            If you need to give instructions to search engines on what to crawl
            and what not to crawl, you can manage and create the robots.txt file
            comfortably from within SeoBix. Google will crawl the more important
            pages, thus saving resources and indexing key content better.
          </p>

          <h3>XML Sitemap Creation</h3>

          <p>
            SeoBix helps you create an optimized XML sitemap that takes Google
            to all of your important pages. This will not only aid Google in
            crawling your website more efficiently but also help discover new
            content quickly for indexing.
          </p>

          <h3>Structured Data Implementation</h3>

          <p>
            It is very important to implement structured data on your pages for
            the Google crawlers to understand your content better. SeoBix
            provides user-friendly applications for schema markup integration to
            improve search engine visibility and rich snippets for your pages.
          </p>

          <h3>Crawl Error Identification</h3>

          <p>
            With the detailed reports from SeoBix, it would be easy to spot
            crawl errors such as broken links or any page with something wrong
            that prevents it from being indexed kind of properly. Once you clear
            those up, Google should have easy access to your pages and be able
            to rank them without sticking points.
          </p>

          <h3>Page Speed Optimization</h3>

          <p>
            Google considers page speed an important ranking factor. Tools
            provided by SeoBix allow monitoring and improving your website
            speed, allowing the Google bots to crawl your site quickly, thereby
            enhancing your rankings.
          </p>
          <Plancard />
          <h2 className="text-center">Manage Your Website With SeoBix</h2>
          <div className="d-flex justify-content-center">
            {/* <img
                className=""
                src={robot1}
                alt="seobix"
                style={{ width: "70vw" }}
              /> */}
          </div>
          <p>
            SeoBix is not only a crawler manager but also a specialized platform
            for all-round management of your website's SEO performance. Some
            perspectives you can count on:
          </p>

          <h3>Comprehensive Website Analytics</h3>

          <p>
            For an all-in-one online analytics solution that is able to track
            health, traffic, and performance metrics of your website in real
            time.
          </p>

          <h3>Keyword Management</h3>

          <p>
            Optimize your site with the best-performing keywords and keep ahead
            of the pack.
          </p>

          <h3>Content Recommendations</h3>

          <p>
            for taking action on gaps in content, keyword optimization, and
            other on-page SEO factors.
          </p>

          <h3>Rank Tracking</h3>

          <p>
            Track your keyword rankings and reevaluate tactics based on the
            real-time data.
          </p>
          <div className="mt-5">
            <ToolSlider />
          </div>

          <h3>Competitor Analysis</h3>

          <p>
            Look closer into what your competitors are doing and fine-tune your
            own strategies accordingly.
          </p>

          <h2>Reasons for Choosing SeoBix ?</h2>

          <h3>User-friendly Interface</h3>

          <p>
            Anyone can use SeoBix, from beginners to experts; it is so
            wonderfully and designed for website optimization and management.
          </p>

          <h3>Comprehensive Tools</h3>

          <p>
            From crawl management to complete content optimization, SeoBix has
            it all in one place for you.
          </p>

          <h3>Data-Driven Insights</h3>

          <p>
            SeoBix is real-time data-driven providing actionable
            strategy-actionable insights thus needed to improve the performance
            of your site.
          </p>

          <h3>SEO Support</h3>

          <p>
            Feel free to contact our team of experts in SEO that render you all
            sorts of possible assistance in solving challenges to ensure your
            site can deliver its expected optimum performance.
          </p>

          <h2>Start Optimizing Your Website Today</h2>

          <p>
            Letting crawlers miss your content is basically like inviting
            misfortune to your door. Using SeoBix, you have complete control
            over managing your website while ensuring that Google crawls and
            indexes those pages precisely.
          </p>

          <p>
            So, sign up with SeoBix today and put your site on the right track
            to having a commanding search engine presence and crawlers right
            over to the best-prioritized pages.
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

export default Robot;
