import React from "react";
import Image from "next/image";

import AboutUsimg from "../AstrologyImg/AboutUsImg.jpg";

const AstroAboutus = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="row mt-5">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row mb-5">
            <div className="col-md-6 mt-5">
              <h3>My Journey Into the Stars</h3>
              <p>
                I've spent years decoding the celestial language and sharing its
                timeless wisdom with the world through YouTube and personal
                sessions. Astrology, for me, is more than just predictions—it's
                a sacred map to self-discovery, healing, and alignment.
              </p>
              <p>
                My unique approach blends the precision of Vedic astrology with
                the depth and nuance of Western astrology, enriched by layers of
                spiritual insight and real-world practicality. This fusion
                allows me to provide guidance that is not only cosmically
                aligned but also deeply relevant to your everyday life.
              </p>
              <p>
                Whether you're seeking clarity in relationships, career
                direction, or inner purpose, my mission is to make astrology
                accessible, empowering, and deeply personal for you. I believe
                that understanding your chart is like unlocking your soul's
                blueprint—a powerful tool to live with intention, authenticity,
                and confidence.
              </p>
              <p>
                <i>"Let the stars speak, and let your journey unfold."</i>
              </p>
              <button
                className="btn btn-light rounded-pill"
                style={{ color: "#B9D8A9", background: "#2C3D27" }}
              >
                <b> Book Consultancy</b>
              </button>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div
                className="rounded-top-circle overflow-hidden"
                style={{ width: "100%", maxWidth: "500px", aspectRatio: "5/6" }}
              >
                <Image
                  src={AboutUsimg}
                  alt="About-us-img"
                  layout="responsive"
                  width={500}
                  height={600}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default AstroAboutus;
