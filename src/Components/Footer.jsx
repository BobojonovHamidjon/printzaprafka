import { FaFacebookF, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E2126] mt-20 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
   
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <img 
              src="https://printzapravka.uz/wp-content/uploads/2025/03/logo-1024x403.png" 
              alt="Logo" 
              className="h-16 sm:h-20" 
            />
          </div>
          <p className="text-gray-400 mt-2 max-w-sm text-center md:text-left">
            Kartrijlarni to'ldirish va ta'mirlash — tez, sifatli, foydali!
          </p>
          <br />
          <br />
          <p>
          <a  className="text-red-500 cursor-pointer hover:text-gray-400">Maxfiylik siyosati</a>
        </p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <p className="text-gray-400">📍 Sirg'ali tumani, Nomdonak mahallasi, Fayzli ko'chasi, 11-uy</p>
          <p className="text-gray-400">📧 tafakkurxizmatsamarasimchj@gmail.com</p>
          <p className="text-gray-400">📞 +998 94 051 14 94</p>
        </div>
        <div className="flex space-x-4 cursor-pointer">
          <a  className="text-white p-2 rounded-[8px] bg-amber-600  hover:text-black  text-2xl">
            <FaFacebookF />
          </a>
          <a  className="text-white p-2 rounded-[8px] bg-amber-600 hover:text-black text-2xl">
            <FaInstagram />
          </a>
          <a  className="text-white p-2 rounded-[8px] bg-amber-600 hover:text-black text-2xl">
            <FaYoutube />
          </a>
          <a  className="text-white p-2 rounded-[8px] bg-amber-600 hover:text-black text-2xl">
            <FaTelegram />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-6">
       
        <p className="mt-2">
          Ishlab chiqish va reklama:{" "}
          <a  className="text-red-500 hover:underline">Muxriddin.ads</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
