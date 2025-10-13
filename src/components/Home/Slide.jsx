/**
 * Slide.jsx
 * — Reusable full-screen slide section.
 * — Displays background image with dark luxe gradient overlay.
 * — Children elements (usually text) are layered above the overlay.
 */

const Slide = ({ bg, route, children }) => {
  return (
    <section
      data-route={route}
      className="relative h-screen w-full snap-start bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Gradient overlay for luxury depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#14452F]/90 via-black/30 to-transparent" />
      {/* Foreground content (text/logo/etc.) */}
      <div className="relative z-10 text-white fade-in">{children}</div>
    </section>
  );
};

export default Slide;
