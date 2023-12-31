import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { MdApartment } from "react-icons/md";
import { CgBoy, CgGirl } from "react-icons/cg";
import { BiLinkExternal } from "react-icons/bi";
import "./topCategory.css";
import image1 from "../../assets/topRooms/mansroom.jpg";
import { Link } from "react-router-dom";

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
        <div
          className="w-1/3 h-52  p-4 font-semibold   flex flex-col bg-center bg-cover"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <Link to={"/category/1"}>
            <div className="flex gap-1 text-2xl mb-3">
              <CgBoy />
              <BiLinkExternal />
            </div>

            <span className="mb-3 block">Room For Boys</span>
          </Link>
        </div>

        <div className="w-1/3  TopCategory-Img2 p-4 font-semibold text-slate-800  flex flex-col">
          <Link to={"/category/2"}>
            <div className="flex gap-1 text-2xl mb-3">
              <MdApartment />
              <BiLinkExternal />
            </div>
            <span className="mb-3 block">Apartments</span>
          </Link>
        </div>
        <div className="w-1/3  TopCategory-Img p-4 font-semibold text-slate-800  flex flex-col">
          <Link to={"/category/3"}>
            <div className="flex gap-1 text-2xl mb-3">
              <CgGirl />
              <BiLinkExternal />
            </div>
            <span className="mb-3 block">Pg For Girls</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
