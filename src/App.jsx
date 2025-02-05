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
// import SubEventTemplate from "./pages/Events/SubEventTemplate";
import TechnicalSubEvents from "./pages/Events/SubEvents/TechnicalSubEvents";
import CulturalSubEvents from "./pages/Events/SubEvents/CulturalSubEvents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/adminauth" element={<Auth />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/eventDetails-temp" element={<EventDetails />} />
          <Route path="/events/technicals" element={<TechnicalEvent />} />
          <Route
            path="/events/technicals/:eventName"
            element={<TechnicalSubEvents />}
          />
          <Route path="/events/sports" element={<SportEvent />} />

          <Route path="/events/culturals" element={<CulturalEvent />} />
          <Route
            path="/events/culturals/:eventName"
            element={<CulturalSubEvents />}
          />
          <Route path="/events/esports" element={<ESports />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
