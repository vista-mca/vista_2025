import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AnimatedCursor from "react-animated-cursor";
import Auth from "./admin/Auth";
import AdminPage from "./admin/AdminPage";
import Team from "./Pages/Team";
import EventDetails from "./Pages/EventDeails";
import TechnicalEvent from "./Pages/Events/TechnicalEvent";
import SportEvent from "./Pages/Events/SportEvent";
import CulturalEvent from "./Pages/Events/CulturalEvent";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="hidden md:block">
        <AnimatedCursor
          innerSize={8}
          outerSize={30}
          color="255, 255, 255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={2}
          hasBlendMode={true}
          clickables={[
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "label",
            "p",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "img",
            "li",
          ]}
        />
      </div> */}

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/adminauth" element={<Auth />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/event" element={<EventDetails />} />
          <Route path="/events/technicals" element={<TechnicalEvent />} />
          <Route path="/events/sports" element={<SportEvent />} />
          <Route path="/events/culturals" element={<CulturalEvent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
