"use client";

import { ReactNode, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "@/components/Loader";

interface AosContainerProps {
  children: ReactNode;
}

export default function AosContainer({ children }: AosContainerProps): ReactNode {
  const [isAosLoaded, setIsAosLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-in-out-sine",
      duration: 1200,
      offset: 120,
      delay: 100,
    });

    const timer = setTimeout(() => setIsAosLoaded(true), 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isAosLoaded && <Loader />}

      <div className={`transition-opacity duration-1000 ${isAosLoaded ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>
    </>
  );
}