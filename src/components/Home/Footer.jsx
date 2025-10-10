import SocialLinks from "../UI/SocialLinks";

const Footer = () => {
  return (
    <footer
      data-route="/contact"
      className="h-screen w-full snap-start bg-black text-white flex flex-col items-center justify-center gap-4"
    >
      <SocialLinks />
      <div className="text-sm opacity-70">© 2025 AVESTREAM</div>
    </footer>
  );
};

export default Footer;
