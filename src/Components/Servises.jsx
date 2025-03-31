import React from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const services = [
  { title: "Professional ta’mirlash", description: "Biz nosozliklarni tezda bartaraf qilamiz va uskunangizning ishlash muddatini uzaytiramiz", image: "https://printzapravka.uz/wp-content/uploads/2025/03/Untitled-design-1.png" },
  { title: "Noutbuk ta’mirlash", description: "Biz har qanday nosozliklarni tezda bartaraf qilamiz va unumdorlikni tiklaymiz", image: "https://printzapravka.uz/wp-content/uploads/2025/03/3.png" },
  { title: "Shredderni ta’mirlash", description: "To’g’ri ishlashi uchun tozalash, moylash, ta’mirlash", image: "https://printzapravka.uz/wp-content/uploads/2025/03/5.png" },
  { title: "Termal printerni ta’mirlash", description: "Bosilgan elektron yig’ma-larni professional tiklash va diagnostika qilish", image: "https://printzapravka.uz/wp-content/uploads/2025/03/4.png" },
  { title: "Plotterni ta'mirlash", description: "Biz bosib chiqarish xatolarini tuzatamiz, ehtiyot qismlarni almashtiramiz, xizmat muddatini uzaytiramiz", image: "https://printzapravka.uz/wp-content/uploads/2025/03/2.png" },
  { title: "Kompyuterni ta'mirlash", description: "Xizmatlarning to'liq spektri: diagnostikadan modernizatsiyagacha", image: "https://printzapravka.uz/wp-content/uploads/2025/03/Untitled-design.png" },
];

function Services() {
  return (
    <div className="bg-white text-black py-12 px-4 sm:px-6 rounded-b-[50px]">
      <h2 className="text-3xl font-bold text-center">Bizning Xizmatlar</h2>
      <p className="text-center text-gray-600 mb-8">Ofis jihozlarini professional ta'mirlash</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-gray-100 p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-4"
          >
      
            <div className="order-2 md:order-1 w-full md:w-1/2">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <button className="mt-4 cursor-pointer w-56 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition py-2">
              <MdOutlinePhoneInTalk className="text-xl" />
              <span>Buyurtma</span>
                  </button>

            </div>
            <div className="order-1 md:order-2 w-full md:w-1/2">
              <img src={service.image} alt={service.title} className="w-full h-auto object-contain rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
