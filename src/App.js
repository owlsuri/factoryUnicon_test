import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import GetEntireInquiry from "./components/GetEntireInquiry";
import GetSingleInquiry from "./components/GetSingleInquiry";
import GetUser from "./components/GetUser";
import Landing from "./components/Landing";
import SaveInquiry from "./components/SaveInquiry";
import SaveUser from "./components/SaveUser";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
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
