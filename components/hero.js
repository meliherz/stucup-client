import React, { useEffect } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { BiLoader } from "react-icons/bi";
import { MdOutlineEvent } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="hero bg-image"
      style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
    >
      <div className="hero__wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10 text-center">
              <h2 className="hero__title">
              Keşfet, Öğren, Sosyalleş !
              </h2>
              <p className="hero__description mt-4">
              Türkiye'nin dört bir yanından üniversite etkinliklerinin buluşma noktasındasınız. İstediğiniz etkinliğe kolayca katılın ve deneyimleyin. Her üniversiteyle ilgili haberler sizinle olsun
              </p>
              <div className=" hero__button mt-5">
                <button
                  onClick={() => {
                    const myId = document.getElementById("upcoming-events");
                    myId.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {" "}
                  <BiLoader /> Yaklaşan Etkinlikler
                </button>
                <button
                  onClick={() => {
                    const myId = document.getElementById("testimonial");
                    myId.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {" "}
                  <FaRegLightbulb /> Ayın En İyi Kulüpleri
                </button>
                <Link href="/events">
                  <button>
                    {" "}
                    <MdOutlineEvent /> Bütün Etkinlikler
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
