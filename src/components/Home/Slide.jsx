const Slide = ({ bg, route, children }) => {
  return (
    <section
      data-route={route}
      className="h-screen w-full snap-start bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {children}
    </section>
  );
};

export default Slide;
