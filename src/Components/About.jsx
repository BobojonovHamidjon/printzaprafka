const About = () => {
    return (
      <section className="bg-[#1E2126] text-white p-16  rounded-b-[80px] relative overflow-hidden  py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Biz <span className="text-orange-500">Haqimizda</span>.
          </h2>
          <p className="text-gray-400">
            Professional printer va katrij ta’mirlash, to‘ldirish xizmati kafolat bilan.
          </p>
        </div>
  
        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Biz Kimmiz?</h3>
            <p className="text-gray-300 leading-loose">
              Biz – zamonaviy va tez rivojlanayotgan kompaniyamiz. Printer va ofis
              texnikalariga xizmat ko‘rsatish bo‘yicha professional jamoamiz bor. 
              Katrijlarni to‘ldirish, ta’mirlash va texnik xizmat ko‘rsatamiz.   
            </p>
          </div>
  
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Bizning Yondashuvimiz</h3>
            <p className="text-gray-300 leading-loose">
              Mijozlarimiz uchun ishonchli va sifatli xizmat ko‘rsatish bizning ustuvor
           
              maqsadimizdir. Zamonaviy texnologiyalar va faqat sinovdan o‘tgan 
          
              materiallardan foydalanamiz.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  