// =============================
// Home.jsx — Main Page Container
// =============================
// - Handles vertical snap scrolling between slides
// - Integrates sticky Header and ScrollButton
// - Syncs route with visible slide using IntersectionObserver
// - Keeps default scrollbars (no color mods, no forced hiding)
// =============================

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slide from "./Slide";
import Footer from "./Footer";
import ScrollButton from "../UI/ScrollButton";

// ----------- Image Imports -----------
import photo1 from "../../images/vertical/photo-1.jpg";
import photo2 from "../../images/vertical/photo-2.jpg";
import photo3 from "../../images/vertical/photo-3.jpg";

// ----------- Slide Data -----------
const slides = [
  { id: "1", route: "/", image: photo1, text: "AVESTREAM" },
  {
    id: "2",
    route: "/about",
    image: photo2,
    text: "Minimal form. Raw detail.",
  },
  { id: "3", route: "/look", image: photo3, text: "Slide 3 — coming soon." },
  { id: "4", route: "/story", image: photo2, text: "Slide 4 — TBD." },
];

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  // ----------- Sync route with scroll position -----------
  useEffect(() => {
    const sections = containerRef.current.querySelectorAll("section, footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetRoute = entry.target.getAttribute("data-route");
            navigate(targetRoute, { replace: true });

            // ✅ Header visibility control (visible only on first slide)
            if (entry.target.getAttribute("data-route") === "/") {
              headerRef.current?.classList.remove(
                "opacity-0",
                "pointer-events-none"
              );
            } else {
              headerRef.current?.classList.add(
                "opacity-0",
                "pointer-events-none"
              );
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navigate]);

  // ----------- Render -----------
  return (
    <div
      ref={containerRef}
      id="scroll-container"
      className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth relative bg-[#656D4A] text-white"
    >
      {/* Slides */}
      {slides.map((slide) => (
        <Slide key={slide.id} bg={slide.image} route={slide.route}>
          <div className="text-3xl font-bold text-white">{slide.text}</div>
        </Slide>
      ))}

      {/* Footer */}
      <Footer />

      {/* ScrollButton fixed at bottom center */}
      <ScrollButton containerRef={containerRef} />
    </div>
  );
};

export default Home;
