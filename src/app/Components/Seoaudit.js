import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
// import tool16 from "../Images/tool16.svg";
// import tool18 from "../Images/tool18.svg";
// import tool19 from "../Images/tool19.png";
import Nav from "./Navbar";
import Footer from "./Footer";
import SideTab from "./Toolstab";
import Seoanalyzer from "./Seoauditt";

const Seoaudit = () => {
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

      <Row className="d-flex justify-content-center">
        <Col md={10}>
          <div className="mx-2">
            <h1 className="text-center mb-4">
              Get Free SEO Audit Services to Improve Your Website's Rankings
              with SeoBix
            </h1>
            <p className="text-center">
              Want better Google rankings but don't know what's holding your
              site back? Our SEO Audit Services are designed to help beginners
              and professionals uncover hidden website issues that may affect
              search visibility.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Seoanalyzer />
        </Col>
      </Row>
      <ContentMain />

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

export default Seoaudit;

function ContentMain() {
  return (
    <>
      <Row className="justify-content-center mt-3" style={{ margin: "0" }}>
        <Col md={10}>
          <Row className="justify-content-between">
            <Col md={8}>
              <div className="mx-2">
                <h2>How to Use the SeoBix SEO Audit service Tool</h2>
                <p>
                  You can start by simply entering your website URL or a
                  specific page into the SeoBix audit tool. You can also add a
                  competitor URL. For example, you might analyze your homepage
                  against a competitor's service page to see which ranks better
                  for your target keywords.
                </p>
                <p>
                  First, your URL and focus keywords are entered, just click
                  "SEO Inspector." Within seconds, you will get a complete SEO
                  report showing technical issues, keyword usage, on-page SEO
                  factors, and much more.
                </p>
                <p>
                  The tool instantly checks how well you have optimized your
                  keywords on the page. You'll get a concise breakdown of what
                  you are doing right and what you need to change, an
                  easy-to-follow roadmap for the SEO beginner or expert.
                </p>
                {/* <div className="d-flex justify-content-center">
                  <img
                    className="mb-3"
                    src={tool16}
                    alt="seobix"
                    style={{ width: "70vw" }}
                  />
                </div> */}

                <h3>What our Free SEO Audit Tool Checks</h3>
                <p>
                  Our SEO audit tool provides a simple, in‑depth SEO report that
                  highlights every aspect of your site's health. Here's what
                  you'll find:
                </p>
                <h5>Common Keywords</h5>
                <p>
                  Common keywords help align your content with what users are
                  actively searching for on search engines. By targeting these
                  high-volume, relevant terms, you improve your chances of
                  ranking higher, attracting more organic traffic, and matching
                  user intent more effectively, leading to better engagement and
                  conversions.
                </p>
                <h5>Heading Optimization</h5>
                <p>
                  Heading optimization helps search engines understand your
                  content structure and relevance, making it easier to rank for
                  target keywords. Well-organized headings also improve user
                  experience, which boosts engagement. This directly supports
                  better SEO reporting by highlighting clear on-page
                  optimization efforts.
                </p>
                <h5>Image ALT Attributes</h5>
                <p>
                  Image ALT attributes allow search engines to know what an
                  image refers to, assisting with page relevance and website
                  accessibility. Image ALT Tags are a way to get traffic from
                  image search. Properly optimized ALT tags would also be listed
                  in an SEO Audit Services section to improve page overall
                  on-page SEO performance.
                </p>
                <h5>Keyword Density & Content Quality</h5>
                <p>
                  Using the right keywords naturally throughout your content is
                  essential for ranking. Our tool checks keyword placement,
                  content length, readability, and relevance. You'll get
                  suggestions to enhance your content for both search engines
                  and human readers, without keyword stuffing.
                </p>
                <h5>Links Ratio</h5>
                <p>
                  Keeping a healthy link ratio between external links and
                  internal links helps search engines understand your site
                  structure and authority. A healthy link strategy, like the one
                  presented by the SEO audit tool, makes crawling your site
                  easier and provides greater trust signals in SEO reporting,
                  which all add to the probability of Google ranking your site
                  favorably.
                </p>
                <h5>Missing or Duplicate Title Tags & Meta Descriptions</h5>
                <p>
                  Meta tags are very important since they provide a short
                  description for search engines regarding the content of your
                  pages. Our tool is capable of checking for missing, duplicated
                  works, which means low optimization of the titles and meta
                  descriptions for the whole site. This maintenance contributes
                  to your Page in search results being ranked higher and in
                  gaining more clicks due to its clear and unique messaging.
                </p>
                <h5>OpenGraph Meta Tags</h5>
                <p>
                  OpenGraph meta tags allow you to control how your content
                  appears when it gets shared across social media platforms, and
                  can enhance the click-through rate and engagement. This
                  indirectly improves SEO performance, and with tools like the
                  SEO audit tool, you can see if you're missing any OpenGraph
                  tags. It will improve your reporting's accuracy through SEO.
                </p>
                {/* <div className="d-flex justify-content-center">
                  <img
                    className="mb-3"
                    src={tool16}
                    alt="seobix"
                    style={{ width: "70vw" }}
                  />
                </div> */}
                <h5>Validating a Sitemap and Robots.txt</h5>
                <p>
                  A well-organized sitemap and a properly configured robots.txt
                  file ensure that search engines know every part of your
                  website. Our tool validates the two to ensure every
                  significant page is crawlable and indexed. We notify you if
                  any pages have disallowed content or if there are sitemap
                  errors that could hinder your search visibility.
                </p>
                <h5>Structured Data and Schema Markup</h5>
                <p>
                  Structured data helps search engines understand your content
                  and display rich results like reviews, FAQs, and ratings. Our
                  audit detects missing or incorrect schema markup across key
                  pages. Implementing proper structured data can improve CTR and
                  make your listing stand out in Google search.
                </p>
                <h5>Minify CSS & JavaScript</h5>
                <p>
                  Minification involves reducing the file size of CSS and
                  JavaScript by getting rid of all unnecessary characters such
                  as spaces, comments, and others. This speeds up the loading of
                  your site. The faster something loads, the better it will be
                  for user experience and that is an important factor for
                  Google's SEO ranking algorithm that, in turn, increases the
                  visibility in search results.
                </p>
                <h5>Directory Listing</h5>
                <p>
                  Directory listing gives your website more online exposure by
                  getting it listed on trusted directories. Directory listings
                  can improve local SEO and domain authority. Many directories
                  will give you some backlinks, and the presence in the
                  directory helps search engines have more trust in your site,
                  which can also improve your rankings both locally and
                  organically in search engine results.
                </p>
                <h5>Secure Connection</h5>
                <p>
                  A secure connection (HTTPS) is also important for the SEO
                  audit tool. It allows you to protect user data sent to your
                  website as well as provide an added level of trust for the
                  visitor. Google has claimed HTTPS is a ranking factor, and
                  securing your website with an SSL certificate might help you
                  increase your visibility and credibility with organic results.
                  Securing your website also reduces your chances of obtaining a
                  data breach, as a pop-up warning the visitor's browser may
                  make them abandon you to switch to another competitor.
                </p>
                <h5>Core Web Vitals and Page Speed Performance</h5>
                <p>
                  To favor those sites that quickly respond to user needs with
                  an excellent user experience, Google keeps website speed and
                  good experiences in mind. Our SEO Audit Services assess the
                  Core Web Vitals of your site, including loading speed, user
                  interaction, and visual stability. You then get properly
                  actionable insights to improve your performance score and
                  optimize against bouncers coming from any device.
                </p>
                <p>
                  The tool instantly checks how well you have optimized your
                  keywords on the page. You'll get a concise breakdown of what
                  you are doing right and what you need to change, an
                  easy-to-follow roadmap for the SEO beginner or expert.
                </p>
                <h2>Why You Need Technical SEO Audit</h2>
                <p>
                  Ranking over 200+ parameters for a website- by technical
                  glitch big or small to ruin you.
                </p>
                <p>
                  Thus with our SEO audit, identify those issues early enough
                  to:
                </p>
                <h4>1. Increase Organic Rankings </h4>
                <p>
                  More organic rankings equal more visibility, traffic, and
                  leads without any cash outlay on ads. By identifying and
                  fixing the SEO errors, optimizing metadata, and improving site
                  structure, your website becomes more friendly to search
                  engines. Our audit gives you a roadmap to climb higher in
                  Google results and stay ahead of your competitors.{" "}
                </p>
                <h4>2. Faster Indexing by Search Engines </h4>
                <p>
                  As long as search engines can't index your site, it won't show
                  in search results. Our SEO audit pins down the critical pages
                  that are crawlable and free from technical hindrances that
                  trigger de-indexing. Identify barriers such as broken links,
                  redirects, and missing sitemaps so your content appears faster
                  in Google.
                </p>
                <h4>3. Improve User Experience </h4>
                <p>
                  SEO is not just for bots; it is for users. The audit will show
                  low-speed pages, poor mobile design to be put to use, and
                  usability issues that frustrate users. To improve site speed,
                  navigation, and content structure of the site, you will keep
                  your visitors engaged for long and reduce bounce rates.
                </p>
                <h4>4. Increase Revenue and Website Traffics</h4>
                <p>
                  Traffic doesn't mean anything if they do not do any good for
                  the business. Seobix will help turn your site into a
                  lead-generating machine through improved visibility,
                  usability, and keyword alignment. Fix hidden SEO problems and
                  attract more qualified traffic to leading visitors into
                  actions - signups, purchases, and inquiries via contacts.{" "}
                </p>
                <h2>How Seobix's Free Audit Tool Works</h2>
                <ul>
                  <li>Enter Your Website URL in the field above </li>
                  <li>
                    Scan Your Site Instantly - No waiting, No Registration{" "}
                  </li>
                  <li>
                    Full Downloaded SEO Report with Actionable Recommendations{" "}
                  </li>
                </ul>
                <h2 className="text-center">What Our Users Say </h2>
                <Row className="justify-content-center">
                  <Col md={8}>
                    <Card className="p-2  text-center">
                      <blockquote className="blockquote mb-0">
                        <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
                          "Seobix helped me identify critical errors in minutes.
                          After fixing them, my site jumped 3 volumes within
                          Google!"
                        </p>
                        <footer className="blockquote-footer mt-3 fw-bold text-dark">
                          Amit Raj{" "}
                          <cite title="Source Title">, Digital Marketer</cite>
                        </footer>
                      </blockquote>
                    </Card>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                  <Col md={8}>
                    <Card className="p-2  text-center">
                      <blockquote className="blockquote mb-0">
                        <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
                          "Initially, I was quite taken aback at the level of
                          detail included in the audit. The speed and clarity of
                          the report saved me hours of guesswork."
                        </p>
                        <footer className="blockquote-footer mt-3 fw-bold text-dark">
                          Neha Sharma,{" "}
                          <cite title="Source Title">eCommerce Founder</cite>
                        </footer>
                      </blockquote>
                    </Card>
                  </Col>
                </Row>
                <h2 className="mt-4 mb-3">
                  Most Frequently Asked Questions (FAQs)
                </h2>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>What is an SEO audit?</Accordion.Header>
                    <Accordion.Body>
                      An SEO audit is a thorough examination and evaluation of
                      the overall technical setup and on-page elements of your
                      website in terms of SEO health. The audit pinpoints broken
                      links, crawl errors, page loading speed, metadata over the
                      top, etc. This helps you identify what is stopping your
                      website from better positioning in search engines like
                      Google. That is the first step towards getting stronger
                      online footprints. Better performance is what you actually
                      need.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Is it really free to use the SEO audit tool?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, it is. The Seobix SEO audit tool is free, with
                      absolutely no strings attached, hidden fees,
                      subscriptions, or upgrades. You will be able to run
                      unlimited audits without having to sign up for anything or
                      enter your credit card information. We feel that any
                      website owner should be able to obtain essential SEO
                      insights regardless of whether they pay for it.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Do I need to register or pay?
                    </Accordion.Header>
                    <Accordion.Body>
                      There is no registration, login, or payment necessary to
                      use the Seobix SEO audit tool. Just enter your website
                      URL, click scan, and get your SEO report instantly. It is
                      that easy and accessible to anyone from an inexperienced
                      novice to an SEO expert to begin evaluating and fixing
                      their website performance problems.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Can I download the SEO report?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes! You will have a choice to export the complete SEO
                      report in PDF format for downloading right after the
                      audit. It is ideal for sharing with the team, keeping for
                      later review, or as a to-do list for implementing fixes
                      recommended in the report.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className="text-center m-5">
                  <h3 className="fw-bold">
                    Start Your Free SEO Audit with Seobix Today
                  </h3>
                  <p>
                    Stop allowing invisible SEO problems to hurt your rankings.
                    Instant insights, no signup, zero cost: real results, that
                    is this with Seobix. Scan your site, fix what matters, and
                    confidently start climbing the search results.
                  </p>
                </div>
              </div>
            </Col>

            {/* Sticky Toolstab Column */}
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
    </>
  );
}
