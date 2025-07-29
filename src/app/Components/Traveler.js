"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

import Image from "next/image";
import backgroundGif from "../ImgBlog/backgroundGif.gif";
import IshwarStoryBg from "../ImgBlog/IshwarStoryBg.png";

import Company1 from "../ImgBlog/Companies1.png";
import Company2 from "../ImgBlog/Companies2.png";

import instaLogoMain from "../ImgBlog/InstagramMain.png";
import facebookLogoMain from "../ImgBlog/FacebookMain.png";
import ytlogo from "../ImgBlog/ytMain.png";

import Hike from "../ImgBlog/HikeYt.jpg";
import ForestTrek from "../ImgBlog/ForestTrekYt.png";
import SnowTrek from "../ImgBlog/SnowTrekYt.jpg";

import BlogBg from "../ImgBlog/blogBgMain.jpg";
import MaxicoBlog from "../ImgBlog/MaxicoMain.png";
import DubaiBlog from "../ImgBlog/DubaiMain.jpg";
import BangkokBlog from "../ImgBlog/bangkokMain.jpg";

import IndiaImg from "../ImgBlog/IndiaMain.jpg";
import JapanImg from "../ImgBlog/JapanMain.jpg";
import BangkokImg from "../ImgBlog/BangkokMainDest.jpg";
import { FaArrowLeft } from "react-icons/fa";

import IshwarLogo from "../ImgBlog/IshwarLogo.png";
import FacebookIconFooter from "../ImgBlog/FacebookIcon.png";
import linkdinIconFooter from "../ImgBlog/linkdinIcon.png";
import InstagramIconFooter from "../ImgBlog/InstagramIcon.png";
import XiconFooter from "../ImgBlog/Xicon.png";

import ytPfp from "../ImgBlog/ytImageIcon.jpg";

import DelhiSlider from "../ImgBlog/DelhiSlider.jpg";
import JaipurSlider from "../ImgBlog/JaipurSlider.jpg";
import VaranasiSlider from "../ImgBlog/VaranasiSlider.jpg";

import BaliSlider from "../ImgBlog/BaliSlider.jpg";
import islandSlider from "../ImgBlog/islandSlider.jpg";
import KomdoIsland from "../ImgBlog/KomdoIsland.jpg";

import TokyaSlider from "../ImgBlog/TokyaSlider.jpg";
import MountFujiSlider from "../ImgBlog/MountFujiSlider.jpg";
import OsakaSlider from "../ImgBlog/OsakaSlider.jpg";

import DubaiDesert from "../ImgBlog/DubaiDesert.jpg";
import DubSkySlider from "../ImgBlog/DubSkySlider.jpg";
import DubaiNightSlider from "../ImgBlog/DubaiNightSlider.jpg";

import JoinCommunity from "../ImgBlog/JoinCommunity.jpg";
import YtComm from "../ImgBlog/YtComm.png";
import InstaComm from "../ImgBlog/InstaComm.png";
import faceBookComm from "../ImgBlog/faceBookComm.png";
import Xcomm from "../ImgBlog/Xcomm.png";

import upNextData from "../ImgBlog/data.json";
import BlogData from "../ImgBlog/data.json";
import colosseumImg from "../ImgBlog/colosseumImg.jpg";
import TulumBeachImg from "../ImgBlog/TulumBeachImg.jpg";
import NusaPenida from "../ImgBlog/NusaPenida.jpg";
import MountFujiImg from "../ImgBlog/MountFujiImg.jpg";
import DubaiDesertImg from "../ImgBlog/DubaiDesertImg.jpg";
import RoyalJaipur from "../ImgBlog/RoyalJaipur.jpg";
import IslandView from "../ImgBlog/IslandView.jpg";
import BaliImg from "../ImgBlog/BaliImg.jpg";
import { GoShareAndroid } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

import DelhiPost from "../ImgBlog/DelhiPost.jpg";
import JaipurPost from "../ImgBlog/JaiputPost.jpg";
import VaranasiPost from "../ImgBlog/VaranashiPost.jpg";

const Traveler = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [activePage, setActivePage] = useState("main");
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <>
      {/* Main landing page */}
      {activePage === "main" && <MainPage setActivePage={setActivePage} />}

      {/* Blogs list */}
      {activePage === "blogs" && (
        <Blogs
          setActivePage={setActivePage}
          setSelectedBlog={setSelectedBlog}
        />
      )}

      {/* Single blog view */}
      {activePage === "view" && selectedBlog && (
        <ViewBlog blog={selectedBlog} goBack={() => setActivePage("blogs")} />
      )}

      {/* Videos page */}
      {activePage === "videos" && <TravelVid />}

      <TravelFooter />
    </>
  );
};

