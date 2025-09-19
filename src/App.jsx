import React, { useEffect, useRef, useState } from "react";
import Loader from "./Components/Loader";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CustomCursor from "./components/CustomCursor";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [loaderfinish, setLoaderfinish] = useState(false);

  return (
    <main className="relative select-none">
      <CustomCursor />
      <Loader func={setLoaderfinish} />
      <Navbar />
      <Landing finish={loaderfinish} />
      <Work />
      <Contact />
    </main>
  );
}

export default App;

