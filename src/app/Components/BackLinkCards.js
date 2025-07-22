import React from "react";

const cardData = [
  {
    title: "Backlink Generator",
    description:
      "Automatically create strong backlinks and monitor their status. Stay updated if any go missing or get de-indexed.",
    linkText: "Backlink Tracker",
    linkUrl: "/backlink-generator",
    bgColor: "#f4f7fb",
  },
  {
    title: "Top Pages",
    description:
      "Analyze your most linked pages and compare performance with competitors. Discover high-impact SEO opportunities.",
    linkText: "Backlink Gap Tool",
    linkUrl: "/check-top-linking-domain",
    bgColor: "#dff5ff",
  },
  {
    title: "Link Building Tool",
    description:
      "Identify broken or missing backlinks and transform them into fresh opportunities to build stronger connections.",
    linkText: "Broken Link Checker",
    linkUrl: "/link-building-tool",
    bgColor: "#f4f7fb",
  },
  {
    title: "Domain Authority",
    description:
      "Evaluate any website's authority score and SEO potential using over 15 trusted ranking signals and domain metrics.",
    linkText: "Domain Authority Checker",
    linkUrl: "/free-da-pa-checker",
    bgColor: "#d6ffd6",
  },
];

const BackLinkCards = () => {
  return (
    <div style={{ overflow: "hidden", padding: "40px 20px" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Backlink Optimization Toolkit: Everything You Need
          </h2>
        </div>
        <div className="row justify-content-center g-4">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div
                style={{
                  backgroundColor: card.bgColor,
                  padding: "24px",
                  borderRadius: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h5 className="fw-bold">{card.title}</h5>
                  <p className="text-muted" style={{ fontSize: "15px" }}>
                    {card.description}
                  </p>
                </div>
                <div>
                  <a
                    href={card.linkUrl}
                    className="text-primary fw-semibold"
                    style={{ textDecoration: "none" }}
                  >
                    {card.linkText} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackLinkCards;
