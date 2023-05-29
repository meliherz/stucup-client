import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "./global/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineNavigateNext } from "react-icons/md";

const Testimonial = () => {
  return (
    <div className="testimonial section-padding">
      <div className="container position-relative">
        <div className="row">
            <div className="col-10 col-md-8">
            <SectionTitle title="Ayın En'leri" position="left"/>
            </div>
        </div>
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          pagination={{ clickable: true }}
          //   autoplay
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="testimonial__item">
              <p className="user__description">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
             
              </p>
              <div className="user">
                <div className="user__image">
                  <img
                    className="img-fluid"
                    src="images/user1.jpg"
                    alt="user 01"
                  />
                </div>
                <div className="user__info">
                  <h5 className="user__info--name">Mark Tony</h5>
                  <p className="user__info--title">Software Developer</p>
                </div>
              </div>
              <div className="user__rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="prev">
          <MdOutlineKeyboardArrowLeft />
        </div>
        <div className="next">
          <MdOutlineNavigateNext />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
