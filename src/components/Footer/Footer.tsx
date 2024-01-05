import { TbPhoneCall } from "react-icons/tb";
import { LuMails } from "react-icons/lu";
import { FaRegAddressBook, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import CopyRight from "../copyright/copyright";

function Footer() {
  return (
    <>
      <div className="py-10 max-w-screen-xl  mx-auto" id="about">
        <div className="flex  justify-between">
          <div className="flex-1 ">
            <p className="font-semibold mb-6">About us</p>
            <div className="font-thin text-sm w-3/4 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              laborum eum voluptas minus sequi tenetur? Neque fugit labore
              consequuntur possimus.
            </div>
            <ul className="font-thin" id="contacts">
              <li className="flex gap-2 py-2 items-center">
                <TbPhoneCall />{" "}
                <span className="cursor-pointer">+91 9099872342</span>
              </li>
              <li className="flex gap-2 py-2 items-center">
                <LuMails />
                <span className="cursor-pointer">Email us</span>
              </li>
              <li className="flex gap-2 py-2 items-center">
                <FaRegAddressBook />
                <span className="cursor-pointer">Address</span>
              </li>
            </ul>
          </div>
          <div className=" flex justify-between pl-5" style={{ flex: "1.8" }}>
            <ul className="flex flex-col gap-2 font-thin ">
              <p className=" font-semibold">Places</p>
              <li className="hover:underline cursor-pointer duration-300">
                Kannur
              </li>
              <li className="hover:underline cursor-pointer duration-300">
                Kozhikode
              </li>
              <li className="hover:underline cursor-pointer duration-300">
                Kollam
              </li>
              <li className="hover:underline cursor-pointer duration-300">
                Ernakulam
              </li>
              <li className="hover:underline cursor-pointer duration-300">
                Trivandrum
              </li>
            </ul>
            <ul className="flex flex-col gap-2 font-thin ">
              <p className=" font-semibold">Other options</p>
              <li className="hover:underline cursor-pointer duration-300">
                Accomodations
              </li>
              <li className="hover:underline cursor-pointer duration-300">
                Place Blog
              </li>
              <li className="hover:underline cursor-pointer duration-300">
                Reviews
              </li>
              <li className="hover:underline cursor-pointer duration-300">
                Maps
              </li>
              <li className="hover:underline cursor-pointer duration-300">
                Add list
              </li>
            </ul>
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2 font-thin ">
                <p className=" font-semibold">Property type</p>
                <li className="hover:underline cursor-pointer duration-300">
                  Boys Rooms
                </li>
                <li className="hover:underline cursor-pointer duration-300">
                  PG for Girls
                </li>
                <li className="hover:underline cursor-pointer duration-300">
                  Apartments
                </li>
                <li className="hover:underline cursor-pointer duration-300">
                  Special Rooms
                </li>
              </ul>
              <div>
                <p className="font-semibold mb-2">Social links</p>
                <div className="flex gap-2 text-2xl">
                  <FaFacebook className=" cursor-pointer" />
                  <RiInstagramFill className=" cursor-pointer" />
                  <FaSquareXTwitter className=" cursor-pointer" />
                  <FaLinkedin className=" cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </>
  );
}

export default Footer;
