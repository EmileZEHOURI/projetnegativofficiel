"use client";

import { useCallback } from "react";
import { HiOutlineArrowDown } from "react-icons/hi";

export function ScrollDownArrow() {
  const onClick = useCallback(() => {
    // Scroll d'environ 1 écran (tu peux cibler une section avec id)
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }, []);

  return (
    <button
      onClick={onClick}
      aria-label="Scroll down"
      className="
        absolute bottom-8 right-8 z-20
        flex h-16 w-16 items-center justify-center
        rounded-full border border-white/60
        text-white
        hover:bg-white/10
        transition
      "
    >
      <HiOutlineArrowDown className="text-4xl animate-bounce" />
    </button>
  );
}
