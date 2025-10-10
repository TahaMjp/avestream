import { useEffect, useState } from "react";

const Header = ({ containerRef }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        // Show header only on first slide
        const firstSlideVisible = entries[0].isIntersecting;
        setVisible(firstSlideVisible);
      },
      { threshold: 0.5 }
    );

    if (sections[0]) observer.observe(sections[0]);

    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-md">
        <div className="flex-1 text-center text-2xl font-bold text-black">
          Avestream
        </div>
        <button className="ml-auto px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300">
          Shop
        </button>
      </div>
    </header>
  );
};

export default Header;
