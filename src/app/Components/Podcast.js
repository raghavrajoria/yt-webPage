"use client";

import React, { useEffect, useRef, useState } from "react";

const Podcast = () => {
  const [showPage2, setShowPage2] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar />
      {showPage2 ? (
        <>
          <Page2 />
        </>
      ) : (
        <>
          <FirstPage />
          <VideoSlider setShowPage2={setShowPage2} />
          <BehindMic />
          <GuestAppearance />
        </>
      )}
      <Footer />
    </>
  );
};
export default Podcast;

const Navbar = () => {
  return (
    <div className="container-fluid px-0">
      {/* navbar */}
      <div className="row g-0">
        <div
          className="col-md-1 d-none d-lg-block"
          style={{ backgroundColor: "#028174" }}
        ></div>

        <div className="col-12 col-lg-10">
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#028174" }}
          >
            <div className="container-fluid">
              <img src="/Podcast_Images/IshwarLogo.png" alt="" />
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
                    <a href="/podcast" className="nav-link text-white">
                      PODCAST
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/guest" className="nav-link text-white">
                      GUEST
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/about" className="nav-link text-white">
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
                      style={{ color: "#028174" }}
                    >
                      Subscribe
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div
          className="col-md-1 d-none d-md-block"
          style={{ backgroundColor: "#028174" }}
        ></div>
      </div>
    </div>
  );
};

const FirstPage = () => {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div
            className="col-md-1 d-none d-md-block"
            style={{ backgroundColor: "#FFF4E2" }}
          ></div>

          {/* content area */}
          <div className="col-12 col-lg-10">
            <div
              className="gradient-page"
              style={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#FFF4E2",
                minHeight: "92vh",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {/* Left Section - Text Content */}
              <div
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  zIndex: 2,
                  flex: "1 1 40%",
                }}
              >
                <h1
                  className="fw-bold"
                  style={{
                    fontSize: "2.5rem",
                    lineHeight: "1.2",
                    marginBottom: "1.5rem",
                    color: "#028174",
                  }}
                >
                  Real Talk. Raw Stories. Ready to Listen?
                </h1>
                <p
                  className="mt-3 inter-text"
                  style={{
                    fontSize: "1.1rem",
                    color: "#028174",
                    marginBottom: "2rem",
                  }}
                >
                  Welcome to Ishwaar Podcast — Unfiltered conversations.
                  Meaningful moments.
                </p>
                <button
                  className="btn mt-3 rounded-pill"
                  style={{
                    backgroundColor: "#028174",
                    color: "white",
                    padding: "0.75rem 2rem",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    border: "none",
                    cursor: "pointer",
                    width: "fit-content",
                  }}
                >
                  SUBSCRIBE
                </button>
              </div>

              {/* Right section - Image  */}
              <div
                style={{
                  position: "relative",
                  flex: "1 1 60%",
                  minHeight: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="/Podcast_Images/Vector4.png"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                  }}
                />

                {/* Gradient Box */}
                <div>
                  <div className="gradient-box"></div>

                  <style jsx>{`
                    .gradient-box {
                      position: absolute;
                      top: 55%;
                      left: 30%;
                      transform: translate(-50%, -50%);
                      width: 8vw;
                      min-width: 40px;
                      height: 39vh;
                      min-height: 150px;
                      background: linear-gradient(
                        to bottom,
                        #0ab68b,
                        transparent
                      );
                      z-index: 1;
                      border-radius: 10px;
                    }

                    @media (max-width: 600px) {
                      .gradient-box {
                        width: 50px;
                        left: 20%;
                        top: 60%;
                      }
                    }
                  `}</style>
                </div>

                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <div>
                    <img
                      src="./Podcast_Images/podcastHost.png"
                      alt="Podcast Host"
                      className="responsive-img img-fluid"
                    />

                    <style jsx>{`
                      .responsive-img {
                        margin-top: -10px;
                        margin-left: 80px;
                        height: auto;
                        width: 400px;
                        max-width: 400px;
                        border: 2px solid #fff;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        object-fit: cover;
                        border-radius: 20px;
                      }

                      @media (max-width: 600px) {
                        .responsive-img {
                          width: 240px;
                          margin-left: 20px;
                        }
                      }
                    `}</style>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-1 d-none d-md-block"
            style={{ backgroundColor: "#92DE8B" }}
          ></div>
        </div>
      </div>
    </>
  );
};

