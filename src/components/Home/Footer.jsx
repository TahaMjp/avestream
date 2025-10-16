/**
 * Footer.jsx — "Dark Luxe Street Poster" footer for AVESTREAM (final refined edition)
 * — Improved desktop spacing, mobile scaling fix for creators, and reduced filler in mobile.
 */

const Footer = () => {
  return (
    <footer
      data-route="/contact"
      className="relative h-screen w-full snap-start text-black overflow-hidden flex items-center justify-center"
    >
      {/* === BACKGROUND LAYER: Giant faded words === */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none font-[eraser]">
        <h1 className="absolute text-[18vw] md:text-[11vw] font-black uppercase tracking-tighter rotate-[-8deg] top-[24%] left-[6%] md:top-[10%] md:left-[8%]">
          RAW
        </h1>
        <h1 className="absolute text-[16vw] md:text-[9.5vw] font-black uppercase tracking-tighter rotate-[5deg] top-[50%] right-[10%] md:top-[32%] md:left-[28%]">
          BERLIN
        </h1>
        <h1 className="absolute text-[20vw] md:text-[12vw] font-black uppercase tracking-tighter rotate-[12deg] bottom-[18%] left-[5%] md:bottom-[5%] md:right-[15%]">
          LIMITLESS
        </h1>
      </div>

      {/* === MAIN BRAND === */}
      <h1 className="absolute top-[9%] left-1/2 -translate-x-1/2 text-[13vw] md:text-8xl font-extrabold uppercase tracking-tighter font-[eraser] drop-shadow-[2px_2px_5px_rgba(0,0,0,0.4)] rotate-[-3deg] z-10">
        AVESTREAM
      </h1>

      {/* === CREATOR LINKS (with fixed mobile scaling) === */}
      <div className="absolute w-10/12 top-[22%] left-1/2 -translate-x-1/2 flex gap-5 md:gap-8 text-[4vw] md:text-xl tracking-widest uppercase z-10 font-[malvides] justify-center text-[#F3EDE4]">
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[1.5px] hover:opacity-90 transition-all text-[#F3EDE4] rotate-[-2deg] relative z-20"
        >
          Taha Majlesi
        </a>
        <span>&amp;</span>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[1.5px] hover:opacity-90 transition-all text-[#F3EDE4] rotate-[3deg] relative z-20"
        >
          your name
        </a>
      </div>

      {/* === CHAOTIC FILLER TEXTS === */}
      <div className="absolute inset-0 flex items-center justify-center z-0 font-[malvides]">
        <div className="relative w-full h-full">
          {/* desktop+mobile visible */}
          <p className="absolute top-[4%] left-[6%] text-[22px] md:text-xl rotate-[8deg] opacity-70 uppercase tracking-wider">
            crafted in berlin
          </p>
          <p className="absolute top-[29%] right-[12%] text-[30px] md:text-3xl rotate-[-12deg] opacity-70">
            bold as streets
          </p>
          <p className="absolute top-[32%] left-[5%] text-[30px] md:text-4xl rotate-[12deg] font-semibold opacity-85">
            fancy meets raw
          </p>
          <p className="absolute top-[68%] right-[15%] text-[30px] md:text-4xl md:top-[75%] rotate-[3deg] opacity-60">
            no limits, just motion
          </p>

          {/* hidden on mobile to clean up */}
          <p className="absolute bottom-[38%] left-[10%] text-[22px] md:text-4xl rotate-[-8deg] opacity-70 hidden md:block md:bottom-[26%]">
            unfiltered aesthetic
          </p>
          <p className="absolute bottom-[30%] right-[8%] text-[22px] md:text-4xl rotate-[14deg] tracking-widest opacity-60 hidden md:block">
            street soul couture
          </p>
          <p className="absolute top-[45%] left-[45%] text-[23px] md:text-4xl -rotate-[20deg] opacity-80 hidden md:block">
            everyday elegance
          </p>

          <p className="absolute bottom-[42%] left-[50%] text-[30px] md:text-4xl rotate-[5deg] opacity-75">
            made to move fast
          </p>
          <p className="absolute bottom-[35%] right-[35%] text-[30px] md:text-4xl rotate-[-5deg] opacity-60">
            future wears ave
          </p>
          <p className="absolute top-[63%] left-[20%] text-[23px] md:text-4xl rotate-[10deg] opacity-75 hidden md:block">
            urban luxury since 2025
          </p>
          <p className="absolute top-[68%] right-[25%] text-[23px] md:text-4xl rotate-[-15deg] opacity-70 hidden md:block">
            threads of attitude
          </p>
          <p className="absolute bottom-[6%] left-[5%] text-[30px] md:text-4xl rotate-[5deg] opacity-60">
            exclusive feel guaranteed
          </p>
          <p className="absolute top-[76%] left-[30%] text-[30px] md:text-4xl rotate-[7deg] opacity-75">
            for streets and souls
          </p>
          <p className="absolute bottom-[12%] right-[8%] text-[30px] md:text-4xl rotate-[-12deg] opacity-60">
            beyond ordinary
          </p>
          <p className="absolute top-[38%] left-[44%] text-[28px] md:text-4xl rotate-[4deg] opacity-70">
            designed for rhythm
          </p>
          <p className="absolute top-[15%] right-[20%] text-[23px] md:text-4xl rotate-[-6deg] opacity-60 hidden md:block">
            crafted not printed
          </p>
          <p className="absolute bottom-[52%] left-[15%] text-[30px] md:text-4xl rotate-[15deg] opacity-65">
            simple. striking. street.
          </p>

          {/* extras */}
          <p className="absolute bottom-[25%] left-[45%] text-[22px] md:text-4xl rotate-[12deg] opacity-60 hidden md:block">
            built different
          </p>
          <p className="absolute top-[55%] left-[10%] text-[23px] md:text-4xl rotate-[-8deg] opacity-65 hidden md:block">
            street spirit alive
          </p>
          <p
            className="absolute bottom-[20%] right-[20%] text-[23px] 
          md:bottom-[10%] md:text-4xl rotate-[10deg] opacity-70 hidden md:block"
          >
            form follows chaos
          </p>
        </div>
      </div>

      {/* === COPYRIGHT === */}
      <div className="absolute bottom-4 w-full text-center z-10">
        <p className="text-[10px] md:text-sm tracking-widest uppercase opacity-70">
          © 2025 AVESTREAM — all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
