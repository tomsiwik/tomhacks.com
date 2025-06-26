"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "./logo";

export function HeaderLogo() {
  const pathname = usePathname();
  return pathname === "/" ? <LogoMotion /> : <Logo />;
}

function LogoMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 381 180"
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <g transform="matrix(1,0,0,1,-46.5001,-101.116)" fill="currentColor">
        <path d="M166.082,278.457L166.082,101.116L271.418,101.116L271.418,278.457L166.082,278.457ZM236.306,136.584L201.194,136.584L201.194,242.989L236.306,242.989L236.306,136.584ZM151.836,101.116L151.836,136.584L116.724,136.584L116.724,278.457L81.612,278.457L81.612,136.584L46.5,136.584L46.5,101.116L151.836,101.116ZM285.461,278.457L285.461,137.529L303.373,137.529L303.373,102.06L425.909,102.06L425.909,279.402L390.797,279.402L390.797,137.529L373.241,137.529L373.241,278.457L338.129,278.457L338.129,137.529L320.573,137.529L320.573,278.457L285.461,278.457Z" />
      </g>
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
