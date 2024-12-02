import React, { useState } from "react";
import { AiTwotoneShop } from "react-icons/ai";
import { BiSolidCoupon, BiSolidOffer } from "react-icons/bi";
import {
  BsBoxSeam,
  BsFillBellFill,
  BsFillLightningChargeFill,
  BsGraphUpArrow,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import {
  FaArrowDown,
  FaHeart,
  FaRegCircleUser,
  FaRegHeart,
  FaRegUser,
  FaUser,
} from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { GoGift } from "react-icons/go";
import {
  IoIosNotificationsOutline,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import {
  IoBagSharp,
  IoGridSharp,
  IoLanguageOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineCardGiftcard, MdOutlineHelp } from "react-icons/md";
import { PiBoxArrowUpFill } from "react-icons/pi";
import {
  RiCustomerService2Fill,
  RiMenu4Fill,
  RiMenu5Fill,
  RiMobileDownloadLine,
} from "react-icons/ri";
import { TiPlusOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Navbar() {
  // menu for

  const menuItems = [
    {
      icons: <IoIosNotificationsOutline />,
      name: "Notifications Preference",
    },
    {
      name: "24x7 Customers Care",
      icons: <RiCustomerService2Fill />,
    },
    {
      name: "Gifts",
      icons: <BsGraphUpArrow />,
    },
    {
      name: "Download App",
      icons: <FaArrowDown />,
    },
  ];

  // User Profile menu
  const userProfileMenu = [
    {
      name: "My Profile",
      icons: <CgProfile />,
    },
    {
      name: "Flipkart Plus Zone",
      icons: <TiPlusOutline />,
    },
    {
      name: "Order",
      icons: <BsBoxSeam />,
    },
    {
      name: "Wishlist",
      icons: <FaRegHeart />,
    },
    {
      name: "Rewards",
      icons: <GoGift />,
    },
    {
      name: "Gifts Cards",
      icons: <MdOutlineCardGiftcard />,
    },
  ];

  // small screen Menu Items
  const smallScreenMenu = [
    {
      name: "SuperCoin Zone",
      icons: (
        <BsFillLightningChargeFill className="bg-gray-700 p-1 w-5 h-5 rounded-full text-white" />
      ),
    },
    {
      name: "Flipkart Plus Zone",
      icons: <TiPlusOutline className="text-xl  " />,
    },
    {
      name: "All Categories",
      icons: <IoGridSharp className="text-xl text-gray-700 " />,
    },
    {
      name: "More on Flipkart",
      icons: (
        <BsGrid3X3GapFill className="bg-gray-700 text-xl p-[3px]  rounded-full text-white" />
      ),
    },
    {
      name: "Choose Language",
      icons: <IoLanguageOutline className="text-xl text-gray-700 " />,
    },
    {
      name: "Offer Zone",
      icons: <BiSolidOffer className="text-xl" />,
    },
    {
      name: "Sell on Flipkart",
      icons: <IoBagSharp className="text-xl" />,
    },
    {
      name: "My Orders",
      icons: <PiBoxArrowUpFill className="text-xl text-gray-700 " />,
    },
    {
      name: "Coupons",
      icons: <BiSolidCoupon className="text-xl" />,
    },
    {
      name: "My Cart",
      icons: <LuShoppingCart className="text-xl" />,
    },
    {
      name: "My Wishlist",
      icons: <FaHeart className="text-xl" />,
    },
    {
      name: "My Account",
      icons: <FaUser className="text-xl" />,
    },
    {
      name: "My Notifications",
      icons: <BsFillBellFill className="text-xl" />,
    },
    {
      name: "Help Centre",
      icons: <MdOutlineHelp className="text-xl" />,
    },
    {
      name: " Legal",
    },
  ];
  // user Login Section
  const [userDrop, setUserDrop] = useState(false);
  const handleUserLogin = () => {
    setUserDrop(!userDrop);
    setMenu(false);
  };

  //   Menu Section
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    setUserDrop(false);
  };

  // search section
  const [showSearchBox, setShowSearchBox] = useState(false);
  const handleOnSearch = () => {
    setShowSearchBox(!showSearchBox);
    setShowMenuSmallScreen(false);
  };

  // small menu icons
  const [showMenuSmallScreen, setShowMenuSmallScreen] = useState(false);

  const handleShowMenuSmallScreen = () => {
    setShowMenuSmallScreen(!showMenuSmallScreen);
    setShowSearchBox(false);
  };
  // Return
  return (
    <>
      <header className="bg-white p-3 w-full sticky top-0 ">
        <nav className="flex gap-6 items-center justify-between lg:w-11/12 w-full px-6 mx-auto ">
          <div className="flex items-center ">
            {/* Small screen Menu icons */}
            <button
              onClick={handleShowMenuSmallScreen}
              className="w-10 h-10 hover:bg-[#2A55E5] lg:hidden  flex items-center justify-center hover:text-white rounded-lg  text-2xl"
            >
              <RiMenu5Fill />
            </button>
            {/* logo section */}
            <img
              className="block md:w-40 w-24"
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt="Flipkart_Clone"
              title="Flipkart_Clone"
            />
          </div>

          {/* Search Box */}

          <div className="w-6/12 mx-auto md:flex hidden   items-center h-10">
            <IoSearchOutline className="  bg-[#F0F5FF] rounded-l-md text-gray-500 h-8 border-r-2 w-8 p-1" />
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search For Products, Brands and More"
              className="bg-[#F0F5FF] outline-none w-full h-8 rounded-r-md px-4 "
            />
          </div>

          <div className=" items-center lg:flex hidden ">
            {/* Login Icons */}
            <div className="relative">
              <Link
                onClick={handleUserLogin}
                className="flex   cursor-pointer items-center gap-3  font-normal text-gray-600 hover:bg-[#2A55E5] hover:text-white duration-300 px-4 py-2 rounded-lg"
              >
                <FaRegCircleUser className="text-xl" />
                <span htmlFor="login" className="text-lg  ">
                  Login
                </span>
                {!userDrop ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}

                {/* DropDown */}
              </Link>
              {userDrop && (
                <div className="bg-white  absolute w-[300px]  top-14 rounded-b-lg py-2 shadow-md   left-0 ">
                  <div className="flex items-center justify-between px-4  ">
                    <span className="text-gray-500">New Customer ?</span>
                    <Link className="text-indigo-800 font-semibold text-sm">
                      SignUp
                    </Link>
                  </div>
                  <hr className="my-2" />
                  <div className="px-4 gap-3 text-[1rem] flex flex-col text-gray-600">
                    {userProfileMenu.map((items, index) => {
                      return (
                        <Link className="flex gap-2 items-center">
                          {items.icons}
                          <small htmlFor="myProfile">{items.name}</small>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Cart */}
            <div className=" relative flex px-4 items-center gap-3  font-normal text-gray-600 cursor-pointer">
              <FiShoppingCart className="text-xl" />

              <span htmlFor="Cart">Cart</span>
            </div>

            {/* Become a Seller */}
            <div className="flex items-center gap-3  px-2  font-normal text-gray-600 cursor-pointer">
              <AiTwotoneShop className="text-xl" />
              <span htmlFor="Become_A_Seller">Become a Seller</span>
            </div>

            {/* Menu Icons */}
            <div className="relative">
              <button
                onClick={handleMenu}
                className="  text-xl w-8 h-8  flex items-center justify-center rounded-md  hover:border hover:bg-gray-100 duration-300 hover:border-gray-500"
              >
                <RiMenu4Fill />
              </button>

              {menu && (
                <div className="absolute flex flex-col gap-2 bg-white w-[250px] text-gray-600 shadow-lg top-11 rounded-lg p-3 right-0">
                  {menuItems.map((items, index) => {
                    return (
                      <Link
                        key={index}
                        className="flex gap-2 hover:text-blue-600 hover:scale-105 duration-200 items-center text-[1rem] w-full cursor-pointer"
                      >
                        {items.icons}
                        <span htmlFor="Gifts" className="">
                          {items.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* menu for small screen */}

          <div className="lg:hidden  flex gap-4 ">
            {/* search box for small screen */}
            <div className="flex  items-center md:hidden justify-center hover:scale-110 ">
              <button
                className="flex items-center justify-center"
                onClick={handleOnSearch}
              >
                <IoSearchOutline className="    text-gray-500  text-2xl" />
              </button>
            </div>

            {/* some Icons For Small scree */}

            <div className="flex gap-2 items-center text-xl lg:hidden   text-gray-700">
              {" "}
              {/* Download app */}
              <Link>
                <RiMobileDownloadLine />
              </Link>
              {/* user profile */}
              <Link className="flex hover:bg-blue-700 hover:text-white duration-200 items-center gap-2  border py-2  px-4 rounded-lg ">
                <FaRegUser />
                <span className="text-sm">Login</span>
              </Link>
              {/* Shopping Cart */}
              <Link>
                <FiShoppingCart />
              </Link>
            </div>
          </div>

          {/* small screen menu items */}

          {showMenuSmallScreen && (
            <div className="fixed top-0 left-0 flex w-full h-screen  lg:hidden items-center bg-[rgba(0,0,0,0.6)] z-50">
              <div className={`w-[70%] h-full bg-blue-50`}>
                <div className="bg-blue-600 p-4 font-normal text-lg flex items-center justify-between text-white">
                  <button className="flex gap-4 items-center">
                    <FaUser />
                    <span>Login & SignUp</span>
                  </button>
                  <img
                    className="w-10"
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png"
                    alt="Flipkart_Clone"
                    title="Flipkart_Clone"
                  />
                </div>

                <div className="space-y-4 flex text-gray-700 items-start flex-col px-4 py-4">
                  {smallScreenMenu.map((items, index) => {
                    return (
                      <Link key={index} className="flex gap-3 items-center">
                        <span>{items.icons}</span>
                        <small className="text-gray-700 font-semibold">
                          {items.name}
                        </small>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Clickable area to close the menu */}
              <div
                className="w-[40%] h-full"
                onClick={handleShowMenuSmallScreen}
              ></div>
            </div>
          )}

          {/* Small Screen Search box */}
          {showSearchBox && (
            <div className="fixed w-full md:hidden block top-14 left-0  py-2 px-4 bg-blue-100 shadow-xl duration-500">
              <div className="w-full mx-auto flex   items-center h-10">
                <IoSearchOutline className="  bg-[#F0F5FF] rounded-l-md text-gray-500 h-8 border-r-2 w-8 p-1" />
                <input
                  type="text"
                  name="search"
                  id=""
                  placeholder="Search For Products, Brands and More"
                  className="bg-[#F0F5FF] outline-none w-full h-8 rounded-r-md px-4 "
                />
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
