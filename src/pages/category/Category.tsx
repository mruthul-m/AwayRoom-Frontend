import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { GiHouse } from "react-icons/gi";
import { IoCallSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Category = () => {
  return (
    <div className="w-full">
      <main
        className="w-full py-8"
        style={{ backgroundColor: "#EEF5FF", minHeight: "100vh" }}
      >
        {" "}
        <Navbar content={true} />
        <div className="max-w-screen-xl gap-5 flex mx-auto mt-8">
          <aside className="w-2/5 rounded-xl py-5 px-5 text-white bg-gray-700 sticky h-fit">
            <Sidebar />
          </aside>
          <section className="w-full    flex flex-col gap-5">
            <div className="bg-white p-5 rounded-xl shadow-lg shadow-black/[.3] flex flex-col relative">
              <div className="flex">
                <aside
                  style={{
                    background: `url("https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
                    backgroundSize: "cover",
                  }}
                  className="w-1/3 h-60 rounded-lg  "
                ></aside>
                <article className="p-5">
                  <h1 className="text-3xl font-semibold flex gap-3">
                    Thazhvaram House <GiHouse />
                  </h1>
                  <p className="italic font-medium">3BHK</p>
                  <p className="mb-2">
                    Capacity:{" "}
                    <span className="font-semibold">8 people (boys)</span>
                  </p>
                  <h1 className="text-2xl text-green-600 font-semibold">
                    Monthly Rent:{" "}
                    <span className=" inline">
                      12000 <FaIndianRupeeSign className="inline" />
                    </span>
                  </h1>
                  <p className="flex gap-3 py-3 font-semibold  ">
                    Contact: 9898006723{" "}
                    <IoCallSharp
                      className="text-2xl cursor-pointer hover:text-3xl duration-150 "
                      onClick={() => console.log("clicked")}
                    />
                  </p>
                </article>
              </div>
              <div className="w-full flex justify-end">
                <button className="border-2 border-black w-fit px-4 py-2 rounded-3xl flex gap-1 items-center font-semibold hover:bg-black hover:text-white/[.7] duration-500 ">
                  location <IoLocationSharp className="text-2xl" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Category;
