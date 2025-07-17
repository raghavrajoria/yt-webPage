"use client";
import Image from "next/image";
import React from "react";
import BummpyPaymentLogo from "../Logos/BumppyPayments.svg";

import BumppyEppLogo from "../Logos/Bumppy-epp-logo.svg";
import chAafoLogo from "../Logos/chAafo-logo.svg";
import GrownPayLogo from "../Logos/Grown-Pe-logo.png";
import GTKLogo from "../Logos/GTK Logo.svg";
import PakkyLogo from "../Logos/Packky-logo.png";
import ShubPaisaLogo from "../Logos/Shubh-Paisa-Logo.svg";
import TopAdvocacy from "../Logos/Top-Advocacy-logo.svg";
import TrawloLogo from "../Logos/Trawlo-Yellow-Green.svg";
import Anlook from "../Logos/AnlookLogo.svg";
import BillPunch from "../Logos/BillPuLogo.svg";
import UkoPayLogo from "../Logos/UKOPAYLogo.svg";

export const LogoSlider = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="row align-items-center">
          <div className="col-md-1 d-none d-lg-block"></div>

          <div className="col-12 col-lg-10">
            {/* Scrolling container */}
            <div className="scroll-wrapper">
              <div className="scroll-content">
                <Image
                  src={BummpyPaymentLogo}
                  alt="Company 1"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  // className="logo-img"
                  src={Anlook}
                  alt="Company 2"
                  style={{ height: "400px", width: "200px" }}
                />

                <Image
                  // className="logo-img"
                  src={BumppyEppLogo}
                  alt="Company 3"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  // className="logo-img"
                  src={GrownPayLogo}
                  alt="Company 4"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  src={BillPunch}
                  alt="Company 5"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  // className="logo-img"
                  src={chAafoLogo}
                  alt="Company 6"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  className="logo-img"
                  src={GTKLogo}
                  alt="Company 7"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  // className="logo-img"
                  src={PakkyLogo}
                  alt="Company 8"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  className="logo-img"
                  src={ShubPaisaLogo}
                  alt="Company 9"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  className="logo-img"
                  src={TopAdvocacy}
                  alt="Company 10 "
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  // className="logo-img"
                  src={TrawloLogo}
                  alt="Company 11 "
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  style={{ height: "400px", width: "200px" }}
                  src={UkoPayLogo}
                  alt="Company 11 "
                />

                <Image
                  // className="logo-img"
                  src={BummpyPaymentLogo}
                  alt="Company 1"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  // className="logo-img"
                  src={Anlook}
                  alt="Company 2"
                  style={{ height: "400px", width: "200px" }}
                />

                <Image
                  // className="logo-img"
                  src={BumppyEppLogo}
                  alt="Company 3"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  className="logo-img"
                  src={GrownPayLogo}
                  alt="Company 4"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  style={{ height: "400px", width: "200px" }}
                  src={BillPunch}
                  alt="Company 5"
                />
                <Image
                  // className="logo-img"
                  src={chAafoLogo}
                  alt="Company 6"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  className="logo-img"
                  src={GTKLogo}
                  alt="Company 7"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  // className="logo-img"
                  src={PakkyLogo}
                  alt="Company 8"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  // className="logo-img"
                  src={ShubPaisaLogo}
                  alt="Company 9"
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  // className="logo-img"
                  src={TopAdvocacy}
                  alt="Company 10 "
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  // className="logo-img"
                  src={TrawloLogo}
                  alt="Company 11 "
                  style={{ height: "400px", width: "200px" }}
                />
                <Image
                  style={{ height: "400", width: "200px" }}
                  src={UkoPayLogo}
                  alt="Company 11 "
                />
              </div>
            </div>
          </div>
          <div className="col-md-1 d-none d-lg-block"></div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
