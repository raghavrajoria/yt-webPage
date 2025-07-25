import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import Nav from "./Navbar";
import Footer from "./Footer";
import SideTab from "./Toolstab";
import {
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
  FaFileAlt,
  FaSearch,
} from "react-icons/fa";
import pay from "../Images/pay.png";

import structure2 from "../Images/structure2.svg";
import structure3 from "../Images/structure3.png";
const Structure = () => {
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
          <ContentStructure />
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

const ContentStructure = () => {
  return (
    <div>
      <Col>
        <div className="">
          <h1 className="text-center  m-3">
            Google Structured Data for Better Search Results
          </h1>

          <p className="mt-3">
            Structured Data refers to a standardized format to mark up
            information about a web page and categorize its content. You can
            think of it as a way of informing search engines, "Hey, this page is
            about a recipe, here is the cooking time, the ingredients, and the
            rating". This structured data cleverly avoids going through guessing
            what your content is all about; of course, Google will read this
            structured data and display your page better. This era calls for
            quick comprehension and rich and accurate results on the part of
            users.
          </p>

          <h2>Why Structured Data Matters for SEO</h2>

          <p>
            Enhanced Search Appearance: Structured data helps rich snippets to
            thrive-those extra pieces of information you often see within search
            results, like star ratings, FAQs, product prices, and event dates.
            These additional details enhance the activeness of your listing in
            the eye of the user.
          </p>

          <ul>
            <li>
              <h3>Increased CTR (Click-Through Rate)</h3>
              <p>
                A visually enhanced result will convert better since users are
                more likely to click on it compared to a plain blue link.
              </p>
            </li>

            <li>
              <h4>Voice Search Optimization</h4>
              <p>
                On voice searches, structured data presents opportunities for
                your content to come forth in searches and turn out to be next
                in popularity.
              </p>
            </li>

            <li>
              <h4>Better Indexing</h4>
              <p>
                When search engines understand your content better, they can
                index your pages more efficiently and serve them up for
                appropriate queries.
              </p>
            </li>

            <li>
              <h4>Sustain Competitiveness</h4>
              <p>
                As more companies embrace schema markup for SEO, your tardiness
                in doing so will hurt your website.
              </p>
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <img
              className="mb-3"
              src={structure3}
              alt="seobix"
              style={{ width: "65vw" }}
            />
          </div>
          <div className="mt-5">
            <ToolSlider />
          </div>
          <h3>Optimize Your Structured Data with SeoBix</h3>
          <p>
            Structured data is a type of code that you apply to your website to
            help the search engine better understand your content. Skima Markup
            allows you to highlight important information like reviews, product
            information, FAQ, events, and many others! This will give your pages
            the chance to appear with rich snippets in search results, which
            gets more clicks because it stands out better and is more
            noticeable.
            <br />
            <p className="mt-2">
              Although setting up structured data correctly is more technical
              than other site types, you want to try to set up structured data
              with Seobix because it is simple to use. Seobix automatically
              tells you when you lack schema markup or if it is incorrect and
              neatly presents suggestions to fix it.
            </p>
          </p>
          <h3>Why It Is Necessary for Any Website in 2025</h3>

          <p>
            In today's digital world, owning a website is not enough. Be it a
            small business, an eCommerce site, or a personal blog, having no
            visibility is not acceptable, especially when it is essential for
            finding the target audience. It's not only about ranking but
            understanding and engaging users to have a reason to talk about your
            content.
          </p>

          <h4>1. Which in Turn Refines SEO and the User Experience</h4>

          <p>
            Structured data aims at making your content visible, accessible, and
            interesting to search engines and users alike. When your content is
            presented better to search engines and interpreted as a result, then
            as a consequence, your website will surface better in search
            results, getting more traffic in clicks, user engagement, and
            ultimately having a greater performance in its own right. The
            structured data not only helps search engines in connecting what
            your content is all about but also how it relates to user search
            queries, thus facilitating more votes.
          </p>

          <h4>2. Small Businesses, Bloggers, and eCommerce Websites</h4>

          <p>
            The small businesses, bloggers, and owners of e-commerce websites
            can avail multiple benefits from structured data. Small businesses
            require an effective presence at the top of search results to drive
            traffic and thus increase sales. Bloggers can use structured data
            for highlighting rich content such as images, reviews, and ratings
            that make their articles more appealing. eCommerce websites provide
            maximum advantages from structured data as they provide product
            details so that it can help potential customers in searching for the
            required items easily. SeoBix-an all-in-one solution to implement
            structured data in any business sector or size without technical
            expertise.
          </p>

          <h4>3. Improving Visibility and Clicks</h4>

          <p>
            The implementation of structured data can significantly enhance the
            appearance of your website in the search results, for example,
            through product listings, articles, or blog posts showing additional
            information such as reviews or ratings, and even images directly in
            the search result. This makes your listing visible among a multitude
            of basic blue links in search engines, and thus structured data
            gives a boost to your CTR (Click-Through Rate). This work will
            ensure that you don't run short but will engage your content better
            and keep it above the general search engines with using SeoBix.
          </p>
          <div className="d-flex justify-content-center">
            <img
              className="mb-3"
              src={structure2}
              alt="seobix"
              style={{ width: "65vw" }}
            />
          </div>
          <h4>4. Convey Message That Directly Addresses Search Engines</h4>

          <p>
            To aid clear communication with search engines, structured data is
            the additional tool for your website. It provides a much more
            ordered, organized view of your content for search engines to
            understand it. Simply put, using structured data and specialized
            schemas tells search engines what type of content the page is
            showing - product, article, review, or event. With SeoBix, all you
            do is to take the little widget offered there, which makes an
            otherwise very boring task of adding structured data to your content
            a breeze and puts everything in the right format for search engines
            to read correctly.
          </p>

          <h4>5. The Basics Of Distinction</h4>

          <p>
            As the field of SEO changes vastly every second, the need for
            originality and clarity behind the same just keeps increasing. That
            said, structured data helps search engines understand that your
            content is one of a kind. It also presents it in a structured way.
            SeoBix brings in all facilities to make sure that your content is
            not lost in the millions of documents. SeoBix also provides article
            schema, product schema, FAQ schema, etc. to ensure that your content
            is indexed faster; thus, works beautifully with rich snippets to
            grab user attention.
          </p>

          <h3> Conclusion</h3>

          <p>
            As we further advance into 2025, SEO is no more about being just
            found; it is about being understood and trusted by search engines.
            With such standing, implementation of structured data would be a
            feather in the cap of the vying players in a crowded digital space.
          </p>

          <p>
            Structured data for SEO can give search visibility a real push,
            whether you are a small business, a blogger, or a large eCommerce
            contender. It is thus not about good rankings; it is about better
            results, the best engagement, and a grand user experience. Do not
            let your content get lost during search results. With schema markup
            for SEO, clearly tell your story—and see the traffic rise.
          </p>
        </div>
        <Plancard />
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
export default Structure;
