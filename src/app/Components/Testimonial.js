import React, { useEffect, useRef, useState } from "react";

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import TestImg1 from "..//TestimonialImg/Testimonial1.jpg";
import TestImg2 from "..//TestimonialImg/Testimonial2.jpg";
import TestImg3 from "..//TestimonialImg/Testimonial3 .jpg";
import TestImg4 from "..//TestimonialImg/Testimonial4.jpg";
import TestImg5 from "..//TestimonialImg/Testimonial5.jpg";
import TestImg6 from "..//TestimonialImg/Testimonial6.jpg";
import TestImg7 from "..//TestimonialImg/Testimonial7.jpg";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState();
  const testinomialRef = useRef(null);

  const scrollByCard = (ref, direction) => {
    if (!ref.current) return;
    const card = ref.current.querySelector("div");
    if (!card) return;
    const cardWidth = card.offsetWidth + 40;
    ref.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  useEffect(() => {
    setTestimonials([
      {
        img: TestImg1,
        category: "Category",
        content:
          " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to",

        author: "Raghav",
      },
      {
        img: TestImg2,
        category: "Category",
        content:
          "content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like re",

        author: "Himashu",
      },
      {
        img: TestImg3,
        category: "Category",
        content:
          " you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",
        author: "Abhijeet",
      },
      {
        img: TestImg4,
        category: "Category",
        content:
          " . If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middl the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",

        author: "Siddhansh",
      },
      {
        img: TestImg5,
        category: "Category",
        content:
          " . If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middl the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",

        author: "Siddhansh",
      },
      {
        img: TestImg6,
        category: "Category",
        content:
          " . If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middl the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",

        author: "Siddhansh",
      },
      {
        img: TestImg7,
        category: "Category",
        content:
          " . If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middl the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful",

        author: "Raghav",
      },
    ]);
  }, []);

  return (
    <div>
      <h2>Testimonials</h2>
      <div className="container-fluid py-5">
        <div className="row ">
          <div className="col-md-1  d-flex d-md-block"></div>
          <div className="col-md-10">
            <div className="row mt-5">
              <div className="col-2">
                <h
                  style={{
                    color: "#252525",
                    fontSize: "2rem",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  Testimonials
                </h>
              </div>

              <div className="col-md-2  ">
                <button
                  onClick={() => scrollByCard(testinomialRef, -1)}
                  className="btn btn-outline-primary rounded-circle me-2"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={() => scrollByCard(testinomialRef, 1)}
                  className="btn btn-outline-primary rounded-circle"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="col-12 ">
              <SliderSectionLsNews
                title="latest News"
                images={testimonials}
                containerRef={testinomialRef}
              />
            </div>
          </div>
          <div className="col-md-1 d-none d-md-block"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

function SliderSectionLsNews({ images, containerRef }) {
  return (
    <div className="mt-4 ">
      <div
        className="d-flex"
        style={{
          overflowX: "auto",
          scrollbarWidth: "none",
          gap: "40px",
          padding: "10px 0",
        }}
        ref={containerRef}
      >
        {(images ?? []).map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              width: "380px",
              justifyContent: "center",
              border: "none",
              boxShadow: "7px 5px 5px #f2f4f2",
              borderRadius: "0.5rem",
            }}
            className="text-start card p-2"
          >
            <div style={{ justifyContent: "center", display: "flex" }}>
              <img
                src={item.img}
                className=" "
                alt={`Slide ${index + 1}`}
                style={{
                  objectFit: "cover",
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                }}
              />
            </div>

            <div className="p-3">
              <p style={{ fontWeight: "600" }}>{item.content}</p>
              <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                {item.author}
              </p>
              <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
                {item.post}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
