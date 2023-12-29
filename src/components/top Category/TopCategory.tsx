import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { MdApartment } from "react-icons/md";
import { CgBoy, CgGirl } from "react-icons/cg";

import "./topCategory.css";
const TopCategory = () => {
  return (
    // top container of TopCategory Component
    <div className="max-w-screen-xl mx-auto mb-12">
      {/* This div is just for draw a lign for design purpose */}

      <div className="w-14 border-t-2 border-black mb-4"></div>

      {/* Content are inside this div */}
      <div className="flex justify-between mb-8">
        <h1 className="text-4xl font-semibold font-sans">Top Category Rooms</h1>
        <div className="flex gap-1 text-4xl">
          <CiCircleChevLeft className=" text-gray-400 cursor-pointer" />
          <CiCircleChevRight className=" text-gray-400 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-4 justify-between overflow-scroll">
        <div className="w-1/3 h-52 TopCategory-Img3 p-4 font-semibold hover:text-white flex flex-col">
          <CgBoy className="text-2xl mb-3" />
          <span className="mb-3">Room For Boys</span>
          <span className="font-normal">Best Price Rooms</span>
        </div>
        <div className="w-1/3  TopCategory-Img2 p-4 font-semibold hover:text-white flex flex-col">
          <MdApartment className="text-2xl mb-3" />
          <span className="mb-3">Apartments</span>
          <span className="font-normal">Best Price Apartments</span>
        </div>
        <div className="w-1/3  TopCategory-Img p-4 font-semibold line hover:text-white flex flex-col">
          <CgGirl className="text-2xl mb-3" />
          <span className="mb-3">Pg For Girls</span>
          <span className="font-normal">Best Price Rooms</span>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
