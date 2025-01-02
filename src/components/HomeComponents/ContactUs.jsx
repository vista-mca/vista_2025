import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WavesIcon as WaveIcon } from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
// import { error } from "console";

export default function ContactUs() {
  const [representationType, setRepresentationType] = useState("individual");
  const [name, setName] = useState("");
  const [typeOfPerson, setTypeOfPerson] = useState("Individual");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  // console.log(name);
  // console.log(typeOfPerson);
  // console.log(companyName);
  // console.log(message);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (name != "" && typeOfPerson != "" && message != "") {
        const contactData = await addDoc(collection(db, "contact-us"), {
          name,
          typeOfPerson,
          companyName,
          message,
        })
        if(contactData){
          alert("Form Submitted")
        }
        location.reload();
      } else {
        alert("Enter the Details");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="contact-section" className="my-[3rem] mx-[1rem]">
      <div className="text-[#007bff] text-center font-bold text-5xl ">
        <h2>Contact Us ☎️</h2>
      </div>
      <div className="my-8  flex items-center justify-center bg-[#1c1c1c] relative overflow-hidden">
        <div className="absolute bottom-[5rem] right-[30rem] w-[15rem] h-[15rem] bg-gradient-to-br from-[#ff5b84] to-[#ff003f] rounded-full  opacity-40 z-0" />
        <div className="absolute top-[5rem] left-[30rem] w-[15rem] h-[15rem] bg-gradient-to-br from-[#003bff] to-[#3ebdf0] rounded-full  opacity-40 z-0" />

        <div className="relative z-10 w-full backdrop-blur-md bg-white/10 border border-white/20 py-5 px-5 rounded-xl max-w-[24rem] md:max-w-[27rem] shadow-lg space-y-8">
          <div className="space-y-2">
            {/* <h1 className="text-4xl text-center text-white font-bold tracking-tight ">
              Contact us
            </h1> */}
            <p className="text-xl text-white/90 flex items-center gap-2">
              Hi <WaveIcon className="h-5 w-5" /> ! My name is...
            </p>
          </div>

          <form className="space-y-6">
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name..."
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10"
            />

            <div className="space-y-2">
              <p className="text-xl text-white/90">and I represent...</p>
              <div className="flex gap-2">
                <Button
                  type="button"
                  onClick={() => [
                    setRepresentationType("individual"),
                    setTypeOfPerson("Individual"),
                  ]}
                  // onClick={()=> set}
                  className={`flex-1 ${
                    representationType === "individual"
                      ? "bg-white font-bold hover:bg-[#007bff] hover:text-white text-black"
                      : "bg-transparent text-white border-white/20 hover:bg-white/10"
                  }`}
                >
                  An individual
                </Button>
                <Button
                  type="button"
                  onClick={() => [
                    setRepresentationType("company"),
                    setTypeOfPerson("Sponsor"),
                  ]}
                  className={`flex-1 ${
                    representationType === "company"
                      ? "bg-white font-bold hover:bg-[#007bff] text-black hover:text-white"
                      : "bg-transparent text-white border-white/20 hover:bg-white/10"
                  }`}
                >
                  A Sponsor
                </Button>
              </div>
            </div>

            {representationType === "company" && (
              <div className="space-y-2">
                <p className="text-xl text-white/90">Company Name: </p>
                <Input
                  type="text"
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Your company name..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10"
                />
              </div>
            )}

            <div className="space-y-2">
              <p className="text-xl text-white/90">Enter Your Message ...</p>
              <Textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message...."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[3.5rem]"
              />
            </div>

            <Button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-white text-blue-950 hover:bg-white/90"
            >
              Send message
            </Button>
          </form>
        </div>
        <div>
        </div>
      </div>
          <h3 className="text-center text-blue-400">
            For sponsorship opportunities, contact us at vista@timscdrmumbai.in 
          </h3>
    </div>
  );
}
