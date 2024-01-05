import image2 from "../../assets/addlistingcover.jpg";
import Navbar from "../../components/navbar/Navbar";
import { HiOutlineThumbUp } from "react-icons/hi";
import "./addlist.css";
import FormInput from "../../components/FormInput/FormInput";
import { useState } from "react";
function AddListing() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    address1: "",
    city: "",
    address2: "",
    images: [],
    zipcode: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Name",
      errorMessage: "",
      label: "Name :",
    },
    {
      id: 2,
      name: "phone",
      type: "number",
      placeholder: "ph number",
      errorMessage: "",
      label: "Contact No :",
    },
    {
      id: 3,
      name: "address1",
      type: "text",
      placeholder: "address 1",
      errorMessage: "",
      label: "address 1:",
    },
    {
      id: 4,
      name: "city",
      type: "text",
      placeholder: "city",
      errorMessage: "",
      label: "City :",
    },
    {
      id: 5,
      name: "address2",
      type: "text",
      placeholder: "address 2",
      errorMessage: "",
      label: "Address2 :",
    },
    {
      id: 6,
      name: "zipcode",
      type: "number",
      placeholder: "zip code",
      errorMessage: "",
      label: "Zip code :",
    },
  ];
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
          </p>
          <form action="" className="bg-transparent">
            <div className="grid grid-cols-2 gap-3 w-full border-2 border-black">
              {inputs.map((input) => (
                <FormInput key={input.id} />
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddListing;
