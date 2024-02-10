import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Signin from "./pages/signin/signup";
import Home from "./pages/home/home";
import DonorsList from "./pages/donor-list/donor-list"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/donors" element={<DonorsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
