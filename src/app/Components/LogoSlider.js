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
      <div className="row align-items-center">
        <div className="col-md-1 d-none d-lg-block"></div>

        <div className="col-12 col-lg-10">
          {/* Scrolling container */}
          <div className="scroll-wrapper">
            <div className="scroll-content">
              <Image
                src={BummpyPaymentLogo}
                alt="Company 1"
                //
                className="logo-img"
              />
              {/* <Image
                // className="logo-img"
                src={Anlook}
                alt="Company 2"
                style={{ height: "fit-content" }}
              /> */}

              <Image
                // className="logo-img"
                src={BumppyEppLogo}
                alt="Company 3"
                //
                className="logo-img"
              />
              {/* <Image
                
                src={GrownPayLogo}
                alt="Company 4"
                //
                className="logo-img"
              /> */}
              <Image src={BillPunch} alt="Company 5" className="logo-img" />
              <Image src={chAafoLogo} alt="Company 6" className="logo-img" />
              <Image className="logo-img" src={GTKLogo} alt="Company 7" />
              {/* <Image
                src={PakkyLogo}
                alt="Company 8"
                className="logo-img"
              /> */}
              <Image className="logo-img" src={ShubPaisaLogo} alt="Company 9" />
              <Image className="logo-img" src={TopAdvocacy} alt="Company 10 " />
              <Image src={TrawloLogo} alt="Company 11 " className="logo-img" />
              <Image className="logo-img" src={UkoPayLogo} alt="Company 11 " />

              <Image
                src={BummpyPaymentLogo}
                alt="Company 1"
                //
                className="logo-img"
              />
              {/* <Image
                src={Anlook}
                alt="Company 2"
                className="logo-img"
              /> */}

              <Image src={BumppyEppLogo} alt="Company 3" className="logo-img" />
              <Image
                src={GrownPayLogo}
                alt="Company 4"
                style={{ height: "400", width: "200px" }}
              />
              <Image className="logo-img" src={BillPunch} alt="Company 5" />
              <Image src={chAafoLogo} alt="Company 6" className="logo-img" />
              <Image className="logo-img" src={GTKLogo} alt="Company 7" />
              {/* <Image src={PakkyLogo} alt="Company 8" className="logo-img" /> */}
              <Image src={ShubPaisaLogo} alt="Company 9" className="logo-img" />
              <Image src={TopAdvocacy} alt="Company 10 " className="logo-img" />
              <Image src={TrawloLogo} alt="Company 11 " className="logo-img" />
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
  );
};

export default LogoSlider;
