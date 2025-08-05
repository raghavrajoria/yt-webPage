"use client";
import React from "react";
import Image from "next/image";

import ArticleImg1 from "..//AstrologyImg/ArticleImg1.png";
import ArticleImg2 from "..//AstrologyImg/ArticleImg2.png";

import Similar1 from "..//AstrologyImg/SimilarpostImg1.jpg";
import Similar2 from "..//AstrologyImg/SimilarpostImg2.jpg";
import Similar3 from "..//AstrologyImg/SimilarpostImg3.jpg";

import { GoShareAndroid } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const AstroArticle = () => {
  return (
    <div style={{ background: "#fff", overflowX: "hidden" }}>
      <div className="row mt-5">
        <div className="col-md-2"></div>

        <div className="col-md-8">
          <h3
            className="mb-3 inter-text"
            style={{
              color: "#333",
              fontWeight: 600,
              color: "#2A343D",
            }}
          >
            Vedic Astrology: The Ancient Science of the Stars
          </h3>

          <div className="d-flex justify-content-between mb-4">
            <div className="text-muted">By Ishwaar</div>
            <div className="text-muted">Sep 24, 2025</div>
          </div>

          <p
            className="mb-4 inter-text"
            style={{
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0%",
            }}
          >
            Vedic Astrology, also known as Jyotish Shastra, is one of the
            world’s oldest and most profound systems of understanding human life
            through the movements of celestial bodies. Rooted in the spiritual
            traditions of ancient India, this sacred science offers a cosmic map
            of our karma, character, challenges, and potential.
          </p>

          <h3
            className="mb-3 inter-text"
            style={{
              fontWeight: 500,

              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0px",
              textTransform: "capitalize",
              color: "#3E3232",
            }}
          >
            What is Vedic Astrology?
          </h3>

          <p
            className="mb-4 inter-text"
            style={{
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0%",
            }}
          >
            Vedic Astrology is derived from the word “Veda,” which means
            knowledge in Sanskrit. Unlike Western astrology, which uses the
            tropical zodiac, Vedic astrology is based on the sidereal zodiac,
            aligning planetary positions with fixed constellations in the sky.
            This makes it astronomically precise and deeply reflective of
            real-time planetary shifts.
          </p>

          <Image
            className="rounded mb-4"
            src={ArticleImg1}
            alt="Nusa Penida View"
            style={{
              height: "80vh",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <p
            className="mb-4 inter-text"
            style={{
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0%",
            }}
          >
            Jyotish translates to “the science of light”—referring to the light
            cast by celestial bodies and how it influences life on Earth. In
            this system, everything is interconnected: your soul’s journey, your
            karmic patterns, and your life’s timing are all written in the
            stars.
          </p>

          <h3
            className="mb-3 inter-text"
            style={{
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "0px",
              textTransform: "capitalize",
              color: "#3E3232",
            }}
          >
            Vedic Astrology & Spirituality
          </h3>

          <p
            className="mb-4 inter-text"
            style={{
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0%",
            }}
          >
            What sets Vedic astrology apart is its deeply spiritual essence.
            It’s not just predictive—it’s transformative. Rooted in dharma
            (purpose), karma (action), and moksha (liberation), this system is
            designed to guide you toward a life of higher consciousness. <br />{" "}
            In the hands of a mindful practitioner, Vedic astrology becomes a
            sacred mirror—reflecting not only who you are, but who you are meant
            to become.
          </p>

          <Image
            className="rounded mb-4"
            src={ArticleImg2}
            alt="Island Adventures"
            style={{
              height: "80vh",
              width: "100%",
              objectFit: "cover",
            }}
          />

          <p
            className="mb-4 inter-text"
            style={{
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "26px",
              letterSpacing: "0%",
            }}
          >
            Vedic astrology is not a belief system—it’s a living science. It's
            not about fear or fatalism, but about awareness and alignment. When
            interpreted with wisdom and compassion, it becomes a powerful tool
            for healing, empowerment, and soulful evolution.
          </p>

          <div className="mb-5 d-flex align-items-center">
            <button
              className="btn btn-outline-primary d-flex align-items-center"
              style={{
                borderRadius: "25px",
                padding: "8px 16px",
                fontWeight: 500,
                fontSize: "16px",
                gap: "8px",
              }}
            >
              <GoShareAndroid />
              Share
            </button>

            <span className="text-muted d-flex align-items-center ms-3">
              <IoEyeOutline className="me-1" />
              12K views
            </span>
          </div>
          {/* similar post section */}

          <div className="mt-4">
            <h4 className="mb-3">Similar Posts</h4>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <Image
                    src={Similar1}
                    className="card-img-top"
                    alt="Delhi Travel"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h6
                      className="card-title inter-text"
                      style={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0.01%",
                      }}
                    >
                      DELHI Travel Vlog ✈ | Exploring Street Food, Markets &
                      Monuments!
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <Image
                    src={Similar2}
                    className="card-img-top"
                    alt="Delhi Adventure"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h6
                      className="card-title inter-text"
                      style={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0.01%",
                      }}
                    >
                      JAIPUR in Full Color 🎨 | Forts, Food & the Pink City
                      Experience!
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <Image
                    src={Similar3}
                    className="card-img-top"
                    alt="Delhi Exploration"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h6
                      className="card-title inter-text"
                      style={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "100%",
                        letterSpacing: "0.01%",
                      }}
                    >
                      VARANASI Unfiltered 🔥 | Ganga Aarti, Ghats & Spiritual
                      Vibes!
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default AstroArticle;
