import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slide from "./Slide";
import Footer from "./Footer";
import ScrollButton from "../UI/ScrollButton";

import photo1 from "../../images/photo_1_2025-10-21_08-03-24.jpg";
import photo2 from "../../images/photo_2_2025-10-21_08-03-24.jpg";
import photo3 from "../../images/photo_3_2025-10-21_08-03-24.jpg";
import photo5 from "../../images/photo_5_2025-10-21_08-03-24.jpg";

// -------- Slides --------
const slides = [
  {
    id: "1",
    route: "/",
    image: photo3,
    title: "AVESTREAM",
    link: true,
    fillers: [
      "Raw from Berlin.",
      "No polish. Only vision.",
      "Handcrafted for edge.",
      "Refuse perfection.",
      "Built for those who don't blend.",
    ],
  },
  {
    id: "2",
    route: "/about",
    image: photo2,
    title: "WE DESIGN CHAOS INTO FORM",
    fillers: [
      "Minimal silhouettes, brutal textures.",
      "Born from street grit.",
      "Function meets rebellion.",
      "Every piece tells a fight.",
      "Berlin → The only lab we need.",
    ],
  },
  {
    id: "3",
    route: "/look",
    image: photo5,
    title: "BUILT FOR THE DEFIANT",
    fillers: [
      "For those who never ask permission.",
      "The underground uniform.",
      "Wear your statement.",
      "Designs that punch back.",
      "Quiet doesn’t exist here.",
    ],
  },
  {
    id: "4",
    route: "/story",
    image: photo1,
    title: "PRECISION IN IMPERFECTION",
    fillers: [
      "Cut, torn, rebuilt.",
      "Every flaw engineered.",
      "No copy, no mass — only craft.",
      "Rough edges tell truth.",
      "Perfection is the enemy.",
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll("section, footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetRoute = entry.target.getAttribute("data-route");
            navigate(targetRoute, { replace: true });

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

  return (
    <div
      ref={containerRef}
      id="scroll-container"
      className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth relative bg-[#656D4A] text-white"
    >
      {slides.map((slide) => (
        <Slide
          key={slide.id}
          bg={slide.image}
          route={slide.route}
          title={slide.title}
          text={slide.text}
          fillers={slide.fillers}
          link={slide.link}
        />
      ))}

      <Footer />
      <ScrollButton containerRef={containerRef} />
    </div>
  );
};

export default Home;
