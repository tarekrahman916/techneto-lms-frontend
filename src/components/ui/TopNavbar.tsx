import { Divider } from "antd";
import React from "react";
import {
  FaPhoneAlt,
  FaFacebookMessenger,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto h-[60px] lg:flex hidden justify-between items-center border-b-2 border-gray-600">
        <div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaPhoneAlt />
            <h5 className=" text-base">+0165000000</h5>
            <Divider
              className="border-x-[2px] border-gray-400 h-[50px]"
              type="vertical"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 text-[18px]">
          <h3 className="mr-4">Find us on : </h3>
          <div className="flex items-center gap-2 text-gray-600">
            <FaFacebookMessenger className="cursor-pointer hover:mt-[-8px] duration-300" />

            <Divider
              className="border-x-[2px] border-gray-400 h-[50px]"
              type="vertical"
            />
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaTwitter className="cursor-pointer hover:mt-[-8px] duration-300" />

            <Divider
              className="border-x-[2px] border-gray-400 h-[50px]"
              type="vertical"
            />
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <FaLinkedinIn className="cursor-pointer hover:mt-[-8px] duration-300" />
          </div>
        </div>
      </div>
      <Divider className="m-0" />
    </div>
  );
};

export default TopNavbar;
