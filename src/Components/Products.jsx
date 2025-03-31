import React from "react";

const Products = () => {
  return (
    <section className="bg-[#1E2126] text-white  min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* Chap tomondagi matn qismi (sticky) */}
        <div className="lg:w-[400px] lg:sticky lg:top-0  p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 lg:h-screen flex flex-col justify-center bg-[#1E2126] z-10">
          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-base sm:text-lg">Ishonchlik va sifat</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-2">
              Kartrijlarni <br /> To'ldirish
              <span className="text-orange-500">.</span>
            </h1>
          </div>

          {/* Kartochka */}
          <div className="flex flex-col lg:flex-row bg-gray-800/50 backdrop-blur-sm text-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl">
            <div className="relative flex-shrink-0 mx-auto lg:mx-0 mb-4 lg:mb-0">
              <div className="w-[70px] sm:w-[80px] h-[100px] sm:h-[120px] flex items-center justify-center bg-gray-700/70 rounded-lg">
                <div className="p-[18px_19px_10px_19px] bg-gradient-to-b from-[var(--e-global-color-accent)] to-[#C43A13] rounded-full relative w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center">
                  <div className="absolute top-[30px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-white rounded-full w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center">
                    ✔
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:ml-5 text-center lg:text-left">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                Kartrijlar va printerlarni to'ldirish va sotish
              </h2>
              <p className="text-gray-300 mt-2 text-xs sm:text-sm">
                Raqobatbardosh narxlarda yuqori sifatli to'ldirishlar, yangi kartridjlar va ishonchli printerlar.
              </p>
            </div>
          </div>

          <hr className="border-gray-700" />

          <a
            href="tel:+998940511494"
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm sm:text-base font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 block text-center transform hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-orange-500/20"
          >
            Narxini bilib oling
          </a>
        </div>

        {/* O'ng tomondagi qism */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
  <div className="group bg-[url('https://printzapravka.uz/wp-content/uploads/2025/03/squere-03.png')] bg-cover bg-center bg-fixed relative z-10 p-6 rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-300 ease-out">
    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] group-hover:bg-black/30 transition-colors duration-300"></div>
    
    {[ 
      {
        img: "https://printzapravka.uz/wp-content/uploads/2025/03/2ff34dac-ffaf-45e2-b345-70f20976a49e_removalai_preview.png",
        title: "Monoxrom kartridjlarni to'ldirish",
        desc: "Ortiqcha to'lovlarsiz aniq chop etish",
      },
      {
        img: "https://printzapravka.uz/wp-content/uploads/2025/03/bc0c67e6-0b00-440a-ab92-9a4d82495de9_removalai_preview.png",
        title: "Rangli lazer kartridjlarini to'ldirish",
        desc: "Yorqin ranglar va ishonchli sifat",
      },
      {
        img: "https://printzapravka.uz/wp-content/uploads/2025/03/8bd0280f-aa1d-4a0e-8ff8-ac13c38233fa_removalai_preview.png",
        title: "Inkjet rangli kartridjlarni to'ldirish",
        desc: "Juicy soyalar va bosib chiqarishda tejash",
      },
      {
        img: "https://printzapravka.uz/wp-content/uploads/2025/03/ec1072de-582c-4b57-86dd-1e2beca66fee_removalai_preview.png",
        title: "Yangi patronlarni sotish",
        desc: "Raqobatbardosh narxlarda original va mos modellar",
      },
      {
        img: "https://printzapravka.uz/wp-content/uploads/2025/03/b187f6d1-d5ae-4776-af8a-0d0cd6c2fe43_removalai_preview.png",
        title: "Epson, Canon, HP printerlarini sotish",
        desc: "Sizning ehtiyojlaringiz uchun ideal qurilmani tanlaymiz",
      }
    ].map((product, index) => (
      <div key={index} className="text-white relative z-20 mt-6">
        <div className="flex justify-center mb-4">
          <img
            src={product.img}
            alt={product.title}
            className="w-[500px] h-[400px] max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-300 ease-out"
          />
        </div>

        <div className="text-center">
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold flex items-center justify-center gap-2">
            <span className="text-orange-500 animate-pulse">●</span>
            {product.title}
          </h2>
          <p className="text-gray-300 mt-2 text-sm lg:text-base">{product.desc}</p>
        </div>

        <div className="mt-4 sm:mt-6 flex justify-center">
          <a
            href="tel:+998940511494"
            className="px-4 sm:px-5 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm sm:text-base rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 transform hover:scale-[1.05] active:scale-[0.98]"
          >
            Narxini bilib oling
          </a>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
};

export default Products;
