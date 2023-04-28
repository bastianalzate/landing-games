import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoTwitch } from "react-icons/io";
import { RiArrowUpSLine } from "react-icons/ri";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <h2 className="text-2xl font-bold">VideoJuegos</h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center justify-center md:justify-end space-x-8">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <IoLogoTwitch className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="bg-gray-800 text-gray-400 py-4 mt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-sm">&copy; 2023 VideoJuegos Todos los derechos reservados.</p>
              <button onClick={handleScrollTop} className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out flex items-center">
                <RiArrowUpSLine className="text-lg mr-2 animate-bounce" />
                Volver arriba
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
