import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slide from "./Slide";
import Footer from "./Footer";
import ScrollButton from "../UI/ScrollButton";
import Header from "../UI/Header"; // import the header

// import images directly
import photo1 from "../../images/vertical/photo-1.jpg";
import photo2 from "../../images/vertical/photo-2.jpg";
import photo3 from "../../images/vertical/photo-3.jpg";

// slide data
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

  useEffect(() => {
    const sections = containerRef.current.querySelectorAll("section, footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetRoute = entry.target.getAttribute("data-route");
            navigate(targetRoute, { replace: true });
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
      className="h-screen snap-y snap-mandatory overflow-scroll scroll-smooth relative"
    >
      {/* Sticky Header */}
      <Header containerRef={containerRef} />

      {slides.map((slide) => (
        <Slide key={slide.id} bg={slide.image} route={slide.route}>
          <div className="text-3xl font-bold text-white">{slide.text}</div>
        </Slide>
      ))}

      <Footer />

      {/* ScrollButton fixed at bottom center */}
      <ScrollButton containerRef={containerRef} />
    </div>
  );
};

export default Home;