const VideoSlider = ({ setShowPage2 }) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const container = document.querySelector(
      "#multiItemCarousel .carousel-item .d-flex"
    );

    if (!container) return;

    // Clone slides only once
    const slides = container.querySelectorAll("div");
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      container.appendChild(clone);
    });

    // Handle infinite scroll
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const visibleWidth = container.clientWidth;

      if (scrollLeft <= 0) {
        container.scrollLeft = scrollWidth / 2 - visibleWidth;
      } else if (scrollLeft + visibleWidth >= scrollWidth) {
        container.scrollLeft = visibleWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        {/* podcast div */}
        <div
          className="container text-center"
          style={{ marginTop: "50px", fontWeight: "bold" }}
        >
          <h2
            style={{
              fontFamily: "Montserrat",
              fontSize: "48px",
              textAlign: "center",
              color: "#028174",
              fontWeight: "bold",
            }}
          >
            Podcasts
          </h2>
          <h3
            style={{
              fontFamily: "Inter",
              textAlign: "center",
              color: "#0AB68B",
            }}
          >
            Curious what's inside? Here's the scoop.
          </h3>

          <div style={{ marginBottom: "30px" }}>
            <button
              className="btn btn-md"
              style={{
                color: "#0AB68B",
                fontSize: "1.3rem",
                fontWeight: "500",
                border: "1px solid #028174",
                cursor: "pointer",
                width: "7rem",
                borderRadius: "3rem",
                height: "2.5rem",
              }}
              onClick={() => setShowPage2(true)}
            >
              View All
            </button>
          </div>
        </div>

        {/*  Style Slider */}

        <div className="d-flex justify-content-center mt-5 ">
          <div
            id="multiItemCarousel"
            className="carousel slide "
            style={{ width: "100%", overflow: "hidden" }}
            data-bs-ride="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="d-flex"
                  style={{
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    gap: "40px",
                    padding: "10px 0",
                  }}
                >
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/slider1.png"
                      className="d-block w-100 rounded"
                      alt="Slide 1"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/slider2.png"
                      className="d-block w-100 rounded"
                      alt="Slide 2"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/slider3.png"
                      className="d-block w-100 rounded"
                      alt="Slide 3"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/slider1.png"
                      className="d-block w-100 rounded"
                      alt="Slide 4"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/slider3.png"
                      className="d-block w-100 rounded"
                      alt="Slide 5"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="carousel-control-next"
              type="button"
              onClick={() => {
                const container = document.querySelector(
                  "#multiItemCarousel .carousel-item .d-flex"
                );
                if (!container) return;

                const card = container.querySelector("div");
                if (!card) return;

                const cardWidth = card.offsetWidth + 40;
                container.scrollBy({ left: cardWidth, behavior: "smooth" });
              }}
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-prev"
              type="button"
              onClick={() => {
                const container = document.querySelector(
                  "#multiItemCarousel .carousel-item .d-flex"
                );
                if (!container) return;

                const card = container.querySelector("div");
                if (!card) return;

                const cardWidth = card.offsetWidth + 40;
                container.scrollBy({ left: -cardWidth, behavior: "smooth" });
              }}
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">prev</span>
            </button>
          </div>
        </div>
        {/* spotify and apple music div */}

        <div className="row justify-content-center d-flex ">
          <div
            className="col-md-10 m-md-5 col-11 p-md-4 p-2"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 109, 0, 1) 0%, rgba(255, 171, 65, 1) 100%)",
              borderRadius: "180px",
            }}
          >
            <div className=" row mx-3">
              <h4
                className="col-7"
                style={{
                  margin: 0,
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                  lineHeight: "30px",
                  flex: 1,
                }}
              >
                Streaming not just on YouTube <br />
                Find us on Spotify and Apple Music too!
              </h4>

              <div
                className="col-md-5  d-flex justify-content-end"
                style={{ gap: "15px", alignItems: "center" }}
              >
                <button
                  className="p-1 btn btn-sm"
                  style={{
                    height: "2.5rem",
                    gap: "8px",
                    background: "white",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    color: "green",
                    borderRadius: "3rem",
                    width: "7rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #028174",
                  }}
                >
                  <img
                    src="/Podcast_Images/spotify.svg"
                    alt="Spotify"
                    style={{ height: "20px" }}
                  />
                  Spotify
                </button>

                <button
                  className="p-1 btn btn-sm"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "2.5rem",
                    gap: "8px",
                    background: "white",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    color: "black",
                    borderRadius: "3rem",
                    width: "7rem",
                    border: "1px solid #028174",
                  }}
                >
                  <img
                    src="/Podcast_Images/apple.svg"
                    alt="Apple Music"
                    style={{ height: "20px" }}
                  />
                  MUSIC
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BehindMic = () => {
  return (
    <>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            backgroundColor: "#A58BDE",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='%23FFFFFF' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
            backgroundRepeat: "repeat",
            padding: "100px 20px",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              {/* Image*/}
              <div className="col-md-5 col-12 mb-4 mb-md-0 text-center">
                <img
                  src="/Podcast_Images/hostImgPurp.png"
                  alt="Host Picture"
                  className="img-fluid rounded-circle"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* content */}
              <div className="col-md-7 col-12">
                <h2
                  style={{
                    fontWeight: "900",
                    color: "#1E1E1E",
                    fontSize: "48px",
                    lineHeight: "110%",
                  }}
                  className="mb-3"
                >
                  Who’s <br /> Behind the Mic?
                </h2>
                <p
                  className="inter-text"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "18px",
                    lineHeight: "25px",
                    color: "#1E1E1E",
                  }}
                >
                  Hey, I'm <b>Ishwaar</b> — a curious mind with a mic and a
                  mission to spark real conversations. Whether I’m talking to
                  artists, entrepreneurs, or just unpacking my own thoughts, I
                  believe in the power of authentic stories. No scripts, no
                  filters just raw.
                </p>
                <p
                  className="inter-text mt-3"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "18px",
                    lineHeight: "25px",
                    color: "#1E1E1E",
                  }}
                >
                  This podcast started as a passion project and turned into a
                  space where voices matter and listeners feel heard. If you’re
                  into deep chats, unexpected laughs, and honest takes — you’re
                  in the right place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const GuestAppearance = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const container = containerRef.current;
    if (!container) return;

    const slides = Array.from(container.children);

    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      container.appendChild(clone);
    });

    container.scrollLeft =
      container.scrollWidth / 2 - container.clientWidth / 2;

    const handleScroll = () => {
      if (container.scrollLeft <= 0) {
        container.scrollLeft =
          container.scrollWidth / 2 - container.clientWidth;
      }
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollLeft =
          container.scrollWidth / 2 - container.clientWidth;
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollByCard = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.querySelector("div");
    if (!card) return;

    const cardWidth = card.offsetWidth + 40;
    container.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <>
      <div className="justify-content-center" style={{ marginBottom: "10rem" }}>
        <h2
          className="mt-5 text-center"
          style={{ fontSize: "48px", fontWeight: "400", color: "#028174" }}
        >
          <b>Guest Appearance</b>
        </h2>

        <div className="d-flex justify-content-center mt-5 position-relative">
          {/* Left Button */}
          <button
            className="carousel-control-prev"
            type="button"
            style={{ zIndex: 1 }}
            onClick={() => scrollByCard(-1)}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <div
            id="multiItemCarousel"
            className="carousel slide"
            style={{ overflow: "hidden" }}
            data-bs-ride="false"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  ref={containerRef}
                  className="d-flex"
                  style={{
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    gap: "40px",
                    padding: "10px 0",
                  }}
                >
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider1.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 1"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider2.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 2"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider3.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 3"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider4.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 4"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider5.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 5"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider6.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 6"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider7.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 7"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider8.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 8"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider9.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 9"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider10.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 10"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider11.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 11"
                    />
                  </div>
                  <div style={{ flex: "0 0 auto" }}>
                    <img
                      src="/Podcast_Images/GuestSlider12.png"
                      className="d-block w-100 rounded"
                      style={{
                        objectFit: "cover",
                        height: "366px",
                        width: "100%",
                      }}
                      alt="Slide 12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Button */}
          <button
            className="carousel-control-next"
            type="button"
            style={{ zIndex: 1 }}
            onClick={() => scrollByCard(1)}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Text Section */}
        <div className="mt-5 text-center">
          <h3
            style={{ color: "#028174", fontWeight: "700", lineHeight: "45px" }}
          >
            Tune in on the platform you love most <br />
            no matter where you stream, we've got your ears covered
          </h3>
        </div>

        {/* spotify button section */}
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button
            className="p-1 btn btn-sm"
            style={{
              alignItems: "center",
              height: "4.3rem",
              background: "white",
              gap: "15px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "red",
              borderRadius: "20px",
              width: "11.8rem",
              border: "2.5px solid red",
              fontSize: "x-large",
            }}
          >
            YouTube
          </button>
          <button
            className="btn p-1 btn-sm fs-3"
            style={{
              alignItems: "center",
              height: "4.3rem",
              background: "white",
              gap: "15px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#1AD760",
              borderRadius: "20px",
              width: "11.8rem",
              border: "2.5px solid #1AD760",
            }}
          >
            <img
              src="/Podcast_Images/spotify.svg"
              alt="spotify"
              style={{ height: "20px" }}
            />
            Spotify
          </button>
          <button
            className="p-1 btn btn-sm "
            style={{
              alignItems: "center",
              height: "4.3rem",
              background: "white",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#F32239",
              borderRadius: "20px",
              width: "11.8rem",
              border: "2.5px solid #F32239",
              fontSize: "x-large",
            }}
          >
            <img src="/Podcast_Images/apple.svg" alt="appleMusic" />
            MUSIC
          </button>
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <div>
        <footer
          style={{
            background: "#028174",
            color: "white",
            padding: "2rem 0 0 0",
          }}
        >
          <div className="container">
            <div className="d-flex justify-content-between align-items-center flex-wrap pb-3">
              {/* Logo */}
              <div className="d-flex align-items-center gap-2">
                <img
                  src="/Podcast_Images/IshwarLogo.png"
                  alt="Ishwaar Logo"
                  style={{ height: "40px" }}
                />
                <span style={{ fontWeight: "bold", fontSize: "2rem" }}>
                  Ishwaar
                </span>
              </div>
              {/* Nav */}
              <nav className="d-flex gap-4" style={{ fontSize: "1.3rem" }}>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  PODCAST
                </a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  GUEST
                </a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>
                  ABOUT
                </a>
              </nav>
              {/* Socials */}
              <div className="d-flex gap-3">
                <a href="#" style={{ color: "white" }}>
                  <img
                    src="/Podcast_Images/FacebookIcon.png"
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
                  <img
                    src="/Podcast_Images/linkdinIcon.png"
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
                  <img
                    src="/Podcast_Images/InstagramIcon.png"
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
                  <img
                    src="/Podcast_Images/Xicon.png"
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
    </>
  );
};

