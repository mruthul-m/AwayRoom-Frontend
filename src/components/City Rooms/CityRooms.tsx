import "./cityRooms.css";
import image1 from "../../assets/city rooms/croom1.jpg";
import image2 from "../../assets/city rooms/croom2.jpg";
import image3 from "../../assets/city rooms/croom3.jpg";
import image4 from "../../assets/city rooms/croom4.jpg";
import image5 from "../../assets/city rooms/croom5.jpg";
import image6 from "../../assets/city rooms/croom6.jpg";
import image7 from "../../assets/city rooms/croom7.jpg";
import image8 from "../../assets/city rooms/croom8.jpg";
import { FaLocationDot } from "react-icons/fa6";

const CityRooms = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-4">
      <div className="w-14 border-t-2 border-black mb-4"></div>
      <div className="flex w-full justify-between mb-8">
        <h1 className="text-4xl font-semibold font-sans">
          Find Room In Your Cities
        </h1>
        <button className="bg-green-800 text-white font-semibold rounded-2xl px-5">
          Find Now
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-2  w-full gap-x-3 gap-y-8">
        <div className="w-full h-72 ">
          <img
            src={image1}
            alt=""
            className="object-cover overflow-hidden h-48 w-full mb-3"
          />
          <span className="font-semibold mr-1 text-green-900">Mumbai</span>
          <span className="font-thin text-sm">(120 rooms)</span>
          <div className=" flex gap-1   py-1 items-center text-green-800">
            <FaLocationDot />{" "}
            <span className="text-sm font-semibold">S/W INDIA</span>
          </div>
        </div>
        <div className="w-full h-72 ">
          <img
            src={image2}
            alt=""
            className="object-cover overflow-hidden h-48 w-full mb-3"
          />
          <span className="font-semibold mr-1  text-green-900">Mumbai</span>
          <span className="font-thin text-sm">(120 rooms)</span>
          <div className=" flex gap-1   py-1 items-center text-green-800">
            <FaLocationDot />{" "}
            <span className="text-sm font-semibold">S/W INDIA</span>
          </div>
        </div>
        <div className="w-full h-72 ">
          <img
            src={image3}
            alt=""
            className="object-cover overflow-hidden h-48 w-full mb-3"
          />
          <span className="font-semibold mr-1  text-green-900">Mumbai</span>
          <span className="font-thin text-sm">(120 rooms)</span>
          <div className=" flex gap-1   py-1 items-center text-green-800">
            <FaLocationDot />{" "}
            <span className="text-sm font-semibold">S/W INDIA</span>
          </div>
        </div>
        <div className="w-full h-72 ">
          <img
            src={image4}
            alt=""
            className="object-cover overflow-hidden h-48 w-full mb-3"
          />

          <span className="font-semibold mr-1  text-green-900">Mumbai</span>
          <span className="font-thin text-sm">(120 rooms)</span>
          <div className=" flex gap-1   py-1 items-center text-green-800">
            <FaLocationDot />{" "}
            <span className="text-sm font-semibold">S/W INDIA</span>
          </div>
        </div>
        <div className="w-full h-72 ">
          <img
            src={image5}
            alt=""
            className="object-cover overflow-hidden w-full h-48 mb-3"
          />
          <span className="font-semibold mr-1  text-green-900">Mumbai</span>
          <span className="font-thin text-sm">(120 rooms)</span>
          <div className=" flex gap-1   py-1 items-center text-green-800">
            <FaLocationDot />{" "}
            <span className="text-sm font-semibold">S/W INDIA</span>
          </div>
        </div>
        <div className="w-full h-72 ">
          <img
            src={image6}
            alt=""
            className="object-cover overflow-hidden h-48 w-full mb-3"
          />
          <span className="font-semibold mr-1  text-green-900">Mumbai</span>
          <span className="font-thin text-sm">(120 rooms)</span>
          <div className=" flex gap-1   py-1 items-center text-green-800">
            <FaLocationDot />{" "}
            <span className="text-sm font-semibold">S/W INDIA</span>
          </div>
        </div>
        <div className="w-full h-72 ">
          <img
            src={image7}
            alt=""
            className="object-cover overflow-hidden w-full h-48 mb-3"
          />
          <span className="font-semibold mr-1  text-green-900">Mumbai</span>
          <span className="font-thin text-sm">(120 rooms)</span>
          <div className=" flex gap-1   py-1 items-center text-green-800">
            <FaLocationDot />{" "}
            <span className="text-sm font-semibold">S/W INDIA</span>
          </div>
        </div>
        <div className="w-full h-72 ">
          <img
            src={image8}
            alt=""
            className="object-cover overflow-hidden h-48 w-full mb-3"
          />
          <span className="font-semibold mr-1  text-green-900">Mumbai</span>
          <span className="font-thin text-sm">(120 rooms)</span>
          <div className=" flex gap-1   py-1 items-center text-green-800">
            <FaLocationDot />{" "}
            <span className="text-sm font-semibold">S/W INDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityRooms;
