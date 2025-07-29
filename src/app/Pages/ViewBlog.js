"use client";
import React, { useEffect, useRef, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Image from "next/image";

import ViewBlogImg1 from "../AutomativeImages/ViewBlogImg1.jpg";
import ViewBlogImg2 from "../AutomativeImages/ViewBlogImg2.jpg";

import Similar1 from "../AutomativeImages/Similarpost1.jpg";
import Similar2 from "../AutomativeImages/Similarpost2.jpg";
import Similar3 from "../AutomativeImages/Similarpost3.jpg";

import { GoShareAndroid } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

const ViewBlog = () => {
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
            INSANE VIEWS in NUSA PENIDA 😃 Island Hopping & Cliffside Wonders!
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
            Nusa Penida, a breathtaking island just off the coast of Bali,
            Indonesia, is a paradise for adventurers and nature lovers alike.
            With its rugged cliffs, hidden beaches, and turquoise waters, the
            island has quickly become one of Southeast Asia's most talked-about
            travel gems.
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
            The Iconic Viewpoints
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
            One of the most famous spots in Nusa Penida is Kelingking Beach,
            often called the "T-Rex" cliff because of its unique shape. The view
            from the top is absolutely unreal—towering limestone cliffs plunge
            into a pristine, crescent-shaped beach below.
          </p>

          <Image
            className="rounded mb-4"
            src={ViewBlogImg1}
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
            Right next door, Broken Beach and Angel's Billabong continue to
            showcase the raw beauty of the island. Angel's Billabong is a
            natural infinity pool carved into the rocks, while Broken Beach
            features a collapsed sea cave forming a spectacular archway over
            clear blue water.
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
            Island Adventures & Serenity
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
            Beyond the cliffs, Nusa Penida offers equally stunning underwater
            worlds. Snorkeling and diving trips reveal vibrant coral reefs,
            colorful fish, and even graceful manta rays. Many visitors take day
            trips to nearby islands like Nusa Lembongan and Nusa Ceningan, but
            staying overnight on Penida lets you truly soak in the serenity.
          </p>

          <Image
            className="rounded mb-4"
            src={ViewBlogImg2}
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
            Whether you're trekking down to secluded beaches, capturing epic
            drone shots, or just relaxing with a coconut in hand, Nusa Penida is
            a perfect blend of adrenaline and tranquility. It's one of those
            places that feels untouched, wild, and completely unforgettable.
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

export default ViewBlog;
