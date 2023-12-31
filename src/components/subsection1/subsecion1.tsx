import image from "../../assets/subsection.jpg";
import "./subsection.css";

const Subsection = () => {
  return (
    <div className="w-full bg-slate-100 px-20 py-10">
      <div className="flex flex-row justify-between w-2/3 mx-auto ">
        <div className="px-2 py-20 ">
          <h1 className="text-5xl subs-heading mb-5 tracking-wide">
            Explore Rooms By Your Needs
          </h1>
          <span className="subs-heading tracking-widest font-thin mb-5 block">
            Best Rooms are available in your desired City
          </span>
          <button className=" rounded-3xl border-2 border-black px-5 py-2 font-semibold hover:bg-black hover:text-white duration-500">
            Find Now
          </button>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-72 w-1/3  bg-no-repeat bg-cover rounded-xl"
        ></div>
      </div>
    </div>
  );
};

export default Subsection;
