import React from "react";
import { Layout } from "../../Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Herosection from "./Herosection";

export const Home = () => {
  // Category Menu Data
  const categoryMenu = [
    {
      name: "Grocery",
      imageUrl:
        "https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
    },
    {
      name: "Mobiles",
      imageUrl:
        "https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
    },
    {
      name: "Fashion",
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/224/224/image/0d75b34f7d8fbcb3.png?q=100",
    },
    {
      name: "Electronics",
      imageUrl:
        "https://rukminim2.flixcart.com/flap/224/224/image/69c6589653afdb9a.png?q=100",
    },
    {
      name: "Home & Furniture",
      imageUrl:
        "https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
    },
    {
      name: "Appliances",
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
    },
    {
      name: "Flight Booking",
      imageUrl:
        "https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
    },
    {
      name: "Toys, Beauty & More",
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/224/224/image/dff3f7adcf3a90c6.png?q=100",
    },
    {
      name: "Two Wheelers",
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
    },
  ];

  const swiperItems = [
    {
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/1316eb53d6f52c71.jpg",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/a4cec1601ff88602.jpg",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/ee8b408021c6dfa5.jpg",
    },
    {
      imageUrl:
        "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/e6dc4b4c88912592.jpg",
    },
  ];

  return (
    <Layout>
      <article>
        <section>
          <div className="bg-white my-2 overflow-x-auto scroll-smooth  flex items-center  justify-start gap-6 md:w-11/12 w-full mx-auto shadow-lg rounded-lg py-2 px-2">
            {categoryMenu.map((item, index) => (
              <div key={item.name}>
                {" "}
                {/* Use a unique identifier if possible */}
                {/* Slide Card */}
                <div className="flex flex-col items-center justify-center cursor-pointer hover:shadow-xl bg-white border rounded-lg p-3 my-4 md:w-[120px] md:h-[150px] w-[100px] h-[120px] hover:scale-105 duration-200">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    title={item.name}
                    className="md:w-[70px] md:h-[70px] w-[60px] aspect-square object-contain"
                  />
                  <small className="mt-2 text-center text-sm">
                    {item.name}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* Hero Section */}
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-11/12 mx-auto rounded-lg my-2"
        >
          {swiperItems.map((items, indx) => {
            return (
              <SwiperSlide key={indx} className="w-full cursor-pointer">
                <img src={items.imageUrl} alt="" className="w-full" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/*Hero Section */}
      <section className="w-11/12 mx-auto">
        <Herosection />
      </section>
    </Layout>
  );
};
