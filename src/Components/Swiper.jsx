import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const BrandSwiper = () => {
  const brands = [
    { name: "Kyocera", img: "https://printzapravka.uz/wp-content/uploads/2025/03/2-3.png" },
    { name: "Samsung", img: "https://printzapravka.uz/wp-content/uploads/2025/03/7.png" },
    { name: "HP", img: "https://printzapravka.uz/wp-content/uploads/2025/03/7.png" },
    { name: "Epson", img: "https://printzapravka.uz/wp-content/uploads/2025/03/5-2.png" },
    { name: "Xerox", img: "https://printzapravka.uz/wp-content/uploads/2025/03/6.png" },
    { name: "Hp", img: "https://printzapravka.uz/wp-content/uploads/2025/03/4-3.png" },
    { name: "Xerox", img: "https://printzapravka.uz/wp-content/uploads/2025/03/3-3.png" },
  ];

  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="w-full max-w-[1200px] bg-gray-100 shadow-lg rounded-2xl p-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
         
          loop
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 }, 
            640: { slidesPerView: 3, spaceBetween: 15 }, 
            1024: { slidesPerView: 4, spaceBetween: 20 }, 
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <img src={brand.img} alt={brand.name} className="w-32 h-32 object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSwiper;
