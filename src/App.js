import "./App.css";
import Home from "./component/Home";
import Sidebar from "./component/sidebar";
// import Dataprovider from "./context/GlobalStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Appoinment from "./component/Appinment";
import Profile from "./component/profile";
import Password from "./component/password";

function App() {
  return (
    <div className="main-container">
      {/* <Dataprovider></Dataprovider> */}
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/appoinment" element={<Appoinment />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/password" element={<Password />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
