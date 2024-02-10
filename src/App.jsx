import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Signin from "./pages/signin/signup";
import Home from "./pages/home/home";
import DonorsList from "./pages/donor-list/donor-list";
import Requests from "./pages/requests/requests";
import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
// import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard/adminDashboard";
import { UserProvider } from "./context/userContext";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/donors" element={<DonorsList />} />
          <Route path="/requests" element={<Requests />} />
          {/* admin pages  */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
