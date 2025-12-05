"use client";

import React, { ReactNode, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./Loader";

interface AosContainerProps {
  children: ReactNode;
}

export default function AosContainer({ children }: AosContainerProps): ReactNode {
  const [isAosLoaded, setIsAosLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out",
      duration: 1000,
      offset: 50,
    });
    setIsAosLoaded(true);
  }, []);

  if (!isAosLoaded) {
    return <Loader />;
  }

  return children;
}