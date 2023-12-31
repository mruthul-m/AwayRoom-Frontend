import { MdLocationSearching } from "react-icons/md";
import "./search.css";
import { CiSearch } from "react-icons/ci";
const Search = () => {
  const search = () => {
    console.log("clicked");
  };
  return (
    <div className="w-full  mt-48">
      <h1 className="text-7xl font-semibold  text-white font-mono mb-5 text-center">
        The Perfect <span className="text-emerald-100">Room</span> For You.
      </h1>
      <p className="text-white/[.95] text-2xl font-thin text-center mb-10  border-solid border-white w-fit mx-auto px-20">
        Save Time, Energy And Money - Find And Book Your New Room 100% Online
      </p>
      <div className="bg-white w-fit mx-auto h-20 rounded-full pl-10 pr-6  flex items-center flex-row">
        <div className="flex  justify-between  w-full">
          <input
            type="text"
            className="outline-none font-normal text-lg"
            placeholder="Search for area, city name"
          />

          <button className="flex gap-3  py-2 items-center mr-14 ">
            <span className="font-semibold">Locate Me</span>{" "}
            <MdLocationSearching className="text-2xl" />
          </button>
          <button
            onClick={search}
            className="flex gap-3  py-2 items-center border-2 border-orange-400 px-6 rounded-3xl text-orange-400 hover:bg-orange-400 hover:text-white duration-500"
          >
            <span className="font-semibold">Search</span>{" "}
            <CiSearch className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
