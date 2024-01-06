import image2 from "../../assets/addlistingcover.jpg";
import Navbar from "../../components/navbar/Navbar";
import { HiOutlineThumbUp } from "react-icons/hi";
import "./addlist.css";
import FormInput from "../../components/FormInput/FormInput";
import { useState } from "react";

interface Values {
  username: string;
  phone: number | string;
  address: string;
  city: string;
  images: string[];
  zipcode: number | string;
  category: string;
  monthlyrent: number;
}
function AddListing() {
  const [values, setValues] = useState<Values>({
    username: "",
    phone: "",
    address: "",
    city: "",
    images: [],
    zipcode: "",
    category: "apartment",
    monthlyrent: 0,
  });

  {
    setValues;
  }

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Name",
      errorMessage: "",
      label: "Name :",
      required: true,
    },
    {
      id: 2,
      name: "phone",
      type: "number",
      placeholder: "ph number",
      errorMessage: "",
      label: "Contact No :",
      required: true,
    },
    {
      id: 3,
      name: "address",
      type: "textarea",
      placeholder: "address",
      errorMessage: "",
      label: "address :",
      required: true,
    },
    {
      id: 4,
      name: "city",
      type: "text",
      placeholder: "city",
      errorMessage: "",
      label: "City :",
      required: true,
    },
    {
      id: 5,
      name: "images",
      type: "file",
      placeholder: "",
      errorMessage: "",
      label: "images :",
      multiple: true,
      required: true,
    },
    {
      id: 6,
      name: "zipcode",
      type: "number",
      placeholder: "zip code",
      errorMessage: "",
      label: "Zip code :",
      required: true,
    },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${image2})` }}
        className="w-full h-screen py-10"
      >
        <Navbar content={true} />
        <div className="max-w-screen-xl mx-auto my-5  bg-white/[.8] px-4 py-12">
          <p className="addlist-heading text-5xl" style={{ lineHeight: "1.5" }}>
            Your Asset can be listed to our platform and be part of our family
            <HiOutlineThumbUp className="inline mx-5" />
          </p>

          <form
            action="#"
            className="bg-white mt-8 py-8 rounded-lg shadow-lg shadow-black  w-3/4 mx-auto"
            onSubmit={handleSubmit}
          >
            {" "}
            <h1 className="block font-bold text-3xl mb-5">
              Share your details
            </h1>
            <div className="grid grid-cols-2  w-full gap-x-16">
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  value={values[input.name as keyof typeof values]}
                  {...input}
                  onChange={onChange}
                />
              ))}
              <div className="w-full">
                <h1 className="text-left mb-2 text-neutral-500 italic">
                  Category
                </h1>
                <select
                  defaultValue="apartment"
                  name="category"
                  className="h-10 rounded-xl px-5 w-full text-black font-nor cursor-pointer"
                  style={{ backgroundColor: "rgba(221,230,237,.4)" }}
                  onChange={onChange}
                >
                  <option value="boys">Boys Room</option>
                  <option value="apartment">Apartment</option>
                  <option value="girls">Pg for Girls</option>
                </select>
              </div>
              <div className="w-full">
                <h1 className="text-left mb-2 text-neutral-500 italic">
                  Monthly Rent
                </h1>
                <input
                  name="monthlyrent"
                  type="number"
                  className="  rounded-lg p-1 outline-none text-lg w-full mb-5 max-h-fit text-black font-normal"
                  style={{ backgroundColor: "rgba(221,230,237,.4)" }}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <button
              // onClick={handleSubmit}
              type="submit"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-24 mt-8"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddListing;
