import { signInWithPopup } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setuser } from "../redux/appSlice";
const Login = () => {
  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      dispatch(
        setuser({
          displayName: result.user.displayName,
          email: result.user.email,
          photoUrl: result.user.photoURL,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className=" h-screen flex justify-center  items-center bg-gray-200">
      <div className="  flex flex-col gap-3 rounded-md bg-white p-2">
        <h1 className="text-center  text-xl font-medium mb-5  ">LOGIN</h1>
        <GoogleButton onClick={signInWithGoogle}></GoogleButton>
      </div>
    </div>
  );
};

export default Login;
