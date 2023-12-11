import { Route, Routes } from "react-router-dom";

import GetStarted from "./pages/GetStarted";
import Home from "./pages/Home";
import Transact from "./pages/Transact";
import Transtactiondetail from "./pages/TransactionDetail";
import RequestPayment from "./pages/RequestPayment";
import WithDraw from "./pages/Withdraw";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/home" element={<Home />} />
      <Route path="/transact" element={<Transact />} />
      <Route path="/transactDetail" element={<Transtactiondetail />} />
      <Route path="/reqPayment" element={<RequestPayment />} />
      <Route path="/withdraw" element={<WithDraw />} />
      <Route path="/account" element={<Account />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
