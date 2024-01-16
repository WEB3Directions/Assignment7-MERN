import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Data = [
  {
    description: "Lady with a red umbrella",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9oChLgIzks2E5z0sjMLvnIdkh949Easajg&usqp=CAU"
  },
  {
    description: "Flowers and some fruits",
    image: "https://previews.123rf.com/images/zelmabrezinska/zelmabrezinska2303/zelmabrezinska230301451/201200048-blank-advertising-billboard-with-the-tropical-beach-landscape-during-sunset-generative-ai.jpg"
  },
  {
    description: "Beautiful scenery",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9oChLgIzks2E5z0sjMLvnIdkh949Easajg&usqp=CAU"
  },
]

function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {Data.map((result, index) => (
          <SwiperSlide key={index}>
            <img src={result.image} alt={result.description} />
            {result.description}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;
