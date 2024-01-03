import image2 from "../../assets/addlistingcover.jpg";
import Navbar from "../../components/navbar/Navbar";
import { HiOutlineThumbUp } from "react-icons/hi";
import "./addlist.css";
function AddListing() {
  const handleClick = () => {
    alert("Thank you, Your details has been sent for verification");
  };
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${image2})` }}
        className="w-full h-screen py-10"
      >
        <Navbar content={true} />
        <div className="max-w-screen-xl mx-auto my-5  bg-white/[.8] px-4 py-4">
          <p className="addlist-heading text-5xl" style={{ lineHeight: "1.5" }}>
            Your Asset can be listed to our platform and be part of our family
            <HiOutlineThumbUp className="inline mx-5" />
          </p>
          <p
            style={{ fontFamily: "Merienda" }}
            className="text-4xl font-bold text-black"
          >
            Details:{" "}
            <span className="font-semibold text-xl">
              Here you can give your details and best pictures of your asset to
              show case. Only best pictures are considering for showcasing.
            </span>
            <div className="w-full mt-10 font-mono flex gap-10 ">
              <section className="w-full flex flex-col">
                <label htmlFor="" className="font-thin text-base block">
                  Name :
                </label>
                <input
                  type="text"
                  className=" h-8 border-2 w-3/5 mb-4 border-black rounded-md outline-none font-normal text-lg p-4"
                  required
                />
                <label htmlFor="" className="font-thin text-base block">
                  Address 1 :
                </label>
                <input
                  type="text"
                  className=" h-8 border-2 w-3/5 mb-4 border-black rounded-md outline-none font-normal text-lg p-4"
                  required
                />
                <label htmlFor="" className="font-thin text-base block">
                  Address 2 :
                </label>
                <input
                  type="text"
                  className=" h-8 border-2 w-3/5 mb-4 border-black rounded-md outline-none font-normal text-lg p-4"
                />
                <label htmlFor="" className="font-thin text-base block">
                  Images (JPG?/PNG) :
                </label>
                <input
                  type="file"
                  id="files"
                  className=" h-fit border-2 w-3/5 mb-4 border-black rounded-md outline-none font-normal text-lg p-4"
                  multiple
                  required
                />
              </section>
              <section className="w-full">
                <label htmlFor="" className="font-thin text-base block">
                  Phone :
                </label>
                <input
                  type="number"
                  className=" h-8 border-2 w-3/5 mb-4 border-black rounded-md outline-none font-normal text-lg p-4"
                  required
                />
                <label htmlFor="" className="font-thin text-base block">
                  City :
                </label>
                <input
                  type="text"
                  className=" h-8 border-2 w-3/5 mb-4 border-black rounded-md outline-none font-normal text-lg p-4"
                />
                <label htmlFor="" className="font-thin text-base block">
                  zip code :
                </label>
                <input
                  type="text"
                  className=" h-8 border-2 w-3/5 mb-4 border-black rounded-md outline-none font-normal text-lg p-4"
                  required
                />
                <label htmlFor="" className="font-thin text-base block">
                  Monthly Rent :
                </label>
                <input
                  type="number"
                  className=" h-8 border-2 w-3/5 mb-4 border-black rounded-md outline-none font-normal text-lg p-4"
                  required
                />
              </section>
            </div>
          </p>
          <button
            onClick={handleClick}
            className="bg-black text-white py-3 px-7 font-semibold rounded-2xl"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddListing;