export default Traveler;

const TravelNav = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div className="container-fluid px-0">
      <div className="row g-0">
        <div
          className="col-md-1 d-none d-lg-block"
          style={{ backgroundColor: "#008CA7" }}
        ></div>

        <div className="col-12 col-lg-10">
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#008CA7" }}
          >
            <div className="container-fluid">
              <img src="/path/to/logo.png" alt="Ishwar Logo" />
              <a className="navbar-brand fw-bold">Ishwaar</a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav align-items-center">
                  <li className="nav-item">
                    <button
                      className="nav-link btn text-white"
                      onClick={() => setActivePage("videos")}
                    >
                      VIDEOS
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn text-white"
                      onClick={() => setActivePage("blogs")}
                    >
                      BLOGS
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn text-white"
                      onClick={() => setActivePage("destination")}
                    >
                      DESTINATION
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn text-white"
                      onClick={() => setActivePage("main")}
                    >
                      ABOUT
                    </button>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-end">
                <ul className="navbar-nav">
                  <li className="nav-item ms-2">
                    <button
                      className="btn btn-light rounded-pill"
                      style={{ color: "#008CA7" }}
                    >
                      SUBSCRIBE
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div
          className="col-md-1 d-none d-md-block"
          style={{ backgroundColor: "#008CA7" }}
        ></div>
      </div>
    </div>
  );
};

