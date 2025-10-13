/**
 * ScrollButton.jsx
 * — Floating scroll button at bottom center.
 * — Scrolls to next slide or back to top (if at footer).
 * — Dark Luxe styling: glass blur + soft hover scale.
 */

import { useEffect, useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const ScrollButton = ({ containerRef }) => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const footer = containerRef.current.querySelector("footer");

    // Observe footer visibility to know when user reached the bottom
    const observer = new IntersectionObserver(
      ([entry]) => setAtBottom(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, [containerRef]);

  const handleClick = () => {
    if (!containerRef.current) return;

    if (atBottom) {
      // Scroll smoothly back to top
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Scroll to next section
      const sections = Array.from(
        containerRef.current.querySelectorAll("section, footer")
      );
      const currentScroll = containerRef.current.scrollTop;
      const nextSection = sections.find((s) => s.offsetTop > currentScroll);
      if (nextSection) {
        containerRef.current.scrollTo({
          top: nextSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <button
        onClick={handleClick}
        className="p-3 rounded-full bg-[#758467]/30 backdrop-blur-md hover:bg-[#758467]/60 text-white transition-all duration-300 ease-in-out hover:scale-110"
        aria-label={atBottom ? "Scroll to top" : "Scroll down"}
      >
        <span key={atBottom ? "up" : "down"}>
          {atBottom ? (
            <HiChevronUp className="text-2xl" />
          ) : (
            <HiChevronDown className="text-2xl" />
          )}
        </span>
      </button>
    </div>
  );
};

export default ScrollButton;
