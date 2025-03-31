import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="bg-gray-100 p-6 rounded-2xl shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8">
  
    <div className="flex mt-20 flex-col justify-between">
      <div>
        <div className="flex items-center space-x-3">
          <span className="bg-orange-300 text-2xl text-black p-3 rounded-full">
            <FaPhone />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Kontakt <span className="text-orange-500">Ma’lumot</span>.
          </h2>
        </div>
        <p className="text-gray-600 mt-4 sm:mt-6 ml-2 sm:ml-6">
          Qo‘shimcha ma’lumot olish uchun <br /> biz bilan bog‘laning.
        </p>
        <div className="mt-6 sm:mt-10 cursor-pointer ml-2 sm:ml-6 space-y-3 text-gray-700">
          <p className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-orange-500 text-xl sm:text-2xl" />
            <span className="hover:text-red-500 text-lg sm:text-xl">
              Sirg‘ali tumani, Nomdonak mahallasi, Fayzli ko‘chasi, <br /> 11-uy
            </span>
          </p>
          <p className="flex items-center space-x-2">
            <FaEnvelope className="text-orange-500 text-xl sm:text-2xl" />
            <span className="hover:text-red-500 text-lg sm:text-xl max-w-full break-all">
              tafakkurxizmatsamarasimchj@gmail.com
            </span>
          </p>
          <p className="flex items-center space-x-2">
            <FaPhone className="text-orange-500 text-xl sm:text-2xl" />
            <span className="hover:text-red-500 text-lg sm:text-xl">+998 94 051 14 94</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaTelegramPlane className="text-orange-500 text-xl sm:text-2xl" />
            <span className="hover:text-red-500 text-lg sm:text-xl">Telegram</span>
          </p>
        </div>
      </div>
    </div>

   
    <div className="p-4 bg-white rounded-xl shadow-md">
      <div className="w-full h-[250px] sm:h-80 md:h-96 rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://yandex.uz/map-widget/v1/?um=constructor%3Ae9a6e07e8dfe2f62c6c2d7ebad2d92b1f6a5dbb4be7f7160cbfa739c0b77153d&amp;source=constructor"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
