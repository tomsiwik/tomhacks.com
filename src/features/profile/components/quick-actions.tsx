"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { MAIN_NAV } from "@/config/site";

export function QuickActions() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const direction = latestValue - (scrollY.getPrevious() ?? 0);
    setHidden(direction > 0);
  });

  return (
    <>
      <div className="h-14" />

      <motion.div
        className="fixed inset-x-0 bottom-0 z-50 bg-background pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]"
        initial={{ opacity: 1 }}
        animate={{
          opacity: hidden ? 0.5 : 1,
        }}
        whileHover={{
          opacity: 1,
        }}
      >
        <div className="screen-line-before before:z-1">
          <div className="mx-auto px-2 md:max-w-3xl">
            <div className="border-x border-edge pt-2">
              <div className="screen-line-before screen-line-after -mx-px grid grid-cols-[1fr_1fr_2.5rem] gap-2 sm:grid-cols-2 sm:gap-4">
                <Button size="lg" asChild>
                  <a href="/vcard" target="_blank" rel="noopener noreferrer">
                    <DownloadIcon />
                    Save vCard
                  </a>
                </Button>

                <MobileNav className="sm:hidden" items={MAIN_NAV} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function DownloadIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"></path>
    </svg>
  );
}
