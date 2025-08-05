"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

import bgImg from "../GamingImages/GamingBg.jpg";
import IshwarLogo from "../GamingImages/IshwarLogo.png";

import GamingPic1 from "../GamingImages/GamingPic1.png";
import GamingPic2 from "../GamingImages/GamingPic2.png";
import GamingPic3 from "../GamingImages/GamingPic3.png";

import LatestVid1 from "../GamingImages/LatestVid1.jpg";
import LatestVid2 from "../GamingImages/LatestVid2.jpg";
import LatestVid3 from "../GamingImages/LatestVid3.jpg";

import WarriorImg from "../GamingImages/HeyIshwarImg.png";

import TrendingGameBg from "../GamingImages/TrendingGames.jpg";
import TrendingGame1 from "../GamingImages/TrendingGamesC1.jpg";
import TrendingGame2 from "../GamingImages/TrendingGamesC2.jpg";
import TrendingGame3 from "../GamingImages/TrendingGamesC3.jpg";
import TrendingGame4 from "../GamingImages/TrendingGamesC4.jpg";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

import TrophyPerson from "../GamingImages/trophyPreson.png";

import Gif1 from "../GamingImages/Gif1.gif";
import Gif2 from "../GamingImages/Gif2.gif";
import Gif3 from "../GamingImages/Gif3.gif";
import Gif4 from "../GamingImages/Gif4.gif";
import Gif5 from "../GamingImages/Gif5.gif";
import Gif6 from "../GamingImages/Gif6.gif";
import Gif7 from "../GamingImages/Gif7.gif";
import Gif8 from "../GamingImages/Gif8.gif";

import { FaArrowRight } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { GoTrophy } from "react-icons/go";

import upNextData from "../GamingImages/UpNextData.json";
import Upnext1 from "../GamingImages/Imageupnext1.jpg";
import Upnext2 from "../GamingImages/Imageupnext2.jpg";
import Upnext3 from "../GamingImages/Imageupnext3.jpg";
import Upnext4 from "../GamingImages/Imageupnext4.jpg";

import ytpfp from "../GamingImages/ImgHost.jpg";

import { FaShareAlt } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

import GowSlider1 from "../GamingImages/GodOfwarSlider.jpg";
import GowSlider2 from "../GamingImages/GodOfwarSlider2.jpg";
import GowSlider3 from "../GamingImages/GodOfwarSlider3.jpg";

import Uncharted1 from "../GamingImages/UnchartedSlider1.jpg";
import Uncharted2 from "../GamingImages/UnchartedSlider2.jpg";
import Uncharted3 from "../GamingImages/UnchartedSlider3.jpg";

import Assasin1 from "../GamingImages/AssasinSlider1.jpg";
import Assasin2 from "../GamingImages/AssasinSlider2.jpg";
import Assasin3 from "../GamingImages/AssasinSlider3.jpg";

import Cod1 from "../GamingImages/CodSlider1.jpg";
import Cod2 from "../GamingImages/CodSlider2.jpg";
import Cod3 from "../GamingImages/CodSlider3.jpg";

const Gaming = () => {
  const [showVid, setShowVid] = useState(false);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      {!showVid && <FirstPage onStart={() => setShowVid(true)} />}
      {showVid && <GamingVid />}
    </div>
  );
};