const Page2 = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const [mounted, setMounted] = useState(false);

  const [entertainment, setEntertainment] = useState([]);
  const [sports, setSports] = useState([]);
  const [scienceHistory, setScienceHistory] = useState([]);
  const [armedForces, setArmedForces] = useState([]);

  const entertainmentRef = useRef(null);
  const sportsRef = useRef(null);
  const scienceHistoryRef = useRef(null);
  const armedForcesRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    // const fetchVideoUrl = async () => {
    //   const response = await fetch("/api/video-url");
    //   const data = await response.json();
    //   setVideoSrc(data.url);
    // };
    // fetchVideoUrl();
    setVideoSrc("/Podcast_Images/videoplayback.mp4");
  }, []);
  useEffect(() => {
    setEntertainment([
      "/Podcast_Images/slider1.png",
      "/Podcast_Images/slider2.png",
      "/Podcast_Images/slider3.png",
      "/Podcast_Images/slider1.png",
    ]);
    setSports([
      "/Podcast_Images/slider2.png",
      "/Podcast_Images/slider3.png",
      "/Podcast_Images/slider1.png",
      "/Podcast_Images/slider2.png",
    ]);
    setScienceHistory([
      "/Podcast_Images/slider3.png",
      "Podcast_Images/slider1.png",
      "/Podcast_Images/slider2.png",
      "/Podcast_Images/slider3.png",
    ]);
    setArmedForces([
      "/Podcast_Images/slider1.png",
      "/Podcast_Images/slider3.png",
      "/Podcast_Images/slider2.png",
      "/Podcast_Images/slider1.png",
    ]);
  }, []);

  const scrollByCard = (ref, direction) => {
    if (!ref.current) return;
    const card = ref.current.querySelector("div");
    if (!card) return;
    const cardWidth = card.offsetWidth + 40;
    ref.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <>
      <div className="mt-4" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-md-1 "></div>
          <div className="col-md-10 col-12 ">
            <h2
              style={{
                fontFamily: "Montserrat",
                fontSize: "48px",
                textAlign: "center",
                color: "#028174",
                fontWeight: "bold",
              }}
            >
              Podcasts
            </h2>
            <h3
              style={{
                fontFamily: "Inter",
                textAlign: "center",
                color: "#0AB68B",
              }}
            >
              Curious what's inside? Here's the scoop.
            </h3>
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
                  Podcast with famous celebrity in Hollywood David Johnson
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
                    <img
                      src="/Podcast_Images/ytImageIcon.jpg"
                      alt="Host"
                      style={{
                        width: "3rem",
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
                    <button className="btn btn-outline-success">
                      🔗 Share
                    </button>
                    <button className="btn btn-outline-success">👍 35K</button>
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

                {/* Sidebar Videos with Scroll */}
                <div
                  style={{
                    maxHeight: "calc(100vh - 200px)",
                    overflowY: "auto",
                    paddingRight: "10px",
                  }}
                >
                  {[...Array(6)].map((_, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        marginBottom: "15px",
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src="/Podcast_Images/thumbnail1.png"
                        alt="Thumbnail"
                        style={{
                          width: "168px",
                          height: "94px",
                          borderRadius: "4px",
                          minWidth: "168px",
                        }}
                      />
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
                          Podcast with famous celebrity in Hollywood David
                          Johnson
                        </div>
                        <div style={{ fontSize: "12px", color: "gray" }}>
                          Ishwaar
                        </div>
                        <div style={{ fontSize: "12px", color: "gray" }}>
                          12M views • 1 week ago
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <SliderSection
              title="Entertainment"
              images={entertainment}
              containerRef={entertainmentRef}
              scrollByCard={scrollByCard}
            />

            {/* Sports Slider */}
            <SliderSection
              title="Sports"
              images={sports}
              containerRef={sportsRef}
              scrollByCard={scrollByCard}
            />

            {/* Science and History Slider */}
            <SliderSection
              title="Science and History"
              images={scienceHistory}
              containerRef={scienceHistoryRef}
              scrollByCard={scrollByCard}
            />

            {/* Armed Forces Slider */}
            <SliderSection
              title="Armed Forces"
              images={armedForces}
              containerRef={armedForcesRef}
              scrollByCard={scrollByCard}
            />
            <h3
              className="mt-5 text-center"
              style={{
                color: "#028174",
                fontWeight: "700",
                lineHeight: "45px",
              }}
            >
              Tune in on the platform you love most <br />
              no matter where you stream, we've got your ears covered
            </h3>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <button
                className="p-1 btn btn-sm"
                style={{
                  alignItems: "center",
                  height: "4.3rem",
                  background: "white",
                  gap: "15px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "red",
                  borderRadius: "20px",
                  width: "11.8rem",
                  border: "2.5px solid red",
                  fontSize: "x-large",
                }}
              >
                YouTube
              </button>
              <button
                className="btn p-1 btn-sm fs-3"
                style={{
                  alignItems: "center",
                  height: "4.3rem",
                  background: "white",
                  gap: "15px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#1AD760",
                  borderRadius: "20px",
                  width: "11.8rem",
                  border: "2.5px solid #1AD760",
                }}
              >
                <img
                  src="/Podcast_Images/spotify.svg"
                  alt="spotify"
                  style={{ height: "20px" }}
                />
                Spotify
              </button>
              <button
                className="p-1 btn btn-sm "
                style={{
                  alignItems: "center",
                  height: "4.3rem",
                  background: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#F32239",
                  borderRadius: "20px",
                  width: "11.8rem",
                  border: "2.5px solid #F32239",
                  fontSize: "x-large",
                }}
              >
                <img src="/Podcast_Images/apple.svg" alt="appleMusic" />
                MUSIC
              </button>
            </div>
          </div>
          <div className="col-md-1 "></div>
        </div>
        <div>
          {/* join our community div */}
          <div
            className="mt-3"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <div
              style={{
                backgroundColor: "#FFC973",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='%23FFFFFF' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: "40px 40px",
                backgroundRepeat: "repeat",
                padding: "100px 20px",
              }}
            >
              <div className="container">
                <div className="row align-items-center">
                  {/* Image*/}
                  <div className="col-md-5 col-12 mb-4 mb-md-0 text-center">
                    <img
                      src="/Podcast_Images/Group 12.png"
                      alt="Host Picture"
                      className="img-fluid "
                      style={{
                        width: "80%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* content */}
                  <div className="col-md-7 col-12">
                    <h2
                      style={{
                        fontWeight: "900",
                        color: "#003833",
                        fontSize: "48px",
                        lineHeight: "110%",
                      }}
                      className="mb-3"
                    >
                      Join Community
                    </h2>
                    <p
                      style={{
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "25px",
                        color: "#1E1E1E",
                      }}
                    >
                      Be part of Ishwaar’s journey through raw, real
                      conversations across social platforms. Join the Ishwaar
                      community and keep the dialogue alive.
                    </p>
                    <div
                      className="mt-3"
                      style={{
                        backgroundColor: "white",
                        padding: "30px",
                        borderRadius: "20px",
                      }}
                    >
                      <button className="btn sm-btn ">
                        <img
                          src="/Podcast_Images/smallyticon.png"
                          alt="Youtube"
                        />
                      </button>
                      <button className="btn sm-btn ">
                        <img
                          src="/Podcast_Images/spotify-icon1.png"
                          alt="Spotify"
                        />
                      </button>
                      <button className="btn sm-btn ">
                        <img
                          src="/Podcast_Images/appleIcon.png"
                          alt="Apple Music"
                        />
                      </button>
                      <button className="btn sm-btn ">
                        <img
                          src="/Podcast_Images/FacebookIconCom.png"
                          alt="Facebook"
                        />
                      </button>
                      <button className="btn sm-btn ">
                        <img
                          src="/Podcast_Images/InstagramIconCom.png"
                          alt="Instagram"
                        />
                      </button>
                      <button className="btn sm-btn ">
                        <img src="/Podcast_Images/XiconCom.png" alt="X" />
                      </button>
                      <button className="btn sm-btn ">
                        <img
                          src="/Podcast_Images/linkdinIconCom.png"
                          alt="Linkdin"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function SliderSection({ title, images, containerRef, scrollByCard }) {
  return (
    <div className="mt-3">
      <h2
        style={{
          fontWeight: "500",
          fontStyle: "medium",
          lineHeight: "100%",
          color: "#028174",
        }}
      >
        {title}
      </h2>

      <div className="d-flex justify-content-center mt-3">
        <div
          className="carousel slide"
          style={{ width: "100%", overflow: "hidden" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
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
                {images.map((img, index) => (
                  <div key={index} style={{ flex: "0 0 auto" }}>
                    <img
                      src={img}
                      className="d-block w-100 rounded"
                      alt={`Slide ${index + 1}`}
                      style={{
                        objectFit: "cover",
                        height: "274px",
                        width: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            onClick={() => scrollByCard(containerRef, -1)}
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            onClick={() => scrollByCard(containerRef, 1)}
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
