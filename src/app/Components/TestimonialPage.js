import React, { useState, useRef, useEffect } from "react";

import TestimonialsImg1 from "../TestimonialImg/Testimonial1.jpg";
import TestimonialsImg2 from "../TestimonialImg/Testimonial2.jpg";
import TestimonialsImg3 from "../TestimonialImg/Testimonial3 .jpg";
import TestimonialsImg4 from "../TestimonialImg/Testimonial4.jpg";
import TestimonialsImg5 from "../TestimonialImg/Testimonial5.jpg";
import TestimonialsImg6 from "../TestimonialImg/Testimonial6.jpg";
import TestimonialsImg7 from "../TestimonialImg/Testimonial7.jpg";

const testimonialsData = [
  {
    name: "Vanshika",
    rating: 5,
    text: `Seobix is a really helpful website for my SEO work. It shows clear keyword data and backlink info, The tools are easy to use, even for beginners.Their support team is also very friendly and quick to help.  `,
    highlight: "I’m happy using seobix .👍🏻",
    avatar: TestimonialsImg1,
  },
  {
    name: "Himashu",
    rating: 5,
    text: `SeoBix exceeded my expectations. The SEO audit, on-page SEO, keyword analysis, and user-friendly dashboard make it incredibly effective. It simplified everything for me.   `,
    highlight:
      "I’ve seen real results—one of the best SEO tools I have ever used!",
    avatar: TestimonialsImg2,
  },
  {
    name: "Harsh",
    rating: 5,
    text: `SeoBix is a leading digital marketing company committed to empowering small and medium businesses with result driven online strategies.  `,
    highlight:
      " SeoBix combines creativity with data to deliver measurable growth.",
    avatar: TestimonialsImg3,
  },
  {
    name: "Amit",
    rating: 5,
    text: `I have been using SeoBix for a while now, and it’s honestly one of the easiest SEO tools I’ve come across. From audits to keyword tracking, it does everything.   `,
    highlight: "Great tool for anyone trying to grow online!",
    avatar: TestimonialsImg4,
  },
  {
    name: "Parth",
    rating: 5,
    text: `Seobix is an easy-to-use SEO tool that helps check website issues, find keywords, and improve Google rankings quickly, you can check your sites Da, Pa, and spam score very easily.  `,
    highlight: "Great tool to improve your website's SEO!",
    avatar: TestimonialsImg5,
  },
  {
    name: "Tanishka",
    rating: 5,
    text: `SEOBIX has been instrumental in boosting our online presence. Their SEO strategies significantly improved our website traffic and search engine rankings. SEOBIX is a great choice. `,
    highlight: " Highly satisfied with their performance. ",
    avatar: TestimonialsImg6,
  },
  {
    name: "Raghav",
    rating: 5,
    text: `I use seobix for my daily SEO work, and it’s really good. It helps me very much in finding right keywords and check backlinks and I like how fast and helpful the tool is i think   `,
    highlight:
      "It’s a great tool for anyone who wants to improve website ranking.",
    avatar: TestimonialsImg7,
  },
  {
    name: "Raghav",
    rating: 5,
    text: `I use seobix for my daily SEO work, and it’s really good. It helps me very much in finding right keywords and check backlinks and I like how fast and helpful the tool is i think   `,
    highlight:
      "It’s a great tool for anyone who wants to improve website ranking.",
    avatar: TestimonialsImg7,
  },
];

const TestimonialCard = React.forwardRef(({ testimonial }, ref) => (
  <div className="testimonial-card" ref={ref}>
    <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
      <span style={{ fontSize: "4rem", color: "#799EFF", marginRight: 8 }}>
        &#x275D;
      </span>
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          objectFit: "cover",
          marginRight: 12,
        }}
      />
      <span style={{ color: "#FFD700", fontSize: "1.5rem", marginRight: 8 }}>
        {"★".repeat(testimonial.rating)}
      </span>
      <span style={{ fontWeight: "bold", marginRight: 8 }}>
        ({testimonial.rating}/5)
      </span>
      <span style={{ fontStyle: "italic" }}>{testimonial.name}</span>
    </div>
    <div style={{ fontSize: "1.1rem", textAlign: "left", marginBottom: 8 }}>
      <span>{testimonial.text}</span>
      <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
        {testimonial.highlight}
      </span>
    </div>
    <div style={{ textAlign: "right", fontSize: "4rem", color: "#799EFF" }}>
      &#x275E;
    </div>
  </div>
));

const TestimonialPage = () => {
  const [visible, setVisible] = useState(4);
  const lastCardRef = useRef(null);
  useEffect(() => {
    if (lastCardRef.current) {
      lastCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [visible]);

  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 text-center">
          <h2>SeoBix Clients' testimonials</h2>
          {testimonialsData.slice(0, visible).map((t, idx) => (
            <TestimonialCard
              testimonial={t}
              key={idx}
              ref={idx === visible - 1 ? lastCardRef : null}
            />
          ))}
          {visible < testimonialsData.length && (
            <button
              className="btn btn-primary mt-3"
              onClick={() => setVisible(visible + 2)}
            >
              View More
            </button>
          )}
        </div>
        <div className="col-md-2"></div>
      </div>
      <style>{`
        .testimonial-card {
          background: #fff;
          border: 2px solid #cfe2ff;
          border-radius: 16px;
          margin: 32px 0;
          padding: 24px 32px 16px 32px;
          position: relative;
        }
      `}</style>
    </div>
  );
};
export default TestimonialPage;
