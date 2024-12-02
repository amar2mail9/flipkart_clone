import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Herosection() {
  const fashion = [
    {
      image:
        "https://rukminim2.flixcart.com/image/170/170/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=80",
      name: " U.S. Polo Assn., Highlander lorem",
      off: "Min. 40% off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/210/210/k2z1t3k0/jacket/z/v/x/m-9298233-mast-harbour-original-imafm78vbfvdzph7.jpeg?q=80",
      name: " U.S. Polo Assn., Highlander lorem",
      off: "Min. 40% off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/210/210/xif0q/bra/1/7/e/lightly-padded-34e-regular-no-regular-br1804x01-clovia-original-imagg9ja3fadhyfh.jpeg?q=80",
      name: " U.S. Polo Assn., Highlander lorem",
      off: "Min. 40% off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/170/170/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=80",
      name: " U.S. Polo Assn., Highlander lorem",
      off: "Min. 40% off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/170/170/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=80",
      name: " U.S. Polo Assn., Highlander lorem",
      off: "Min. 40% off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/170/170/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=80",
      name: " U.S. Polo Assn., Highlander lorem",
      off: "Min. 40% off",
    },
    {
      image:
        "https://rukminim2.flixcart.com/image/170/170/kb9ou4w0/shoe/j/g/6/11391306-40-u-s-polo-assn-white-original-imafsnetwnyzu8x2.jpeg?q=80",
      name: " U.S. Polo Assn., Highlander lorem",
      off: "Min. 40% off",
    },
  ];

  const winterSpecial = [
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6cedc794ff7bf627.jpg?q=20",
    },
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6cedc794ff7bf627.jpg?q=20",
    },
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6cedc794ff7bf627.jpg?q=20",
    },
  ];

  const smartPhone = [
    {
      image:
        "https://rukminim1.flixcart.com/image/170/170/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=80",
      title: "Samsung Galaxy S23 FE 5G",
      price: 1000,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/170/170/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=80",
      title: "Samsung Galaxy S23 FE 5G",
      price: 1000,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/170/170/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=80",
      title: "Samsung Galaxy S23 FE 5G",
      price: 1000,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/170/170/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=80",
      title: "Samsung Galaxy S23 FE 5G",
      price: 1000,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/170/170/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=80",
      title: "Samsung Galaxy S23 FE 5G",
      price: 1000,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/170/170/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=80",
      title: "Samsung Galaxy S23 FE 5G",
      price: 1000,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/170/170/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=80",
      title: "Samsung Galaxy S23 FE 5G",
      price: 1000,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/170/170/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=80",
      title: "Samsung Galaxy S23 FE 5G",
      price: 1000,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/170/170/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=80",
      title: "Samsung Galaxy S23 FE 5G",
      price: 1000,
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/170/170/xif0q/mobile/b/o/j/-original-imagztn8vv8htmyx.jpeg?q=80",
      title: "Samsung Galaxy S23 FE 5G",
      price: 1000,
    },
  ];
  return (
    <>
      <article className="">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Fashion Best Sellers */}
          <section className="p-4 w-full lg:w-[80%] my-2 rounded-lg bg-white">
            {/* Heading */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg md:text-2xl font-semibold text-gray-700">
                Fashion Best Sellers
              </h2>
              <Link className="text-blue-700 text-xl md:text-2xl hover:text-3xl duration-200 ">
                <IoIosArrowDroprightCircle />
              </Link>
            </div>

            {/* Swiper Section */}
            <Swiper
              slidesPerView={2} // Default for mobile
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 40,
                },
              }}
            >
              {fashion.map((items, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center p-2 border rounded-lg shadow-md cursor-pointer w-fit">
                    <img
                      src={items.image}
                      alt={items.name}
                      className="rounded-md  w-full h-fit hover:scale-105"
                    />
                    <h3 className="text-xs text-center mt-2">
                      {items.name.length > 28
                        ? `${items.name.slice(0, 28)}...`
                        : items.name}
                    </h3>
                    <b className="text-sm mt-1">{items.off}</b>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* Promotional Image */}
          <div className="w-full hidden lg:flex lg:w-[20%] items-center h-[200px] sm:h-[320px]">
            <img
              src="https://rukminim2.flixcart.com/www/270/410/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg"
              alt="Promo"
              className="w-11/12 mx-auto h-full object-cover rounded-md"
            />
          </div>
        </div>
      </article>

      {/* Best Deals on smartphone */}

      <section className="p-4 bg-white shadow-md rounded-lg">
        {/* Heading Section  */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-700">
            Best Deals on smartphone
          </h2>
          <Link className="text-blue-700 text-xl md:text-2xl hover:text-3xl duration-200 ">
            <IoIosArrowDroprightCircle />
          </Link>
        </div>

        {/* smart Phone Contents */}
        <Swiper
          slidesPerView={2} // Default for mobile
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
        >
          {smartPhone.map((items, indx) => {
            return (
              <SwiperSlide>
                <div className="border hover:shadow-lg  cursor-pointer rounded-lg bg-white p-2 w-fit flex items-center justify-center  flex-col">
                  <img
                    src={items.image}
                    alt=""
                    className="hover:scale-105 hover:shadow-lg duration-200"
                  />
                  <h3 className="lg:block hidden text-[13px] text-gray-600 ">
                    {items.title}
                  </h3>
                  <h3 className="lg:hidden block text-[13px] text-gray-600">
                    {items.title.length > 20
                      ? `${items.title.slice(0, 20)}...`
                      : items.title}
                  </h3>
                  <h4 className="text-sm font-[600] text-slate-700">
                    Just ${items.price}
                  </h4>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/* Special Winter Offers */}

      <section className="grid lg:grid-cols-3 my-2 sm:grid-cols-2 grid-cols-1  gap-4 ">
        {winterSpecial.map((items, indx) => {
          return (
            <div className="">
              <Link className="">
                <img
                  src={items.image}
                  className="rounded-md shadow-md hover:scale-105 duration-200"
                />
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}
