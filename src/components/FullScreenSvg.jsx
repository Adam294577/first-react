export const FullScreenSvg = ({ className }) => {
  const FullScreen = () => {
    const element = document.documentElement;
    if (element) {
      element.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return (
    <div>
      <button onClick={FullScreen} className={`${className}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 21v-5h2v3h3v2zm13 0v-2h3v-3h2v5zM3 8V3h5v2H5v3zm16 0V5h-3V3h5v5z"
          ></path>
        </svg>
      </button>
    </div>
  );
};