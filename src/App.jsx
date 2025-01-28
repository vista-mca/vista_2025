import { Route, Routes } from "react-router-dom";
import Auth from "./admin/Auth";
import AdminPage from "./admin/AdminPage";
import Team from "./pages/Team";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDeails";
import TechnicalEvent from "./pages/Events/TechnicalEvent";
import SportEvent from "./pages/Events/SportEvent";
import CulturalEvent from "./pages/Events/CulturalEvent";
import ESports from "./pages/Events/ESports";

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
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/adminauth" element={<Auth />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/eventDetails-temp" element={<EventDetails />} />
          <Route path="/events/technicals" element={<TechnicalEvent />} />
          <Route path="/events/sports" element={<SportEvent />} />
          <Route path="/events/culturals" element={<CulturalEvent />} />
          <Route path="/events/esports" element={<ESports />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
