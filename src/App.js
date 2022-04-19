import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import PerformanceOverview from "./components/pages/PerformanceOverview";
import AccountOverview from "./components/pages/AccountOverview";
import Leads from "./components/pages/Leads";
import IncentiveOffer from "./components/pages/IncentiveOffer";
import ResoursePolicy from "./components/pages/ResoursePolicy";
import Myaccount from "./components/pages/Myaccount";
import Reports from "./components/pages/Reports";

function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<PerformanceOverview />} />
            <Route path="/account" element={<AccountOverview />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/incentiveoffer" element={<IncentiveOffer />} />
            <Route path="/resourcepolicy" element={<ResoursePolicy />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/reports" element={<Reports />} />

            <Route path="*" element={<> not found</>} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}
export default App;
