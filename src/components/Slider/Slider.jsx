import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";

import "swiper/css";
import "./Slider.scss";

const Slider = () => {
  const isDesktop = useIsDesktop();

  const items = [
    {
      id: 1,
      image: slider1,
      title: "Sit amet ante",
      text: "Diam id lacinia ullamcorper, ipsum nibh lobortis nibh, a eleifend elit enim non enim.",
    },
    {
      id: 2,
      image: slider2,
      title: "Quisque maximus",
      text: "Phasellus hendrerit sapien vel magna congue fringilla. Phasellus finibus arcu sit amet nibh faucibus.",
    },
    {
      id: 3,
      image: slider3,
      title: "Nunc in malesuada",
      text: "Ut vitae massa dignissim, tempor dui eget, suscipit neque. Aliquam erat volutpat.",
    },
  ];

  return (
    <section className="slider">
      <div className="slider__container container">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={isDesktop ? 3 : 1}
          spaceBetween={isDesktop ? 50 : 0}
          loop={true}
          speed={500}
          watchSlidesProgress={true}
          loopPreventsSliding={false}
          navigation={{
            prevEl: ".slider-prev",
            nextEl: ".slider-next",
            disabledClass: "swiper-button-disabled",
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          className="mySwiper"
        >
          {[...items, ...items].map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <div className="slide">
                <img
                  src={item.image}
                  alt={item.title}
                  className="slide__image"
                />
                <div className="slide__texts">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="buttons">
            <button
              className="nav-button slider-prev"
              aria-label="Previous slide"
            >
              <img src={leftArrow} alt="Left arrow" />
            </button>

            <button className="nav-button slider-next" aria-label="Next slide">
              <img src={rightArrow} alt="Right arrow" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
