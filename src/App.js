import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import GetEntireInquiry from "./components/GetEntireInquiry";
import GetSingleInquiry from "./components/GetSingleInquiry";
import GetUser from "./components/GetUser";
import SaveInquiry from "./components/SaveInquiry";
import SaveUser from "./components/SaveUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/saveUser" element={<SaveUser />} />
        <Route path="/saveInquiry" element={<SaveInquiry />} />
        <Route path="/getUser/:phone" element={<GetUser />} />
        <Route path="/getSingleInquiry/:uid" element={<GetSingleInquiry />} />
        <Route path="/getEntireInquiry" element={<GetEntireInquiry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