const MainPage = ({ setActivePage }) => {
  const [destination, setDestination] = useState();
  const destinationRef = useRef(null);
  useEffect(() => {
    setDestination([
      IndiaImg.src,
      JapanImg.src,
      BangkokImg.src,
      IndiaImg.src,
      JapanImg.src,
      BangkokImg.src,
    ]);
  }, []);
  const scrollByCard = (ref, direction) => {
    if (!ref.current) return;
    const card = ref.current.querySelector("div");
    if (!card) return;
    const cardWidth = card.offsetWidth + 40;
    ref.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };
  return (
    <div>
      {/* Adventures worth sharing  */}
      <div
        className="overflowx-hidden"
        style={{
          backgroundImage: `url(${backgroundGif.src})`,
          marginBottom: "3.5rem",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <div className="row g-0">
          <div className="col-md-1 d-none d-lg-block"></div>

          <div className="col-12 col-lg-10">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <div className="container-fluid">
                <Image src={IshwarLogo} alt="Logo" />
                <a className="navbar-brand fw-bold">Ishwaar</a>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarNav"
                >
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                      <a href="/videos" className="nav-link text-white">
                        VIDEOS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/blogs" className="nav-link text-white">
                        BLOGS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/blogs" className="nav-link text-white">
                        DESTINATION
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/main" className="nav-link text-white">
                        ABOUT
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-end">
                  <ul className="navbar-nav">
                    <li className="nav-item ms-2">
                      <button
                        className="btn btn-light rounded-pill"
                        style={{ color: "#008CA7" }}
                      >
                        SUBSCRIBE
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div className="col-md-1 d-none d-md-block"></div>
        </div>
        <div className="container-fluid">
          <div
            className="row align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-md-1 d-none d-lg-block"></div>

            <div className="col-12 col-lg-5 text-white">
              <h1
                className="fw-bold"
                style={{
                  fontWeight: "400",
                  fontSize: "50px",
                  lineHeight: "70px",
                  fontStyle: "semiBold",
                }}
              >
                Adventures <br /> Worth Sharing.
              </h1>
              <p
                className="lead mt-3"
                style={{
                  fontFamily: "inter",
                  fontWeight: "400",
                  lineHeight: "45px",
                  fontSize: "28px",
                }}
              >
                Join me, a passionate traveler documenting experiences from
                cities, mountains, oceans, and hidden gems across the globe.
              </p>
              <button
                className="btn btn-light rounded-pill px-4 mt-3"
                style={{ color: "black" }}
              >
                SUBSCRIBE
              </button>
            </div>

            <div className="col-md-1 d-none d-lg-block"></div>
          </div>
        </div>
      </div>
      {/* Companies */}
      <InfinitySlider />
      {/* storyteller */}
      <div
        className="overflowx-hidden"
        style={{
          marginTop: "3rem",
          backgroundImage: `url(${IshwarStoryBg.src})`,
          backgroundColor: "#E8E8E8",
          marginBottom: "3.5rem",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <div className="container-fluid">
          <div
            className="row align-items-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="col-md-1 d-none d-lg-block"></div>

            {/* Left Content */}
            <div className="col-12 col-lg-5">
              <h2
                className="fw-bold"
                style={{
                  fontSize: "52px",
                  lineHeight: "60px",
                  color: "#008CA7",
                }}
              >
                Hi, <br />
                I’m Ishwaar
              </h2>
              <p
                className="mt-3"
                style={{
                  fontWeight: "400",
                  fontSize: "24px",
                  lineHeight: "36px",
                  color: "#008CA7",
                }}
              >
                A storyteller who's trekked mountains, crossed borders, tasted
                cultures, and met incredible people along the way.
              </p>

              <div
                className="mt-4 p-4"
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  maxWidth: "500px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                }}
              >
                <p
                  className="text-center"
                  style={{
                    fontWeight: "400",
                    fontSize: "18px",
                    marginBottom: "16px",
                    lineHeight: "27px",
                    fontFamily: "inter",
                  }}
                >
                  Follow my journey on social media and explore the world
                  through my side.
                </p>
                <div className="d-flex justify-content-around">
                  <button className="btn p-0 border-0 bg-transparent">
                    <Image
                      src={ytlogo}
                      alt="YouTube"
                      style={{ height: "3.2rem", width: "auto" }}
                    />
                  </button>
                  <button className="btn p-0 border-0 bg-transparent">
                    <Image
                      src={instaLogoMain}
                      alt="Instagram"
                      style={{ height: "3.2rem", width: "auto" }}
                    />
                  </button>
                  <button className="btn p-0 border-0 bg-transparent">
                    <Image
                      src={facebookLogoMain}
                      alt="Facebook"
                      style={{ height: "3.2rem", width: "auto" }}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-1 d-none d-lg-block"></div>
          </div>
        </div>
      </div>
      {/* enjoy stories container  */}
      <div className="container mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2
            style={{ color: "#008CA7", fontSize: "36px", lineHeight: "48px" }}
          >
            Enjoy stories that spark your wanderlust and fuel <br /> your sense
            of adventure.
          </h2>
          <button
            onClick={() => setActivePage("videos")}
            className="btn rounded-pill"
            style={{
              margin: "1.2rem",
              padding: "10px 25px",
              border: "1px solid #008CA7",
              color: "#008CA7",
              cursor: "pointer",
            }}
          >
            Watch All →
          </button>
        </div>

        <div className="row">
          {/* Left column: Snow + Mountain */}
          <div className="col-md-4 d-flex flex-column gap-4">
            <div className="position-relative">
              <Image
                src={SnowTrek}
                alt="SnowTreckImg"
                className="img-fluid rounded"
                style={{ height: "21rem", width: "31rem" }}
              />
            </div>
            <div className="position-relative">
              <Image
                src={Hike}
                alt="HikeImg"
                className="img-fluid rounded"
                style={{ height: "24rem", width: "36rem" }}
              />
            </div>
          </div>

          <div className="col-md-6" style={{ width: "fit-content" }}>
            <h2
              style={{
                color: "#E6E6E6",
                fontSize: "5rem",
                fontWeight: "1000",
                fontStretch: "expanded",
              }}
            >
              YouTube
            </h2>
            <div className="position-relative">
              <Image
                src={ForestTrek}
                alt="SnowTreckImg"
                className="img-fluid rounded"
                style={{ height: "34rem", width: "49rem" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Blogs Container */}
      <div
        className="overflowx-hidden"
        style={{
          backgroundImage: `url(${BlogBg.src})`,
          marginBottom: "3.5rem",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <div className="container-fluid py-5" style={{ minHeight: "100vh" }}>
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2
                style={{
                  fontWeight: 900,
                  fontSize: "5rem",
                  color: "#E6E6E6",
                  letterSpacing: "2px",
                  marginBottom: "1.5rem",
                  textShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                BLOGS
              </h2>
            </div>
          </div>
          <div className="row align-items-center mb-4">
            <div className="col-12 col-md-6">
              <h4
                style={{
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: "3rem",
                  marginLeft: "2vw",
                  marginBottom: 0,
                }}
              >
                Stories from the Road
              </h4>
            </div>
            <div className="col-12 col-md-6 text-md-end mt-3 mt-md-0">
              <button
                className="btn btn-outline-light rounded-pill px-4"
                style={{
                  fontWeight: 500,
                  fontSize: "1.2rem",
                  border: "2px solid #fff",
                  background: "rgba(255,255,255,0.05)",
                }}
                onClick={() => setActivePage("blogs")}
              >
                View All &rarr;
              </button>
            </div>
          </div>
          <div className="row justify-content-center g-4">
            {/* Blog Card 1 */}
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div
                style={{
                  cursor: "pointer",
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: "370px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src={MaxicoBlog}
                  alt="Mexico"
                  style={{
                    width: "100%",
                    height: "32rem",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "1.2rem",
                    background:
                      "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.1) 70%,transparent)",
                    color: "#fff",
                  }}
                >
                  <h5 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                    Mexico
                  </h5>
                  <p style={{ fontWeight: 400, fontSize: "1rem", margin: 0 }}>
                    Mexico City is a vibrant feast for the senses and a haven
                    for food lovers.
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Card 2 */}
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div
                style={{
                  cursor: "pointer",
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: "370px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src={DubaiBlog}
                  alt="Dubai  "
                  style={{
                    width: "100%",
                    height: "32rem",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "1.2rem",
                    background:
                      "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.1) 70%,transparent)",
                    color: "#fff",
                  }}
                >
                  <h5 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                    Bangkok
                  </h5>
                  <p style={{ fontWeight: 400, fontSize: "1rem", margin: 0 }}>
                    If food is your reason to travel, this Bangkok guide is your
                    ultimate flavor-paradise.
                  </p>
                </div>
              </div>
            </div>
            {/* Blog Card 3 */}

            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div
                style={{
                  cursor: "pointer",
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: "370px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                <Image
                  src={BangkokBlog}
                  alt="Bangkok"
                  style={{
                    width: "100%",
                    height: "32rem",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    padding: "1.2rem",
                    background:
                      "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.1) 70%,transparent)",
                    color: "#fff",
                  }}
                >
                  <h5 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>
                    Bangkok
                  </h5>
                  <p style={{ fontWeight: 400, fontSize: "1rem", margin: 0 }}>
                    If food is your reason to travel, this Bangkok guide is your
                    ultimate flavor-paradise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* destination container */}
      <div className="container-fluid py-5">
        <div className="row text-center">
          <div className="col-md-1 d-none d-md-block"></div>
          <div className="col-md-10">
            <h2
              style={{
                fontWeight: 900,
                fontSize: "6vw",
                color: "#E6E6E6",
                letterSpacing: "2px",
                marginBottom: "1.5rem",
              }}
            >
              DESTINATIONS
            </h2>

            <div className="row g-4">
              <div className="col-12 col-md-4">
                <h3
                  className=" mt-5"
                  style={{ color: "#008CA7", fontSize: "2.2rem" }}
                >
                  Here Are the Places I've Been So Far
                </h3>
                <div className=" mb-4 ">
                  <button
                    onClick={() => scrollByCard(destinationRef, -1)}
                    className="btn btn-outline-primary rounded-circle me-2"
                  >
                    <FaArrowLeft />
                  </button>
                  <button
                    onClick={() => scrollByCard(destinationRef, 1)}
                    className="btn btn-outline-primary rounded-circle"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-8">
                <SliderSection1
                  title="destination"
                  images={destination}
                  containerRef={destinationRef}
                />
              </div>
            </div>
          </div>
          <div className="col-md-1 d-none d-md-block"></div>
        </div>
      </div>
    </div>
  );
};

const TravelVid = () => {
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
        img: DelhiSlider.src,
        title:
          "DELHI Travel Vlog 🇮🇳 | Exploring Street Food, Markets & Monuments!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: JaipurSlider.src,
        title:
          "JAIPUR in Full Color 🎨 | Forts, Food & the Pink City Experience!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: VaranasiSlider.src,
        title: "VARANASI Unfiltered 🔥 | Ganga Aarti, Ghats & Spiritual Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: DelhiSlider.src,
        title: "Hidden Delhi Spots 🔍 | Offbeat Local Markets & Food Hunt!",
        views: "1.5M views",
        date: "4 days ago",
      },
      {
        img: JaipurSlider.src,
        title:
          "JAIPUR in Full Color 🎨 | Forts, Food & the Pink City Experience!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: VaranasiSlider.src,
        title: "VARANASI Unfiltered 🔥 | Ganga Aarti, Ghats & Spiritual Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
    setJapan([
      {
        img: TokyaSlider.src,
        title: "TOKYO Unleashed! Neon Streets, Sushi Spots & Hidden Alleys",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: MountFujiSlider.src,
        title: "Chasing Mount Fuji! 🚄 Scenic Trains, Hot Springs & Fuji Views",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: OsakaSlider.src,
        title: "OSAKA Street Food Heaven 🍜 | Dotonbori, Vibes & Nightlife",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: TokyaSlider.src,
        title: "TOKYO Unleashed! Neon Streets, Sushi Spots & Hidden Alleys",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: MountFujiSlider.src,
        title: "Chasing Mount Fuji! 🚄 Scenic Trains, Hot Springs & Fuji Views",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: OsakaSlider.src,
        title: "OSAKA Street Food Heaven 🍜 | Dotonbori, Vibes & Nightlife",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
    setIndonasia([
      {
        img: BaliSlider.src,
        title:
          "BALI Like Never Before! 🇮🇩 Hidden Gems, Rice Terraces & Beach Vibes!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: islandSlider.src,
        title:
          "INSANE VIEWS in NUSA PENIDA 😱 | Island Hopping & Cliffside Wonders!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: KomdoIsland.src,
        title: "DRAGONS & PARADISE 🐉🌊 | Exploring KOMODO ISLANDS by Boat!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: BaliSlider.src,
        title:
          "BALI Like Never Before! 🇮🇩 Hidden Gems, Rice Terraces & Beach Vibes!",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: islandSlider.src,
        title:
          "INSANE VIEWS in NUSA PENIDA 😱 | Island Hopping & Cliffside Wonders!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: KomdoIsland.src,
        title: "DRAGONS & PARADISE 🐉🌊 | Exploring KOMODO ISLANDS by Boat!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);

    setDubai([
      {
        img: DubaiDesert.src,
        title: "Into the DUBAI Desert! 🐪 Dune Bashing, Camels & Sunset Magic",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: DubSkySlider.src,
        title: "DUBAI in Style! 🏙️ Skyscrapers, Supercars & Sky Views!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: DubaiNightSlider.src,
        title: "DUBAI After Dark 🌃 | Night Markets, Skyline Views & Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
      {
        img: DubaiDesert.src,
        title: "Into the DUBAI Desert! 🐪 Dune Bashing, Camels & Sunset Magic",
        views: "5M views",
        date: "1 week ago",
      },
      {
        img: DubSkySlider.src,
        title: "DUBAI in Style! 🏙️ Skyscrapers, Supercars & Sky Views!",
        views: "2M views",
        date: "2 weeks ago",
      },
      {
        img: DubaiNightSlider.src,
        title: "DUBAI After Dark 🌃 | Night Markets, Skyline Views & Vibes!",
        views: "8M views",
        date: "3 days ago",
      },
    ]);
  }, []);
  const imageMap = {
    "colosseumImg.jpg": colosseumImg,
    "TulumBeachImg.jpg": TulumBeachImg,
    "NusaPenida.jpg": NusaPenida,
    "MountFujiImg.jpg": MountFujiImg,
    "DubaiDesertImg.jpg": DubaiDesertImg,
    "RoyalJaipur.jpg": RoyalJaipur,
    "BaliImg.jpg": BaliImg,
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>

            <h2
              className="text-center"
              style={{
                marginTop: "3rem",
                fontStyle: "bold",
                fontWeight: "1000",
                fontSize: "3rem",
                color: "#008CA7",
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
                color: "#008CA7",
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
                        style={{
                          width: "3rem",
                          height: "3rem",
                          borderRadius: "50%",
                          marginRight: "10px",
                        }}
                      />
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
                      <button className="btn btn-outline-success rounded-pill">
                        🔗 Share
                      </button>
                      <button className="btn btn-outline-success">
                        👍 35K
                      </button>
                      <button className="btn btn-outline-success">
                        👁️ 50K views
                      </button>
                      <button className="btn btn-outline-success">
                        🕒 2 hours ago
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
                      maxHeight: "calc(100vh - 200px)",
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
                        <Image
                          src={imageMap[item.image]}
                          alt="Thumbnail"
                          style={{
                            width: "168px",
                            height: "94px",
                            borderRadius: "4px",
                            minWidth: "168px",
                          }}
                        />{" "}
                        <div style={{ marginLeft: "10px", overflow: "hidden" }}>
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* slider */}
              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-4">
                  <h2>India</h2>
                </div>
                <div className="col-md-8 text-end">
                  <button
                    className="btn btn-outline-primary rounded-circle me-2"
                    onClick={() => scrollByCard(indiaRef, -1)}
                  >
                    ←
                  </button>
                  <button
                    className="btn btn-outline-primary rounded-circle"
                    onClick={() => scrollByCard(indiaRef, 1)}
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
                <div className="col-md-4">
                  <h2>Indonasia</h2>
                </div>
                <div className="col-md-8 text-end">
                  <button
                    className="btn btn-outline-primary rounded-circle me-2"
                    onClick={() => scrollByCard(indonasiaRef, -1)}
                  >
                    ←
                  </button>
                  <button
                    className="btn btn-outline-primary rounded-circle"
                    onClick={() => scrollByCard(indonasiaRef, 1)}
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
                <div className="col-md-4">
                  <h2>Japan</h2>
                </div>
                <div className="col-md-8 text-end">
                  <button
                    className="btn btn-outline-primary rounded-circle me-2"
                    onClick={() => scrollByCard(japanRef, -1)}
                  >
                    ←
                  </button>
                  <button
                    className="btn btn-outline-primary rounded-circle"
                    onClick={() => scrollByCard(japanRef, 1)}
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

              <div className="row mt-4 align-items-center justify-content-between">
                <div className="col-md-4">
                  <h2>Dubai</h2>
                </div>
                <div className="col-md-8 text-end">
                  <button
                    className="btn btn-outline-primary rounded-circle me-2"
                    onClick={() => scrollByCard(dubaiRef, -1)}
                  >
                    ←
                  </button>
                  <button
                    className="btn btn-outline-primary rounded-circle"
                    onClick={() => scrollByCard(dubaiRef, 1)}
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
          </div>
        </div>
        {/* Join Community  */}
        <div
          className="overflow-x-hidden"
          style={{
            marginTop: "3rem",
            backgroundImage: `url(${JoinCommunity.src})`,
            backgroundColor: "#E8E8E8",

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <div className="container-fluid">
            <div
              className="row align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="col-md-1 d-none d-lg-block"></div>

              <div className="col-12 col-lg-6">
                <h2
                  className="fw-bold"
                  style={{
                    fontWeight: 900,
                    fontSize: "clamp(2rem, 10vw, 8rem)",
                    color: "#E6E6E6",
                    letterSpacing: "2px",
                    marginBottom: "2rem",
                    textShadow: "0 2px 8px rgba(0,0,0,0.2)",
                    border: "2px",
                  }}
                >
                  Join <br />
                  Community
                </h2>

                <div
                  className="mt-4 p-4"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "16px",
                    maxWidth: "500px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="d-flex justify-content-around flex-wrap">
                    <button className="btn p-0 border-0 bg-transparent rounded-circle">
                      <Image
                        src={YtComm}
                        alt="YouTube"
                        style={{ height: "50px" }}
                      />
                    </button>
                    <button className="btn p-0 border-0 bg-transparent rounded-circle">
                      <Image
                        src={InstaComm}
                        alt="Instagram"
                        style={{ height: "50px" }}
                      />
                    </button>
                    <button className="btn p-0 border-0 bg-transparent rounded-circle">
                      <Image
                        src={faceBookComm}
                        alt="Facebook"
                        style={{ height: "50px" }}
                      />
                    </button>
                    <button className="btn p-0 border-0 bg-transparent rounded-circle">
                      <Image src={Xcomm} alt="X" style={{ height: "50px" }} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-1 d-none d-lg-block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function SliderSection1({ images, containerRef }) {
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
        {(images ?? []).map((img, index) => (
          <div key={index} style={{ flex: "0 0 auto", width: "300px" }}>
            <img
              src={img}
              className="w-100 rounded"
              alt={`Slide ${index + 1}`}
              style={{
                objectFit: "cover",
                height: "274px",
              }}
            />
            <h5
              className="text-start"
              style={{
                marginTop: "-35px",
                color: "#fff",
                marginLeft: "10px",
              }}
            >
              India
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}
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

const Blogs = ({ setActivePage, setSelectedBlog }) => {
  const [blogs, setBlogs] = useState(BlogData.blogs);
  const [filteredBlogs, setFilteredBlogs] = useState(BlogData.blogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(BlogData.blogs);
  //       const data = await response.json();
  //       setBlogs(data.blogs);
  //       setFilteredBlogs(data.blogs);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [searchTerm, blogs]);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const imageMap = {
    "colosseumImg.jpg": colosseumImg,
    "TulumBeachImg.jpg": TulumBeachImg,
    "NusaPenida.jpg": NusaPenida,
    "MountFujiImg.jpg": MountFujiImg,
    "DubaiDesertImg.jpg": DubaiDesertImg,
    "RoyalJaipur.jpg": RoyalJaipur,
    "BaliImg.jpg": BaliImg,
  };
  // const router = useRouter();

  return (
    <>
      <div className="row">
        {/* Empty column on left */}
        <div className="col-md-1 d-none d-md-block"> </div>

        {/* Main content column */}
        <div className="col-md-10 col-12">
          <h2
            className="mb-3 text-center"
            style={{
              marginTop: "3rem",
              fontStyle: "bold",
              fontWeight: "1000",
              fontSize: "3rem",
              color: "#008CA7",
              lineHeight: "100%",
            }}
          >
            Blogs
          </h2>
          <p
            className="mb-4 text-center"
            style={{
              fontWeight: "400",
              fontSize: "1.6rem",
              color: "#008CA7",
              lineHeight: "100%",
            }}
          >
            These are the places I've visited
          </p>

          <form onSubmit={handleSearch} className="mb-5">
            <div className="d-flex justify-content-center mb-5">
              <div
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6c757d",
                    fontSize: "1.2rem",
                  }}
                >
                  <BsSearch />
                </div>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 50px 12px 50px",
                    borderRadius: "50px",
                    border: "1px solid #ced4da",
                    fontSize: "1rem",
                    outline: "none",
                    paddingRight: "120px",
                  }}
                />

                <button
                  onClick={handleSearch}
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "#008CA7",
                    color: "white",
                    border: "none",
                    borderRadius: "50px",
                    padding: "8px 20px",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Blog Posts */}
          <div className="blog-posts">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <div
                  key={blog.id}
                  className="blog-post mb-5 p-0 border-0"
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "1.25rem",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    overflow: "hidden",
                  }}
                >
                  <div className="row g-0">
                    {/* Text content - col-md-7 */}
                    <div className="col-md-7 p-4 d-flex flex-column">
                      {/* Author and Date row */}
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-muted small">
                          By {blog.author}
                        </span>
                        <span className="text-muted small">{blog.date}</span>
                      </div>
                      {/* Title with emoji */}
                      <h3
                        className="mb-3"
                        style={{
                          color: "#0097A7",
                          fontWeight: 600,
                          fontSize: "1.6rem",
                          lineHeight: 1.2,
                        }}
                      >
                        {blog.title}
                        {blog.emoji && (
                          <span style={{ fontSize: "1.2rem", marginLeft: 8 }}>
                            {blog.emoji}
                          </span>
                        )}
                      </h3>
                      <p
                        className="mb-4"
                        style={{
                          lineHeight: "1.6",
                          color: "#222",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {truncateText(blog.excerpt)}
                      </p>
                      <div className="mt-auto">
                        <button
                          onClick={() => {
                            setSelectedBlog(blog);
                            setActivePage("view");
                          }}
                          className="btn"
                          style={{
                            border: "2px solid #00bcd4",
                            color: "#00bcd4",
                            borderRadius: "2rem",
                            padding: "0.5rem 1.25rem",
                            fontWeight: 500,
                            background: "transparent",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          Continue Reading
                          <FaArrowRight style={{ fontSize: "1rem" }} />
                        </button>
                      </div>
                    </div>

                    {/* Image - col-md-5 */}
                    <div className="col-md-5">
                      <div
                        className="d-flex align-items-center justify-content-center p-3"
                        style={{
                          flex: 1,
                          minWidth: 0,
                          background: "#f8f9fa",
                          borderTopRightRadius: "1.25rem",
                          borderBottomRightRadius: "1.25rem",
                          overflow: "hidden",
                          height: "240px",
                          alignSelf: "center",
                          margin: "1rem",
                        }}
                      >
                        {blog.image && (
                          <Image
                            src={imageMap[blog.image]}
                            alt={blog.title}
                            className="img-fluid h-100 w-100"
                            style={{
                              objectFit: "cover",
                              borderRadius: "0.75rem",
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-5">
                <p>No blogs found matching your search.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredBlogs.length > blogsPerPage && (
            <nav aria-label="Blog pagination">
              <ul
                className="pagination justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                {/* Previous Button (as <) */}
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage - 1)}
                    style={{
                      border: "none",
                      background: "transparent",
                      color: currentPage === 1 ? "#ccc" : "#0097A7",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    &lt;
                  </button>
                </li>

                {/* Page Numbers */}
                {Array.from({
                  length: Math.min(
                    4,
                    Math.ceil(filteredBlogs.length / blogsPerPage)
                  ),
                }).map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                      style={{
                        border: "none",
                        background:
                          currentPage === index + 1 ? "#0097A7" : "transparent",
                        color: currentPage === index + 1 ? "white" : "#0097A7",
                        borderRadius: "50%",
                        width: "36px",
                        height: "36px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                {/* Ellipsis (...) if more pages exist */}
                {Math.ceil(filteredBlogs.length / blogsPerPage) > 4 && (
                  <li className="page-item disabled">
                    <span
                      className="page-link"
                      style={{
                        border: "none",
                        background: "transparent",
                        padding: "0 0.5rem",
                      }}
                    >
                      ...
                    </span>
                  </li>
                )}

                {/* Next Button (as >) */}
                <li
                  className={`page-item ${
                    currentPage ===
                    Math.ceil(filteredBlogs.length / blogsPerPage)
                      ? "disabled"
                      : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage + 1)}
                    style={{
                      border: "none",
                      background: "transparent",
                      color:
                        currentPage ===
                        Math.ceil(filteredBlogs.length / blogsPerPage)
                          ? "#ccc"
                          : "#0097A7",
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    &gt;
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>

        <div className="col-md-1 d-none d-md-block"></div>
      </div>
    </>
  );
};

const TravelFooter = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      <footer
        style={{ background: "#008CA7", color: "white", padding: "2rem 0 0 0" }}
      >
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 pb-3">
            {/* Logo */}
            <div className="d-flex align-items-center gap-2">
              <Image
                src={IshwarLogo}
                alt="Ishwaar Logo"
                style={{ height: "40px" }}
              />
              <span style={{ fontWeight: "bold", fontSize: "2rem" }}>
                Ishwaar
              </span>
            </div>

            {/* Nav */}
            <nav
              className="d-flex flex-wrap justify-content-center gap-4"
              style={{ fontSize: "1.3rem" }}
            >
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                VIDEOS
              </a>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                BLOG
              </a>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                DESTINATIONS
              </a>
              <a href="#" style={{ color: "white", textDecoration: "none" }}>
                ABOUT
              </a>
            </nav>

            {/* Socials */}
            <div className="d-flex gap-3 justify-content-center">
              <a href="#" style={{ color: "white" }}>
                <Image
                  src={FacebookIconFooter}
                  alt="Facebook"
                  style={{
                    height: "32px",
                    borderRadius: "50%",
                    background: "white",
                    padding: "4px",
                  }}
                />
              </a>
              <a href="#" style={{ color: "white" }}>
                <Image
                  src={linkdinIconFooter}
                  alt="LinkedIn"
                  style={{
                    height: "32px",
                    borderRadius: "50%",
                    background: "white",
                    padding: "4px",
                  }}
                />
              </a>
              <a href="#" style={{ color: "white" }}>
                <Image
                  src={InstagramIconFooter}
                  alt="Instagram"
                  style={{
                    height: "32px",
                    borderRadius: "50%",
                    background: "white",
                    padding: "4px",
                  }}
                />
              </a>
              <a href="#" style={{ color: "white" }}>
                <Image
                  src={XiconFooter}
                  alt="X"
                  style={{
                    height: "32px",
                    borderRadius: "50%",
                    background: "white",
                    padding: "4px",
                  }}
                />
              </a>
            </div>
          </div>

          <hr style={{ borderColor: "white", opacity: 0.7 }} />
          <div className="text-center pb-3" style={{ fontSize: "1.3rem" }}>
            2024 © Ishwaar.com All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const ViewBlog = ({ blog, goBack }) => {
  return (
    <div className="container mt-4">
      <div className="row">
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
            src={NusaPenida}
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
            src={IslandView}
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

          <div className="mt-4">
            <h4 className="mb-3">Similar Posts</h4>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100">
                  <Image
                    src={DelhiPost}
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
                    src={JaipurPost}
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
                    src={VaranasiPost}
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

function InfinitySlider() {
  return (
    <>
      <div className="container-fluid mt-4 mb-4">
        <div className="row align-items-center">
          <div className="col-md-1 d-none d-lg-block"></div>

          <div className="col-12 col-lg-10">
            <div
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  animation: "scrollLeft 20s linear infinite",
                }}
              >
                {[
                  Company1,
                  Company2,
                  Company1,
                  Company2,
                  Company1,
                  Company2,
                ].map((logo, index) => (
                  <div key={index} style={{ marginRight: "40px" }}>
                    <Image
                      src={logo}
                      alt={`Company logo ${index + 1}`}
                      height={50}
                      style={{ width: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-1 d-none d-lg-block"></div>
        </div>

        {/* Animation keyframes */}
        <style jsx>{`
          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
      ;
    </>
  );
}
