"use client";
import React, { useEffect, useRef, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Image from "next/image";

import ytPfp from "../AutomativeImages/ytImageIcon.jpg";

import LatestPostsImg1 from "../AutomativeImages/LatestPostsImg1.jpg";
import LatestPostsImg2 from "../AutomativeImages/LatestPostsImg2.jpg";
import LatestPostsImg3 from "../AutomativeImages/LatestPostsImg3.jpg";
import LatestPostsImg4 from "../AutomativeImages/LatestPostsImg4.jpg";

import RSlider1 from "../AutomativeImages/RoadaheadSlider1.jpg";
import RSlider2 from "../AutomativeImages/RoadaheadSlider2.jpg";
import RSlider3 from "../AutomativeImages/RoadaheadSlider3.jpg";

import Dslider1 from "../AutomativeImages/DubSlider1.jpg";
import Dslider2 from "../AutomativeImages/DubSlider2.jpg";
import Dslider3 from "../AutomativeImages/DubSlider3.jpg";

import Auto1 from "../AutomativeImages/Auto1.jpg";
import Auto2 from "../AutomativeImages/Auto2.jpg";
import Auto3 from "../AutomativeImages/Auto3.jpg";

import Bike1 from "../AutomativeImages/Bike1.jpg";
import Bike2 from "../AutomativeImages/Bike2.jpg";
import Bike3 from "../AutomativeImages/Bike3.jpg";

import { FaShareAlt } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import BlogData from "../AutomativeImages/UpNextData.json";
import upNextData from "../AutomativeImages/UpNextData.json";

const AutomativeVid = () => {
  const [videoSrc, setVideoSrc] = useState("./videoplayback.mp4");

  const [roadahead, setRoadahead] = useState([]);
  const [indonasia, setIndonasia] = useState([]);
  const [japan, setJapan] = useState([]);
  const [dubai, setDubai] = useState([]);
  const roadaheadRef = useRef(null);
  const indonasiaRef = useRef(null);
  const japanRef = useRef(null);
  const dubaiRef = useRef(null);

  const scrollByCard = (ref, direction) => {
    if (!ref.current) return;
    const card = ref.current.querySelector("div");
    if (!card) return;
    const cardWidth = card.offsetWidth + 40;
    ref.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  useEffect(() => {
    setRoadahead([
      {
        img: RSlider1.src,
        title:
          "DELHI Travel Vlog 🇮🇳 | Exploring Street Food, Markets & Monuments!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: RSlider2.src,
        title:
          "JAIPUR in Full Color 🎨 | Forts, Food & the Pink City Experience!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: RSlider3.src,
        title: "VARANASI Unfiltered 🔥 | Ganga Aarti, Ghats & Spiritual Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: RSlider1.src,
        title: "Hidden Delhi Spots 🔍 | Offbeat Local Markets & Food Hunt!",
        views: "1.5M views",
        date: "4 days ago",
      },
      {
        img: RSlider2.src,
        title:
          "JAIPUR in Full Color 🎨 | Forts, Food & the Pink City Experience!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: RSlider3.src,
        title: "VARANASI Unfiltered 🔥 | Ganga Aarti, Ghats & Spiritual Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
    setJapan([
      {
        img: Dslider1.src,
        title: "TOKYO Unleashed! Neon Streets, Sushi Spots & Hidden Alleys",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Dslider2.src,
        title: "Chasing Mount Fuji! 🚄 Scenic Trains, Hot Springs & Fuji Views",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Dslider3.src,
        title: "OSAKA Street Food Heaven 🍜 | Dotonbori, Vibes & Nightlife",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: Dslider1.src,
        title: "TOKYO Unleashed! Neon Streets, Sushi Spots & Hidden Alleys",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Dslider2.src,
        title: "Chasing Mount Fuji! 🚄 Scenic Trains, Hot Springs & Fuji Views",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Dslider3.src,
        title: "OSAKA Street Food Heaven 🍜 | Dotonbori, Vibes & Nightlife",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
    setIndonasia([
      {
        img: Auto1.src,
        title:
          "BALI Like Never Before! 🇮🇩 Hidden Gems, Rice Terraces & Beach Vibes!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Auto2.src,
        title:
          "INSANE VIEWS in NUSA PENIDA 😱 | Island Hopping & Cliffside Wonders!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Auto3.src,
        title: "DRAGONS & PARADISE 🐉🌊 | Exploring KOMODO ISLANDS by Boat!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: Auto1.src,
        title:
          "BALI Like Never Before! 🇮🇩 Hidden Gems, Rice Terraces & Beach Vibes!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Auto2.src,
        title:
          "INSANE VIEWS in NUSA PENIDA 😱 | Island Hopping & Cliffside Wonders!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Auto3.src,
        title: "DRAGONS & PARADISE 🐉🌊 | Exploring KOMODO ISLANDS by Boat!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);

    setDubai([
      {
        img: Bike1.src,
        title: "Into the DUBAI Desert! 🐪 Dune Bashing, Camels & Sunset Magic",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Bike2.src,
        title: "DUBAI in Style! 🏙️ Skyscrapers, Supercars & Sky Views!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Bike3.src,
        title: "DUBAI After Dark 🌃 | Night Markets, Skyline Views & Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: Bike1.src,
        title: "Into the DUBAI Desert! 🐪 Dune Bashing, Camels & Sunset Magic",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Bike2.src,
        title: "DUBAI in Style! 🏙️ Skyscrapers, Supercars & Sky Views!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Bike3.src,
        title: "DUBAI After Dark 🌃 | Night Markets, Skyline Views & Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
  }, []);
  const imageMap = {
    "LatestPostsImg1.jpg": LatestPostsImg1,
    "LatestPostsImg2.jpg": LatestPostsImg2,
    "LatestPostsImg3.jpg": LatestPostsImg3,
    "LatestPostsImg4.jpg": LatestPostsImg4,
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <div style={{ background: "#fff" }}>
        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <h2
              className="text-center"
              style={{
                marginTop: "3rem",
                fontStyle: "bold",
                fontWeight: "1000",
                fontSize: "3rem",
                color: "#252525",
                lineHeight: "100%",
              }}
            >
              Adventures worth sharing
            </h2>
            <p
              className="text-center"
              style={{
                fontWeight: "400",
                fontSize: "1.6rem",
                color: "#252525",
                lineHeight: "100%",
              }}
            >
              These are the destinations I've visited
            </p>

            <div className="col-md-12 col-12">
              <div className="row">
                {/* Video Section */}
                <div
                  className="col-md-8 col-12 d-flex flex-column mt-3"
                  style={{ height: "100%" }}
                >
                  <video
                    src={videoSrc}
                    controls
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      marginBottom: "20px",
                    }}
                  ></video>

                  <h4
                    style={{
                      fontFamily: "Inter",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    HOW TO TRAVEL BALI - 14 DAYS in Paradise
                  </h4>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Image
                        src={ytPfp}
                        alt="Host"
                        width={40}
                        height={40}
                        style={{
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
                      &nbsp; &nbsp;
                      <div>
                        <div style={{ fontWeight: "bold" }}>Ishwaar</div>
                        <div style={{ fontSize: "12px", color: "gray" }}>
                          12K Subscribers
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        flexWrap: "wrap",
                      }}
                    >
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #252525",
                          color: "#252525",
                          borderRadius: "1rem",
                        }}
                      >
                        <FaShareAlt
                          className="mx-2"
                          style={{ color: "#252525", fontSize: "1.2rem" }}
                        />
                        Share
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #252525",
                          color: "#252525",
                          borderRadius: "1rem",
                        }}
                      >
                        <FaThumbsUp
                          className="mx-2"
                          style={{ color: "#252525", fontSize: "1.2rem" }}
                        />
                        35K
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #252525",
                          color: "#252525",
                          borderRadius: "1rem",
                        }}
                      >
                        <FaEye
                          className="mx-2"
                          style={{ color: "#252525", fontSize: "1.2rem" }}
                        />
                        50K views
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #252525",
                          color: "#252525",
                          borderRadius: "1rem",
                        }}
                      >
                        <MdWatchLater
                          className="mx-2"
                          style={{ color: "#252525", fontSize: "1.4rem" }}
                        />
                        2 hours ago
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sidebar - Up Next */}
                <div className="col-md-4 col-12 mt-3">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "10px",
                    }}
                  >
                    <h5
                      style={{
                        fontWeight: "700",
                        margin: 0,
                        fontSize: "24px",
                        lineHeight: "28px",
                      }}
                    >
                      Up Next
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <span style={{ fontSize: "14px" }}>Autoplay</span>
                      <label
                        className="form-check form-switch"
                        style={{ margin: 0 }}
                      >
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </label>
                    </div>
                  </div>

                  <div
                    style={{
                      maxHeight: "50vh",
                      overflowY: "auto",
                      paddingRight: "10px",
                    }}
                  >
                    {upNextData.blogs.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setVideoSrc(item.videoSrc)}
                        style={{
                          display: "flex",
                          marginBottom: "15px",
                          cursor: "pointer",
                        }}
                      >
                        <Row>
                          <Col md={5}>
                            <Image
                              src={imageMap[item.image]}
                              alt="Thumbnail"
                              height={100}
                              style={{
                                objectFit: "cover",
                                borderRadius: "4px",
                                width: "100%",
                              }}
                            />
                          </Col>
                          <Col>
                            <div
                              style={{ marginLeft: "10px", overflow: "hidden" }}
                            >
                              <div
                                style={{
                                  fontWeight: "bold",
                                  fontSize: "14px",
                                  marginBottom: "4px",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                {item.title}
                              </div>
                              <div style={{ fontSize: "12px", color: "gray" }}>
                                {item.author}
                              </div>
                              <div style={{ fontSize: "12px", color: "gray" }}>
                                {item.views} • {item.date}
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* slider */}
              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2>Roadahead</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    className="btn  rounded-circle me-2"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(roadaheadRef, -1)}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="btn rounded-circle"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(roadaheadRef, 1)}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <SliderSection
                title="roadahead"
                images={roadahead}
                containerRef={roadaheadRef}
              />

              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2>Dubai International Motor Show 2019</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    style={{ borderColor: "#252525", color: "#252525" }}
                    className="btn  rounded-circle me-2"
                    onClick={() => scrollByCard(indonasiaRef, -1)}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    style={{ borderColor: "#252525", color: "#252525" }}
                    className="btn  rounded-circle"
                    onClick={() => scrollByCard(indonasiaRef, 1)}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <SliderSection
                title="indonasia"
                images={indonasia}
                containerRef={indonasiaRef}
              />

              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2>2022 Auto EXPO</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    className="btn  rounded-circle me-2"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(japanRef, -1)}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="btn  rounded-circle"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(japanRef, 1)}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <SliderSection
                title="japan"
                images={japan}
                containerRef={japanRef}
              />

              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2>Car/Bike Reviews & Impressions</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    className="btn  rounded-circle me-2"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(dubaiRef, -1)}
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    className="btn  rounded-circle"
                    style={{ borderColor: "#252525", color: "#252525" }}
                    onClick={() => scrollByCard(dubaiRef, 1)}
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <SliderSection
                title="dubai"
                images={dubai}
                containerRef={dubaiRef}
              />

              <div className="col-md-1"></div>
            </div>
          </Col>
        </Row>

        <div className="mb-5"></div>
      </div>
    </div>
  );
};

function SliderSection({ images, containerRef }) {
  return (
    <div className="mt-3">
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
          <div key={index} style={{ flex: "0 0 auto", width: "300px" }}>
            <img
              src={item.img}
              className="w-100 rounded"
              alt={`Slide ${index + 1}`}
              style={{
                objectFit: "cover",
                height: "274px",
              }}
            />
            <div style={{ marginLeft: "5px", marginTop: "5px" }}>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "15px",
                  marginBottom: "4px",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: "12px", color: "gray" }}>
                {item.views} • {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutomativeVid;