const FirstPage = ({ onStart }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div style={{ backgroundColor: "black", overflowX: "hidden" }}>
      {/* Background div */}
      <div
        className="overflowx-hidden"
        style={{
          backgroundImage: `url(${bgImg.src})`,
          marginBottom: "3.5rem",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark py-3">
            <div className="container-fluid">
              <a className="navbar-brand d-flex align-items-center gap-2">
                <Image src={IshwarLogo} alt="Logo" width={40} height={40} />
                <span
                  style={{
                    fontFamily: "Akira Expanded",
                    fontWeight: 800,
                    fontSize: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  Ishwaar
                </span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarNav"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
                  <li className="nav-item">
                    <a
                      className="nav-link text-white"
                      href="/videos"
                      style={{
                        fontFamily: "Akira Expanded",
                        fontWeight: 800,
                        fontSize: "16px",
                        textTransform: "uppercase",
                      }}
                    >
                      VIDEOS
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-white"
                      href="/main"
                      style={{
                        fontFamily: "Akira Expanded",
                        fontWeight: 800,
                        fontSize: "16px",
                        textTransform: "uppercase",
                      }}
                    >
                      ABOUT US
                    </a>
                  </li>
                </ul>

                <button
                  className="btn  "
                  style={{
                    color: "white",
                    background:
                      "linear-gradient(to right, #fa8305 0%, #fb9e3c 100%)",
                    fontFamily: "Akira Expanded",
                    fontWeight: 800,
                    fontSize: "14px",
                    textTransform: "uppercase",
                  }}
                >
                  Join Discord
                </button>
              </div>
            </div>
          </nav>
        </div>

        <div className="container-fluid">
          <div
            className="row justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-12 col-md-8 text-center mt-5 px-3">
              <h5
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Akira Expanded",
                  fontWeight: 800,
                  fontSize: "24px",
                  textTransform: "uppercase",
                  marginBottom: "2rem",
                }}
              >
                Gaming Beyond Limits
              </h5>
              <h1
                className="fw-bold"
                style={{
                  fontFamily: "Akira Expanded",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 6vw, 70px)",
                  lineHeight: "100%",
                  textTransform: "uppercase",
                  color: "white",
                  marginBottom: "2rem",
                }}
              >
                Dominate the
                <br />
                Game. <span style={{ color: "#FA8305" }}>Entertain</span>
                <br />
                the World.
              </h1>

              <button
                className="btn px-4 mt-3"
                style={{
                  color: "#fff",
                  background:
                    "linear-gradient(to right, #fa8305 0%, #fb9e3c 100%)",
                  fontFamily: "Akira Expanded",
                  fontWeight: 800,
                  fontSize: "16px",
                  textTransform: "uppercase",
                  padding: "1rem 1rem",
                }}
              >
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Iswaar Gaming div */}
      <IshwaarGaming />
      {/* lastest video div */}
      <div style={{ backgroundColor: "black", color: "white" }}>
        <Container className="py-5">
          <Row className="align-items-center mb-4">
            <Col md={8}>
              <h3
                style={{
                  fontFamily: "'Akira Expanded', sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                }}
              >
                LATEST VIDEOS AND STREAMS
              </h3>
            </Col>
            <Col md={4} className="text-md-end text-start mt-3 mt-md-0">
              <Button
                className="btn"
                onClick={onStart}
                style={{
                  backgroundColor: "#fff",
                  outline: "none",
                  color: "#16215C",
                  padding: "13px 45px",
                  clipPath:
                    "polygon(90% 0, 100% 75%, 95% 100%, 3% 100%, 10% 70%, 0 0)",
                  borderRadius: "0 0 10px 0",
                  fontWeight: "bold",
                  fontFamily: "'Akira Expanded', sans-serif",
                }}
              >
                <FaArrowRight /> See All
              </Button>
            </Col>
          </Row>

          {/* Video Grid */}
          <Row className="g-4">
            {/* Left Column */}
            <Col md={5}>
              <div className="mb-4 position-relative">
                <Image
                  src={LatestVid1}
                  alt="video-1"
                  className="img-fluid"
                  style={{ borderRadius: "8px", width: "100%" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "1.75rem",
                  }}
                >
                  <FaYoutube style={{ color: "red" }} />
                </div>
                <p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>
                  [HINDI] realme BMPS 2025 | Group A, B, C & D | Semi Finals
                  Week 1 - Day 3
                </p>
              </div>

              <div className="position-relative">
                <Image
                  src={LatestVid2}
                  alt="video-2"
                  className="img-fluid"
                  style={{ borderRadius: "8px", width: "100%" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "1.75rem",
                  }}
                >
                  <FaYoutube style={{ color: "red" }} />
                </div>
                <p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>
                  🔴 LIVE - GTA V ONLINE GRIND STREAM #gta5 #gtaonline #gaming
                  #gtavonlinegameplaylive #gameplay #viral
                </p>
              </div>
            </Col>

            {/* Right Column */}
            <Col md={7}>
              <div className="video-card position-relative">
                <Image
                  src={LatestVid3}
                  alt="COD Mobile Clutch"
                  className="img-fluid"
                  style={{
                    borderRadius: "8px",
                    objectFit: "cover",
                    width: "100%",
                    height: "100vh",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "1.75rem",
                  }}
                >
                  <FaYoutube style={{ color: "red" }} />
                </div>
                <p style={{ fontWeight: "bold", marginTop: "0.5rem" }}>
                  LIVE🔴 INSANE COD Mobile Clutch Moments & Pro Plays #shorts
                  #codm #gaming #live #shortsviral
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* warror image */}
      <div className="ishwaar-intro-section">
        <div className="ishwaar-skew-bg" />

        <div className="container d-flex align-items-center justify-content-between flex-wrap py-5 ishwaar-content">
          <div className="col-md-4 text-center z-2">
            <Image
              src={WarriorImg}
              alt="Warrior"
              className="img-fluid"
              style={{
                maxHeight: "625 px",
                objectFit: "contain",
                transform: "scaleX(-1)",
              }}
            />
          </div>

          <div className="col-md-7 z-2">
            <h2 className="intro-title">
              HEY, <br />
              Ishwaar
            </h2>
            <p className="intro-desc">
              I’m a full-time content creator and lifelong gaming enthusiast.
              Whether it’s dominating high-stakes FPS arenas, diving deep into
              immersive story-driven campaigns, or exploring chaotic open-world
              sandboxes, I deliver intense gameplay, raw reactions, and a heavy
              dose of personality that keeps the energy high and the experience
              real.
            </p>
          </div>
        </div>

        <style jsx>{`
          .ishwaar-intro-section {
            position: relative;
            background: black;
            overflow: hidden;
          }

          .ishwaar-skew-bg {
            position: absolute;
            top: 12rem;
            left: 0;
            width: 100%;
            height: 23rem;
            background: linear-gradient(to right, #fa8305 0%, #fb9e3c 100%);
            transform: skewY(-6deg);
            z-index: 1;
          }

          .ishwaar-content {
            position: relative;
            z-index: 2;
            padding-top: 14rem;
            padding-bottom: 14rem;
          }

          .intro-title {
            font-family: "Akira Expanded", sans-serif;
            font-size: 3rem;
            font-weight: 800;
            text-transform: uppercase;
            line-height: 1;
            margin-bottom: 20px;
            transform: skewY(-6deg);
          }

          .intro-desc {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #000;
            max-width: 90%;
            transform: skewY(-6deg);
          }

          @media (max-width: 768px) {
            .ishwaar-content {
              flex-direction: column;
              text-align: center;
              padding: 50px 20px;
            }

            .intro-title {
              font-size: 2rem;
              color: white;
            }

            .intro-desc {
              font-size: 1rem;
              color: white;
            }
          }
        `}</style>
      </div>

      {/* Trending Games */}
      <TrendingPage />
      {/* trophy div */}

      <Trophydiv />

      <GifSection />
      <Footer />
    </div>
  );
};

