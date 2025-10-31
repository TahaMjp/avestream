/**
 * FillerText.jsx — Reusable filler text component
 * — Mobile size unchanged, desktop text reduced by ¼
 */

const FillerText = ({
  text,
  top,
  bottom,
  left,
  right,
  rotate = 0,
  opacity = 80,
  bold = false,
  desktopOnly = false,
}) => {
  // Mobile: unchanged | Desktop: reduced from 3xl → 2xl
  const baseSize = "text-[15px] md:text-2xl";
  const weight = bold ? "font-semibold" : "";
  const visibility = desktopOnly ? "hidden md:block" : "block";

  const style = {
    position: "absolute",
    top,
    bottom,
    left,
    right,
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <p
      className={`${baseSize} ${weight} ${visibility} opacity-${opacity} tracking-wider`}
      style={style}
    >
      {text}
    </p>
  );
};

export default FillerText;
