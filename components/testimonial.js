import { useEffect } from "react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "./global/section-title";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft, MdOutlineNavigateNext } from "react-icons/md";
import { getObjectActions } from "../apollo/actions";
import { useState } from 'react';

const Testimonial = () => {

  const [getObjectsEvents] = getObjectActions["useGetClubs"]();
  const [dataClub, setDataClub] = useState([]);

  useEffect(() => {
    const getClubs = async () => {
      const { data } = await getObjectsEvents();
      return setDataClub(data);
      
    };
    getClubs();
  }, []);

  function renderStarIcons(rate) {
    const starIcons = [];
    console.log(rate);
    for (let i = 0; i < rate; i++) {
     starIcons.push(<FaStar key={i} />);
    }
    return starIcons;
  }
  
  Object.values(dataClub).map((item) => (item?.map((club) => console.log(club.rate))));  

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
          {
            Object.values(dataClub).map((item) => (item.map((club) => 
              club.rate >= 4 && (
             <SwiperSlide>
            <div className="testimonial__item">
              <p className="user__description">
                {club.description}
              </p>
              <div className="user">
                <div className="user__image">
                  <img
                    className="img-fluid"
                    src = {club.clubImage}
                    alt="user 01"
                  />
                </div>
                <div className="user__info">
                  <h5 className="user__info--name">{club.clubname}</h5>
                  <p className="user__info--title">{club.university.universityName}</p>
                </div>
              </div>
              <div className="user__rating">{renderStarIcons(club.rate)}</div>              
            </div>
          </SwiperSlide>
          )
          )))
        }
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