export const TrendingPage = () => {
  const games = [
    { src: TrendingGame1, name: "GTA V" },
    { src: TrendingGame2, name: "ASSASSIN'S CREED" },
    { src: TrendingGame4, name: "PUBG" },
    { src: TrendingGame3, name: "FORTNITE" },
  ];

  return (
    <div
      className="trending-page"
      style={{
        backgroundImage: `url(${TrendingGameBg.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      {/* Foreground content */}
      <Container className="py-5 position-relative" style={{ zIndex: 2 }}>
        {/* Title */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={10} className="text-center">
            <h2
              style={{
                fontFamily: "'Akira Expanded', sans-serif",
                fontWeight: 800,
                fontSize: "2rem",
                lineHeight: "1.88",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              CURRENTLY TRENDING GAMES
            </h2>
          </Col>
        </Row>

        {/* Game Cards */}
        <Row className="gx-4 gy-4 justify-content-center">
          {games.map((game, idx) => (
            <Col key={idx} xs={6} md={4} lg={3}>
              <Card
                className="h-100 text-white"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <Image
                  src={game.src}
                  alt={game.name}
                  className="img-fluid rounded shadow"
                  style={{
                    width: "100%",
                    aspectRatio: "3 / 4",
                    objectFit: "cover",
                    borderRadius: "0.75rem",
                  }}
                />
                <Card.Body className="text-center px-2">
                  <Card.Title
                    as="h5"
                    style={{
                      fontFamily: "'Akira Expanded', sans-serif",
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      wordBreak: "break-word",
                      color: "white",
                      marginTop: "10px",
                    }}
                  >
                    {game.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export const Trophydiv = () => {
  return (
    <>
      <div className="container" style={{}}>
        <div className="row justify-content-center mt-5">
          {/* Left Column: Welcome + Trophies */}
          <div className="col-lg-4 col-md-6 col-12 mb-4 ">
            <div
              className="p-4 text-white"
              style={{
                marginLeft: "6rem",
                marginTop: "2rem",
              }}
            >
              <h5>
                WELCOME TO <br />
                <strong>ISHWAAR GAMING</strong>: <br />
                HOME TO 09 <br />
                TROPHIES AND <br />
                A LEGACY OF <br />
                VICTORY.
              </h5>
            </div>
            <div
              className="p-4 text-center"
              style={{ backgroundColor: "orange" }}
            >
              <GoTrophy
                style={{ color: "white", fontSize: "15vw" }}
                className="my-3"
              />
              <h3 className="text-white">
                09 <br />
                Trophies
              </h3>
            </div>
          </div>

          {/* Middle Column: Person Image */}
          <div className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center align-items-center p-0">
            <Image
              src={TrophyPerson}
              alt="host-image"
              className="img-fluid"
              style={{ maxHeight: "90vh", objectFit: "cover" }}
            />
          </div>

          {/* Right Column: Subscribers + Mission */}
          <div className="col-lg-4 col-md-6 col-12 mb-4 p-0">
            <div
              className="text-center text-white py-4"
              style={{ backgroundColor: "orange" }}
            >
              <h2 className="display-1 fw-bold">10</h2>
              <h4 className="text-uppercase">
                Million <br /> Subscribers
              </h4>
            </div>

            <div className="p-4 text-white">
              <h4 className="fw-bold " style={{ fontSize: "2.5rem" }}>
                OUR <br /> MISSION <br /> IS TO <br />
                <span className="text-warning">WIN</span>, AND <br />
                ONLY <span className="text-warning">WIN</span>. <br />
                THAT'S WHAT WE DO.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const IshwaarGaming = () => {
  return (
    <div className="position-relative text-center text-white overflow-hidden mb-5">
      {/* Layered Titles */}
      <div
        className="position-absolute top-0 start-50 translate-middle-x w-100 ishwaar-titles"
        style={{ zIndex: 1 }}
      >
        <h1 className="ishwaar-title filled">ISHWAAR GAMING</h1>
        <h1 className="ishwaar-title outlined">ISHWAAR GAMING</h1>
        <h1 className="ishwaar-title outlined">ISHWAAR GAMING</h1>
        <h1 className="ishwaar-title outlined">ISHWAAR GAMING</h1>
      </div>

      {/* Foreground Content */}
      <Container className="position-relative py-5" style={{ zIndex: 2 }}>
        {/* Subtitle and Description */}

        {/* Game Characters */}
        <Row className="justify-content-center g-4">
          <Col xs={6} md={3} className="text-center">
            <Image
              src={GamingPic1}
              alt="game-1"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                maxHeight: "22rem",
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Col>
          <Col xs={6} md={3} className="text-center">
            <Image
              src={GamingPic2}
              alt="game-2"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                maxHeight: "22rem",
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Col>
          <Col xs={6} md={3} className="text-center">
            <Image
              src={GamingPic3}
              alt="game-3"
              className="img-fluid"
              style={{
                borderRadius: "12px",
                maxHeight: "22rem",
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Col>
        </Row>
      </Container>

      {/* Scoped CSS */}
      <style jsx>{`
        .ishwaar-titles {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ishwaar-title {
          font-family: "Akira Expanded", sans-serif;
          font-size: 108px;
          font-weight: 800;
          line-height: 1;
          margin: 0;
          user-select: none;
        }

        .filled {
          color: #fa8305;
        }

        .outlined {
          color: transparent;
          -webkit-text-stroke: 2px white;
        }

        .subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffffdd;
        }

        .description {
          font-size: 1rem;
          color: #ffffffbb;
        }

        @media (max-width: 768px) {
          .ishwaar-title {
            font-size: 48px;
          }

          .subtitle {
            font-size: 1.1rem;
          }

          .description {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};

export const GifSection = () => {
  return (
    <Container>
      <Row className="mb-4">
        {/* Row 1 */}
        <Col
          xs={6}
          md={4}
          lg={3}
          className="mb-3 d-flex justify-content-center "
        >
          <Image src={Gif1} alt="gif1" width={300} height={200} />
        </Col>
        <Col
          xs={6}
          md={4}
          lg={3}
          className="mb-3 d-flex justify-content-center "
        >
          <Image src={Gif2} alt="gif2" width={200} height={200} />
        </Col>
        <Col
          xs={6}
          md={4}
          lg={3}
          className="mb-3 d-flex justify-content-center "
        >
          <Image src={Gif3} alt="gif3" width={300} height={180} />
        </Col>
        <Col
          xs={6}
          md={4}
          lg={3}
          className="mb-3 d-flex justify-content-center "
        >
          <Image src={Gif4} alt="gif4" width={180} height={180} />
        </Col>

        {/* Row 2 */}
        <Col
          xs={6}
          md={4}
          lg={3}
          className="mb-3 d-flex justify-content-center "
        >
          <Image src={Gif5} alt="gif5" width={180} height={180} />
        </Col>
        <Col
          xs={6}
          md={4}
          lg={3}
          className="mb-3 d-flex justify-content-center "
        >
          <Image src={Gif6} alt="gif6" width={300} height={180} />
        </Col>
        <Col
          xs={6}
          md={4}
          lg={3}
          className="mb-3 d-flex justify-content-center "
        >
          <Image src={Gif7} alt="gif7" width={210} height={180} />
        </Col>
        <Col
          xs={6}
          md={4}
          lg={3}
          className="mb-3 d-flex justify-content-center "
        >
          <Image src={Gif8} alt="gif8" width={300} height={180} />
        </Col>
      </Row>
    </Container>
  );
};
const Footer = () => {
  return (
    <footer
      style={{ background: "#070707", color: "white", padding: "2rem 0 0" }}
    >
      <div className="container">
        <div className="row text-white text-start g-4">
          {/* ISHWAAR GAMING + description */}
          <div className="col-md-4">
            <h2 style={{ fontWeight: "bold", lineHeight: "1.2" }}>
              ISHWAAR
              <br />
              GAMING
            </h2>
            <p className="pt-2" style={{ fontSize: "1.1rem" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Navigation */}
          <div className="col-md-2 d-flex flex-column justify-content-start">
            <p
              style={{
                fontWeight: "500",
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
              }}
            >
              About us
            </p>
            <p style={{ fontWeight: "500", fontSize: "1.2rem" }}>Videos</p>
          </div>

          {/* Contact & Address */}
          <div className="col-md-4">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginBottom: "0.25rem",
              }}
            >
              Contact us
            </p>
            <p style={{ marginBottom: "1rem" }}>+908 89097 890</p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                marginBottom: "0.25rem",
              }}
            >
              Address
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-2 d-flex justify-content-md-end justify-content-start align-items-start gap-3">
            <a href="#">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "40px", height: "40px" }}
              >
                <FaFacebook color="black" />
              </div>
            </a>
            <a href="#">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "40px", height: "40px" }}
              >
                <IoLogoInstagram color="black" />
              </div>
            </a>
            <a href="#">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "40px", height: "40px" }}
              >
                <FaXTwitter color="black" />
              </div>
            </a>
            <a href="#">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "40px", height: "40px" }}
              >
                <FaLinkedin color="black" />
              </div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ borderColor: "white", opacity: 0.2, marginTop: "2rem" }} />

        {/* Footer bottom text */}
        <div className="text-center py-3" style={{ fontSize: "1.3rem" }}>
          2024 © Ishwaar.com All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const GamingVid = () => {
  const [videoSrc, setVideoSrc] = useState("./videoplayback.mp4");

  const [india, setIndia] = useState([]);
  const [indonasia, setIndonasia] = useState([]);
  const [japan, setJapan] = useState([]);
  const [dubai, setDubai] = useState([]);
  const indiaRef = useRef(null);
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
    setIndia([
      {
        img: GowSlider1.src,
        title:
          "DELHI Travel Vlog 🇮🇳 | Exploring Street Food, Markets & Monuments!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: GowSlider2.src,
        title:
          "JAIPUR in Full Color 🎨 | Forts, Food & the Pink City Experience!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: GowSlider3.src,
        title: "VARANASI Unfiltered 🔥 | Ganga Aarti, Ghats & Spiritual Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: GowSlider1.src,
        title:
          "DELHI Travel Vlog 🇮🇳 | Exploring Street Food, Markets & Monuments!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: GowSlider2.src,
        title:
          "JAIPUR in Full Color 🎨 | Forts, Food & the Pink City Experience!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: GowSlider3.src,
        title: "VARANASI Unfiltered 🔥 | Ganga Aarti, Ghats & Spiritual Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
    setJapan([
      {
        img: Uncharted1.src,
        title: "TOKYO Unleashed! Neon Streets, Sushi Spots & Hidden Alleys",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Uncharted2.src,
        title: "Chasing Mount Fuji! 🚄 Scenic Trains, Hot Springs & Fuji Views",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Uncharted3.src,
        title: "OSAKA Street Food Heaven 🍜 | Dotonbori, Vibes & Nightlife",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: Uncharted1.src,
        title: "TOKYO Unleashed! Neon Streets, Sushi Spots & Hidden Alleys",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Uncharted2.src,
        title: "Chasing Mount Fuji! 🚄 Scenic Trains, Hot Springs & Fuji Views",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Uncharted3.src,
        title: "OSAKA Street Food Heaven 🍜 | Dotonbori, Vibes & Nightlife",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
    setIndonasia([
      {
        img: Assasin1.src,
        title:
          "BALI Like Never Before! 🇮🇩 Hidden Gems, Rice Terraces & Beach Vibes!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Assasin2.src,
        title:
          "INSANE VIEWS in NUSA PENIDA 😱 | Island Hopping & Cliffside Wonders!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Assasin3.src,
        title: "DRAGONS & PARADISE 🐉🌊 | Exploring KOMODO ISLANDS by Boat!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: Assasin1.src,
        title:
          "BALI Like Never Before! 🇮🇩 Hidden Gems, Rice Terraces & Beach Vibes!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Assasin2.src,
        title:
          "INSANE VIEWS in NUSA PENIDA 😱 | Island Hopping & Cliffside Wonders!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Assasin3.src,
        title: "DRAGONS & PARADISE 🐉🌊 | Exploring KOMODO ISLANDS by Boat!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);

    setDubai([
      {
        img: Cod1.src,
        title: "Into the DUBAI Desert! 🐪 Dune Bashing, Camels & Sunset Magic",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Cod2.src,
        title: "DUBAI in Style! 🏙️ Skyscrapers, Supercars & Sky Views!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Cod3.src,
        title: "DUBAI After Dark 🌃 | Night Markets, Skyline Views & Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: Cod1.src,
        title: "Into the DUBAI Desert! 🐪 Dune Bashing, Camels & Sunset Magic",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: Cod2.src,
        title: "DUBAI in Style! 🏙️ Skyscrapers, Supercars & Sky Views!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: Cod3.src,
        title: "DUBAI After Dark 🌃 | Night Markets, Skyline Views & Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
  }, []);
  const imageMap = {
    "Imageupnext1.jpg": Upnext1,
    "Imageupnext2.jpg": Upnext2,
    "Imageupnext3.jpg": Upnext3,
    "Imageupnext4.jpg": Upnext4,
  };

  return (
    <>
      <div style={{ background: "black", overflowX: "hidden" }}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark py-3">
            <div className="container-fluid">
              <a className="navbar-brand d-flex align-items-center gap-2">
                <Image src={IshwarLogo} alt="Logo" width={40} height={40} />
                <span
                  style={{
                    fontFamily: "Akira Expanded",
                    fontWeight: 800,
                    fontSize: "24px",
                    textTransform: "uppercase",
                  }}
                >
                  Ishwaar
                </span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarNav"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
                  <li className="nav-item">
                    <a
                      className="nav-link text-white"
                      href="/videos"
                      style={{
                        fontFamily: "Akira Expanded",
                        fontWeight: 800,
                        fontSize: "16px",
                        textTransform: "uppercase",
                      }}
                    >
                      VIDEOS
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-white"
                      href="/main"
                      style={{
                        fontFamily: "Akira Expanded",
                        fontWeight: 800,
                        fontSize: "16px",
                        textTransform: "uppercase",
                      }}
                    >
                      ABOUT US
                    </a>
                  </li>
                </ul>

                <button
                  className="btn  "
                  style={{
                    color: "white",
                    background:
                      "linear-gradient(to right, #fa8305 0%, #fb9e3c 100%)",
                    fontFamily: "Akira Expanded",
                    fontWeight: 800,
                    fontSize: "14px",
                    textTransform: "uppercase",
                  }}
                >
                  Join Discord
                </button>
              </div>
            </div>
          </nav>
        </div>
        <Row className="d-flex justify-content-center">
          <Col md={10}>
            <h2
              className="text-center"
              style={{
                marginTop: "3rem",
                fontStyle: "bold",
                fontWeight: "800",
                fontSize: "2rem",
                color: "#FA8305",
                lineHeight: "100%",
              }}
            >
              Videos That Align You <br /> with the Universe
            </h2>

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
                      color: "#FFFFFF",
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
                        src={ytpfp}
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
                        <div style={{ fontWeight: "bold", color: "#FFFFFF" }}>
                          Ishwaar
                        </div>
                        <div style={{ fontSize: "12px", color: "#FFFFFF" }}>
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
                          border: "2px solid #FFFFFF",
                          color: "#FFFFFF",
                          borderRadius: "1rem",
                        }}
                      >
                        <FaShareAlt
                          className="mx-2"
                          style={{ color: "#FFFFFF", fontSize: "1.2rem" }}
                        />
                        Share
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #FFFFFF",
                          color: "#FFFFFF",
                          borderRadius: "1rem",
                        }}
                      >
                        <FaThumbsUp
                          className="mx-2"
                          style={{ color: "#FFFFFF", fontSize: "1.2rem" }}
                        />
                        35K
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #FFFFFF",
                          color: "#FFFFFF",
                          borderRadius: "1rem",
                        }}
                      >
                        <FaEye
                          className="mx-2"
                          style={{ color: "#FFFFFF", fontSize: "1.2rem" }}
                        />
                        50K views
                      </button>
                      <button
                        className="btn"
                        style={{
                          border: "2px solid #FFFFFF",
                          color: "#FFFFFF",
                          borderRadius: "1rem",
                        }}
                      >
                        <MdWatchLater
                          className="mx-2"
                          style={{ color: "#FFFFFF", fontSize: "1.4rem" }}
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
                        color: "#FFFFFF",
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
                      <span style={{ fontSize: "14px", color: "#FFFFFF" }}>
                        Autoplay
                      </span>
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
                          color: "#FFFFFF",
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
                                  color: "#FFFFFF",
                                }}
                              >
                                {item.title}
                              </div>
                              <div
                                style={{ fontSize: "12px", color: "#FFFFFF" }}
                              >
                                {item.author}
                              </div>
                              <div
                                style={{ fontSize: "12px", color: "#FFFFFF" }}
                              >
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
                  <h2 style={{ color: "#FA8305" }}>GOD OF WAR RAGNAROK</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    className="btn rounded-circle me-2"
                    onClick={() => scrollByCard(indiaRef, -1)}
                    style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                  >
                    ←
                  </button>
                  <button
                    className="btn rounded-circle"
                    onClick={() => scrollByCard(indiaRef, 1)}
                    style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                  >
                    →
                  </button>
                </div>
              </div>

              <SliderSection
                title="India"
                images={india}
                containerRef={indiaRef}
              />

              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2 style={{ color: "#FA8305" }}>UNCHARTED: LOST LEGACY</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    className="btn rounded-circle me-2"
                    onClick={() => scrollByCard(indonasiaRef, -1)}
                    style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                  >
                    ←
                  </button>
                  <button
                    className="btn rounded-circle"
                    onClick={() => scrollByCard(indonasiaRef, 1)}
                    style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                  >
                    →
                  </button>
                </div>
              </div>

              <SliderSection
                title="indonasia"
                images={indonasia}
                containerRef={indonasiaRef}
              />

              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-8 ">
                  <h2 style={{ color: "#FA8305" }}>assassin's creed origins</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    className="btn rounded-circle me-2"
                    onClick={() => scrollByCard(japanRef, -1)}
                    style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                  >
                    ←
                  </button>
                  <button
                    className="btn rounded-circle"
                    onClick={() => scrollByCard(japanRef, 1)}
                    style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                  >
                    →
                  </button>
                </div>
              </div>

              <SliderSection
                title="japan"
                images={japan}
                containerRef={japanRef}
              />

              <div className="row mt-4 align-items-center justify-content-between ">
                <div className="col-md-8">
                  <h2 style={{ color: "#FA8305" }}>Call Of Duty Ghosts</h2>
                </div>
                <div className="col-md-4 text-end">
                  <button
                    className="btn rounded-circle me-2"
                    onClick={() => scrollByCard(dubaiRef, -1)}
                    style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                  >
                    ←
                  </button>
                  <button
                    className="btn rounded-circle"
                    onClick={() => scrollByCard(dubaiRef, 1)}
                    style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}
                  >
                    →
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
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </>
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
          color: "#FFFFFF",
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
                  color: "#FFFFFF",
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: "12px", color: "#FFFFFF" }}>
                {item.views} • {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gaming;
