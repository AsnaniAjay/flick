const Footer = () => {
  return (
    <footer className=" bg-black text-white py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 ">
        <div className="flex items-center w-full md:w-[200px] justify-center md:justify-start">
          <img src="/flogo.svg" alt="Flick Logo" className="h-5" />
        </div>

        <div className="font-spline font-normal flex items-center justify-center flex-wrap md:flex-nowrap text-[10px] md:text-sm whitespace-nowrap">
          <a
            href="/terms-and-conditions"
            className="hover:text-gray-300 text-[#FFFFFF]/80"
          >
            TERMS & CONDITIONS
          </a>
          <span className="mx-1 md:mx-2">•</span>
          <a
            href="/privacy-policy"
            className="hover:text-gray-300 text-[#FFFFFF]/80"
          >
            PRIVACY POLICY
          </a>
          <span className="mx-1 md:mx-2">•</span>
          <a
            href="/refund-policy"
            className="hover:text-gray-300 text-[#FFFFFF]/80"
          >
            REFUND POLICY
          </a>
          <span className="mx-1 md:mx-2">•</span>
          <a
            href="/contact-us"
            className="hover:text-gray-300 text-[#FFFFFF]/80"
          >
            CONTACT US
          </a>
        </div>

        <div className="font-spline text-xs md:text-sm text-[#FFFFFF]/80 w-full md:w-[280px] text-center md:text-right font-normal">
          © {new Date().getFullYear()} Sisinty Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
