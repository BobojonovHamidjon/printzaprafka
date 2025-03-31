import React from "react";

const testimonials = [
  {
    name: "Xurshid Ergashov",
    role: "IT-mutaxassis",
    text: "Kompaniya kartridjimni to'ldirishda juda yaxshi ish qildi va endi mening printerim yangidek ishlaydi! Xizmat tez, sifatli va hamyonbop. Sifat va xizmatdan juda mamnunman!",
    image: "https://printzapravka.uz/wp-content/uploads/2025/03/xurshid-300x300.jpg",
  },
  {
    name: "Irina Andreevna",
    role: "Tadbirkor",
    text: "Bu erda kartridjlarni to'ldirish qulay va foydali! To'ldirgandan so'ng, printerim yaxshi ishlay boshladi va bosib chiqarish sifati sezilarli darajada yaxshilandi. Tez va sifatli xizmat uchun rahmat!",
    image: "https://printzapravka.uz/wp-content/uploads/2025/03/irina-300x300.webp",
  },
  {
    name: "Temur Jablonov",
    role: "Kompaniya direktori",
    text: "Ushbu kompaniya yordamida mening printerim yana yangidek ishlaydi! Yigitlar nafaqat jihozlarni tuzatibgina qolmay, balki texnik xizmat ko‘rsatish bo‘yicha ham foydali maslahatlar berishdi. Ushbu sayt bilan bog'langanimdan juda xursandman!",
    image: "https://printzapravka.uz/wp-content/uploads/2025/03/timur-150x150.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#1E2126] mt-10 text-white p-10 rounded-b-[80px] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Mijozlarimiz Fikri</h2>
        <p className="text-gray-400 mb-8">Mijozlar fikri - bizning xizmatlarimiz sifati uchun eng yaxshi ko‘rsatkich!</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-gray-700 p-6 rounded-2xl text-center shadow-lg ${
              index !== 0 ? "hidden md:block" : ""
            }`}
          >
            <p className="text-gray-400 leading-loose mb-4">{testimonial.text}</p>
            <div className="flex items-center justify-center mt-4">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3" />
              <div>
                <h3 className="font-semibold text-white">{testimonial.name}</h3>
                <p className="text-orange-300 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
