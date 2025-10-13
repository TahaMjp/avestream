/**
 * Footer.jsx
 * — Final screen with vertical social links and copyright.
 * — Social links bigger and credit fixed at bottom.
 */

import SocialLinks from "../UI/SocialLinks";

const Footer = () => {
  return (
    <footer
      data-route="/contact"
      className="relative h-screen w-full snap-start bg-[#14452F] text-white flex flex-col items-center justify-center gap-10 px-6"
    >
      {/* Vertical Social Links */}
      <SocialLinks vertical size="lg" />

      {/* Footer tagline */}
      <div className="text-xl font-bold tracking-wide text-center">
        © 2025 AVESTREAM — Crafted in Berlin
      </div>

      {/* Developer credit fixed at bottom */}
      <div className="absolute bottom-4 text-xs opacity-60 text-center w-full">
        Designed and developed by{" "}
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          Taha Majlesi
        </a>
      </div>
    </footer>
  );
};

export default Footer;
