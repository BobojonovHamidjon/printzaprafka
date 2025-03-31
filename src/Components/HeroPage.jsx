import React from "react";
import { PhoneCall } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

function HeroPage() {
  return (
    <div className="bg-[#1E2126] text-white rounded-b-[50px] md:rounded-b-[80px] overflow-hidden">
      
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <img
          src="https://printzapravka.uz/wp-content/uploads/2025/03/logo-1024x403.png"
          alt="Logo"
          className="w-52 cursor-pointer"
        />
        
        <button className="hidden cursor-pointer md:flex bg-white text-black rounded-full w-12 h-12 items-center justify-center shadow-lg border border-gray-300 transition-transform duration-200 hover:scale-105">
          <FaPhoneAlt size={20} />
        </button>
      </header>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 p-6 min-h-[80vh]">
      
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Toshkentda Kartridj <br />
            <span className="text-orange-500">To’ldirish</span>
          </h1>
          <p className="mt-4 text-gray-300">
            Patronlarni ta’mirlash va to’ldirish. Uyingizga yoki ofisingizga texnik 
            xodimni tezda jo’natish!
          </p>
          <div className="flex items-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              
              <img src="/quality-icon.png" alt="Quality" className="w-6 h-6" />
              <span>Tez va yuqori sifat</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/guarantee-icon.png" alt="Guarantee" className="w-6 h-6" />
              <span>Xizmat kafolati</span>
            </div>
          </div>
          <button className="mt-6 cursor-pointer w-56 flex items-center justify-center gap-2 
  bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold 
  rounded-lg transition-all duration-300 py-3 shadow-lg 
  hover:from-yellow-500 hover:to-orange-600 hover:scale-105">
  <PhoneCall size={20} />
  <span>+998 94 051 14 94</span>
</button>


        </div>


        <div className="flex-1 flex justify-center relative">
          <div className="bg-no-repeat bg-left absolute max-w-6xl mx-auto overflow-hidden inset-0 bg-[url('https://printzapravka.uz/wp-content/uploads/2025/03/squere-03.png')] bg-cover opacity-10 flex-1 flex h-[500px] justify-center z-10"></div>
          <img
            src="https://printzapravka.uz/wp-content/uploads/2025/03/f1a45bdc-cf14-40ab-a6f6-088aee1199fa_removalai_preview.png"
            alt="Printer"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
