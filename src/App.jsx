import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Signin from "./pages/signin/signup";
import Home from "./pages/home/home";
import DonorsList from "./pages/donor-list/donor-list"
import "./App.css";
import Requests from "./pages/requests/requests";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/donors" element={<DonorsList />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
