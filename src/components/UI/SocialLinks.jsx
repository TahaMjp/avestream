/**
 * SocialLinks.jsx
 * — Displays social icons/links
 * — Can be horizontal (default) or vertical
 * — Size can be 'sm', 'md', 'lg'
 */

const SocialLinks = ({ vertical, size = "md" }) => {
  const containerClasses = vertical
    ? "flex flex-col gap-6 items-center"
    : "flex gap-6";

  const textSize =
    size === "lg"
      ? "text-2xl font-bold"
      : size === "sm"
      ? "text-sm"
      : "text-base font-semibold";

  return (
    <div className={containerClasses}>
      <a href="#" className={`${textSize} hover:opacity-70 transition`}>
        Instagram
      </a>
      <a href="#" className={`${textSize} hover:opacity-70 transition`}>
        Twitter
      </a>
      <a href="#" className={`${textSize} hover:opacity-70 transition`}>
        Shop
      </a>
    </div>
  );
};

export default SocialLinks;
