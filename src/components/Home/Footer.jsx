/**
 * Footer.jsx — AVESTREAM footer (modular with FillerText component)
 * — Fixed untouchable links issue by adjusting z-index and pointer events.
 */

import photo5 from "../../images/photo_6_2025-10-21_08-03-24.jpg";
import FillerText from "./FillerText";

const Footer = () => {
  return (
    <footer
      data-route="/contact"
      className="relative h-screen w-full snap-start text-black overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${photo5})`,
        backgroundAttachment: "scroll",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* === LIGHT MOBILE OVERLAY for better visibility === */}
      <div className="absolute inset-0 bg-black/30 md:bg-black/10 z-0 pointer-events-none" />

      {/* === MAIN TITLE === */}
      <h1 className="absolute top-[9%] left-1/2 -translate-x-1/2 text-[13vw] md:text-8xl font-extrabold uppercase tracking-tighter font-[eraser] drop-shadow-[2px_2px_5px_rgba(0,0,0,0.4)] rotate-[-3deg] z-[900] text-[#F3EDE4]">
        <a href="/" className="no-underline text-[#F3EDE4] pointer-events-auto">
          AVESTREAM
        </a>
      </h1>

      {/* === CREATOR LINKS === */}
      <div className="absolute w-10/12 top-[22%] left-1/2 -translate-x-1/2 flex gap-5 md:gap-8 text-[4vw] md:text-xl tracking-widest uppercase z-[999] font-[eraser] justify-center text-[#F3EDE4] pointer-events-auto">
        <a
          href="https://instagram.com/tahamajlesi"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[1.5px] hover:opacity-90 transition-all rotate-[-2deg]"
        >
          Taha&nbsp;Majlesi
        </a>
        <span>&amp;</span>
        <a
          href="https://instagram.com/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[1.5px] hover:opacity-90 transition-all rotate-[3deg]"
        >
          Your&nbsp;Name
        </a>
      </div>

      {/* === CHAOTIC FILLER TEXTS === */}
      <div className="absolute inset-0 flex items-center justify-center z-10 font-[eraser] text-[#F3EDE4] pointer-events-none">
        <div className="relative w-full h-full md:space-y-[3vw]">
          <FillerText
            text="crafted in berlin"
            top="4%"
            left="6%"
            rotate={8}
            opacity={70}
          />
          <FillerText
            text="bold as streets"
            top="29%"
            right="12%"
            rotate={-12}
            opacity={70}
          />
          <FillerText
            text="fancy meets raw"
            top="32%"
            left="5%"
            rotate={12}
            opacity={85}
            bold
          />

          {/* moved slightly down + right */}
          <FillerText
            text="no limits, just motion"
            top="71%"
            right="18%"
            rotate={3}
            opacity={60}
          />

          <FillerText
            text="unfiltered aesthetic"
            bottom="38%"
            left="10%"
            rotate={-8}
            opacity={70}
            desktopOnly
          />
          <FillerText
            text="street soul couture"
            bottom="30%"
            right="8%"
            rotate={14}
            opacity={60}
            desktopOnly
          />

          {/* moved slightly lower and more centered */}
          <FillerText
            text="everyday elegance"
            top="49%"
            left="46%"
            rotate={-20}
            opacity={80}
            desktopOnly
          />

          {/* moved slightly up and right */}
          <FillerText
            text="made to move fast"
            bottom="35%"
            left="54%"
            rotate={5}
            opacity={75}
          />

          {/* moved slightly lower and inward */}
          <FillerText
            text="future wears ave"
            bottom="30%"
            right="33%"
            rotate={-5}
            opacity={60}
          />

          <FillerText
            text="urban luxury since 2025"
            top="63%"
            left="20%"
            rotate={10}
            opacity={75}
            desktopOnly
          />

          {/* moved slightly lower and further right */}
          <FillerText
            text="threads of attitude"
            bottom="6%"
            right="28%"
            rotate={-15}
            opacity={70}
            desktopOnly
          />

          <FillerText
            text="exclusive feel guaranteed"
            bottom="6%"
            left="5%"
            rotate={5}
            opacity={60}
          />
          <FillerText
            text="for streets and souls"
            top="76%"
            left="30%"
            rotate={7}
            opacity={75}
          />
          <FillerText
            text="beyond ordinary"
            bottom="12%"
            right="8%"
            rotate={-12}
            opacity={60}
          />
          <FillerText
            text="designed for rhythm"
            top="38%"
            left="42%"
            rotate={4}
            opacity={70}
          />
          <FillerText
            text="simple. striking. street."
            bottom="52%"
            left="15%"
            rotate={15}
            opacity={65}
          />
        </div>
      </div>

      {/* === COPYRIGHT === */}
      <div className="absolute bottom-4 w-full text-center z-[900] text-[#F3EDE4] pointer-events-none">
        <p className="text-[10px] md:text-sm tracking-widest uppercase opacity-70">
          © 2025 AVESTREAM — all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
