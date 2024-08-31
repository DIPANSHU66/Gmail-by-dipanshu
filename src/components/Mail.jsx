import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { BiArchive } from "react-icons/bi";
import { DiBackbone } from "react-icons/di";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { motion } from "framer-motion";
const Mail = () => {
  const navigate = useNavigate();
  const { selectedEmail } = useSelector((store) => store.appSlice);
  const deleteMailByid = async (id) => {
    try {
      await deleteDoc(doc(db, "email", id));
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-1 bg-white  rounded-xl  mx-5"
    >
      <div className="flex items-center  justify-between px-4">
        <div className="flex items-center  gap-2 text-gray-700 py-2">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="p-2  rounded-full  hover:bg-gray-100 cursor-pointer"
          >
            <IoMdArrowBack size={"20px"}></IoMdArrowBack>
          </div>
          <div className="p-2  rounded-full  hover:bg-gray-100 cursor-pointer">
            <BiArchive size={"20px"}></BiArchive>
          </div>
          <div className="p-2  rounded-full  hover:bg-gray-100 cursor-pointer">
            <MdOutlineReport size={"20px"}></MdOutlineReport>
          </div>
          <div
            onClick={() => deleteMailByid(selectedEmail?.id)}
            className="p-2  rounded-full  hover:bg-gray-100 cursor-pointer"
          >
            <MdDeleteOutline size={"20px"}></MdDeleteOutline>
          </div>
          <div className="p-2  rounded-full  hover:bg-gray-100 cursor-pointer">
            <MdOutlineMarkEmailUnread size={"20px"}></MdOutlineMarkEmailUnread>
          </div>
          <div className="p-2  rounded-full  hover:bg-gray-100 cursor-pointer">
            <MdOutlineWatchLater size={"20px"}></MdOutlineWatchLater>
          </div>
          <div className="p-2  rounded-full  hover:bg-gray-100 cursor-pointer">
            <MdOutlineAddTask size={"20px"}></MdOutlineAddTask>
          </div>
          <div className="p-2  rounded-full  hover:bg-gray-100 cursor-pointer">
            <MdOutlineDriveFileMove size={"20px"}></MdOutlineDriveFileMove>
          </div>
          <div className="p-2  rounded-full  hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"}></IoMdMore>
          </div>
        </div>
        <div className="flex items-center  gap-2 ">
          <button className="hover:rounded-full hover:bg-gray-100 ">
            <MdKeyboardArrowLeft size={"24px"}></MdKeyboardArrowLeft>
          </button>
          <button className="hover:rounded-full hover:bg-gray-100 ">
            <MdKeyboardArrowRight size={"24px"}></MdKeyboardArrowRight>
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4 ">
        <div className="flex items-center  justify-between bg-white  gap-1">
          <div className="flex items-center  gap-2">
            <h1 className="text-xl  font-medium">{selectedEmail?.subject}</h1>
            <span className="text-sm  bg-gray-200 rounded-md px-2">Inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5  text-sm ">
            <p>
              {new Date(selectedEmail?.createdAt?.seconds * 1000).toUTCString()}
            </p>
          </div>
        </div>
        <div className="text-sm  text-gray-500 ">
          <h1>{selectedEmail?.to}</h1>
          <span>to me</span>
        </div>
        <div className="my-10  ">
          <p>{selectedEmail?.message}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Mail;
