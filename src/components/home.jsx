const home = () => {
  return (
    <div
      className="text-white text-center px-0 pt-10 md:px-6 bg-cover bg-center bg-no-repeat md:min-h-screen h-[100%]"
      style={{ backgroundImage: "url('/fback.svg')" }} // Replace with your image path
    >
      <div className="mb-6">
        <img
          src="/flogo.svg" // Replace with your logo's path
          alt="Flick Logo"
          className="h-10 mx-auto mb-16"
        />
      </div>

      {/* Heading */}
      <h1 className="text-[28px] md:text-[46px] font-normal font-merriweather px-4 line-height-[74px]">
        Your <span className="italic">Career&nbsp;</span> SuperApp
      </h1>

      {/* Paragraph */}
      <div className="w-full flex items-center justify-center">
        <p className="text-sm md:text-xl font-light md:mb-12  pb-6 pt-4 p-3 w-full md:w-1/2 font-spline tracking-custom-0.45">
          Unlock 100+ exclusive videos, 50+ unbeatable deals, learn from 10+ top
          creators, and get cutting-edge AI-powered content.
        </p>
      </div>

      {/* Store Links */}
      <div className="flex justify-center gap-4 mb-10">
        <a
          href="https://play.google.com/store/apps/details?id=io.growthschool&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/fapp.svg" alt="Download on App Store" className="h-12" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=io.growthschool&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/fplay.svg" alt="Get it on Google Play" className="h-12" />
        </a>
      </div>

      {/* Responsive Images */}
      <div className="">
        <img
          src="/flicknm.svg"
          alt="Mobile Preview"
          className="block md:hidden w-full"
        />
        <img
          src="/flickn.webp"
          alt="Desktop Preview"
          className="hidden md:block mx-auto w-full max-w-[1060px]"
        />
      </div>
    </div>
  );
};

export default home;
