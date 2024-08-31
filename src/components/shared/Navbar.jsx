import React from "react";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { PiDotsNineLight } from "react-icons/pi";
import Avatar from "react-avatar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { setsearchtext, setuser } from "../../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = () => {
  const dispatch = useDispatch();
  const [toggle, settoggle] = useState(false);
  const user=useSelector(store=>store.appSlice);

  const [input, setinput] = useState("");

  useEffect(() => {
    dispatch(setsearchtext(input));
  }, [input]);
  const signouthandler = async () => {
    signOut(auth)
      .then(dispatch(setuser(null)))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center  gap-2">
          <div className="p-3  rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png"
            alt="gmail-logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>

      <div className="md:block  hidden w-[50%]">
        <div className="flex items-center    bg-[#EAF1FB]  px-2 py-3   rounded-full">
          <IoSearch size={"24px"} className="text-gray-700" />
          <input
            value={input}
            onChange={(e) => {
              setinput(e.target.value);
            }}
            type="text"
            placeholder="Search Mail"
            className="rounded-full w-full  bg-transparent  outline-none  px-1"
          />
        </div>
      </div>

      <div className="md:block hidden ">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full    hover:bg-gray-100   cursor-pointer">
            <CiCircleQuestion size={"20px"} />
          </div>
          <div className="p-3 rounded-full    hover:bg-gray-100   cursor-pointer">
            <CiSettings size={"20px"} />
          </div>
          <div className="p-3 rounded-full    hover:bg-gray-100   cursor-pointer">
            <PiDotsNineLight size={"20px"} />
          </div>
          <div className="cursor-pointer">
            <Avatar
              onClick={() => {
                settoggle(!toggle);
              }}
              src="{user?.photoURL}"
              size="40"
              round={true}
            />
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className="absolute right-2 z-20  shadow-lg bg-white  rounded-md"
                >
                  <p onClick={signouthandler} className="p-2  underline">
                    Logout
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
