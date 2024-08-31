import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { useState } from "react";
import Messages from "./shared/Messages";
const mailType = [
  { icon: <MdInbox size={"20px"}></MdInbox>, text: "Primary" },
  { icon: <GoTag size={"20px"}></GoTag>, text: "Promotions" },
  { icon: <FaUserFriends size={"20px"}></FaUserFriends>, text: "Social" },
];
const Inbox = () => {
  const [mailtypeselected, setmailtypeselected] = useState(0);

  return (
    <div className="flex-1 bg-white  rounded-xl  mx-5">
      <div className="flex items-center  justify-between px-4  ">
        <div className="flex items-center  gap-2  text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"}></MdCropSquare>
            <FaCaretDown size={"20px"}></FaCaretDown>
          </div>
          <div className="p-2  rounded-full  hover:bg-gray-100 cursor-pointer  ">
            <IoMdRefresh size={"20px"}></IoMdRefresh>
          </div>
          <div className="p-2  rounded-full  hover:hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"}></IoMdMore>
          </div>
        </div>
        <div className="flex items-center  gap-2">
          <p className="text-sm  text-gray-500 ">1-50 of 1000</p>
          <button className="hover:rounded-full hover:bg-gray-100 ">
            <MdKeyboardArrowLeft size={"24px"}></MdKeyboardArrowLeft>
          </button>
          <button className="hover:rounded-full hover:bg-gray-100 ">
            <MdKeyboardArrowRight size={"24px"}></MdKeyboardArrowRight>
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto ">
        <div className="flex items-center  gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setmailtypeselected(index);
                }}
                key={index}
                className={`${
                  mailtypeselected == index
                    ? "border-b-4 border-blue-600 text-blue-600 "
                    : "border-b-4 border-b-transparent"
                }
                    flex  items-center p-4 gap-5 w-52 hover:bg-gray-100`}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
        <Messages></Messages>
      </div>
    </div>
  );
};

export default Inbox;
