import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const SendMail = () => {
  const [formdata, setFormdata] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const open = useSelector((store) => store.appSlice.open);
  const dispatch = useDispatch();

  const changehandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submithandler = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "email"), {
      to: formdata.to,
      subject: formdata.subject,
      message: formdata.message,
      createdAt: serverTimestamp(),
    });
    dispatch(setOpen(false));

    setFormdata({
      to: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div
      className={`${open ? "block" : "hidden"} 
        bg-white  max-w-8xl   shadow-xl   shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3  py-2  bg-[#F2F6Fc]  justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className="p-2  rounded-full hover:bg-gray-200  cursor-pointer"
        >
          <RxCross2 size={"10px"}></RxCross2>
        </div>
      </div>
      <form onSubmit={submithandler} className="flex flex-col  p-3 gap-2 ">
        <input
          value={formdata.to}
          onChange={changehandler}
          type="text"
          placeholder="To"
          name="to"
          className="outline-none py-1"
        />
        <input
          value={formdata.subject}
          onChange={changehandler}
          name="subject"
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          value={formdata.message}
          onChange={changehandler}
          name="message"
          cols={"30"}
          rows={"5"}
          className="outline-none h-[30px] py-1"
        ></textarea>

        <button
          type="submit"
          className="bg-[#0857D0]  rounded-full w-fit px-4  text-white  font-medium hover:bg-blue-800"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMail;
