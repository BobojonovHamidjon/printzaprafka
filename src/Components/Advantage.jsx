import { FaShippingFast, FaPrint, FaShieldAlt, FaHeadset } from "react-icons/fa";

const Advantages = () => {
  return (
    <section className="container mx-auto  py-16 px-4 text-center">
      <p className="text-gray-600 text-sm mb-2">
        Mijozlarimiz bizning xizmatlar sifatidan mamnun
        
      </p>
      <div className="flex items-center justify-center space-x-1 text-orange-500 text-lg mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
        <span className="text-gray-700 text-sm ml-2">4.8 / 5 (250 sharh)</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900">
        Bizning <span className="text-orange-500">Afzalliklarimiz</span>
      </h2>
      <div className="flex flex-wrap justify-center items-center mt-10">
    
        <div className="w-full ml-0.1 md:w-1/3 flex flex-col space-y-8 text-left order-1 md:order-none">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500 ml-25 text-white p-4 rounded-xl">
              <FaShippingFast size={30} />
            </div>
            
          </div>
          <div>
              <h3 className="font-semibold  ml-25 text-lg">Tezkor Yetkazib Berish</h3>
              <p className="text-gray-500 ml-25 text-sm">
                Buyurtmalaringizni ishonch bilan  <br />topshirishingiz mumkin.
              </p>
            </div>
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500 ml-25 text-white p-4 rounded-xl">
              <FaPrint size={30} />
            </div>
           
          </div>
          <div>
              <h3 className="font-semibold ml-25 text-lg">Katridj To'ldirish</h3>
              <p className="text-gray-500 ml-25 text-sm">
                Maksimal tezkor va sifatli xizmat.
              </p>
            </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center order-2 md:order-none">
          <img
            src="https://printzapravka.uz/wp-content/uploads/2025/03/f1a45bdc-cf14-40ab-a6f6-088aee1199fa_removalai_preview.png"
            alt="Printer"
            className="w-full max-w-xs"
          />
        </div>

   
        <div className="w-full md:w-1/3 flex flex-col space-y-8 text-left order-3 md:order-none">
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500 ml-20 text-white p-4 rounded-xl">
              <FaShieldAlt size={30} />
            </div>
           
          </div>
          <div>
              <h3 className="font-semibold  ml-20 text-lg">Mahsulot Kafolati</h3>
              <p className="text-gray-500   ml-20 text-sm">
                Faqat original katrijlar va  <br />tonerlar ishlatiladi.
              </p>
            </div>
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500  ml-20 text-white p-4 rounded-xl">
              <FaHeadset size={30} />
            </div>
            
          </div>
          <div>
              <h3 className="font-semibold  ml-20 text-lg">Tezkor Qo‘llab-quvvatlash</h3>
              <p className="text-gray-500   ml-20 text-sm">
                Muammolarni tezkor hal qilish va  <br />xizmat ko‘rsatish.
              </p>
            </div>
        </div>
      </div>
      <p className="mt-10 text-gray-600">Sifat, tezlik va qulay narxlar - biz siz uchun ishlaymiz!</p>
    </section>
  );
};

export default Advantages;