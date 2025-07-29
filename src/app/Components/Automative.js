"use client";
import React, { useEffect, useRef, useState } from "react";

import { AutomativeNav } from "../Pages/AutomativeNav";
import MainPage from "../Pages/MainPage";
import AutomativeFooter from "..//Pages/AutomativeFooter";
import AutomativeVid from "../Pages/AutomativeVid";
import Blogs from "../Pages/Blogs";
import ViewBlog from "../Pages/ViewBlog";
import News from "../Pages/News";
import Aboutus from "../Pages/Aboutus";

import BlogData from "../AutomativeImages/UpNextData.json";

const Automative = () => {
  const [activeSection, setActiveSection] = useState("main");

  return (
    <div>
      <AutomativeNav />
      <MainPage />
      <AutomativeVid />
      <Blogs />
      <ViewBlog />
      <News />
      <Aboutus />
      <AutomativeFooter />
    </div>
  );
};

export default Automative;
