const Wrapper = ({ children }) => {
  return (
    <main className="relative w-full h-full overflow-hidden bg-black text-white">
      {children}
    </main>
  );
};

export default Wrapper;
