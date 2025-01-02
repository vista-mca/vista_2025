import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { LuLoaderCircle } from "react-icons/lu";
import { useFirebase } from "@/context/Firebase";

const AdminPage = () => {
  const [footFall, setFootFall] = useState(0);
  const [participant, setParticipant] = useState(0);
  const [colleges, setColleges] = useState(0);
  const [contactData, setContactData] = useState([]);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const firebase = useFirebase();

  const signOut = async () => {
    await firebase.handleSignOut().then(() => alert("Logout SuccessFull"));
  };

  const handleUpdate = async () => {
    const Snap = doc(db, "stats", "WR7oyaCXPRj3BVuYWvux");
    await updateDoc(Snap, {
      footFall,
      participant,
      colleges,
    }).then(() => alert("Value Updated"));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setEmail(user.email);
        // console.log(email);
      } else {
        navigate("/adminauth");
        // console.log("admin is not logged in");
        setUser(null);
      }
    });
  }, [user]);

  useEffect(() => {
    const getStats = async () => {
      const statSnap = await getDocs(collection(db, "stats"));
      statSnap.forEach((doc) => {
        setFootFall(doc.data().footFall);
        setParticipant(doc.data().participant);
        setColleges(doc.data().colleges);
      });
    };

    const contactData = async () => {
      const data = await getDocs(collection(db, "contact-us"));
      const contactArray = data.docs.map((doc) => doc.data());
      setContactData(contactArray);
    };

    contactData();
    getStats();
  }, [user]);

  return user ? (
    <div className="  px-[5rem] m-auto">
      <div className="w-full flex justify-center my-4">
        <button
          onClick={signOut}
          className=" text-white p-4 border rounded-xl font-bold"
        >
          logout
        </button>
      </div>
      <div className="py-[3rem] text-white flex flex-col md:flex-row md:gap-10">
        <div className="flex flex-col">
          <label>Footfall :</label>
          <input
            onChange={(e) => setFootFall(e.target.value)}
            className="rounded-lg h-[2rem] px-2 my-5  text-black"
            type="text"
            value={footFall}
          />
        </div>
        <div className="flex flex-col">
          <label>Participant :</label>
          <input
            onChange={(e) => setParticipant(e.target.value)}
            className="rounded-lg h-[2rem] px-2 my-5 text-black"
            type="text"
            value={participant}
          />
        </div>
        <div className="flex flex-col">
          <label>Colleges :</label>
          <input
            onChange={(e) => setColleges(e.target.value)}
            className="rounded-lg h-[2rem] px-2 my-5 text-black"
            type="text"
            value={colleges}
          />
        </div>
      </div>
      <div>
        <button
          onClick={handleUpdate}
          className="text-white py-3 px-4 border border-slate-500 rounded-xl"
        >
          Update
        </button>
      </div>
      <h1 className="text-white text-center text-4xl font-bold">
        Contact Us Data
      </h1>
      <div className="flex my-10 gap-10 ">
        {contactData.map((data, index) => (
          <div
            key={index}
            className="border p-4 rounded-xl text-white w-[20rem]"
          >
            <div>
              id: <span className="text-blue-500">{index}</span>{" "}
            </div>
            <div>
              <p>
                Name: <span className="text-blue-500">{data.name}</span>
              </p>
              <p>
                type of Person :{" "}
                <span className="text-blue-500">{data.typeOfPerson}</span>
              </p>
              {data.companyName != "" ? (
                <p>
                  Company Name:{" "}
                  <span className="text-blue-500">{data.companyName}</span>
                </p>
              ) : (
                <p></p>
              )}
              <p>
                Message: <span className="text-blue-500">{data.message}</span>
              </p>
              {/* {console.log(data.name)}  */}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="text-white p-20 flex items-center gap-5">
      <LuLoaderCircle className=" animate-spin w-10 h-10 text-center" />
      <p>admin is not logged in..</p>
    </div>
  );
};

export default AdminPage;
