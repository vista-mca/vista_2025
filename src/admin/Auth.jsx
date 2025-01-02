import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useFirebase } from "../context/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const firebase = useFirebase();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const SignIn = async () => {
    await firebase.googleSignInWithPopup()
  };

  const signout = async () => {
    await firebase.handleSignOut()
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user.email);
        if(user.email === "omkarmi5g@gmail.com" || user.email==="vista@timscdrmumbai.in"){
          navigate("/adminpage");
          // console.log("omkar Logged in")
        }else{
          signout();
          alert("you are not an admin");
          // console.log("omkar is not logged in");
        }
        // console.log("this is email1 : " + email);
      } else {
        setUser(null);
      }
    });
    
  }, []);

  return (
    <div className="text-white h-[100vh] flex justify-center items-center">
      {email === "omkarmi5g@gmail.com" ? (
        <div>
          <h1>Hello {email}</h1>
          <button onClick={signout}>Log Out</button>
        </div>
      ) : (
        <button
          onClick={SignIn}
          className="border p-5 rounded-xl border-blue-500 hover:cursor-pointer  flex gap-5 justify-center items-center"
        >
          <div>
            <FcGoogle className="h-[3rem] w-[3rem]" />
          </div>
          <h4 className="font-bold text-3xl">Continue With Google.</h4>
        </button>
      )}
    </div>
  );
};

export default Auth;
